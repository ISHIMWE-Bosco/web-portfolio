export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About"
              className="rounded-lg object-cover h-96 w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a love for creating elegant solutions to complex problems. With expertise in both frontend and backend development, I specialize in building scalable and user-friendly applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in tech started with a curiosity about how things work, which transformed into a career dedicated to crafting digital experiences that matter. I'm constantly learning and adapting to the latest technologies.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-[#22252b] p-6 rounded-lg border border-[#1bc38b] border-opacity-20">
                <p className="text-[#1bc38b] font-semibold text-2xl">50+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-[#22252b] p-6 rounded-lg border border-[#1bc38b] border-opacity-20">
                <p className="text-[#1bc38b] font-semibold text-2xl">30+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
