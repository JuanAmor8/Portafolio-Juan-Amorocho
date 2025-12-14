import { useLanguage } from '../i18n/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'TriviaTime',
    description: {
      es: 'Aplicación web de trivias interactiva con sistema de rankings, sesiones de juego, panel de administración y múltiples categorías. Incluye integración con OpenTDB API.',
      en: 'Interactive trivia web application with ranking system, game sessions, admin panel and multiple categories. Includes OpenTDB API integration.',
    },
    image: '/projects/triviatime.jpg',
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'Jest', 'Playwright'],
    github: 'https://github.com/ICESI-CI3/nextjs-vama',
    demo: null,
    featured: true,
    color: 'from-violet-500 to-purple-600',
    icon: 'trivia',
  },
  {
    id: 2,
    title: 'RSA Digital Signature',
    description: {
      es: 'Sistema completo de firma y verificación digital de archivos usando criptografía RSA con hashing SHA-256. Arquitectura cliente-servidor con ZeroC Ice.',
      en: 'Complete digital file signing and verification system using RSA cryptography with SHA-256 hashing. Client-server architecture with ZeroC Ice.',
    },
    image: '/projects/signature.jpg',
    technologies: ['Java', 'RSA', 'SHA-256', 'ZeroC Ice', 'BouncyCastle'],
    github: 'https://github.com/Cibersecurity-Org/sigCheckImplementation',
    demo: null,
    featured: true,
    color: 'from-emerald-500 to-teal-600',
    icon: 'security',
  },
  {
    id: 5,
    title: 'NicheStore',
    description: {
      es: 'E-commerce minimalista de accesorios tecnológicos para desarrolladores. Implementa Server Components, checkout completo, panel de administración y arquitectura escalable con Prisma ORM.',
      en: 'Minimalist e-commerce for tech accessories for developers. Implements Server Components, complete checkout, admin panel and scalable architecture with Prisma ORM.',
    },
    image: '/projects/nichestore.jpg',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'shadcn/ui'],
    github: 'https://github.com/JuanAmor8/NicheStore',
    demo: null,
    featured: true,
    color: 'from-amber-500 to-orange-600',
    icon: 'ecommerce',
  },
  {
    id: 3,
    title: 'T1-APO2',
    description: {
      es: 'Tarea Integradora #1 - Proyecto colaborativo de programación orientada a objetos con estructuras de datos avanzadas.',
      en: 'Integrative Task #1 - Collaborative object-oriented programming project with advanced data structures.',
    },
    image: '/projects/project1.jpg',
    technologies: ['Java', 'OOP', 'Data Structures'],
    github: 'https://github.com/JuanAmor8/T1-APO2',
    demo: null,
    featured: false,
    color: 'from-orange-500 to-red-600',
    icon: 'code',
  },
  {
    id: 4,
    title: 'Seguimiento Discretas',
    description: {
      es: 'Proyecto de matemáticas discretas con análisis de datos y visualización usando Jupyter Notebooks.',
      en: 'Discrete mathematics project with data analysis and visualization using Jupyter Notebooks.',
    },
    image: '/projects/project3.jpg',
    technologies: ['Python', 'Jupyter', 'NumPy', 'Pandas'],
    github: 'https://github.com/JuanAmor8/Seguimiento-7-Discretas-',
    demo: null,
    featured: false,
    color: 'from-cyan-500 to-blue-600',
    icon: 'data',
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
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* TriviaTime */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-violet-500/30 transition-all duration-500">
            {/* Visual Header */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-600/20 to-purple-600/20">
              <div className="absolute inset-0 grid-background opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                  ⭐ {language === 'es' ? 'Destacado' : 'Featured'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                TriviaTime
              </h3>
              <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                {projects[0].description[language]}
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
                {projects[0].technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/20 rounded text-violet-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a 
                href={projects[0].github}
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

          {/* RSA Digital Signature */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-emerald-500/30 transition-all duration-500">
            {/* Visual Header */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-600/20 to-teal-600/20">
              <div className="absolute inset-0 grid-background opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                  🔐 {language === 'es' ? 'Ciberseguridad' : 'Cybersecurity'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                RSA Digital Signature
              </h3>
              <p className="text-dark-400 text-sm mb-4 line-clamp-2">
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

          {/* NicheStore */}
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-amber-500/30 transition-all duration-500">
            {/* Visual Header */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-600/20 to-orange-600/20">
              <div className="absolute inset-0 grid-background opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                  🛒 E-commerce
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                NicheStore
              </h3>
              <p className="text-dark-400 text-sm mb-4 line-clamp-2">
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
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <article 
              key={project.id}
              className="group card-futuristic overflow-hidden hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header with gradient */}
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 bg-dark-950/40" />
                <div className="absolute inset-0 grid-background opacity-20" />
                
                {/* Project title overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/90">
                    {project.title.split(' ')[0]}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-dark-800 rounded-full border border-accent-cyan/50 hover:bg-accent-cyan/20 transition-colors"
                      aria-label="View code"
                    >
                      <svg className="w-5 h-5 text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-dark-800 rounded-full border border-primary-500/50 hover:bg-primary-500/20 transition-colors"
                      aria-label="View demo"
                    >
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-dark-800 border border-dark-700 rounded text-dark-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
