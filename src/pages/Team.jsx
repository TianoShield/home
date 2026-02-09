import React, { useState } from 'react';
import { FaGlobe, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone, FaMobileAlt } from 'react-icons/fa';

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

  // Open-Source Ecosystem (OSE) Team Lead
  const keyCollaborator = [
    {
      name: 'TianoCore Community',
      link1: 'Website',
      website1: 'https://www.tianocore.org/',
      link2: 'Repository',
      website2: 'https://github.com/tianocore',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    }
  ];

  // Consultant
  const consultant = [
    {
      name: 'Binarly Inc.',
      link1: 'Website',
      website1: 'https://www.binarly.io/',
      link2: '',
      website2: '',
      contactPerson: 'Alex Matrosov',
      degree: '',
      position: 'CEO and Founder',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    }
  ];

  // Other Collaborators
  const otherCollaborators = [
    {
      name: 'American Megatrends Inc. (AMI)',
      link1: 'Website',
      website1: 'https://www.ami.com/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Arm',
      link1: 'Website',
      website1: 'https://www.arm.com/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Framework Computer LLC',
      link1: 'Website',
      website1: 'https://frame.work/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'GitHub Security',
      link1: 'Website',
      website1: 'https://github.com/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Insyde Software',
      link1: 'Website',
      website1: 'https://www.insyde.com/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Intel Corporation',
      link1: 'Website',
      website1: 'https://www.intel.com/content/www/us/en/homepage.html',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Lenovo',
      link1: 'Website',
      website1: 'https://www.lenovo.com/us/en/',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
    {
      name: 'Phoenix Technologies',
      link1: 'Website',
      website1: 'https://phoenixtech.com/',
      link2: '',
      website2: '',
      contactPerson: 'Richard \'Dick\' Wilkins',
      degree: 'Ph.D.',
      position: 'Principal Technology Liaison',
      email: 'Dick.Wilkins@phoenixtech.com',
      phone1: '+1 (408) 570-1094',
      phone1Label: 'Business',
      phone2: '+1 (425) 503-4639',
      phone2Label: 'Cell'
    },
    {
      name: 'UEFI-RS',
      link1: 'Website',
      website1: 'https://github.com/rust-osdev/uefi-rs',
      link2: '',
      website2: '',
      contactPerson: '',
      degree: '',
      position: '',
      email: '',
      phone1: '',
      phone1Label: '',
      phone2: '',
      phone2Label: ''
    },
  ];

  // Component to render collaborator/consultant cards
  const CollaboratorCard = ({ collaborator, index }) => (
    <div
      key={index}
      className="p-6 hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-col gap-4">
        {/* Organization Name */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {collaborator.name}
            </h4>

            {/* Contact Person Details */}
            {collaborator.contactPerson && (
              <div className="space-y-3 mt-4 pt-4 border-t border-gray-200">
                {/* Name and Degree */}
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {collaborator.contactPerson}
                    {collaborator.degree && (
                      <span className="text-gray-600 font-normal">, {collaborator.degree}</span>
                    )}
                  </p>
                </div>

                {/* Position */}
                {collaborator.position && (
                  <div className="flex items-center text-gray-700">
                    <FaBriefcase className="mr-2 flex-shrink-0 text-primary-500" />
                    <span>{collaborator.position}</span>
                  </div>
                )}

                {/* Email */}
                {collaborator.email && (
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-2 flex-shrink-0 text-primary-500" />
                    <a
                      href={`mailto:${collaborator.email}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {collaborator.email}
                    </a>
                  </div>
                )}

                {/* Phone 1 */}
                {collaborator.phone1 && (
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="mr-2 flex-shrink-0 text-primary-500" />
                    <a
                      href={`tel:${collaborator.phone1}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {collaborator.phone1}
                    </a>
                    {collaborator.phone1Label && (
                      <span className="ml-2 text-sm text-gray-500">
                        ({collaborator.phone1Label})
                      </span>
                    )}
                  </div>
                )}

                {/* Phone 2 */}
                {collaborator.phone2 && (
                  <div className="flex items-center text-gray-700">
                    <FaMobileAlt className="mr-2 flex-shrink-0 text-primary-500" />
                    <a
                      href={`tel:${collaborator.phone2}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {collaborator.phone2}
                    </a>
                    {collaborator.phone2Label && (
                      <span className="ml-2 text-sm text-gray-500">
                        ({collaborator.phone2Label})
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Website Buttons */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2">
            {collaborator.website1 && (
              <a
                href={collaborator.website1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all text-sm"
              >
                <FaGlobe className="mr-2" />
                {collaborator.link1 || 'Website'}
              </a>
            )}
            {collaborator.website2 && (
              <a
                href={collaborator.website2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-md hover:from-accent-600 hover:to-primary-600 transition-all text-sm"
              >
                <FaGlobe className="mr-2" />
                {collaborator.link2 || 'Link'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

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
              Implementation Team ({implementationTeam.length})
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
                            {(member.id < 3) ? (<FaBriefcase className="mr-2 flex-shrink-0" />) : <></>}
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
               Open-Source Ecosystem (OSE) Team Lead
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-accent-500">
                <div className="divide-y divide-gray-200">
                  {keyCollaborator.map((collab, index) => (
                    <CollaboratorCard key={index} collaborator={collab} index={index} />
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
                    <CollaboratorCard key={index} collaborator={cons} index={index} />
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
                    <CollaboratorCard key={index} collaborator={collab} index={index} />
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