import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

import { en } from '../../core/i18n/en';
import { TranslationService } from '../../core/services/translation.service';

interface ContactLink {
  translationKey: keyof typeof en.contact.links;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
})
export class ContactComponent {
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.currentTranslations;
  protected readonly contactLinks = signal<ContactLink[]>([
    {
      translationKey: 'email',
      value: 'toshmatoveuktam2000@gmail.com',
      href: 'mailto:toshmatoveuktam2000@gmail.com',
      icon: 'fa-solid fa-envelope',
    },
    {
      translationKey: 'github',
      value: 'github.com/uktamjonbyte',
      href: 'https://github.com/uktamjon-byte',
      icon: 'fa-brands fa-github',
    },
    {
      translationKey: 'linkedin',
      value: 'linkedin.com/in/uktam-toshmatov',
      href: 'https://www.linkedin.com/in/uktam-toshmatov-7656b0344',
      icon: 'fa-brands fa-linkedin',
    },
  ]);
}
