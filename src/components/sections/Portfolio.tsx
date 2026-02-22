import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'web-portfolio',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/web-portfolio.git',
  },
  {
    id: 2,
    title: 'Art_tech',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/Art_tech.git',
  },
  {
    id: 3,
    title: 'product-catalog-api',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/product-catalog-api.git',
  },
  {
    id: 4,
    title: 'gymtrack-app',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/gymtrack-app.git',
  },
  {
    id: 5,
    title: 'event_locator',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/event_locator.git',
  },
  {
    id: 6,
    title: 'expense_tracker',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/expense_tracker.git',
  },
  {
    id: 7,
    title: 'NkuAlert',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/lasgedu/NkuAlert.git',
  },
  {
    id: 8,
    title: 'gymtrack-app',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'https://github.com/ISHIMWE-Bosco/gymtrack-app.git',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps'];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
