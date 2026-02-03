import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <FaCalendarAlt className="text-6xl text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're preparing our events calendar. Stay tuned for upcoming conferences,
            workshops, and presentations!
          </p>
          <div className="text-gray-500 text-sm">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;