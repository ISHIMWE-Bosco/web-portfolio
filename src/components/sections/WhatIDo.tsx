import { Palette, Monitor, Smartphone, Code2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that capture your brand essence and engage your audience effectively.'
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Crafting responsive, user-centered web experiences that look beautiful and function flawlessly.'
  },
  {
    icon: Code2,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces and meaningful user experiences that delight and inspire.'
  },
  {
    icon: Smartphone,
    title: 'App Developer',
    description: 'Building powerful mobile and web applications with cutting-edge technologies and best practices.'
  },
];

export default function WhatIDo() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">What I Do</h1>
        <p className="text-center text-gray-400 mb-16">Services I provide to help grow your business</p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#22252b] p-8 rounded-lg border border-gray-800 hover:border-[#1bc38b] transition-all duration-300 hover:shadow-lg hover:shadow-[#1bc38b]/20"
              >
                <div className="mb-4 inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg">
                  <Icon size={32} className="text-[#1bc38b]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
