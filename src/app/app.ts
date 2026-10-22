import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import countriesJson from '../../public/countries.json';

interface Country {
  name: string;
  capital: unknown | string;
  flag: string;
}

interface AnswerOption extends Country {
  selected: boolean;
  correct: boolean;
}
/* const fallbackCountries: Country[] = [
  { name: 'France', capital: 'Paris', flag: '🇫🇷' },
  { name: 'Ireland', capital: 'Dublin', flag: '🇮🇪' },
  { name: 'Netherlands', capital: 'Amsterdam', flag: '🇳🇱' }, //
  { name: 'Belgium', capital: 'Brussels', flag: '🇧🇪' },
  { name: 'Japan', capital: 'Tokyo', flag: '🇯🇵' },
  { name: 'Brazil', capital: 'Brasília', flag: '🇧🇷' },
  { name: 'Kenya', capital: 'Nairobi', flag: '🇰🇪' },
  { name: 'Canada', capital: 'Ottawa', flag: '🇨🇦' },
  { name: 'Norway', capital: 'Oslo', flag: '🇳🇴' },
  { name: 'Greece', capital: 'Athens', flag: '🇬🇷' },

]; */
const fallbackCountries: Country[] = countriesJson as Country[];

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('flag-quiz');

  readonly steps = Array.from({ length: 10 }, (_, index) => index + 1);
  readonly darkMode = signal(false);
  readonly questionNumber = signal(1);
  readonly isFinished = signal(false);

  readonly score = signal(0);
  readonly random_country = fallbackCountries[Math.floor(Math.random() * fallbackCountries.length)];

  readonly country = signal<Country>(this.random_country);
  readonly options = signal<AnswerOption[]>(this.buildOptions(this.country()));
  
  readonly hasAnswered = computed(() => this.options().some((option) => option.selected));
  private loading = false;

  flagClass(country: Country): string {
    return `flag-${country.name.toLowerCase().replace(/[^a-z]+/g, '-')}`;
  }

  choose(option: AnswerOption): void {
    if (this.hasAnswered()) return;
    this.options.update((current) => current.map((item) => ({ ...item, selected: item.name === option.name })));

    if (option.correct) this.score.update((value) => value + 1);
  }

  nextQuestion(): void {
    if (this.questionNumber() >= 10) {
      this.isFinished.set(true);
    } else {
      this.questionNumber.update((value) => value + 1);// Keep the score for the next question
      void this.loadCountry();
    }
  }

  restartQuiz(): void {
    this.questionNumber.set(1);
    this.score.set(0);
    this.isFinished.set(false);
    const nextCountry = fallbackCountries[Math.floor(Math.random() * fallbackCountries.length)];
    this.country.set(nextCountry);
    this.options.set(this.buildOptions(nextCountry));
    void this.loadCountry();
  }

  private async loadCountry(): Promise<void> {
    if (this.loading) return;
    this.loading = true;
    try {
      const response = await fetch('https://countries.dev/random?fields=name,capital,flag', { cache: 'no-store' });
      
      if (!response.ok) throw new Error('Country request failed');
      
      const country = (await response.json()) as Partial<Country>;
      
      if (typeof country.name !== 'string' || typeof country.flag !== 'string') throw new Error('Country response is incomplete');
      const nextCountry: Country = { name: country.name, capital: country.capital ?? 'Unknown', flag: country.flag };
      
      this.country.set(nextCountry);
      this.options.set(this.buildOptions(nextCountry));
    } catch {
      const nextCountry = fallbackCountries[Math.floor(Math.random() * fallbackCountries.length)];
      this.country.set(nextCountry);
      this.options.set(this.buildOptions(nextCountry));
    } finally {
      this.loading = false;
    }
  }

  private buildOptions(answer: Country, selectedName?: string): AnswerOption[] {
    const distractors = fallbackCountries.filter((country) => country.name !== answer.name).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [answer, ...distractors].map((country) => ({
      ...country,
      selected: country.name === selectedName,
      correct: country.name === answer.name,
    }));

    for (let index = options.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [options[index], options[randomIndex]] = [options[randomIndex], options[index]];
    }

    return options;
  }
}