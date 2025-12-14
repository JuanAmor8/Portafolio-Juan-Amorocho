import { LanguageProvider } from '../i18n/LanguageContext';
import SmoothScroll from './SmoothScroll';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
