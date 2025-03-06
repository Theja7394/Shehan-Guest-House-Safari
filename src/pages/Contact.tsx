import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: ['+94 75 044 7969', '+94 77 242 0455'], // Now an array for multiline display
      link: 'tel:+94750447969',
      hoverText: 'Call us',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'shehanguesthouse@gmail.com',
      link: 'mailto:shehanguesthouse@gmail.com',
      hoverText: 'Send email',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'No. 106, Old Buttala Road, Kataragama.',
      link: 'https://maps.app.goo.gl/D3X2UCLxyvjJoTtPA',
      hoverText: 'Open in Google Maps',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+94 71 762 4002',
      link: 'https://wa.me/94717624002', // Corrected format
      hoverText: 'Chat on WhatsApp',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with us for bookings and inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 px-6 py-8 max-w-4xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-2xl font-bold mb-10">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Enter Your Message"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.icon !== Phone ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg group cursor-pointer"
                >
                  <info.icon className="h-6 w-6 text-indigo-600 mb-3 group-hover:text-indigo-800 transition-colors" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600 group-hover:text-indigo-600 transition-colors">
                    {Array.isArray(info.value) ? (
                      info.value.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < info.value.length - 1 && <br />}
                        </span>
                      ))
                    ) : (
                      info.value
                    )}
                  </p>
                  <p className="text-sm text-indigo-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {info.hoverText} →
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
