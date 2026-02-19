import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Lovers',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3586667/pexels-photo-3586667.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Flowers',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/1161259/pexels-photo-1161259.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Tattoo Art',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3597911/pexels-photo-3597911.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'Gallery',
    category: 'Photos',
    image: 'https://images.pexels.com/photos/3378746/pexels-photo-3378746.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Botanical',
    category: 'Photos',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const categories = ['All', 'Design', 'Brand', 'Photos'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20 bg-[#20252b]">
      <div className="max-w-6xl w-full">
        <div className="relative mb-12 text-center">
          <p className="pointer-events-none absolute inset-x-0 -top-10 select-none text-6xl md:text-8xl font-black tracking-[0.2em] text-gray-500/10 uppercase">
            PORTFOLIO
          </p>
          <h1 className="relative text-3xl md:text-4xl font-bold text-white">My Work</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1bc38b]" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#1bc38b] text-[#191c21]'
                  : 'bg-[#22252b] text-gray-300 hover:text-[#1bc38b] border border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191c21] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-[#1bc38b] text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
