import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

import { en } from '../../core/i18n/en';
import { TranslationService } from '../../core/services/translation.service';

interface Experience {
  translationKey: keyof typeof en.experience.projects;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
})
export class ExperienceComponent {
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.currentTranslations;
  protected readonly experiences = signal<Experience[]>([
    {
      translationKey: 'ecommerce',
    },
    {
      translationKey: 'internship',
    },
  ]);
}
