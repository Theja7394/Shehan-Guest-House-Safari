import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight, X, Pause, Play } from 'lucide-react';
import toast from 'react-hot-toast';
import { BookingFormData } from '../types';

// Define the Room type
type Room = {
  id: string;
  type: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  maxOccupancy: number;
};

const rooms: Room[] = [
  {
    id: '1',
    type: 'A/C or Non A/C',
    name: 'Deluxe Rooms',
    price: 150,
    description: 'Indulge in Shehan Guest House Deluxe Rooms - luxury redefined, ensuring a sophisticated and comfortable stay.',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Air Conditioning or Non Air Conditioning ', 'Only 5 Persons'],
    maxOccupancy: 3,
  },
  {
    id: '2',
    type: 'A/C or Non-AC',
    name: 'Standard Rooms',
    price: 80,
    description: 'Indulge in Shehan Guest House Standard Rooms - luxury redefined, ensuring a sophisticated and comfortable stay.',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928636598-26c2a617c04e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Air Conditioning or Non Air Conditioning', 'Only 5 Persons'],
    maxOccupancy: 2,
  },
  {
    id: '3',
    type: 'Non-AC',
    name: 'Bedrooms with Living Area',
    price: 80,
    description: 'Indulge in Shehan Guest House Bedrooms with Living Area - luxury redefined, ensuring a sophisticated and comfortable stay.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],    
    amenities: ['Air Conditioning or Non Air Conditioning', 'Only 5 Persons', 'Television'],
    maxOccupancy: 2,
  },
];

const AUTOPLAY_INTERVAL = 3000; // 3 seconds

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>(
    rooms.reduce((acc, room) => ({ ...acc, [room.id]: 0 }), {})
  );
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>(
    rooms.reduce((acc, room) => ({ ...acc, [room.id]: true }), {})
  );
  const [bookingData, setBookingData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 1,
    roomType: 'AC',
  });
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    rooms.forEach(room => {
      if (isPlaying[room.id]) {
        const interval = setInterval(() => {
          setCurrentImageIndexes(prev => ({
            ...prev,
            [room.id]: (prev[room.id] + 1) % room.images.length
          }));
        }, AUTOPLAY_INTERVAL);
        intervals.push(interval);
      }
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isPlaying]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request sent successfully!');
    setSelectedRoom(null);
    setShowBookingForm(false);
  };

  const togglePlayPause = (roomId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(prev => ({
      ...prev,
      [roomId]: !prev[roomId]
    }));
  };

  const openImageViewer = (room: Room, index: number) => {
    setSelectedRoom(room);
    setSelectedRoomImages(room.images);
    setCurrentImageIndexes(prev => ({ ...prev, [room.id]: index }));
    setShowImageViewer(true);
  };

  const handlePrevious = (roomId: string) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? rooms.find(r => r.id === roomId)!.images.length - 1 : prev[roomId] - 1
    }));
  };

  const handleNext = (roomId: string) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % rooms.find(r => r.id === roomId)!.images.length
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showImageViewer) return;
      if (selectedRoom) {
        if (e.key === 'ArrowLeft') handlePrevious(selectedRoom.id);
        if (e.key === 'ArrowRight') handleNext(selectedRoom.id);
      }
      if (e.key === 'Escape') setShowImageViewer(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showImageViewer, selectedRoom]);

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
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={currentImageIndexes[room.id]}
                      src={room.images[currentImageIndexes[room.id]]}
                      alt={room.name}
                      className="w-full h-64 object-cover cursor-pointer"
                      onClick={() => openImageViewer(room, currentImageIndexes[room.id])}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                    <button
                      onClick={(e) => togglePlayPause(room.id, e)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isPlaying[room.id] ? (
                        <Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white" />
                      )}
                    </button>
                    <div className="flex space-x-2">
                      {room.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentImageIndexes[room.id] === index ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndexes(prev => ({ ...prev, [room.id]: index }));
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
                  onClick={() => {
                    setSelectedRoom(room);
                    setShowBookingForm(true);
                  }}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showImageViewer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={() => setShowImageViewer(false)}
            >
              <div className="relative max-w-7xl mx-auto px-4 py-8">
                <motion.button
                  className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-50"
                  onClick={() => setShowImageViewer(false)}
                >
                  <X className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedRoom) handlePrevious(selectedRoom.id);
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext(selectedRoom?.id!);
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedRoomImages[currentImageIndexes[selectedRoom?.id!]]}
                    alt="Room view"
                    className="max-h-[80vh] mx-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showBookingForm && selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
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
                    onChange={(date) => date && setBookingData({ ...bookingData, checkIn: date })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out</label>
                  <DatePicker
                    selected={bookingData.checkOut ?? new Date()}
                    onChange={(date) => date && setBookingData({ ...bookingData, checkOut: date })}
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
                    onClick={() => setShowBookingForm(false)}
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