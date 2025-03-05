import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 7.2906, // Replace with actual coordinates
    lng: 80.6337,
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with us for bookings and inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Phone className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+94 75 044 7969 <br/> +94 77 242 0455</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Mail className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">shehanguesthouse@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <MapPin className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">No. 106, Old Buttala Road, Kataragama.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <MessageSquare className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600">+94 71 762 4002</p>
              </motion.div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;