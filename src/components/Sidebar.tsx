import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
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
  return (
    <aside className="w-[320px] min-w-[320px] bg-[#191c21] flex flex-col items-center py-9 px-8 border-r border-gray-800">
      <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-[#1bc38b]">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Bosco Ishimwe"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="font-bold text-white text-2xl mb-16 text-center">
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

      <div className="flex gap-5 mt-auto">
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
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1bc38b] transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
    </aside>
  );
}
