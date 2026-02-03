import React from 'react';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Deliverables = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 border-t-4 border-primary-500">
          <div className="inline-block p-6 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6">
            <FaTools className="text-6xl text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring you information about our project deliverables.
            Check back soon!
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-full text-sm font-semibold">
            Coming soon...
          </div>
          
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;