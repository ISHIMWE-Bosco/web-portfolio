import { useEffect, useState } from 'react';
import { Section } from '../../App';
import background from '../../assets/background.jpg';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const roles = [
  'I am a software developer.',
  'I am a graphic designer.',
  'I am an entrepreneur.',
];

export default function Hero({ onNavigate }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 45 : 70;
    const pause = 700;
    const delay = !isDeleting && displayedText === fullText ? pause : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText === fullText) {
          setIsDeleting(true);
          return;
        }

        const nextText = fullText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      } else {
        const nextText = fullText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-12 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-4xl mb-12">
        <p className="font-bold text-[#1bc38b] text-2xl mb-4">Welcome</p>
        <h1 className="font-bold text-white text-6xl md:text-7xl leading-tight mb-6 min-h-[1.3em]">
          {displayedText}
          <span className="ml-1 inline-block h-[0.95em] w-[3px] bg-[#1bc38b] align-middle animate-pulse" />
        </h1>
        <p className="text-gray-300 text-2xl">
          Based in Kigali, Rwanda.
        </p>
      </div>

      <button
        onClick={() => onNavigate('contact')}
        className="relative z-10 mt-12 px-8 py-4 border-2 border-[#1bc38b] bg-transparent text-[#1bc38b] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#1bc38b] hover:text-white"
      >
        Hire Me
      </button>

      <div className="relative z-10 mt-20 text-center text-gray-300 text-sm">
        <p>Scroll down to explore more</p>
        <div className="mt-4 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#1bc38b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
