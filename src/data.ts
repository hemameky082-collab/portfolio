// ============================================================
// ALL site content lives in this file (English + Arabic).
// Edit text here; components read it through useUI().
// ============================================================

export type Lang = 'en' | 'ar'

export const contact = {
  email: 'hemameky082@gmail.com',
  phoneDisplay: '+20 10 5571 0347',
  phoneIntl: '201055710347',
  github: 'https://github.com/hemameky082-collab',
  githubLabel: 'github.com/hemameky082-collab',
  linkedin: 'https://www.linkedin.com/in/ibrahem-abd-elhahfeez-879633337',
  linkedinLabel: 'Ibrahem Abdelhafeez',
  location: { en: 'Obour, Egypt', ar: 'العبور، مصر' },
}

export interface Service {
  num: string
  title: string
  text: string
  points: string[]
}

export interface JourneyItem {
  when: string
  title: string
  org: string
  points: string[]
}

export interface Project {
  title: string
  tag?: string
  text: string
  chips: string[]
  image?: string
  demo?: string
  github: string
}

export interface ListedProject {
  no: string
  title: string
  text: string
  demo: string
}

export interface StackItem {
  name: string
  tile: string
  bg: string
  fg?: string
  glyph?: 'react' | 'tailwind' | 'git' | 'github' | 'vite'
}

// Grouped stack items, shared by both languages (labels live in Content.stackSec.groups).
// Groups: 0 Front-End Development, 1 API & Integrations, 2 AI & Development, 3 Tools.
export const STACK_ITEMS: StackItem[][] = [
  [
    { name: 'React', tile: '', bg: '#20232a', glyph: 'react' },
    { name: 'Next.js', tile: 'N', bg: '#000000' },
    { name: 'TypeScript', tile: 'TS', bg: '#3178c6' },
    { name: 'JavaScript', tile: 'JS', bg: '#f7df1e', fg: '#111111' },
    { name: 'HTML5', tile: '5', bg: '#e34f26' },
    { name: 'CSS3', tile: '3', bg: '#1572b6' },
    { name: 'Tailwind CSS', tile: '', bg: '#0b1120', glyph: 'tailwind' },
    { name: 'Bootstrap', tile: 'B', bg: '#7952b3' },
    { name: 'Sass', tile: 'S', bg: '#cd6799' },
  ],
  [
    { name: 'REST API', tile: 'API', bg: '#334155' },
    { name: 'Axios', tile: 'Ax', bg: '#5a29e4' },
    { name: 'TanStack Query', tile: 'TQ', bg: '#ff4154' },
    { name: 'React Router', tile: 'RR', bg: '#ca4245' },
    { name: 'React Hook Form', tile: 'RHF', bg: '#ec5990' },
    { name: 'Zod', tile: 'Z', bg: '#3e67b1' },
    { name: 'JWT Auth', tile: 'JWT', bg: '#d63aff' },
    { name: 'i18next', tile: 'i18', bg: '#26a69a' },
  ],
  [
    { name: 'Claude', tile: '✳', bg: '#d97757' },
    { name: 'Cursor', tile: 'C', bg: '#111111' },
    { name: 'Codex', tile: 'CX', bg: '#10a37f' },
    { name: 'AI Coding', tile: '✦', bg: '#a855f7' },
    { name: 'Vibe Coding', tile: '✦', bg: '#6d28d9' },
  ],
  [
    { name: 'Git', tile: '', bg: '#f05033', glyph: 'git' },
    { name: 'GitHub', tile: '', bg: '#24292f', glyph: 'github' },
    { name: 'Docker', tile: 'D', bg: '#1d63ed' },
    { name: 'Figma', tile: 'F', bg: '#1e1e1e' },
    { name: 'Vite', tile: '', bg: '#646cff', glyph: 'vite' },
    { name: 'VS Code', tile: 'VS', bg: '#007acc' },
    { name: 'draw.io', tile: 'dr', bg: '#f08705' },
    { name: 'Python', tile: 'Py', bg: '#3776ab' },
  ],
]

export interface ChatContent {
  title: string
  subtitle: string
  greeting: string
  placeholder: string
  send: string
  disclaimer: string
  fallback: string
  suggestions: string[]
  pillTitle: string
  pillSub: string
  whatsapp: string
}

