import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white mt-auto border-t border-accent-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              TianoShield
            </h3>
            <p className="text-gray-400">
              Advancing firmware security through innovative research.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/deliverables" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Deliverables
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-accent-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.uccs.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  University of Colorado Colorado Springs
                </a>
              </li>
              <li>
                <a 
                  href="https://www.purdue.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  Purdue University
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TianoShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;