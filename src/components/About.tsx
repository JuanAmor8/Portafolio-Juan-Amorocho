import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-gradient-to-br from-accent-cyan/20 to-primary-600/20 rounded-2xl blur-xl" />
              
              {/* Main card */}
              <div className="relative card-futuristic p-8 h-full flex flex-col justify-center">
                {/* Terminal-like header */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-dark-500 font-mono text-sm">about-juan.tsx</span>
                </div>
                
                {/* Code-like content */}
                <div className="font-mono text-sm space-y-2">
                  <p><span className="text-purple-400">const</span> <span className="text-accent-cyan">developer</span> = {'{'}</p>
                  <p className="pl-4"><span className="text-primary-400">name</span>: <span className="text-green-400">"Juan Amorocho"</span>,</p>
                  <p className="pl-4"><span className="text-primary-400">role</span>: <span className="text-green-400">"Full Stack Developer"</span>,</p>
                  <p className="pl-4"><span className="text-primary-400">semester</span>: <span className="text-orange-400">8</span>,</p>
                  <p className="pl-4"><span className="text-primary-400">location</span>: <span className="text-green-400">"Colombia"</span>,</p>
                  <p className="pl-4"><span className="text-primary-400">available</span>: <span className="text-accent-cyan">true</span>,</p>
                  <p className="pl-4"><span className="text-primary-400">passion</span>: <span className="text-green-400">"Building digital solutions"</span></p>
                  <p>{'}'}</p>
                </div>

                {/* Decorative cursor */}
                <div className="mt-4 flex items-center">
                  <span className="text-accent-cyan font-mono">❯</span>
                  <span className="w-2 h-5 bg-accent-cyan ml-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-dark-300 leading-relaxed">
              {t.about.description}
            </p>
            
            <p className="text-lg text-dark-300 leading-relaxed">
              {t.about.experience}
            </p>
            
            <p className="text-lg text-dark-300 leading-relaxed">
              {t.about.passion}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="card-futuristic p-4 text-center">
                <div className="text-3xl font-display font-bold text-gradient">8°</div>
                <div className="text-dark-400 text-sm mt-1">Semestre</div>
              </div>
              <div className="card-futuristic p-4 text-center">
                <div className="text-3xl font-display font-bold text-gradient">21+</div>
                <div className="text-dark-400 text-sm mt-1">Repositorios</div>
              </div>
              <div className="card-futuristic p-4 text-center">
                <div className="text-3xl font-display font-bold text-gradient">10+</div>
                <div className="text-dark-400 text-sm mt-1">Tecnologías</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

