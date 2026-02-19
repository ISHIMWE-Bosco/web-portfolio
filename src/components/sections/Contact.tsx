import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Get in Touch</h1>
        <p className="text-center text-gray-400 mb-16">I'd love to hear from you. Let's work together</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <MapPin size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">Kigali, Rwanda</p>
          </div>

          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <Mail size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href="mailto:bosco@example.com" className="text-[#1bc38b] hover:underline">
              bosco@example.com
            </a>
          </div>

          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <Phone size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+250788123456" className="text-[#1bc38b] hover:underline">
              +250 788 123 456
            </a>
          </div>
        </div>

        <div className="bg-[#22252b] p-12 rounded-lg border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#191c21] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1bc38b] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#191c21] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1bc38b] transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-[#191c21] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1bc38b] transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-[#191c21] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#1bc38b] transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-[#1bc38b] hover:bg-[#15a373] text-[#191c21] font-semibold rounded-lg transition-all duration-300"
            >
              <Send size={20} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
