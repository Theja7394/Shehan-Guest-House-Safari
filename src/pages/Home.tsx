import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GoogleReviews from '../components/GoogleReview'; 
import { MapPin, Award, Shield, Clock, Sun, Mountain, Car, ParkingSquare, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const places = [
  {
    name: 'Kataragama Kiriwehera (100m)',
    description: 'A sacred Buddhist stupa believed to have been built by King Mahasena in the 6th century BCE. It is an important pilgrimage site for Buddhists.',
    icon: MapPin,
  },
  {
    name: 'Ruhunu Maha Kataragama Dewala (200m)',
    description: 'A revered Hindu and Buddhist shrine dedicated to Lord Kataragama (Murugan), attracting devotees from various religious backgrounds.',
    icon: MapPin,
  },
  {
    name: 'Wadasiti Kanda (2km)',
    description: 'A small mountain associated with spiritual significance, believed to be a meditation site of Lord Kataragama’s devotees.',
    icon: MapPin,
  },
  {
    name: 'Yala Entrance (12km)',
    description: 'The gateway to Yala National Park, Sri Lanka’s most famous wildlife sanctuary, known for its leopards, elephants, and diverse flora and fauna.',
    icon: MapPin,
  },
  {
    name: 'Sithulpahuwa Rock Temple (18km)',
    description: 'An ancient Buddhist monastery and pilgrimage site, offering stunning views and historical significance as a meditation retreat for monks.',
    icon: MapPin,
  },
  {
    name: 'Sella Kataragama City (3km)',
    description: 'A spiritual town with shrines and temples dedicated to Lord Ganesha and other deities, often visited by pilgrims before reaching Kataragama.',
    icon: MapPin,
  },
];

const stats = [
  { number: '1000+', label: 'Happy Guests', icon: Award },
  { number: '150+', label: 'Safari Tours', icon: Sun },
  { number: '24/7', label: 'Support', icon: Clock },
  { number: '100%', label: 'Satisfaction', icon: Shield },
];

const Facilities = [
  {
    name: 'Meals',
    description: 'Capture your safari moments with our professional photography services and equipment rentals',
    icon: Utensils,
  },
  {
    name: 'Parking',
    description: 'Savor authentic local cuisine and international dishes at our in-house restaurant',
    icon: ParkingSquare,
  },
  {
    name: 'Taxi Services',
    description: 'Stay connected with high-speed fiber internet throughout the property',
    icon: Car,
  },
  {
    name: 'Yala Safari',
    description: 'Stay connected with high-speed fiber internet throughout the property',
    icon: Mountain,
  },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Stats Section */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-indigo-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
        {/* Image Section */}

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
                 About Us
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg leading-7">
                  The Guest House is located 100m from kiriwehera in the scenic landscape of the Kataragama pooja ground, three and a half hours from Colombo.You can reach the guest house through multiple transfer options, enquire with our team to create a tailored solution for you.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      

      {/* What's Nearby Section */}
      <motion.div 
        className="py-24 bg-gradient-to-b from-white to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Experience Excellence
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What's Nearby
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Stay at Shehan Guest House & Safari and explore the best of Kataragama.
            </p>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            {places.map((place, index) => (
              <motion.div
                key={place.name}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <place.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {place.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {place.description}
                </dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* What Our Guests Say Section */}
      <motion.div 
        className="bg-white py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews />
        </div>
      </motion.div>

      {/* Facilities Section */}
      <motion.div 
        className="bg-white py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Enjoy a wealth of amenities at Shehan Guest House & Safari,<br /> where our facilities cater to your every need, promising a delightful and comfortable stay.
            </p>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {Facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <facility.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {facility.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-indigo-600 to-indigo-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Home;
