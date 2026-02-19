import { Section } from '../../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1bc38b 0%, transparent 50%), radial-gradient(circle at 80% 80%, #1bc38b 0%, transparent 50%)`,
        }}
      />

      <div className="text-center max-w-4xl mb-12">
        <p className="font-bold text-[#1bc38b] text-2xl mb-4">Welcome</p>
        <h1 className="font-bold text-white text-6xl md:text-7xl leading-tight mb-6">
          I am A software Developer.
        </h1>
        <p className="text-gray-300 text-2xl">
          Based in Kigali, Rwanda.
        </p>
      </div>

      <button
        onClick={() => onNavigate('contact')}
        className="mt-12 px-8 py-4 bg-[#1bc38b] hover:bg-[#15a373] text-[#191c21] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Hire Me
      </button>

      <div className="mt-20 text-center text-gray-500 text-sm">
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
