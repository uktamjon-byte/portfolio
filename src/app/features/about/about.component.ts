import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslationService } from '../../core/services/translation.service';
import { en } from '../../core/i18n/en';

interface AboutStat {
  value: string;
  labelKey: keyof typeof en.about.stats;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly translationService = inject(TranslationService);
  protected t = this.translationService.currentTranslations;
  protected readonly stats = signal<AboutStat[]>([
    {
      value: 'Angular',
      labelKey: 'primaryFramework',
    },
    {
      value: 'TypeScript',
      labelKey: 'coreLanguage',
    },
    {
      value: 'REST API',
      labelKey: 'backendIntegration',
    },
  ]);
}
