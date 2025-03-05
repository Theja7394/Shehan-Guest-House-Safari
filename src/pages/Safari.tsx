import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';

const safariTours = [
  {
    id: '1',
    name: 'Morning Wildlife Safari',
    duration: '3 hours',
    price: 75,
    description: 'Experience the awakening wilderness and spot various wildlife species in their natural habitat.',
    images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    timing: ['6:00 AM', '9:00 AM'],
  },
  {
    id: '2',
    name: 'Evening Safari Adventure',
    duration: '4 hours',
    price: 90,
    description: 'Witness the magical sunset while exploring the wilderness and nocturnal wildlife.',
    images: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    timing: ['3:00 PM', '5:00 PM'],
  },
];

const Safari = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  const handleBooking = (tourId: string) => {
    toast.success('Safari tour booking request sent!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safari Adventures</h1>
          <p className="text-lg text-gray-600">Discover the wild with our expert guides</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safariTours.map((tour) => (
            <motion.div
              key={tour.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={tour.images[0]}
                  alt={tour.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                  <span className="flex items-center text-indigo-600 font-semibold">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {tour.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{tour.name}</h2>
                <p className="text-gray-600 mb-6">{tour.description}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>{tour.timing.join(' - ')}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBooking(tour.id)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  Book Safari Tour
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Safari;