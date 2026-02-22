import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const contactEmail = 'ishimwebosco89@gmail.com';

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

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    const emailLink = document.createElement('a');
    emailLink.href = mailtoUrl;
    emailLink.target = '_blank';
    emailLink.rel = 'noopener noreferrer';
    emailLink.click();

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20 bg-[#20252b]">
      <div className="max-w-5xl w-full">
        <div className="relative mb-16 text-center">
          <p className="pointer-events-none absolute inset-x-0 -top-10 select-none text-6xl md:text-8xl font-black tracking-[0.2em] text-gray-500/10 uppercase">
            CONTACT
          </p>
          <h1 className="relative text-3xl md:text-4xl font-bold text-white">Get in Touch</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1bc38b]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <MapPin size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">KG 22 ST Ave, Kigali Rwanda</p>
          </div>

          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <Mail size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href={`mailto:${contactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1bc38b] hover:underline"
            >
              {contactEmail}
            </a>
          </div>

          <div className="bg-[#22252b] p-8 rounded-lg border border-gray-800 text-center hover:border-[#1bc38b] transition-all duration-300">
            <div className="inline-block p-3 bg-[#1bc38b] bg-opacity-10 rounded-lg mb-4">
              <Phone size={32} className="text-[#1bc38b]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+250782828464" className="text-[#1bc38b] hover:underline">
              +250782828464
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
