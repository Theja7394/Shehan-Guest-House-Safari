import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Rooms', href: '/rooms' },
    { name: 'Safari Tours', href: '/safari' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: ['+94 75 044 7969', '+94 77 242 0455', '+94 71 762 4002 (Whatsapp)'] },
    { icon: Mail, text: 'shehanguesthouse@gmail.com' },
    { icon: MapPin, text: 'No. 106, Old Buttala Road, Kataragama.' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/shehanguest/?_rdc=1&_rdr#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Shehan Guest House Logo" className="h-12 w-auto mr-2" />
              <span className="text-xl font-bold">Shehan Guest House</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Experience luxury and adventure in the heart of nature. Your perfect safari getaway awaits.
              <br/>
              <br/>
              <b>
              Arrival Time
              <br/>
            Check-in 2 PM
            <br/>
            Check-out 12 PM
            </b>
            </p>
              
              
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <info.icon className="h-5 w-5 text-indigo-400 mr-2 mt-1" />
                  <div className="text-gray-400">
                    {Array.isArray(info.text) ? info.text.map((line, i) => <p key={i}>{line}</p>) : <p>{info.text}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shehan Guest House. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;