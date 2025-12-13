import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const titles = language === 'es' 
    ? ['Ingeniero de Software', 'Desarrollador Full Stack', 'Desarrollador Backend', 'Desarrollador Frontend']
    : ['Software Engineer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer'];

  useEffect(() => {
    const currentTitle = titles[loopNum % titles.length];
    const updateText = () => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }
    };

    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      typingSpeed = 500;
    }

    const timer = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, titles, language]);

  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setLoopNum(0);
  }, [language]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      
      {/* Geometric shapes */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-20 h-20 border border-accent-cyan/30 rotate-45 animate-float" />
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <div className="w-16 h-16 border-2 border-primary-500/30 rounded-full animate-float animation-delay-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              {/* Greeting */}
              <p className="text-accent-cyan font-mono text-lg opacity-0 animate-fade-in">
                {t.hero.greeting}
              </p>
              
              {/* Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold opacity-0 animate-fade-in animation-delay-200">
                <span className="text-gradient glow-text">{t.hero.name}</span>
              </h1>
              
              {/* Title with typewriter effect */}
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start opacity-0 animate-fade-in animation-delay-400">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-dark-200 font-mono">
                  <span className="text-accent-cyan">&gt;</span>{' '}
                  <span>{displayText}</span>
                  <span className="inline-block w-0.5 h-6 sm:h-7 lg:h-8 bg-accent-cyan ml-1 animate-pulse" />
                </h2>
              </div>
              
              {/* Quote */}
              <blockquote className="border-l-2 border-accent-cyan/50 pl-4 italic text-dark-400 opacity-0 animate-fade-in animation-delay-600">
                <p className="text-sm sm:text-base">{t.hero.quote}</p>
                <cite className="text-accent-cyan/70 text-sm not-italic">{t.hero.quoteAuthor}</cite>
              </blockquote>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in animation-delay-800">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  {t.hero.cta}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-outline"
                >
                  {t.hero.contact}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 opacity-0 animate-fade-in animation-delay-1000">
                <a 
                  href="https://github.com/JuanAmor8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-accent-cyan transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/juan-camilo-amorocho-murillo-790a943a0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-accent-cyan transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:juancamiloamorocho@hotmail.com"
                  className="text-dark-400 hover:text-accent-cyan transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Circle with animated morphing border */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in animation-delay-400">
            <div className="relative">
              {/* Animated glow behind */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-blue morph-glow" />
              
              {/* Morphing border container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 morph-border">
                {/* Inner circle with image */}
                <div className="absolute inset-1 rounded-full overflow-hidden bg-dark-900">
                  <img 
                    src="/profile.jpg" 
                    alt="Juan Amorocho"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 bg-dark-900 border border-accent-cyan/30 rounded-lg px-3 py-2 animate-float">
                <span className="text-accent-cyan font-mono text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark-900 border border-primary-500/30 rounded-lg px-3 py-2 animate-float animation-delay-400">
                <span className="text-primary-400 font-mono text-sm">Python</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-dark-900 border border-accent-blue/30 rounded-lg px-3 py-2 animate-float animation-delay-600">
                <span className="text-accent-blue font-mono text-sm">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center text-dark-400 hover:text-accent-cyan transition-colors"
          aria-label="Scroll to projects section"
        >
          <span className="text-sm mb-2 font-mono">scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