export interface Content {
  nav: { links: { href: string; label: string }[]; hire: string }
  hero: {
    scriptName: string
    nameLine1: string
    nameLine2: string
    role: string
    downloadCv: string
    scrollHint: string
    stats: { num: string; label: string }[]
  }
  servicesSec: { titleA: string; titleB: string; sub: string; intro: string }
  services: Service[]
  journeySec: { title: string; sub: string }
  journey: JourneyItem[]
  projectsSec: { title: string; sub: string; visit: string; demoPending: string }
  projects: Project[]
  moreSec: { title: string; sub: string; visit: string }
  moreProjects: ListedProject[]
  aboutSec: { title: string; sub: string; paras: string[] }
  stackSec: { titleA: string; titleB: string; groups: string[] }
  contactSec: {
    titleA: string
    titleB: string
    sub: string
    intro: string
    labels: { email: string; phone: string; github: string; linkedin: string; location: string }
    form: { title: string; text: string; name: string; msg: string; send: string; waTemplate: string }
  }
  marquee: string
  footer: { name: string; contactLabel: string }
  chat: ChatContent
}

export const en: Content = {
  nav: {
    links: [
      { href: '#services', label: 'Services' },
      { href: '#stack', label: 'Stack' },
      { href: '#projects', label: 'Projects' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    hire: 'Hire Me',
  },
  hero: {
    scriptName: 'Ibrahem',
    nameLine1: 'IBRAHEM',
    nameLine2: 'ABDELHAFEEZ',
    role: 'Front-End Developer',
    downloadCv: 'Download CV',
    scrollHint: 'SCROLL',
    stats: [
      { num: '+14', label: 'Projects on GitHub' },
      { num: '+6', label: 'Featured projects' },
      { num: '+2', label: 'Languages AR / EN' },
    ],
  },
  servicesSec: {
    titleA: 'WHAT I',
    titleB: 'DO',
    sub: '( SERVICES )',
    intro: 'Fast, responsive websites and web apps for your business, in English and Arabic, from a simple landing page to a full React app.',
  },
  services: [
    {
      num: '( 01 )',
      title: 'Websites & Landing Pages',
      text: 'Clean, fast, responsive pages with HTML, CSS and JavaScript that look right on every screen.',
      points: ['Landing pages & portfolios', 'Blogs & content layouts', 'Responsive, mobile-first builds'],
    },
    {
      num: '( 02 )',
      title: 'Web Apps with React',
      text: 'Single-page apps connected to real APIs: authentication, protected routes, forms and state, built with React and TypeScript.',
      points: ['E-commerce front ends', 'Social & content apps', 'API integration & form validation'],
    },
    {
      num: '( 03 )',
      title: 'Arabic & English (RTL) Sites',
      text: 'Bilingual interfaces with correct right-to-left layout, like my FreshCart store with full English/Arabic support.',
      points: ['Arabic / English language switch', 'Proper RTL layout', 'i18n with react-i18next'],
    },
  ],
  journeySec: { title: 'My Journey', sub: '( Education & Training )' },
  journey: [
    {
      when: '2023 - 2027 (expected)',
      title: 'BSc Computer Science, Software Engineering',
      org: 'Banha National University, Faculty of Computer Science',
      points: ['Fourth-year student with a solid foundation in computer science and troubleshooting.'],
    },
    {
      when: '2026',
      title: 'Front-End Development and React',
      org: 'Route Academy',
      points: [
        'HTML, CSS, JavaScript, TypeScript and React with hands-on projects.',
        'Real APIs, forms, authentication and responsive layouts.',
      ],
    },
    {
      when: '2025 - 2026',
      title: 'Cisco Networking Academy Courses',
      org: 'Python & AI fundamentals',
      points: [
        'Data Science Essentials with Python (2026)',
        'Introduction to Modern AI (2025)',
        'Python Essentials 1 (2025)',
      ],
    },
    {
      when: 'Ongoing',
      title: 'Personal & Practice Projects',
      org: 'Published on GitHub Pages',
      points: [
        '14 public projects: e-commerce, social apps, dashboards and content sites.',
        'Bilingual English/Arabic interfaces with responsive layouts.',
      ],
    },
  ],
  projectsSec: { title: 'Selected Projects', sub: 'Each with a live demo and the source code on GitHub.', visit: 'Visit website', demoPending: 'Demo in progress' },
  projects: [
    {
      title: 'FreshCart',
      tag: 'Featured',
      text: 'E-commerce store with JWT auth, products, cart, wishlist, checkout and orders. Full English and Arabic (RTL) support.',
      chips: ['React 19', 'TypeScript', 'Tailwind', 'REST API', 'i18n'],
      image: '/demos/freshcart.jpg',
      demo: 'https://hemameky082-collab.github.io/fresh-cart-react/',
      github: 'https://github.com/hemameky082-collab/fresh-cart-react',
    },
    {
      title: 'Social App',
      text: 'Social media app with JWT auth, posts and comments, data fetching with TanStack Query and forms validated with react-hook-form and zod.',
      chips: ['React', 'TypeScript', 'TanStack Query', 'Zod', 'HeroUI'],
      github: 'https://github.com/hemameky082-collab/social-app',
    },
    {
      title: 'Adasa',
      text: 'Arabic photography blog with home, about, blog and article pages, built with React Router and reusable components.',
      chips: ['React', 'React Router', 'Tailwind'],
      image: '/demos/adasa.jpg',
      demo: 'https://hemameky082-collab.github.io/Assignment14-React-Routing-/',
      github: 'https://github.com/hemameky082-collab/Assignment14-React-Routing-',
    },
    {
      title: 'Kanban Board',
      text: 'Task manager board for organizing work across stages, built with vanilla JavaScript and Tailwind CSS.',
      chips: ['JavaScript', 'HTML', 'CSS', 'Tailwind'],
      image: '/demos/kanban.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment-13/',
      github: 'https://github.com/hemameky082-collab/assignment-13',
    },
    {
      title: 'ContactHub',
      text: 'Smart contact manager for saving, searching and organizing contacts, built with vanilla JavaScript.',
      chips: ['JavaScript', 'HTML', 'CSS'],
      image: '/demos/contacthub.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment9/',
      github: 'https://github.com/hemameky082-collab/assignment9',
    },
    {
      title: 'QuizApp',
      text: 'Quiz game built with JavaScript, with a styled interface and interactive questions.',
      chips: ['JavaScript', 'CSS', 'HTML'],
      image: '/demos/quizapp.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment-12/',
      github: 'https://github.com/hemameky082-collab/assignment-12',
    },
  ],
  moreSec: { title: 'More Projects', sub: '( From my GitHub )', visit: 'Visit website' },
  moreProjects: [
    { no: '01.', title: "What's For Dinner", text: 'Recipe finder for deciding what to cook.', demo: 'https://hemameky082-collab.github.io/assignment8/' },
    { no: '02.', title: 'COSMOS', text: 'Space dashboard with a dark, animated interface.', demo: 'https://hemameky082-collab.github.io/assignment11/' },
    { no: '03.', title: 'Mudabbir', text: 'Arabic personal finance manager (RTL).', demo: 'https://hemameky082-collab.github.io/assignment5/' },
    { no: '04.', title: 'Games Website', text: 'Games showcase site with rich visuals.', demo: 'https://hemameky082-collab.github.io/assignment6/' },
    { no: '05.', title: 'The UX Review', text: 'Blog layout about user experience.', demo: 'https://hemameky082-collab.github.io/assignment-4/' },
  ],
  aboutSec: {
    title: 'About Me',
    sub: '( Who I am )',
    paras: [
      'Front-end developer from Obour, Egypt. I am a fourth-year Software Engineering student at Banha National University, and I trained in front-end development and React at Route Academy.',
      'I build interfaces connected to real APIs, from landing pages to full React apps, and I ship bilingual English/Arabic (RTL) interfaces. I learn fast, I like solving problems, and I communicate clearly.',
      'Languages: Arabic (native), English (B1, intermediate).',
    ],
  },
  stackSec: {
    titleA: 'MY',
    titleB: 'STACK',
    groups: ['Front-End Development', 'API & Integrations', 'AI & Development', 'Tools'],
  },
  contactSec: {
    titleA: "LET'S BUILD",
    titleB: 'TOGETHER.',
    sub: 'Looking for a front-end developer? Send me a message.',
    intro: 'I am open to front-end roles and freelance projects. The fastest way to reach me is WhatsApp or email.',
    labels: { email: 'Email me', phone: 'WhatsApp / Phone', github: 'GitHub', linkedin: 'LinkedIn', location: 'Location' },
    form: {
      title: 'Send a project inquiry',
      text: 'Write your message and send. It opens WhatsApp with your text ready to send to me.',
      name: 'Your name',
      msg: 'Your project or message',
      send: 'Send via WhatsApp',
      waTemplate: 'Hi Ibrahem, I am {name}. {msg}',
    },
  },
  marquee: 'Front-End Developer',
  footer: { name: 'Ibrahem Abdelhafeez', contactLabel: 'Contact:' },
  chat: {
    title: 'Ask about Ibrahem',
    subtitle: 'Answers from his CV and GitHub',
    greeting: "Hi! I am Ibrahem's assistant. Ask me about his skills, projects, education or how to reach him.",
    placeholder: 'Ask about skills, projects, contact...',
    send: 'Send',
    disclaimer: 'Local assistant, no data leaves this page.',
    fallback: 'I can answer questions about Ibrahem from his CV and GitHub: skills, projects, education, certifications, languages and contact. Try one of the suggestions below.',
    suggestions: ['What are his skills?', 'Tell me about FreshCart', 'Is he available for work?', 'How can I contact him?'],
    pillTitle: 'Ask Ibrahem',
    pillSub: 'Assistant',
    whatsapp: 'Chat on WhatsApp',
  },
}

export const ar: Content = {
  nav: {
    links: [
      { href: '#services', label: 'الخدمات' },
      { href: '#stack', label: 'التقنيات' },
      { href: '#projects', label: 'المشاريع' },
      { href: '#about', label: 'عنّي' },
      { href: '#contact', label: 'تواصل' },
    ],
    hire: 'وظّفني',
  },
  hero: {
    scriptName: 'Ibrahem',
    nameLine1: 'إبراهيم',
    nameLine2: 'عبد الحفيظ',
    role: 'مطوّر واجهات أمامية',
    downloadCv: 'تحميل السي في',
    scrollHint: 'اسكرول',
    stats: [
      { num: '+14', label: 'مشروع على GitHub' },
      { num: '+6', label: 'مشاريع مختارة' },
      { num: '+2', label: 'عربي / إنجليزي' },
    ],
  },
  servicesSec: {
    titleA: 'اللي',
    titleB: 'بقدمه',
    sub: '( الخدمات )',
    intro: 'مواقع وتطبيقات ويب سريعة ومتجاوبة لبيزنسك، بالإنجليزي والعربي، من صفحة هبوط بسيطة لتطبيق React كامل.',
  },
  services: [
    {
      num: '( 01 )',
      title: 'مواقع وصفحات هبوط',
      text: 'صفحات نظيفة وسريعة ومتجاوبة بـ HTML، CSS وJavaScript شكلها مظبوط على كل الشاشات.',
      points: ['صفحات هبوط وبورتفوليو', 'مدونات وتنسيقات محتوى', 'تصميم متجاوب موبايل أولاً'],
    },
    {
      num: '( 02 )',
      title: 'تطبيقات ويب بـ React',
      text: 'تطبيقات صفحة واحدة متوصلة بـ APIs حقيقية: تسجيل دخول وصفحات محمية وفورمز وحالة، مبنية بـ React وTypeScript.',
      points: ['واجهات متاجر إلكترونية', 'تطبيقات تواصل ومحتوى', 'ربط APIs والتحقق من الفورمز'],
    },
    {
      num: '( 03 )',
      title: 'مواقع عربي وإنجليزي (RTL)',
      text: 'واجهات ثنائية اللغة بتنسيق يمين-لشمال صحيح، زي متجر FreshCart بدعم كامل إنجليزي/عربي.',
      points: ['تبديل عربي / إنجليزي', 'تنسيق RTL صحيح', 'ترجمة بـ react-i18next'],
    },
  ],
  journeySec: { title: 'رحلتي', sub: '( تعليم وتدريب )' },
  journey: [
    {
      when: '2023 - 2027 (متوقع)',
      title: 'بكالوريوس علوم الحاسب، هندسة البرمجيات',
      org: 'جامعة بنها الأهلية، كلية علوم الحاسب',
      points: ['طالب سنة رابعة بأساس قوي في علوم الحاسب وحل المشاكل التقنية.'],
    },
    {
      when: '2026',
      title: 'تطوير الواجهات الأمامية وReact',
      org: 'أكاديمية روت',
      points: [
        'HTML، CSS، JavaScript، TypeScript وReact بمشاريع عملية.',
        'APIs حقيقية وفورمز وتسجيل دخول وتصميم متجاوب.',
      ],
    },
    {
      when: '2025 - 2026',
      title: 'كورسات Cisco Networking Academy',
      org: 'أساسيات بايثون والذكاء الاصطناعي',
      points: [
        'Data Science Essentials with Python (2026)',
        'Introduction to Modern AI (2025)',
        'Python Essentials 1 (2025)',
      ],
    },
    {
      when: 'مستمر',
      title: 'مشاريع شخصية وتدريبية',
      org: 'منشورة على GitHub Pages',
      points: [
        '14 مشروع عام: متاجر وتطبيقات تواصل ولوحات تحكم ومواقع محتوى.',
        'واجهات ثنائية اللغة إنجليزي/عربي بتصميم متجاوب.',
      ],
    },
  ],
  projectsSec: { title: 'مشاريع مختارة', sub: 'كل مشروع معاه ديمو لايف والكود على GitHub.', visit: 'زيارة الموقع', demoPending: 'الديمو تحت التجهيز' },
  projects: [
    {
      title: 'FreshCart',
      tag: 'مميز',
      text: 'متجر إلكتروني فيه تسجيل دخول JWT ومنتجات وسلة ومفضلة ودفع وطلبات. دعم كامل إنجليزي وعربي (RTL).',
      chips: ['React 19', 'TypeScript', 'Tailwind', 'REST API', 'i18n'],
      image: '/demos/freshcart.jpg',
      demo: 'https://hemameky082-collab.github.io/fresh-cart-react/',
      github: 'https://github.com/hemameky082-collab/fresh-cart-react',
    },
    {
      title: 'Social App',
      text: 'تطبيق تواصل اجتماعي بتسجيل دخول JWT وبوستات وتعليقات، جلب بيانات بـ TanStack Query وفورمز متحققة بـ react-hook-form وzod.',
      chips: ['React', 'TypeScript', 'TanStack Query', 'Zod', 'HeroUI'],
      github: 'https://github.com/hemameky082-collab/social-app',
    },
    {
      title: 'Adasa',
      text: 'مدونة تصوير عربية فيها صفحات رئيسية وعن المدونة ومقالات، مبنية بـ React Router ومكونات قابلة لإعادة الاستخدام.',
      chips: ['React', 'React Router', 'Tailwind'],
      image: '/demos/adasa.jpg',
      demo: 'https://hemameky082-collab.github.io/Assignment14-React-Routing-/',
      github: 'https://github.com/hemameky082-collab/Assignment14-React-Routing-',
    },
    {
      title: 'Kanban Board',
      text: 'لوحة كانبان لإدارة وتنظيم المهام عبر المراحل، مبنية بـ JavaScript خالص وTailwind CSS.',
      chips: ['JavaScript', 'HTML', 'CSS', 'Tailwind'],
      image: '/demos/kanban.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment-13/',
      github: 'https://github.com/hemameky082-collab/assignment-13',
    },
    {
      title: 'ContactHub',
      text: 'مدير جهات اتصال ذكي لحفظ وبحث وتنظيم جهات الاتصال، مبني بـ JavaScript خالص.',
      chips: ['JavaScript', 'HTML', 'CSS'],
      image: '/demos/contacthub.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment9/',
      github: 'https://github.com/hemameky082-collab/assignment9',
    },
    {
      title: 'QuizApp',
      text: 'لعبة أسئلة تفاعلية مبنية بـ JavaScript، بواجهة منسقة وأسئلة تفاعلية.',
      chips: ['JavaScript', 'CSS', 'HTML'],
      image: '/demos/quizapp.jpg',
      demo: 'https://hemameky082-collab.github.io/assignment-12/',
      github: 'https://github.com/hemameky082-collab/assignment-12',
    },
  ],
  moreSec: { title: 'مشاريع تانية', sub: '( من الـ GitHub )', visit: 'زيارة الموقع' },
  moreProjects: [
    { no: '01.', title: "What's For Dinner", text: 'موقع لاقتراح أكلات ووصفات.', demo: 'https://hemameky082-collab.github.io/assignment8/' },
    { no: '02.', title: 'COSMOS', text: 'لوحة تحكم فضاء بواجهة غامقة وأنيميشن.', demo: 'https://hemameky082-collab.github.io/assignment11/' },
    { no: '03.', title: 'Mudabbir', text: 'مدير مصاريف شخصي عربي (RTL).', demo: 'https://hemameky082-collab.github.io/assignment5/' },
    { no: '04.', title: 'Games Website', text: 'موقع عرض ألعاب بتصميم غني.', demo: 'https://hemameky082-collab.github.io/assignment6/' },
    { no: '05.', title: 'The UX Review', text: 'تنسيق مدونة عن تجربة المستخدم.', demo: 'https://hemameky082-collab.github.io/assignment-4/' },
  ],
  aboutSec: {
    title: 'عنّي',
    sub: '( مين أنا )',
    paras: [
      'مطوّر واجهات أمامية من العبور، مصر. طالب سنة رابعة هندسة برمجيات في جامعة بنها الأهلية، واتدربت على تطوير الواجهات وReact في أكاديمية روت.',
      'ببني واجهات متوصلة بـ APIs حقيقية، من صفحات الهبوط لتطبيقات React كاملة، وبسلّم واجهات ثنائية اللغة إنجليزي/عربي (RTL). بتعلم بسرعة وبحب حل المشاكل وتواصلي واضح.',
      'اللغات: العربي (لغة أم)، الإنجليزي (B1 متوسط).',
    ],
  },
  stackSec: {
    titleA: 'أدوات',
    titleB: 'شغلي',
    groups: ['تطوير الواجهات', 'الـ APIs والمكتبات', 'الذكاء الاصطناعي والتطوير', 'الأدوات'],
  },
  contactSec: {
    titleA: 'ابدأ',
    titleB: 'مشروعك.',
    sub: 'بتدور على مطوّر فرونت إند؟ ابعتلي رسالة.',
    intro: 'متاح لشغل فرونت إند ومشاريع فريلانس. أسرع طريقة توصلني بيها واتساب أو إيميل.',
    labels: { email: 'إيميلي', phone: 'واتساب / تليفون', github: 'GitHub', linkedin: 'لينكدإن', location: 'المكان' },
    form: {
      title: 'ابعت استفسار عن مشروع',
      text: 'اكتب رسالتك وابعتها. هيفتح واتساب ورسالتك جاهزة للإرسال.',
      name: 'اسمك',
      msg: 'مشروعك أو رسالتك',
      send: 'ابعت عبر واتساب',
      waTemplate: 'أهلاً إبراهيم، أنا {name}. {msg}',
    },
  },
  marquee: 'مطوّر واجهات أمامية',
  footer: { name: 'إبراهيم عبد الحفيظ', contactLabel: 'تواصل:' },
  chat: {
    title: 'اسأل عن إبراهيم',
    subtitle: 'إجابات من السي في والـ GitHub بتاعه',
    greeting: 'أهلاً! أنا مساعد إبراهيم. اسألني عن مهاراته ومشاريعه ودراسته أو إزاي تتواصل معاه.',
    placeholder: 'اسأل عن المهارات والمشاريع والتواصل...',
    send: 'ابعت',
    disclaimer: 'مساعد محلي، مفيش بيانات بتسيب الصفحة.',
    fallback: 'أقدر أجاوب على أسئلة عن إبراهيم من السي في والـ GitHub: المهارات والمشاريع والدراسة والكورسات واللغات والتواصل. جرب سؤال من الاقتراحات تحت.',
    suggestions: ['إيه مهاراته؟', 'قولي على FreshCart', 'متاح للشغل؟', 'إزاي أتواصل معاه؟'],
    pillTitle: 'اسأل إبراهيم',
    pillSub: 'مساعد',
    whatsapp: 'تواصل واتساب',
  },
}

// ---------------- chatbot knowledge base ----------------
// keywords match in BOTH languages; the reply follows the site language.
export interface KBEntry {
  keywords: string[]
  en: string
  ar: string
}

export const KB: KBEntry[] = [
  {
    keywords: ['skill', 'stack', 'technolog', 'tech', 'know', 'use react', 'tailwind', 'typescript', 'مهارات', 'مهارة', 'تقنيات', 'بيستخدم', 'بيث'],
    en: 'His main stack is React, TypeScript, JavaScript, HTML5, CSS3 and Tailwind CSS. He works with REST APIs, TanStack Query, Axios, JWT auth and react-hook-form with Zod. Tools: Git, GitHub, VS Code, Vite and draw.io. He is also exploring Python, data science and AI fundamentals.',
    ar: 'أدواته الأساسية React، TypeScript، JavaScript، HTML5، CSS3 وTailwind CSS. بيشتغل بـ REST APIs، TanStack Query، Axios وتسجيل دخول JWT وreact-hook-form مع Zod. الأدوات: Git، GitHub، VS Code، Vite وdraw.io. وكمان بيستكشف بايثون وعلم البيانات وأساسيات الذكاء الاصطناعي.',
  },
  {
    keywords: ['freshcart', 'e-commerce', 'ecommerce', 'store', 'shop', 'cart', 'متجر', 'فريش'],
    en: 'FreshCart is his biggest project: an e-commerce single-page app with React 19 and TypeScript. It has a product catalog, cart, wishlist, orders and checkout, JWT auth with protected routes, and full English/Arabic (RTL) support. Live demo: https://hemameky082-collab.github.io/fresh-cart-react/',
    ar: 'أكبر مشاريعه FreshCart: متجر إلكتروني صفحة واحدة بـ React 19 وTypeScript. فيه كتالوج منتجات وسلة ومفضلة وطلبات ودفع، وتسجيل دخول JWT بصفحات محمية، ودعم كامل إنجليزي/عربي (RTL). الديمو: https://hemameky082-collab.github.io/fresh-cart-react/',
  },
  {
    keywords: ['social', 'تواصل اجتماعي', 'سوشيال'],
    en: 'His Social App is a React + TypeScript social media app with posts, comments and profiles. It uses TanStack Query for data fetching and react-hook-form with Zod for validated forms. Code: https://github.com/hemameky082-collab/social-app (the live demo is being prepared).',
    ar: 'تطبيق التواصل الاجتماعي بتاعه مبني بـ React وTypeScript وفيه بوستات وتعليقات وبروفايلات. بيستخدم TanStack Query لجلب البيانات وreact-hook-form مع Zod للفورمز. الكود: https://github.com/hemameky082-collab/social-app (الديمو اللايف تحت التجهيز).',
  },
  {
    keywords: ['adasa', 'photograph', 'blog', 'عدسة', 'مدونة', 'تصوير'],
    en: 'Adasa is an Arabic photography blog built with React and React Router, with home, about, blog and article pages. Live demo: https://hemameky082-collab.github.io/Assignment14-React-Routing-/',
    ar: 'عدسة مدونة تصوير عربية مبنية بـ React وReact Router، فيها رئيسية وعن المدونة ومقالات. الديمو: https://hemameky082-collab.github.io/Assignment14-React-Routing-/',
  },
  {
    keywords: ['kanban', 'task', 'كانبان', 'مهام'],
    en: 'His Kanban Board is a task manager for organizing work across stages, built with vanilla JavaScript and Tailwind CSS. Live demo: https://hemameky082-collab.github.io/assignment-13/',
    ar: 'لوحة الكانبان بتاعته لإدارة المهام عبر المراحل، مبنية بـ JavaScript خالص وTailwind CSS. الديمو: https://hemameky082-collab.github.io/assignment-13/',
  },
  {
    keywords: ['contacthub', 'contact manager', 'جهات'],
    en: 'ContactHub is a smart contact manager built with vanilla JavaScript: save, search and organize contacts. Live demo: https://hemameky082-collab.github.io/assignment9/',
    ar: 'ContactHub مدير جهات اتصال ذكي بـ JavaScript خالص: حفظ وبحث وتنظيم. الديمو: https://hemameky082-collab.github.io/assignment9/',
  },
  {
    keywords: ['quiz', 'كويز', 'أسئلة', 'لعبة'],
    en: 'QuizApp is an interactive quiz game built with JavaScript. Live demo: https://hemameky082-collab.github.io/assignment-12/',
    ar: 'QuizApp لعبة أسئلة تفاعلية بـ JavaScript. الديمو: https://hemameky082-collab.github.io/assignment-12/',
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'build', 'github', 'repo', 'مشاريع', 'مشروع', 'شغل', 'جيت', 'بورتفوليو'],
    en: 'He has 14 public projects on GitHub: e-commerce, a social app, dashboards and content sites, several of them bilingual English/Arabic. The featured ones are FreshCart, Social App, Adasa, Kanban Board, ContactHub and QuizApp. See the Projects section above, or his GitHub: https://github.com/hemameky082-collab',
    ar: 'عنده 14 مشروع عام على GitHub: متاجر وتطبيق تواصل ولوحات تحكم ومواقع محتوى، كتير منهم ثنائي اللغة إنجليزي/عربي. أهمهم FreshCart، Social App، عدسة، Kanban، ContactHub وQuizApp. شوف سكشن المشاريع فوق أو الجيت هاب: https://github.com/hemameky082-collab',
  },
  {
    keywords: ['education', 'study', 'university', 'college', 'degree', 'banha', 'student', 'دراسة', 'جامعة', 'تعليم', 'بنها', 'طالب', 'بيدرس'],
    en: 'He is a fourth-year Software Engineering student at Banha National University, Faculty of Computer Science, expected to graduate in 2027.',
    ar: 'طالب سنة رابعة هندسة برمجيات في جامعة بنها الأهلية، كلية علوم الحاسب، متوقع يتخرج 2027.',
  },
  {
    keywords: ['course', 'certificat', 'route', 'cisco', 'training', 'كورسات', 'كورس', 'شهادات', 'شهادة', 'روت', 'سيسكو', 'تدريب'],
    en: 'He completed Front-End Development and React at Route Academy (2026), plus Cisco Networking Academy courses: Data Science Essentials with Python (2026), Introduction to Modern AI (2025) and Python Essentials 1 (2025).',
    ar: 'خلّص تطوير الواجهات الأمامية وReact في أكاديمية روت (2026)، وكورسات Cisco: Data Science Essentials with Python (2026)، Introduction to Modern AI (2025)، وPython Essentials 1 (2025).',
  },
  {
    keywords: ['language', 'arabic', 'english', 'rtl', 'speak', 'لغات', 'لغة', 'عربي', 'إنجليزي', 'انجليزي'],
    en: 'Arabic is his native language and his English is B1 (intermediate). He builds bilingual interfaces with proper right-to-left layout, like FreshCart with full English/Arabic support.',
    ar: 'العربي لغته الأم والإنجليزي عنده B1 (متوسط). بيبني واجهات ثنائية اللغة بتنسيق RTL صحيح، زي FreshCart بدعم كامل إنجليزي/عربي.',
  },
  {
    keywords: ['contact', 'email', 'reach', 'phone', 'whatsapp', 'hire', 'freelance', 'available', 'job', 'opportunit', 'تواصل', 'إيميل', 'ايميل', 'تليفون', 'موبايل', 'واتساب', 'فريلانس', 'متاح', 'فرصة', 'أوظفه', 'اوظفه'],
    en: 'He is open to front-end roles and freelance projects. Email: hemameky082@gmail.com, phone/WhatsApp: +20 10 5571 0347. There is also a WhatsApp inquiry form in the Contact section.',
    ar: 'متاح لشغل فرونت إند وفريلانس. الإيميل: hemameky082@gmail.com، تليفون/واتساب: +20 10 5571 0347. وفيه فورم استفسار واتساب في سكشن التواصل.',
  },
  {
    keywords: ['where', 'location', 'live', 'from', 'egypt', 'obour', 'فين', 'مكانه', 'العبور', 'مصر', 'ساكن'],
    en: 'He is based in Obour, Egypt.',
    ar: 'ساكن في العبور، مصر.',
  },
  {
    keywords: ['who', 'about', 'him', 'ibrahem', 'name', 'مين', 'إبراهيم', 'ابراهيم', 'اسمه', 'عنه'],
    en: 'Ibrahem Abdelhafeez Al-Raey is a front-end developer from Obour, Egypt, and a fourth-year Software Engineering student at Banha National University. He builds fast, responsive websites and web apps with React and TypeScript, in English and Arabic.',
    ar: 'إبراهيم عبد الحفيظ الراعي مطوّر واجهات أمامية من العبور، مصر، وطالب سنة رابعة هندسة برمجيات في جامعة بنها الأهلية. بيبني مواقع وتطبيقات ويب سريعة ومتجاوبة بـ React وTypeScript، بالإنجليزي والعربي.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'salam', 'اهلا', 'أهلا', 'هاي', 'سلام', 'ازيك', 'عامل'],
    en: 'Hello! Ask me anything about Ibrahem: his skills, projects, education or how to contact him.',
    ar: 'أهلاً! اسألني أي حاجة عن إبراهيم: مهاراته أو مشاريعه أو دراسته أو إزاي تتواصل معاه.',
  },
]
