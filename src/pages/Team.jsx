import React, { useState } from 'react';
import { FaGlobe, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Team = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  // Implementation Teams Data - WITH profession
  const implementationTeam = [
    {
      id: 1,
      name: 'Dr. Armin Moin',
      role: 'Principal Investigator',
      profession: 'Assistant Professor',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: 'https://faculty.uccs.edu/amoin/'
    },
    {
      id: 2,
      name: 'Dr. Aravind Machiry',
      role: 'Co-Principal Investigator',
      profession: 'Assistant Professor',
      location: 'Purdue University, Indiana, USA',
      website: 'https://www.cerias.purdue.edu/site/people/faculty/view/3304'
    },
    {
      id: 3,
      name: 'Dr. Terrance E. Boult',
      role: 'Senior Advisor',
      profession: 'Distinguished Professor',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: 'https://eas.uccs.edu/departments/computer-science/directory/faculty/terrance-boult'
    },
    {
      id: 4,
      name: 'Sourag Cherupatyamoolayil',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 5,
      name: 'Srihari Danduri',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 6,
      name: 'Connor Glosner',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 7,
      name: 'Devin Haggitt',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: ''
    },
    {
      id: 8,
      name: 'Samuel Poarch',
      role: 'Research Team',
      profession: 'Under-Graduate Research Assistant',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: ''
    },
    {
      id: 9,
      name: 'Neelesh Reddybattula',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: ''
    },
    {
      id: 10,
      name: 'Ming Shen',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 11,
      name: 'Nazanin Siavash',
      role: 'Research Team',
      profession: 'Graduate Research Assistant',
      location: 'University of Colorado Colorado Springs, Colorado, USA',
      website: ''
    },
    // Add more team members here
  ];

  // Consultants & Collaborators Data - ONLY name and website
  const consultants = [
    {
      name: 'American Megatrends Inc (AMI)',
      website: 'https://www.ami.com/'
    },
    {
      name: 'ARM',
      website: 'https://www.arm.com/'
    },
    {
      name: 'Binarly',
      website: 'https://www.binarly.io/'
    },
    {
      name: 'Framework Computer LLC',
      website: 'https://frame.work/'
    },
    {
      name: 'GitHub Security',
      website: 'https://github.com/'
    },
    {
      name: 'Insyde',
      website: 'https://www.insyde.com/'
    },
    {
      name: 'Intel Corporation',
      website: 'https://www.intel.com/content/www/us/en/homepage.html'
    },
    {
      name: 'Lenovo',
      website: 'https://www.lenovo.com/us/en/'
    },
    {
      name: 'Phoenix Technologies',
      website: 'https://phoenixtech.com/'
    },
    {
      name: 'UEFI-RS',
      website: 'https://github.com/rust-osdev/uefi-rs'
    },

    // Add more consultants here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-blue-100">
            Meet the people behind TianoShield
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('implementation')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'implementation'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Implementation Teams ({implementationTeam.length})
            </button>
            <button
              onClick={() => setActiveTab('consultants')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'consultants'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Consultants & Collaborators ({consultants.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Implementation Teams Tab */}
        {activeTab === 'implementation' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {implementationTeam.map((member, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-blue-600 font-medium">
                          { member.id == 1 || member.id == 2?(<FaBriefcase className="mr-2 flex-shrink-0" />):<></>}
                          <span>{member.role}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <span className="mr-2">•</span>
                          <span className="font-medium">{member.profession}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                          <span>{member.location}</span>
                        </div>
                      </div>
                    </div>
                    {member.website ? (
                      <div className="flex-shrink-0">
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <FaGlobe className="mr-2" />
                        Visit Website
                      </a>
                    </div>
                    ):<></>}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultants & Collaborators Tab */}
        {activeTab === 'consultants' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {consultants.map((consultant, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {consultant.name}
                      </h3>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <a
                        href={consultant.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        <FaGlobe className="mr-2" />
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Team;