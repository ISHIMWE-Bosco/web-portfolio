import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Honorine Ishimwe',
    role: 'Founder, CampusConnect',
    content: 'Bosco delivered an exceptional website that exceeded all expectations. His attention to detail and creative approach was impressive.',
    image: 'https://ui-avatars.com/api/?name=Honorine+Ishimwe&background=1bc38b&color=191c21&bold=true',
    rating: 5,
  },
  {
    id: 2,
    name: 'Arnold Manishimwe',
    role: 'Co-Founder, QuickCart',
    content: 'Working with Bosco was a great experience. He understood our vision and transformed it into a beautiful reality.',
    image: 'https://ui-avatars.com/api/?name=Arnold+Manishimwe&background=1bc38b&color=191c21&bold=true',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rukundo Pacifique',
    role: 'Founder, StudySpark',
    content: 'Professional, responsive, and talented. Bosco goes above and beyond to ensure client satisfaction.',
    image: 'https://ui-avatars.com/api/?name=Rukundo+Pacifique&background=1bc38b&color=191c21&bold=true',
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20 bg-[#1b1f24]">
      <div className="max-w-6xl w-full">
        <div className="relative mb-16 text-center">
          <p className="pointer-events-none absolute inset-x-0 -top-10 select-none text-6xl md:text-8xl font-black tracking-[0.2em] text-gray-500/10 uppercase">
            TESTIMONIAL
          </p>
          <h1 className="relative text-3xl md:text-4xl font-bold text-white">What Clients Say</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1bc38b]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#22252b] p-8 rounded-lg border border-gray-800 hover:border-[#1bc38b] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#1bc38b] text-[#1bc38b]"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
