import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { TranslationService } from '../../../core/services/translation.service';
import { en } from '../../../core/i18n/en';

interface Navbar {
  href: string;
  translationKey: keyof typeof en.nav;
}

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  protected activeSection = signal('');
  private destroyRef = inject(DestroyRef);
  protected isMobileMenuOpen = signal(false);
  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.currentTranslations;
  protected readonly language = this.translationService.language;

  ngAfterViewInit() {
    this.observeSections();
  }

  protected navbarItems = signal<Navbar[]>([
    { href: '#projects', translationKey: 'projects' },
    { href: '#about', translationKey: 'about' },
    { href: '#skills', translationKey: 'skills' },
    { href: '#experience', translationKey: 'experience' },
    { href: '#contact', translationKey: 'contact' },
  ]);

  private observeSections() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }

  protected setLanguage(language: 'en' | 'ru'): void {
    this.translationService.setLanguage(language);
  }
}
