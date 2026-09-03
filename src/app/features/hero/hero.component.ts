import { Component, inject } from '@angular/core';

import { UniverseComponent } from './components/universe/universe.component';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UniverseComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.currentTranslations;
}
