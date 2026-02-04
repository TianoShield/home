import React, { useState } from 'react';
import { FaGlobe, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Team = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  // Implementation Teams Data
  const implementationTeam = [
    {
      id: 1,
      name: 'Dr. Armin Moin',
      role: 'Principal Investigator (PI)',
      profession: 'Assistant Professor',
      location: 'University of Colorado Colorado Springs (UCCS), Colorado, USA',
      website: 'https://faculty.uccs.edu/amoin/'
    },
    {
      id: 2,
      name: 'Dr. Aravind Machiry',
      role: 'Co-PI',
      profession: 'Assistant Professor',
      location: 'Purdue University, Indiana, USA',
      website: 'https://machiry.github.io/'
    },
    {
      id: 3,
      name: 'Dr. Terrance E. Boult',
      role: 'Senior Advisor',
      profession: 'Distinguished Professor',
      location: 'UCCS, Colorado, USA',
      website: 'https://eas.uccs.edu/departments/computer-science/directory/faculty/terrance-boult'
    },
    {
      id: 4,
      name: 'Sourag Cherupatyamoolayil',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 5,
      name: 'Srihari Danduri',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 6,
      name: 'Connor Glosner',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 7,
      name: 'Devin Haggitt',
      profession: 'Graduate Research Assistant',
      location: 'UCCS, Colorado, USA',
      website: ''
    },
    {
      id: 8,
      name: 'Samuel Poarch',
      profession: 'Undergraduate Research Assistant',
      location: 'UCCS, Colorado, USA',
      website: ''
    },
    {
      id: 9,
      name: 'Neelesh Reddybattula',
      profession: 'Graduate Research Assistant',
      location: 'UCCS, Colorado, USA',
      website: ''
    },
    {
      id: 10,
      name: 'Ming Shen',
      profession: 'Graduate Research Assistant',
      location: 'Purdue University, Indiana, USA',
      website: ''
    },
    {
      id: 11,
      name: 'Nazanin Siavash',
      profession: 'Graduate Research Assistant',
      location: 'UCCS, Colorado, USA',
      website: ''
    },
  ];

  // Key Collaborator & the Open-Source Ecosystem (OSE) Team Lead
  const keyCollaborator = [
    {
      name: 'Intel Corporation',
      website: 'https://www.intel.com/content/www/us/en/homepage.html'
    }
  ];

  // Consultant
  const consultant = [
    {
      name: 'Binarly',
      website: 'https://www.binarly.io/'
    }
  ];

  // Other Collaborators
  const otherCollaborators = [
    {
      name: 'American Megatrends Inc (AMI)',
      website: 'https://www.ami.com/'
    },
    {
      name: 'ARM',
      website: 'https://www.arm.com/'
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
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
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Implementation Teams ({implementationTeam.length})
            </button>
            <button
              onClick={() => setActiveTab('consultants')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'consultants'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Consultants & Collaborators ({consultant.length + keyCollaborator.length + otherCollaborators.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Implementation Teams Tab */}
        {activeTab === 'implementation' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary-500">
            <div className="divide-y divide-gray-200">
              {implementationTeam.map((member) => (
                <div
                  key={member.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      
                      <div className="space-y-2">
                        {member.role && (
                          <div className="flex items-center text-primary-600 font-medium">
                            {(member.id<3) ? (<FaBriefcase className="mr-2 flex-shrink-0" />):<></>}
                            <span>{member.role}</span>
                          </div>
                        )}
                        
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
                    
                    {member.website && (
                      <div className="flex-shrink-0">
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all"
                        >
                          <FaGlobe className="mr-2" />
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultants & Collaborators Tab */}
        {activeTab === 'consultants' && (
          <div className="space-y-12">
            {/* Key Collaborator Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Collaborator & the Open-Source Ecosystem (OSE) Team Lead
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-accent-500">
                <div className="divide-y divide-gray-200">
                  {keyCollaborator.map((collab, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900">
                            {collab.name}
                          </h4>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <a
                            href={collab.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all text-sm"
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
            </div>

            {/* Consultant Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Consultant
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-accent-500">
                <div className="divide-y divide-gray-200">
                  {consultant.map((cons, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900">
                            {cons.name}
                          </h4>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <a
                            href={cons.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all text-sm"
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
            </div>

            {/* Other Collaborators Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Other Collaborators
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-accent-500">
                <div className="divide-y divide-gray-200">
                  {otherCollaborators.map((collab, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900">
                            {collab.name}
                          </h4>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <a
                            href={collab.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all text-sm"
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;