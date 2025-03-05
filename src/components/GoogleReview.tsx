import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GoogleReviews = () => {
  const googleReviewLink = "https://g.page/r/your-google-business-id"; // Replace with your actual Google Business review link

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Read reviews from our valued guests or share your experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Sample Reviews - Replace with actual Google Reviews API integration */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Amazing experience! The safari tour was incredible, and the accommodation was top-notch. The staff went above and beyond to make our stay memorable."
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Guest"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">2 weeks ago</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Perfect location for wildlife enthusiasts! The rooms are comfortable and clean. The guides are knowledgeable and friendly. Will definitely return!"
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Guest"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                <p className="text-sm text-gray-500">1 month ago</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Outstanding hospitality! The food was delicious, and the staff made us feel at home. The safari experience was unforgettable."
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Guest"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Mike Johnson</p>
                <p className="text-sm text-gray-500">2 months ago</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Write a Review on Google
            <ExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;