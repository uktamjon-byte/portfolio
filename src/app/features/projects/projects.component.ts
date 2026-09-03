import { Component, inject } from '@angular/core';
import { Project } from './project.model';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  protected selectedProject: Project | null = null;
  protected selectedImageIndex = 0;

  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.currentTranslations;

  protected readonly projects: Project[] = [
    {
      number: '01',
      translationKey: 'onlineStore',
      technologies: [
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
          name: 'RxJS',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        },
        {
          name: 'Bootstrap',
          color: 'text-purple-500',
          bg: 'bg-purple-500/10',
        },
        {
          name: 'DevExtreme',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
        {
          name: 'Angular Material',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
        {
          name: 'REST API',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        },
        {
          name: 'JWT',
          color: 'text-purple-500',
          bg: 'bg-purple-500/10',
        },
        {
          name: 'Chart.js',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'Swiper',
          color: 'text-cyan-500',
          bg: 'bg-cyan-500/10',
        },
        {
          name: 'Dropzone',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        },
        {
          name: 'OAuth 2.0',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'Reactive Forms',
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
        },
      ],
      images: [
        'assets/projects/online-store/image1.png',
        'assets/projects/online-store/image2.png',
        'assets/projects/online-store/image3.png',
        'assets/projects/online-store/image4.png',
        'assets/projects/online-store/image5.png',
        'assets/projects/online-store/image6.png',
      ],
      liveUrl: 'https://nova-electro.tob.llc/store/home',
      githubUrl: 'https://github.com/uktamjon-byte/angular-admin-panel',
    },
    {
      number: '02',
      translationKey: 'adminPanel',
      technologies: [
        {
          name: 'Angular 12',
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
          name: 'Bootstrap',
          color: 'text-purple-500',
          bg: 'bg-purple-500/10',
        },
        {
          name: 'RxJS',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        },
        {
          name: 'Angular Material',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        },
        {
          name: 'REST API',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        },
        {
          name: 'Angular Router',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
        },
        {
          name: 'Route Guards',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        },
        {
          name: 'JSON Server',
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
        },
      ],
      images: [
        'assets/projects/admin-panel/image1.png',
        'assets/projects/admin-panel/image2.png',
        'assets/projects/admin-panel/image3.png',
      ],
      githubUrl: 'https://github.com/uktamjon-byte/swift-cart',
    },
  ];

  openPreview(project: Project, imageIndex: number): void {
    this.selectedProject = project;
    this.selectedImageIndex = imageIndex;
  }

  closePreview(): void {
    this.selectedProject = null;
  }
}
