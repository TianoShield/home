import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-20 relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                TianoShield
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Enhancing the UEFI firmware security by supporting the TianoCore open-source ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold">
                🛡️ Rapid Bug Triage
              </span>
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold">
                🔒 Memory-Safe Variants
              </span>
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold">
                🤖 Streamlined Bug Handling 
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all shadow-lg"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-accent-500 text-accent-400 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all"
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-primary-100">
              <div className="text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Rapid Bug Triage</h3>
              <p className="text-gray-700 text-center">
                To significantly reduce bug resolution time by at least 2X the current baseline 
                through rapid triaging of existing reports and streamlined bug handling workflows.
              </p>
            </div>

            {/* Efficiency Goals Card */}
            <div className="bg-gradient-to-br from-accent-50 via-white to-primary-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-accent-100">
              <div className="text-5xl mb-4 text-center">🔒</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Memory-Safe Variants</h3>
              <p className="text-gray-700 text-center">
                We aim to automatically produce semantic patches for over 70% of overall patches 
                and 90% of security patches, while reducing manual testing effort by over 50%.
              </p>
            </div>

            {/* Development Plan Card */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-primary-100">
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Streamlined Bug Handling</h3>
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
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-primary-500">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bug Detection</h4>
              <p className="text-gray-600 text-sm">
                Advanced automated bug detection and reporting systems
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-accent-500">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Triage</h4>
              <p className="text-gray-600 text-sm">
                Streamlined workflows for faster issue resolution
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-primary-500">
              <div className="text-4xl mb-3">🔐</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Security Patches</h4>
              <p className="text-gray-600 text-sm">
                Automated semantic patch generation for security issues
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-accent-500">
              <div className="text-4xl mb-3">∞</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CI/CD Integration</h4>
              <p className="text-gray-600 text-sm">
                Automated testing and continuous integration pipelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-500/20">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                2X
              </div>
              <div className="text-gray-300">Faster Bug Resolution</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-500/20">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                70%
              </div>
              <div className="text-gray-300">Auto-Generated Patches</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-500/20">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                90%
              </div>
              <div className="text-gray-300">Security Patch Coverage</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-accent-500/20">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                50%
              </div>
              <div className="text-gray-300">Reduced Testing Effort</div>
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
            Join us in advancing firmware security. We're always looking for collaborators and contributors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
                to="/team"
                className="inline-block px-8 py-3 bg-transparent border-2 border-accent-500 text-accent-400 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all"
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