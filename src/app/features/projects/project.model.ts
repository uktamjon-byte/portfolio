export type ProjectTranslationKey = 'onlineStore' | 'adminPanel';

export interface Project {
  number: string;
  translationKey: ProjectTranslationKey;
  technologies: Technologies[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Technologies {
  name: string;
  icon?: string;
  color?: string;
  bg?: string;
}
