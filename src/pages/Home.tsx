import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Star, Users, MapPin, Camera, Coffee, Wifi, Award, Shield, Clock, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

const features = [
  {
    name: 'Premium Accommodation',
    description: 'Experience luxury in our thoughtfully designed AC and Non-AC rooms, each crafted for ultimate comfort.',
    icon: Star,
  },
  {
    name: 'Expert Safari Guides',
    description: 'Join our experienced guides for unforgettable wildlife adventures and photography sessions.',
    icon: Users,
  },
  {
    name: 'Strategic Location',
    description: 'Perfectly situated near wildlife sanctuaries while maintaining easy accessibility to urban amenities.',
    icon: MapPin,
  },
];

const stats = [
  { number: '1000+', label: 'Happy Guests', icon: Award },
  { number: '150+', label: 'Safari Tours', icon: Sun },
  { number: '24/7', label: 'Support', icon: Clock },
  { number: '100%', label: 'Satisfaction', icon: Shield },
];

const amenities = [
  {
    name: 'Professional Photography',
    description: 'Capture your safari moments with our professional photography services and equipment rentals',
    icon: Camera,
  },
  {
    name: 'Fine Dining',
    description: 'Savor authentic local cuisine and international dishes at our in-house restaurant',
    icon: Coffee,
  },
  {
    name: 'Modern Connectivity',
    description: 'Stay connected with high-speed fiber internet throughout the property',
    icon: Wifi,
  },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* Stats Section */}
      <ScrollReveal width="100%">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto text-indigo-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal width="100%">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Experience Excellence
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Luxury Meets Adventure
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Discover the perfect blend of comfort and wilderness at Shehan Guest House & Safari, where every stay becomes an unforgettable journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.name}>
                  <motion.div
                    className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </motion.div>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <ScrollReveal width="100%">
        <div className="relative bg-white py-16 sm:py-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    className="object-cover w-full h-96 transform transition-transform duration-300 hover:scale-105"
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury accommodation"
                  />
                </motion.div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Where Comfort Meets Nature
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg leading-7">
                    Nestled in the heart of wildlife territory, our guest house offers an exceptional blend of luxury and natural beauty. Each room is thoughtfully designed to provide modern comforts while maintaining an authentic connection to the surrounding wilderness.
                  </p>
                  <p className="text-lg leading-7">
                    Whether you're an avid wildlife photographer, adventure enthusiast, or seeking a peaceful retreat, our dedicated staff ensures your stay exceeds expectations. Experience personalized service, expert guidance, and memorable moments that last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Amenities Section */}
      <ScrollReveal width="100%">
        <div className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Premium Amenities
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Carefully curated services to enhance your stay
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity, index) => (
                <ScrollReveal key={amenity.name}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="pt-6"
                  >
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                            <amenity.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {amenity.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal width="100%">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to Experience Luxury?</span>
                <span className="block text-indigo-200">Book your perfect getaway today.</span>
              </h2>
            </motion.div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/rooms"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;