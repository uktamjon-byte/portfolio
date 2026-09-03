import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { en } from '../../core/i18n/en';
import { TranslationService } from '../../core/services/translation.service';

interface NavigationLink {
  translationKey: keyof typeof en.footer.navigation;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.currentTranslations;
  protected readonly navigationLinks = signal<NavigationLink[]>([
    { translationKey: 'home', href: '#home' },
    { translationKey: 'projects', href: '#projects' },
    { translationKey: 'about', href: '#about' },
    { translationKey: 'skills', href: '#skills' },
    { translationKey: 'experience', href: '#experience' },
    { translationKey: 'contact', href: '#contact' },
  ]);

  protected readonly socialLinks = signal<SocialLink[]>([
    {
      label: 'GitHub',
      href: 'https://github.com/uktamjonbyte',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/uktam-toshmatov-7656b0344',
    },
  ]);

  protected readonly year = signal(new Date().getFullYear());
}
