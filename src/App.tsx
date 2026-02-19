import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatIDo from './components/sections/WhatIDo';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Testimonial from './components/sections/Testimonial';
import Contact from './components/sections/Contact';

export type Section = 'home' | 'about' | 'whatido' | 'resume' | 'portfolio' | 'testimonial' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={setActiveSection} />;
      case 'about':
        return <About />;
      case 'whatido':
        return <WhatIDo />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'testimonial':
        return <Testimonial />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#191c21] overflow-hidden">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
