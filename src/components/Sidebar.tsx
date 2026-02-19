import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';

interface SidebarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navigationItems: { label: string; id: Section }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'What I Do', id: 'whatido' },
  { label: 'Resume', id: 'resume' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Testimonial', id: 'testimonial' },
  { label: 'Contact', id: 'contact' },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <aside className="sticky top-0 h-screen w-[280px] min-w-[280px] shrink-0 overflow-y-auto bg-[#191c21] flex flex-col items-center pt-16 pb-10 px-6 border-r border-gray-800">
      <div className="mb-10 rounded-full bg-[#1bc38b] p-1">
        <div className="h-52 w-52 overflow-hidden rounded-full bg-[#22252b]">
          {imageFailed ? (
            <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-[#1bc38b]">
              BI
            </div>
          ) : (
            <img
              src="/Profile.JPG"
              alt="Bosco Ishimwe"
              className="block h-full w-full rounded-full object-cover object-center"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </div>

      <h2 className="font-bold text-white text-2xl mb-14 text-center">
        Bosco Ishimwe
      </h2>

      <nav className="flex flex-col gap-6 mb-auto w-full">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`font-semibold text-lg text-left transition-colors duration-300 ${
              activeSection === item.id
                ? 'text-[#1bc38b] border-l-4 border-[#1bc38b] pl-4'
                : 'text-gray-400 hover:text-[#1bc38b] pl-4'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-14 w-full border-t border-gray-800 pt-8">
        <div className="flex justify-center gap-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ishimwe-bosco-110974285/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/ISHIMWE-Bosco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Github size={20} />
        </a>
        </div>
      </div>
    </aside>
  );
}



