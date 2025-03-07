// gitprofile.config.ts

const CONFIG = {
  github: {
    // Updated from the CV’s GitHub link “https://github.com/EfeAkkurt”
    username: 'EfeAkkurt',
  },
  // (base remains unchanged)
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      // No specific manual projects mentioned in the CV → empty array
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      // No external project info from the CV → empty array
      projects: [],
    },
  },
  seo: {
    // Updated title based on the candidate’s name from the CV
    title: 'Portfolio of EFE AKKURT',
    description: '',
    imageURL: '',
  },
  social: {
    // From BAĞLANTILARIM in the CV, using the LinkedIn URL’s username
    linkedin: 'efe-akkurt-44a08928a',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    // Updated from the CV’s GSM: “+90 5369724832”
    phone: '+90 5369724832',
    // Updated from the CV’s email address
    email: 'efeakkurtofficial@gmail.com',
  },
  resume: {
    // Updated to point to the CV file (adjust the URL as needed in your deployment)
    fileUrl: 'EFE AKKURT CV.pdf',
  },
  // Updated skills based on “BİLGİSAYAR KULLANIMI” and the later tech skills on page 2
  skills: [
    'C# (Orta Seviye)',
    'CSS (Temel Seviye)',
    'HTML (Temel Seviye)',
    'GIT (Temel Seviye)',
    'GitHub (Temel Seviye)',
    'ASP.NET CORE (Orta Seviye)',
    'MVC (Orta Seviye)',
    'DAPPER (Orta Seviye)',
    'MSSQL (Temel Seviye)',
    'MS Office (Word, Excel, PowerPoint, Outlook) (Temel Düzey)',
  ],
  // Two work experiences were identified:
  // 1. EFTU Butik with the period “15.09.2021 – 01.08.2023” and title “Tanıtım Pazarlama Sorumlusu”
  // 2. A current role as “Şahıs Şirketi Ortağı” starting “23.08.2024” (company name not specified)
  experiences: [
    {
      company: 'Laguna Thermal Hotel',
      position: 'Tanıtım Pazarlama Sorumlusu',
      from: '18.06.2021',
      to: '10.09.2021',
      companyLink: '',
    },
    {
      company: 'EFTU Butik',
      position: 'Şahıs Şirketi Ortağı',
      from: '15.09.2021',
      to: '01.08.2023',
      companyLink: '',
    },
  ],
  // Certifications gathered from the CV (three entries)
  certifications: [
    {
      name: 'Temel - Orta Seviye Yazılım Geliştirme Sertifikası',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Acun Medya Akademi',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Laguna Thermal Hotel',
      body: '',
      year: '',
      link: '',
    },
  ],
  // Formal education – from the “Lisans” entry
  educations: [
    {
      institution: 'Anadolu Üniversitesi',
      degree: 'Lisans',
      from: '',
      to: '',
    },
  ],
  // No publications were mentioned in the CV
  publications: [],
  // No blog information was provided
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  // Footer updated to reflect the new GitHub username (if you host your gitprofile under your own account)
  footer: `Made with <a 
      class="text-primary" href="https://github.com/EfeAkkurt/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
