import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatIDo from './components/sections/WhatIDo';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Testimonial from './components/sections/Testimonial';
import Contact from './components/sections/Contact';

export type Section = 'home' | 'about' | 'whatido' | 'resume' | 'portfolio' | 'testimonial' | 'contact';

const sectionOrder: Section[] = ['home', 'about', 'whatido', 'resume', 'portfolio', 'testimonial', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const mainRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    home: null,
    about: null,
    whatido: null,
    resume: null,
    portfolio: null,
    testimonial: null,
    contact: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const nextActive = visibleEntries[0].target.id as Section;
          setActiveSection(nextActive);
        }
      },
      {
        root: mainRef.current,
        threshold: [0.3, 0.5, 0.7],
      },
    );

    sectionOrder.forEach((section) => {
      const element = sectionRefs.current[section];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: Section) => {
    const element = sectionRefs.current[section];
    if (!element) return;

    setActiveSection(section);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex h-screen w-full bg-[#191c21] overflow-hidden">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="h-screen flex-1 overflow-y-auto" ref={mainRef}>
        <div id="home" ref={(el) => { sectionRefs.current.home = el; }}>
          <Hero onNavigate={handleNavigate} />
        </div>
        <div id="about" ref={(el) => { sectionRefs.current.about = el; }}>
          <About />
        </div>
        <div id="whatido" ref={(el) => { sectionRefs.current.whatido = el; }}>
          <WhatIDo />
        </div>
        <div id="resume" ref={(el) => { sectionRefs.current.resume = el; }}>
          <Resume />
        </div>
        <div id="portfolio" ref={(el) => { sectionRefs.current.portfolio = el; }}>
          <Portfolio />
        </div>
        <div id="testimonial" ref={(el) => { sectionRefs.current.testimonial = el; }}>
          <Testimonial />
        </div>
        <div id="contact" ref={(el) => { sectionRefs.current.contact = el; }}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
