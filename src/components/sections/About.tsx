export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20 bg-[#1b1f24]">
      <div className="max-w-5xl w-full">
        <div className="relative mb-14 text-center">
          <p className="pointer-events-none absolute inset-x-0 -top-10 select-none text-6xl md:text-8xl font-black tracking-[0.2em] text-gray-500/10 uppercase">
            ABOUT ME
          </p>
          <h1 className="relative text-3xl md:text-4xl font-bold text-white">Know Me More</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1bc38b]" />
        </div>

        <div className="grid md:grid-cols-[1.45fr_1fr] gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-5">
              I am <span className="text-[#1bc38b]">Bosco Ishimwe</span> a Software Developer,
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a love for creating elegant solutions to complex problems. With expertise in both frontend and backend development, I specialize in building scalable and user-friendly applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My journey in tech started with a curiosity about how things work, which transformed into a career dedicated to crafting digital experiences that matter. I'm constantly learning and adapting to the latest technologies.
            </p>
          </div>

          <div className="flex flex-col justify-center md:pl-8">
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-3 text-gray-400">
                <p><span className="font-semibold text-white">Name:</span> Bosco Ishimwe</p>
              </div>
              <div className="border-b border-gray-700 pb-3 text-gray-400">
                <p><span className="font-semibold text-white">Email:</span> ishimwebosco89@gmail.com</p>
              </div>
              <div className="border-b border-gray-700 pb-3 text-gray-400">
                <p><span className="font-semibold text-white">Age:</span> 28</p>
              </div>
              <div className="border-b border-gray-700 pb-3 text-gray-400">
                <p><span className="font-semibold text-white">From:</span> Kigali, Rwanda</p>
              </div>
            </div>

            <button className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#1bc38b] px-6 py-3 font-semibold text-[#191c21] transition-all duration-300 hover:bg-[#15a373]">
              Download CV
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-700/70 p-5 text-center">
            <p className="text-4xl font-bold text-[#1bc38b]">20+</p>
            <p className="mt-1 text-lg text-gray-300">Projects Completed</p>
          </div>
          <div className="rounded-lg border border-gray-700/70 p-5 text-center">
            <p className="text-4xl font-bold text-[#1bc38b]">8+</p>
            <p className="mt-1 text-lg text-gray-300">Clients</p>
          </div>
          <div className="rounded-lg border border-gray-700/70 p-5 text-center">
            <p className="text-4xl font-bold text-[#1bc38b]">5+</p>
            <p className="mt-1 text-lg text-gray-300">Intensive Programs Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
