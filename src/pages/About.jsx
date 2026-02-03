import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TianoShield</h1>
          <p className="text-xl text-blue-100">
            Enhancing security in the TianoCore ecosystem
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              A firmware program is embedded in non-volatile storage on a computer's motherboard. It controls how our
              computing devices, ranging from cloud servers to resource-constrained Internet of Things (IoT) platforms,
              start up their boot processes, and interact with their operating systems after they are powered on.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong>Unified Extensible Firmware Interface (UEFI)</strong> is an open standard for computing system firmware architecture
              specification. The TianoCore community maintains reference implementations of various components
              of the UEFI specification, for example, EDK II. This has resulted in a vibrant and mature open-source
              ecosystem with a significant impact on U.S. national security, safety, and privacy.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Given the widespread use of the TianoCore repositories, security vulnerabilities may
              be leveraged by U.S. adversaries and other malicious actors to develop exploits that could cause potentially
              massive-scale harm to U.S. citizens and businesses, for example, as part of the Advanced Persistent Threat
              (APT) activities.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-gray-800 font-semibold text-lg">
                TianoShield aims to focus on enhancing the state of security of the TianoCore ecosystem
                and improving its overall open-source development process and practices.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through innovative bug reporting, rapid triage methodologies, and automated patch generation,
              we strive to make firmware development more secure and efficient for the entire community.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Objectives</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Reduce bug resolution time by at least 2X through rapid triaging</li>
              <li>Automatically generate semantic patches for 70%+ of overall patches</li>
              <li>Achieve 90%+ coverage for security patches</li>
              <li>Reduce manual testing effort by over 50%</li>
              <li>Enable deep security analyses and memory-safe variants</li>
              <li>Integrate automated CI pipelines to harden the EDK II ecosystem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;