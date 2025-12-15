import { useLanguage } from '../i18n/LanguageContext';

const projects = [
  // 1. SkillUp
  {
    id: 1,
    title: 'SkillUp',
    description: {
      es: 'Plataforma de freelancers con interfaz minimalista para el intercambio de servicios. Conecta talento y oportunidades sin barreras de manera fluida y efectiva.',
      en: 'Freelancer platform with minimalist interface for service exchange. Connects talent and opportunities seamlessly and effectively.',
    },
    image: '/projects/skillup.JPG',
    technologies: ['Python', 'Django', 'Django Channels', 'HTMX', 'Bootstrap', 'SQLite'],
    github: 'https://github.com/JuanAmor8/SkillUp',
    demo: null,
    featured: true,
    color: 'from-sky-500 to-blue-600',
    icon: 'freelance',
  },
  // 2. RSA Digital Signature
  {
    id: 2,
    title: 'RSA Digital Signature',
    description: {
      es: 'Sistema completo de firma y verificación digital de archivos usando criptografía RSA con hashing SHA-256. Arquitectura cliente-servidor con ZeroC Ice.',
      en: 'Complete digital file signing and verification system using RSA cryptography with SHA-256 hashing. Client-server architecture with ZeroC Ice.',
    },
    image: '/projects/RSA.JPG',
    technologies: ['Java', 'RSA', 'SHA-256', 'ZeroC Ice', 'BouncyCastle'],
    github: 'https://github.com/Cibersecurity-Org/sigCheckImplementation',
    demo: null,
    featured: true,
    color: 'from-emerald-500 to-teal-600',
    icon: 'security',
  },
  // 3. NicheStore
  {
    id: 3,
    title: 'NicheStore',
    description: {
      es: 'E-commerce minimalista de accesorios tecnológicos para desarrolladores. Implementa Server Components, checkout completo, panel de administración y arquitectura escalable con Prisma ORM.',
      en: 'Minimalist e-commerce for tech accessories for developers. Implements Server Components, complete checkout, admin panel and scalable architecture with Prisma ORM.',
    },
    image: '/projects/nichestore.JPG',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'shadcn/ui'],
    github: 'https://github.com/JuanAmor8/NicheStore',
    demo: null,
    featured: true,
    color: 'from-amber-500 to-orange-600',
    icon: 'ecommerce',
  },
  // 4. TriviaTime
  {
    id: 4,
    title: 'TriviaTime',
    description: {
      es: 'Aplicación web de trivias interactiva con sistema de rankings, sesiones de juego, panel de administración y múltiples categorías. Incluye integración con OpenTDB API.',
      en: 'Interactive trivia web application with ranking system, game sessions, admin panel and multiple categories. Includes OpenTDB API integration.',
    },
    image: '/projects/triviatime.JPG',
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'Jest', 'Playwright'],
    github: 'https://github.com/ICESI-CI3/nextjs-vama',
    demo: null,
    featured: true,
    color: 'from-violet-500 to-purple-600',
    icon: 'trivia',
  },
  // 5. Sistema de Votación Electrónica
  {
    id: 5,
    title: 'Sistema de Votación',
    description: {
      es: 'Sistema de votación electrónica distribuido con arquitectura cliente-servidor usando ZeroC ICE. Implementa transmisión confiable, prevención de duplicados con UUID y almacenamiento transitorio.',
      en: 'Distributed electronic voting system with client-server architecture using ZeroC ICE. Implements reliable transmission, duplicate prevention with UUID and transient storage.',
    },
    image: '/projects/sistemadevotacion.JPG',
    technologies: ['Java', 'ZeroC ICE', 'Gradle', 'CSV', 'Distributed Systems'],
    github: 'https://github.com/tomasquin2003/Software_IV_Final_Project',
    demo: null,
    featured: true,
    color: 'from-rose-500 to-pink-600',
    icon: 'vote',
  },
];

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle mt-4">{t.projects.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-primary-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {/* 1. SkillUp */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-sky-500/30 transition-all duration-500">
            {/* Visual Header with Image */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/projects/skillup.JPG" 
                alt="SkillUp Preview"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                SkillUp
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                {projects[0].description[language]}
              </p>
              
              {/* Features mini */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['WebSockets', 'Real-time', 'HTMX'].map((f, i) => (
                  <span key={i} className="text-xs text-sky-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[0].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-sky-500/10 border border-sky-500/20 rounded text-sky-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* 2. RSA Digital Signature */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-emerald-500/30 transition-all duration-500">
            {/* Visual Header */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-600/20 to-teal-600/20">
              <div className="absolute inset-0 grid-background opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                RSA Digital Signature
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                {projects[1].description[language]}
              </p>
              
              {/* Features mini */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['RSA-2048', 'SHA-256', 'Client-Server'].map((f, i) => (
                  <span key={i} className="text-xs text-emerald-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[1].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* 3. NicheStore */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-amber-500/30 transition-all duration-500">
            {/* Visual Header with Image */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/projects/nichestore.JPG" 
                alt="NicheStore Preview"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                NicheStore
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                {projects[2].description[language]}
              </p>
              
              {/* Features mini */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Server Components', 'Admin Panel', 'Prisma ORM'].map((f, i) => (
                  <span key={i} className="text-xs text-amber-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[2].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-amber-500/10 border border-amber-500/20 rounded text-amber-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[2].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* 4. TriviaTime */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-violet-500/30 transition-all duration-500">
            {/* Visual Header with Image */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/projects/triviatime.JPG" 
                alt="TriviaTime Preview"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                TriviaTime
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                {projects[3].description[language]}
              </p>
              
              {/* Features mini */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Rankings', 'Admin Panel', 'Testing E2E'].map((f, i) => (
                  <span key={i} className="text-xs text-violet-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[3].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/20 rounded text-violet-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[3].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* 5. Sistema de Votación */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-rose-500/30 transition-all duration-500 md:col-span-2">
            {/* Visual Header with Image */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/projects/sistemadevotacion.JPG" 
                alt="Sistema de Votación Preview"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                Sistema de Votación
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                {projects[4].description[language]}
              </p>
              
              {/* Features mini */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Reliable Messaging', 'Store-and-Forward', 'UUID Tracking'].map((f, i) => (
                  <span key={i} className="text-xs text-rose-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[4].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-rose-500/10 border border-rose-500/20 rounded text-rose-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[4].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/JuanAmor8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>{language === 'es' ? 'Ver más en GitHub' : 'View more on GitHub'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
