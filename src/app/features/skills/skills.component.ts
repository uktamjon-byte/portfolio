import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { en } from '../../core/i18n/en';
import { TranslationService } from '../../core/services/translation.service';

interface Skill {
  name: string;
  icon: string;
  color: string;
  bg: string;
}

interface SkillGroup {
  translationKey: keyof typeof en.skills.groups;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
})
export class SkillsComponent {
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.currentTranslations;

  protected readonly skillGroups = signal<SkillGroup[]>([
    {
      translationKey: 'frontend',
      skills: [
        {
          name: 'Angular',
          icon: 'fa-brands fa-angular',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        },
        {
          name: 'TypeScript',
          icon: 'fa-brands fa-js',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
        {
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
        },
        {
          name: 'HTML',
          icon: 'fa-brands fa-html5',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'CSS',
          icon: 'fa-brands fa-css3-alt',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
      ],
    },

    {
      translationKey: 'uiStyling',
      skills: [
        {
          name: 'Tailwind CSS',
          icon: 'fa-solid fa-wind',
          color: 'text-cyan-500',
          bg: 'bg-cyan-500/10',
        },
        {
          name: 'Bootstrap',
          icon: 'fa-brands fa-bootstrap',
          color: 'text-purple-500',
          bg: 'bg-purple-500/10',
        },
        {
          name: 'Angular Material',
          icon: 'fa-solid fa-layer-group',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
      ],
    },

    {
      translationKey: 'reactiveData',
      skills: [
        {
          name: 'RxJS',
          icon: 'fa-solid fa-arrows-spin',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        },
        {
          name: 'Signals',
          icon: 'fa-solid fa-bolt',
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
        },
        {
          name: 'REST API',
          icon: 'fa-solid fa-plug',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        },
      ],
    },

    {
      translationKey: 'libraries',
      skills: [
        {
          name: 'DevExtreme',
          icon: 'fa-solid fa-table',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
        {
          name: 'Taiga UI',
          icon: 'fa-solid fa-tree',
          color: 'text-amber-500',
          bg: 'bg-amber-500/10',
        },
        {
          name: 'Chart.js',
          icon: 'fa-solid fa-chart-line',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'Swiper',
          icon: 'fa-solid fa-images',
          color: 'text-cyan-500',
          bg: 'bg-cyan-500/10',
        },
      ],
    },

    {
      translationKey: 'tools',
      skills: [
        {
          name: 'Git',
          icon: 'fa-brands fa-git-alt',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'GitHub',
          icon: 'fa-brands fa-github',
          color: 'text-zinc-700 dark:text-zinc-200',
          bg: 'bg-zinc-500/10',
        },
        {
          name: 'npm',
          icon: 'fa-brands fa-npm',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        },
      ],
    },
  ]);
}
