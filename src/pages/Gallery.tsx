import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';


import image4 from '../assets/gallery/image4.jpg'; 
import image1 from '../assets/gallery/image1.jpeg'; 


const images = [
  {
    url: image4,
  },
  {
    url: image1,
  },
  {
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    caption: 'Garden View Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    caption: 'Safari Experience',
  },
  {
    url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    caption: 'Wildlife Encounters',
  },
  {
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    caption: 'Restaurant',
  },
  {
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    caption: 'Outdoor Pool',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600">Experience the beauty of our guest house through pictures</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="fixed top-4 right-4 z-[60]">
              <motion.button
                className="bg-black/50 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-8">
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
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
                  src={images[selectedImage].url}
                  alt={images[selectedImage].caption}
                  className="max-h-[80vh] mx-auto"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {images[selectedImage].caption}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;