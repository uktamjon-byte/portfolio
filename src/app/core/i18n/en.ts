export const en = {
  nav: {
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    role: 'Frontend Developer',
    title: {
      before: 'Building digital',
      highlight: 'experiences',
      after: 'that work.',
    },
    description:
      "I'm Uktam, a frontend developer focused on Angular and TypeScript. I build modern, scalable web applications from idea to deployment.",
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
  },
  projects: {
    section: {
      label: 'Selected Work',
      title: 'Projects I’ve built',
      description:
        'A selection of projects that showcase my experience building modern web applications.',
    },
    onlineStore: {
      category: 'E-commerce',
      title: 'Online Store',
      description:
        'A full-featured e-commerce platform built with Angular and a real backend API, featuring JWT authentication, role-based access control, and OAuth login with Google and GitHub. Includes separate customer and admin experiences with protected routes and permission-based access.',
    },

    adminPanel: {
      category: 'Panel',
      title: 'Admin Panel',
      description:
        'An admin dashboard built with Angular 12 and Bootstrap, featuring user authentication, route guards, CRUD operations, reusable components and services, and a lightweight REST-style backend powered by JSON Server and db.json.',
    },

    liveDemo: 'Live Demo',
    github: 'GitHub',
  },
  about: {
    label: 'About me',
    title: 'Building interfaces with purpose.',

    introduction:
      "I'm a frontend developer focused on building modern, responsive, and maintainable web applications with Angular and TypeScript.",

    architecture:
      'I enjoy turning complex requirements into clean user experiences while paying close attention to architecture, reusable components, authentication, API integration, and application performance.',

    focus:
      "My main focus is Angular development, but I'm constantly expanding my knowledge of JavaScript, frontend architecture, and modern web development practices.",

    stats: {
      primaryFramework: 'Primary framework',
      coreLanguage: 'Core language',
      backendIntegration: 'Backend integration',
    },
  },
  skills: {
    section: {
      label: 'Skills & technologies',
      title: 'Tools I use to build.',
      description:
        'A collection of technologies and tools I use to build responsive, maintainable, and production-ready web applications.',
    },

    groups: {
      frontend: {
        title: 'Frontend',
        description: 'Core technologies I use to build modern web applications.',
      },

      uiStyling: {
        title: 'UI & Styling',
        description: 'Tools I use to create responsive and polished interfaces.',
      },

      reactiveData: {
        title: 'Reactive & Data',
        description: 'Patterns and technologies for handling application data.',
      },

      libraries: {
        title: 'Libraries',
        description: 'Libraries I have used in real-world Angular applications.',
      },

      tools: {
        title: 'Tools',
        description: 'Tools I use throughout the development workflow.',
      },
    },
  },
  experience: {
    section: {
      label: 'Experience',
      title: "Where I've built my experience.",
      description:
        'My experience comes from building real-world applications and working in a professional development environment.',
    },

    projects: {
      ecommerce: {
        period: '2025 — 2026',
        type: 'Project Experience',
        role: 'Frontend Developer',
        company: 'E-commerce Platform · Independent Development',
        description:
          'Designed and developed a full-featured e-commerce application over approximately one year, working with a real backend API and building both customer-facing and administrative functionality.',
        highlights: [
          'Implemented JWT authentication and OAuth login with Google and GitHub.',
          'Built role-based access control, protected routes, and permission-based access.',
          'Integrated REST APIs and developed reusable Angular components.',
          'Worked with Bootstrap, DevExtreme, Angular Material, Chart.js, Swiper, and Dropzone.',
        ],
      },

      internship: {
        period: '2026',
        type: 'Professional Experience',
        role: 'Frontend Developer Intern',
        company: 'Robitainav · Khujand',
        description:
          'Worked as a frontend developer intern for approximately four months, gaining professional experience working within a development team and contributing to real application development.',
        highlights: [
          'Worked with Angular in a professional development environment.',
          'Contributed to real application features and frontend development tasks.',
          'Worked within an existing codebase and development workflow.',
          'Gained experience collaborating in a professional software development team.',
        ],
      },
    },
  },
  contact: {
    section: {
      label: 'Get in touch',
      title: "Let's build something great together.",
      description:
        "I'm open to frontend development opportunities, interesting projects, and conversations about building modern web applications.",
    },

    profiles: 'Contact & profiles',

    actions: {
      contactMe: 'Contact me',
      downloadCv: 'Download CV',
    },

    links: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  footer: {
    tagline: 'Frontend Developer · Angular & TypeScript',
    navigation: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    allRightsReserved: 'All rights reserved.',
    backToTop: 'Back to top',
  },
} as const;
