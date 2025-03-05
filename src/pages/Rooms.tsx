import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Wifi, Coffee, Bath, Wind, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import { BookingFormData } from '../types';

const rooms = [
  {
    id: '1',
    type: 'AC',
    name: 'Luxury Suite',
    price: 150,
    description: 'Spacious air-conditioned suite with modern amenities and a stunning view.',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    amenities: ['Air Conditioning', 'Free WiFi', 'Mini Bar', 'Private Bathroom', 'Room Service'],
    maxOccupancy: 3,
  },
  {
    id: '2',
    type: 'Non-AC',
    name: 'Garden View Room',
    price: 80,
    description: 'Comfortable room with natural ventilation and garden views.',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    amenities: ['Fan', 'Free WiFi', 'Private Bathroom', 'Garden Access'],
    maxOccupancy: 2,
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 1,
    roomType: 'AC',
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request sent successfully!');
    setSelectedRoom(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Rooms</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{room.name}</h2>
                  <span className="text-xl font-semibold text-indigo-600">
                    ${room.price}/night
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Book {selectedRoom.name}</h3>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in</label>
                  <DatePicker
                    selected={bookingData.checkIn}
                    onChange={(date) => setBookingData({ ...bookingData, checkIn: date })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out</label>
                  <DatePicker
                    selected={bookingData.checkOut}
                    onChange={(date) => setBookingData({ ...bookingData, checkOut: date })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                  >
                    Confirm Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Rooms;