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
            Open-Source
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            All software artifacts are available as open-source software at <a href="https://github.com/TianoShield">https://github.com/TianoShield</a>.
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-full text-sm font-semibold">
           Publications
          </div>
          <ul>
          <li><a href="https://doi.org/10.1109/SP63933.2026.00163">SoK: All You Ever Wanted to Know About Bootloader Security but Were Afraid to Ask</a></li>
          </ul>
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
