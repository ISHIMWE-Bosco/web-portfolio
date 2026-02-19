import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations',
    content: 'Bosco delivered an exceptional website that exceeded all expectations. His attention to detail and creative approach was impressive.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, Digital Agency',
    content: 'Working with Bosco was a great experience. He understood our vision and transformed it into a beautiful reality.',
    image: 'https://images.pexels.com/photos/3761689/pexels-photo-3761689.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, StartUp Hub',
    content: 'Professional, responsive, and talented. Bosco goes above and beyond to ensure client satisfaction.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
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
