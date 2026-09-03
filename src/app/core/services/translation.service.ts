import { computed, Injectable, signal } from '@angular/core';

import { en } from '../i18n/en';
import { ru } from '../i18n/ru';

type Language = 'en' | 'ru';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly language = signal<Language>('en');

  private readonly translations = {
    en,
    ru,
  };

  readonly currentTranslations = computed(() => this.translations[this.language()]);

  setLanguage(language: Language): void {
    this.language.set(language);
  }
}
