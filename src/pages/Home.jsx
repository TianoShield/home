import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TianoShield
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Enhancing the UEFI firmware security by supporting the TianoCore open-source ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold">
                🛡️ Rapid Bug Triage
              </span>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold">
                🔒 Memory-Safe Variants
              </span>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold">
                🤖 Streamlined Bug Handling 
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Rapid Bug Triage</h3>
              <p className="text-gray-700 text-center">
                To significantly reduce bug resolution time by at least 2X the current baseline 
                through rapid triaging of existing reports and streamlined bug handling workflows.
              </p>
            </div>

            {/* Efficiency Goals Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Memory-Safe Variants</h3>
              <p className="text-gray-700 text-center">
                We aim to automatically produce semantic patches for over 70% of overall patches 
                and 90% of security patches, while reducing manual testing effort by over 50%.
              </p>
            </div>

            {/* Development Plan Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Streamlined Bug Handling</h3>
              <p className="text-gray-700 text-center">
                Focused on enabling deep security analyses, memory safe variants, and 
                integrating automated CI pipelines to harden the EDK II ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bug Detection</h4>
              <p className="text-gray-600 text-sm">
                Advanced automated bug detection and reporting systems
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Triage</h4>
              <p className="text-gray-600 text-sm">
                Streamlined workflows for faster issue resolution
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔐</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Security Patches</h4>
              <p className="text-gray-600 text-sm">
                Automated semantic patch generation for security issues
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🧪</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CI/CD Integration</h4>
              <p className="text-gray-600 text-sm">
                Automated testing and continuous integration pipelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2X</div>
              <div className="text-blue-100">Faster Bug Resolution</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Auto-Generated Patches</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">90%</div>
              <div className="text-blue-100">Security Patch Coverage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Reduced Testing Effort</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interested in our Research?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/team"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;