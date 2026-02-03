import React from 'react';
import { FaBook } from 'react-icons/fa';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <FaBook className="text-6xl text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're compiling useful resources including papers, tools, datasets,
            and documentation. Check back soon!
          </p>
          <div className="text-gray-500 text-sm">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;