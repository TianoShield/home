import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">TianoShield</h3>
            <p className="text-gray-400">
              Advancing firmware security through innovative research.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/deliverables" className="text-gray-400 hover:text-white">
                  Deliverables
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="https://www.uccs.edu/" target="_blank" className="text-gray-400 text-md hover:text-white">
                University of Colorado Colorado Springs
                </Link>
              </li>
              <li>
                <Link to="https://www.purdue.edu/" target="_blank" className="text-gray-400 text-md hover:text-white">
                Purdue University
                </Link>
              </li>
            </ul>
            {/* <a 
              href="mailto:amoin@uccs.edu"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              amoin@uccs.edu
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TianoShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;