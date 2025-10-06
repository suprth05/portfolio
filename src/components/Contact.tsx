import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      let data: any = null;
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        if (res.ok) {
          data = { ok: true };
        } else {
          throw new Error(text || `Request failed with status ${res.status}`);
        }
      }
      if (!res.ok || !data.success) throw new Error((data && data.error) || 'Failed');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send. Please try again later.';
      alert(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'supreeths.cs23@rvce.edu.in',
      href: 'mailto:supreeths.cs23@rvce.edu.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8618811946',
      href: 'tel:+918618811946',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-brand-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="p-3 bg-brand-gradient rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`text-lg font-semibold hover:text-brand-500 transition-colors ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/suprth05"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center space-x-2 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/supreeth-s-a50841302"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center space-x-2 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-brand-gradient text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
