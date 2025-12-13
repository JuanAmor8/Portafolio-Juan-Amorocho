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
  },
  {
    id: 2,
    title: 'T1-APO2',
    description: {
      es: 'Tarea Integradora #1 - Proyecto colaborativo de programación orientada a objetos con estructuras de datos avanzadas.',
      en: 'Integrative Task #1 - Collaborative object-oriented programming project with advanced data structures.',
    },
    image: '/projects/project1.jpg',
    technologies: ['Java', 'OOP', 'Data Structures'],
    github: 'https://github.com/JuanAmor8/T1-APO2',
    demo: null,
    featured: true,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 3,
    title: 'Seguimiento Discretas',
    description: {
      es: 'Proyecto de matemáticas discretas con análisis de datos y visualización usando Jupyter Notebooks.',
      en: 'Discrete mathematics project with data analysis and visualization using Jupyter Notebooks.',
    },
    image: '/projects/project3.jpg',
    technologies: ['Python', 'Jupyter', 'NumPy', 'Pandas'],
    github: 'https://github.com/JuanAmor8/Seguimiento-7-Discretas-',
    demo: null,
    featured: true,
    color: 'from-cyan-500 to-blue-600',
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

        {/* Featured Project - TriviaTime */}
        <div className="mb-12">
          <article className="group relative overflow-hidden rounded-2xl bg-dark-900/50 border border-dark-700/50 hover:border-violet-500/30 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Visual */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-violet-600/20 to-purple-600/20">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10" />
                <div className="absolute inset-0 grid-background opacity-30" />
                
                {/* Floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main icon */}
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    
                    {/* Orbiting badges */}
                    <div className="absolute -top-4 -right-8 bg-dark-900 border border-violet-500/30 rounded-lg px-2 py-1 animate-float">
                      <span className="text-violet-400 font-mono text-xs">Next.js</span>
                    </div>
                    <div className="absolute -bottom-4 -left-8 bg-dark-900 border border-purple-500/30 rounded-lg px-2 py-1 animate-float animation-delay-400">
                      <span className="text-purple-400 font-mono text-xs">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                    ⭐ {language === 'es' ? 'Destacado' : 'Featured'}
                  </span>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                  TriviaTime
                </h3>
                
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {projects[0].description[language]}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { es: 'Sistema de Rankings', en: 'Ranking System' },
                    { es: 'Panel Admin', en: 'Admin Panel' },
                    { es: 'Sesiones de Juego', en: 'Game Sessions' },
                    { es: 'Testing E2E', en: 'E2E Testing' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-dark-400">
                      <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature[language]}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a 
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>{language === 'es' ? 'Ver Código' : 'View Code'}</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
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
