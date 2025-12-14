import { useLanguage } from '../i18n/LanguageContext';

const educationData = {
  es: [
    {
      id: 1,
      title: 'Ingeniería de Sistemas / Software',
      institution: 'Universidad ICESI',
      location: 'Cali, Colombia',
      period: '2022 - Actual',
      description: 'Estudiante de 8° semestre con enfoque en desarrollo de software, arquitectura de sistemas y soluciones tecnológicas innovadoras.',
      current: true,
    },
  ],
  en: [
    {
      id: 1,
      title: 'Systems / Software Engineering',
      institution: 'ICESI University',
      location: 'Cali, Colombia',
      period: '2022 - Present',
      description: '8th semester student focused on software development, systems architecture, and innovative technological solutions.',
      current: true,
    },
  ],
};

const workData = {
  es: [
    {
      id: 1,
      title: 'Desarrollador Freelance',
      company: 'Independiente',
      period: '2022 - Actual',
      description: 'Desarrollo y mantenimiento de páginas web. Trabajo en diversos proyectos incluyendo sostenimiento de sitios web y creación de soluciones digitales personalizadas.',
      current: true,
    },
  ],
  en: [
    {
      id: 1,
      title: 'Freelance Developer',
      company: 'Independent',
      period: '2022 - Present',
      description: 'Web development and maintenance. Working on various projects including website support and creation of custom digital solutions.',
      current: true,
    },
  ],
};

const certificationsData = {
  es: [
    {
      id: 1,
      title: 'Scrum Foundation Professional Certification',
      issuer: 'CertiProf',
      year: '2024',
    },
    {
      id: 2,
      title: 'Introducción a MongoDB',
      issuer: 'MongoDB University',
      year: '2024',
    },
  ],
  en: [
    {
      id: 1,
      title: 'Scrum Foundation Professional Certification',
      issuer: 'CertiProf',
      year: '2024',
    },
    {
      id: 2,
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      year: '2024',
    },
  ],
};

export default function Experience() {
  const { t, language } = useLanguage();
  const education = educationData[language];
  const work = workData[language];
  const certifications = certificationsData[language];

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle mt-4">{t.experience.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-primary-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white">{t.experience.education}</h3>
            </div>

            {education.map((item) => (
              <div key={item.id} className="card-futuristic p-6 relative">
                {item.current && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-mono bg-accent-cyan/20 text-accent-cyan rounded">
                    {t.experience.current}
                  </span>
                )}
                <h4 className="text-lg font-semibold text-white pr-16">{item.title}</h4>
                <p className="text-accent-cyan text-sm mt-1 font-semibold">{item.institution}</p>
                <p className="text-dark-400 text-sm">{item.location}</p>
                <p className="text-dark-500 text-sm font-mono mt-1">{item.period}</p>
                <p className="text-dark-400 text-sm mt-3">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Work */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white">{t.experience.work}</h3>
            </div>

            {work.map((item) => (
              <div key={item.id} className="card-futuristic p-6 relative">
                {item.current && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-mono bg-primary-500/20 text-primary-400 rounded">
                    {t.experience.current}
                  </span>
                )}
                <h4 className="text-lg font-semibold text-white pr-16">{item.title}</h4>
                <p className="text-primary-400 text-sm mt-1">{item.company}</p>
                <p className="text-dark-500 text-sm font-mono mt-1">{item.period}</p>
                <p className="text-dark-400 text-sm mt-3">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white">{t.experience.certifications}</h3>
            </div>

            {certifications.map((item) => (
              <div key={item.id} className="card-futuristic p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan to-primary-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-accent-blue text-sm ml-11">{item.issuer}</p>
                <p className="text-dark-500 text-sm font-mono ml-11">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
