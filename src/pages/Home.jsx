import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-20 relative overflow-hidden circuit-bg">
        {/* Animated background effects */}
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        <div className="animated-grid"></div>
        <div className="hex-pattern"></div>
        
        {/* Particle container */}
        <div className="particle-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Data flow lines */}
        <div className="data-flow" style={{ top: '20%' }}></div>
        <div className="data-flow" style={{ top: '60%', animationDelay: '1.5s' }}></div>
        <div className="data-flow-vertical" style={{ left: '15%', animationDelay: '0.5s' }}></div>
        <div className="data-flow-vertical" style={{ left: '85%', animationDelay: '2s' }}></div>

        {/* Circuit nodes */}
        <div className="circuit-node" style={{ top: '15%', left: '10%' }}></div>
        <div className="circuit-node" style={{ top: '25%', left: '90%', animationDelay: '0.5s' }}></div>
        <div className="circuit-node" style={{ top: '70%', left: '20%', animationDelay: '1s' }}></div>
        <div className="circuit-node" style={{ top: '80%', left: '80%', animationDelay: '1.5s' }}></div>

        {/* Scanning line */}
        <div className="scan-line"></div>
        
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
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold relative overflow-hidden">
                <div className="holo-effect"></div>
                🛡️ Rapid Bug Triage
              </span>
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold relative overflow-hidden">
                <div className="holo-effect"></div>
                	☸ Security Analyses
              </span>
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold relative overflow-hidden">
                <div className="holo-effect"></div>
                🔒 Memory-Safe Variants
              </span>
              <span className="px-6 py-3 bg-dark-800/50 backdrop-blur-sm border border-accent-500/30 rounded-full text-lg font-semibold relative overflow-hidden">
                <div className="holo-effect"></div>
                🤖 Streamlined Bug Handling 
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all shadow-lg relative overflow-hidden group"
              >
                <div className="holo-effect"></div>
                <span className="relative z-10">About</span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-accent-500 text-accent-400 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all relative overflow-hidden group"
              >
                <div className="holo-effect"></div>
                <span className="relative z-10">Get in Touch</span>
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
                We focus on expediting and effectively resolving existing bug reports in the bug repository
by prioritizing them, creating necessary triaging information, and proactively patching them.
              </p>
            </div>
            
            {/* Security analyses */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-primary-100">
              <div className="text-5xl mb-4 text-center">☸</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Security Analyses</h3>
              <p className="text-gray-700 text-center">
                We will develop the necessary tools and techniques to support dynamic and static analyses, enabling automated vulnerability detection for individual components.
              </p>
            </div>

            {/* Efficiency Goals Card */}
            <div className="bg-gradient-to-br from-accent-50 via-white to-primary-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-accent-100">
              <div className="text-5xl mb-4 text-center">🔒</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Memory-Safe Variants</h3>
              <p className="text-gray-700 text-center">
                We improve the security posture of EDK II by enabling retroactive and proactive tech
                niques to detect and prevent memory corruption and privilege escalation vulnerabilities. Also, we offer memory-safe EDK II variants. 
              </p>
            </div>

            {/* Development Plan Card */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-primary-100">
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">Streamlined Bug Handling</h3>
              <p className="text-gray-700 text-center">
                We focus on improving the overall software maintenance aspects of the TianoCore repositories, such as EDK II. Specifically, we are interested in the bug-handling process and the DevOps/DevSecOps practices (for example, the CI/CD pipelines).   
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
