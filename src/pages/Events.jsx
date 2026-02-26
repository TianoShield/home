import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaEnvelope, FaGlobe, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Events = () => {
  const [expandedEvents, setExpandedEvents] = useState({ 1: true });
  const [expandedSections, setExpandedSections] = useState({
    1: {
      about: true,
      callForTalks: true,
      program: true,
      committee: true,
    }
  });

  const toggleEvent = (eventId) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const toggleSection = (eventId, section) => {
    setExpandedSections(prev => ({
      ...prev,
      [eventId]: {
        ...prev[eventId],
        [section]: !prev[eventId]?.[section],
      }
    }));
  };

  const events = [
    {
      id: 1,
      shortName: 'FirmVuln26',
      fullName: 'International Workshop on Firmware Security Vulnerabilities',
      date: 'April 13th, 2026',
      time: '9 am – 5 pm',
      venue: 'VulnCon26',
      location: 'DoubleTree Resort by Hilton Hotel Paradise Valley, Scottsdale, Arizona, USA',
      projectWebsite: 'https://tianoshield.github.io/home',
      organizingCommittee: {
        chair: {
          role: 'Workshop Chair',
          name: 'Armin Moin',
          affiliation: 'University of Colorado Colorado Springs (UCCS), Colorado, USA',
        },
        coChair: {
          role: 'Workshop Co-Chair',
          name: 'Aravind Machiry',
          affiliation: 'Purdue University, Indiana, USA',
        },
      },
      programCommittee: [
        { name: 'Terrance E. Boult', affiliation: 'UCCS, Colorado, USA' },
        { name: 'Edhaya Chandran', affiliation: 'Arm, USA' },
        { name: 'Srihari Danduri', affiliation: 'Purdue University, Indiana, USA' },
        { name: 'Connor Glosner', affiliation: 'Purdue University, Indiana, USA' },
        { name: 'Tim Lewis', affiliation: 'Insyde Software, USA' },
        { name: 'Alex Matrosov', affiliation: 'Binarly, USA' },
        { name: 'Dick Wilkins', affiliation: 'Phoenix Technologies, USA' },
      ],
      about: `A firmware program is embedded in non-volatile storage on a computer's motherboard. It controls how computing devices, ranging from cloud servers to resource-constrained Internet of Things (IoT) platforms, start their boot processes and interact with their operating systems after power-on. The Unified Extensible Firmware Interface (UEFI) is an open standard for computing system firmware architecture specification. The TianoCore community maintains reference implementations of various components of the UEFI specification, for example, EDK II. This has resulted in a vibrant and mature Open-Source Ecosystem (OSE) with a significant impact on global security, safety, and privacy. Given the widespread use of the TianoCore repositories, security vulnerabilities may be leveraged by malicious actors and cyber-criminals to develop exploits that could cause potentially massive-scale harm to individuals, businesses, and the public sectors, including critical infrastructure. A recent $1.2M project (2025-2027) sponsored by the U.S. National Science Foundation (NSF), named TianoShield, aims to enhance the state of security of the TianoCore OSE and improve its overall open-source development process and practices. FirmVuln26 will focus on improvements, new results, and open problems in protecting the TianoCore OSE by using the TianoShield project as the anchor, while welcoming talks from other participants and stakeholders in the firmware world.`,
      callForTalks: {
        description: `If you are interested in delivering a talk at FirmVuln26, please email your proposed talk title and abstract (150-250 words) to the workshop Chair at`,
        email: 'amoin@uccs.edu',
        deadlineSubmission: 'March 20th, 2026',
        deadlineNotification: 'March 31st, 2026',
        additionalInfo: `3 PC members will review each proposal. Please specify the type of talk (e.g., technical, tutorial, tool demo, etc.) in your email. The overall theme of the workshop is Firmware Security (e.g., the UEFI Firmware security).`,
        topics: [
          'Consumer Workflows',
          'Vulnerability Metadata & Data Quality',
          'Regulations & Public Policy',
          'PSIRT Services & Operational Excellence',
          'Coordinated Vulnerability Disclosure & Researcher Engagement',
          'Enterprise & Vendor Collaboration',
          'Tooling & Automation',
          'Emerging Horizons',
        ],
      },
      program: [
        {
          time: '9:00 – 10:30 am',
          title: 'Welcome by the organizers and keynote talk',
          talks: [
            {
              title: 'All Models Are Wrong, Some Are Useful: Firmware-Aware Risk Scoring for Real-World Prioritization',
              speaker: 'Alex Matrosov',
              speakerTitle: 'CEO and Founder of Binarly Inc.',
              abstract: null,
              type: 'keynote',
            },
          ],
        },
        {
          time: '10:30 – 10:45 am',
          title: 'Break',
          isBreak: true,
        },
        {
          time: '10:45 am – 12:15 pm',
          title: 'Session 1',
          talks: [
            {
              title: "Meeting the NSA's \"Guidance for Managing UEFI Secure Boot\"",
              speaker: 'Kevin Davis',
              speakerTitle: 'Office of Security and Trust, Insyde Software',
              abstract: null,
              type: 'talk',
            },
            {
              title: 'TBA',
              speaker: '',
              speakerTitle: '',
              abstract: null,
              type: 'tba',
            },
            {
              title: 'TBA',
              speaker: '',
              speakerTitle: '',
              abstract: null,
              type: 'tba',
            },
          ],
        },
        {
          time: '12:15 – 1:30 pm',
          title: 'Break',
          isBreak: true,
        },
        {
          time: '1:30 – 3:00 pm',
          title: 'Session 2',
          talks: [
            {
              title: 'Firmware-Specific Security Guidelines',
              speaker: 'Tim Lewis',
              speakerTitle: 'CTO of Insyde Software',
              abstract: "How do you convince 600+ system firmware engineers that they could be the reason that a customer's platform gets hacked? This is the real problem for one of the companies that provides the kit used by companies producing hundreds of laptop and server models each year. The solution is to pare down the lists of theoretical attacks on firmware to the list that are most likely to be encountered in the day-to-day coding activities of these engineers, and help them recognize the vulnerability patterns. In this talk, we will discuss the industry trends and the seven high-risk technology areas where most of the weaknesses lie in production UEFI system firmware, and the rules that help engineers recognize them.",
              type: 'talk',
            },
            {
              title: 'BreakingBoot: The Shortcomings of Modern Software Testing Tools in EDK II and How to Improve Them',
              speaker: 'Connor Glosner',
              speakerTitle: 'Purdue University',
              abstract: null,
              type: 'talk',
            },
            {
              title: 'Using Artificial Intelligence (AI) to enhance the bug triage process in TianoCore (e.g., EDK II)',
              speaker: 'Nazanin Siavash',
              speakerTitle: 'University of Colorado Colorado Springs (UCCS)',
              abstract: null,
              type: 'talk',
            },
          ],
        },
        {
          time: '3:00 – 3:15 pm',
          title: 'Break',
          isBreak: true,
        },
        {
          time: '3:15 – 4:45 pm',
          title: 'Session 3 (Industry Panel)',
          talks: [],
        },
        {
          time: '4:45 – 5:00 pm',
          title: 'Closing',
          isBreak: true,
        },
      ],
      acknowledgement: `This event is organized as part of the TianoShield project, which is supported by the U.S. National Science Foundation (NSF) under Grant No. 2534021. Any opinions, findings, conclusions, or recommendations expressed in this event are those of the authors/speakers and do not necessarily reflect the views of the NSF.`,
    },
  ];

  const SectionToggle = ({ label, eventId, sectionKey, children }) => (
    <div className="mb-6">
      <button
        onClick={() => toggleSection(eventId, sectionKey)}
        className="w-full flex items-center justify-between text-left text-xl font-bold text-gray-900 mb-3 group"
      >
        <span className="group-hover:text-primary-600 transition-colors">{label}</span>
        {expandedSections[eventId]?.[sectionKey]
          ? <FaChevronUp className="text-primary-500 flex-shrink-0" />
          : <FaChevronDown className="text-primary-500 flex-shrink-0" />}
      </button>
      {expandedSections[eventId]?.[sectionKey] && (
        <div>{children}</div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Workshops, conferences, and community events associated with the TianoShield project.
          </p>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary-500">

            {/* Event Title Banner — always visible, click to collapse */}
            <button
              onClick={() => toggleEvent(event.id)}
              className="w-full text-left bg-gradient-to-r from-primary-50 to-accent-50 px-8 py-6 border-b border-gray-200 hover:from-primary-100 hover:to-accent-100 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full mb-3">
                    {event.shortName}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {event.fullName}
                  </h2>
                  {/* Always show date/time/location in header for quick reference */}
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaCalendarAlt className="mr-1.5 flex-shrink-0 text-primary-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaClock className="mr-1.5 flex-shrink-0 text-primary-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaMapMarkerAlt className="mr-1.5 flex-shrink-0 text-primary-500" />
                      <span>{event.venue}, {event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-3">
                  {event.projectWebsite && (
                    <a
                      href={event.projectWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all text-sm"
                    >
                      <FaGlobe className="mr-2" />
                      Project Website
                    </a>
                  )}
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    {expandedEvents[event.id]
                      ? <FaChevronUp className="text-primary-500" />
                      : <FaChevronDown className="text-primary-500" />}
                  </div>
                </div>
              </div>
            </button>

            {/* Collapsible Event Body */}
            {expandedEvents[event.id] && (
              <div className="px-8 py-8 space-y-8">

                {/* Organizing Committee & PC */}
                <SectionToggle label="Organizing Committee & Program Committee" eventId={event.id} sectionKey="committee">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h4 className="text-base font-bold text-primary-700 uppercase tracking-wide mb-4">
                        Organizing Committee
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex flex-col">
                          <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">
                            {event.organizingCommittee.chair.role}
                          </span>
                          <span className="font-semibold text-gray-900">{event.organizingCommittee.chair.name}</span>
                          <span className="text-sm text-gray-600">{event.organizingCommittee.chair.affiliation}</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">
                            {event.organizingCommittee.coChair.role}
                          </span>
                          <span className="font-semibold text-gray-900">{event.organizingCommittee.coChair.name}</span>
                          <span className="text-sm text-gray-600">{event.organizingCommittee.coChair.affiliation}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h4 className="text-base font-bold text-primary-700 uppercase tracking-wide mb-4">
                        Program Committee (PC)
                      </h4>
                      <ul className="space-y-2">
                        {event.programCommittee.map((member, idx) => (
                          <li key={idx} className="flex flex-col">
                            <span className="font-semibold text-gray-900 text-sm">{member.name}</span>
                            <span className="text-xs text-gray-500">{member.affiliation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionToggle>

                <hr className="border-gray-200" />

                {/* About */}
                <SectionToggle label="About the Workshop" eventId={event.id} sectionKey="about">
                  <p className="text-gray-700 leading-relaxed">{event.about}</p>
                </SectionToggle>

                <hr className="border-gray-200" />

                {/* Call for Talks */}
                <SectionToggle label="Call for Talks" eventId={event.id} sectionKey="callForTalks">
                  <div className="space-y-5">
                    <p className="text-gray-700 leading-relaxed">
                      {event.callForTalks.description}{' '}
                      <a
                        href={`mailto:${event.callForTalks.email}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                      >
                        {event.callForTalks.email}
                      </a>
                      {' '}by <span className="font-semibold text-gray-900">{event.callForTalks.deadlineSubmission}</span>.{' '}
                      {event.callForTalks.additionalInfo}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 bg-primary-50 border border-primary-200 rounded-lg p-4">
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">
                          Submission Deadline
                        </p>
                        <p className="text-gray-900 font-bold">{event.callForTalks.deadlineSubmission}</p>
                      </div>
                      <div className="flex-1 bg-accent-50 border border-accent-200 rounded-lg p-4">
                        <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">
                          Notification of Acceptance
                        </p>
                        <p className="text-gray-900 font-bold">{event.callForTalks.deadlineNotification}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 font-medium mb-3">Topics of interest include, but are not limited to:</p>
                      <div className="flex flex-wrap gap-2">
                        {event.callForTalks.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <a
                        href={`mailto:${event.callForTalks.email}?subject=Talk Proposal for ${event.shortName}`}
                        className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all font-medium"
                      >
                        <FaEnvelope className="mr-2" />
                        Submit a Talk Proposal
                      </a>
                    </div>
                  </div>
                </SectionToggle>

                <hr className="border-gray-200" />

                {/* Tentative Program */}
                <SectionToggle label={`Tentative Program (${event.date})`} eventId={event.id} sectionKey="program">
                  <div className="space-y-3">
                    {event.program.map((slot, idx) => (
                      <div
                        key={idx}
                        className={`rounded-lg border ${
                          slot.isBreak
                            ? 'bg-gray-50 border-gray-200'
                            : 'bg-white border-gray-200 shadow-sm'
                        }`}
                      >
                        {/* Fixed two-column layout: time badge fixed width | content */}
                        <div className="flex items-start gap-4 p-4">

                          {/* Time badge — fixed width so all content starts at same x position */}
                          <div className="w-36 flex-shrink-0">
                            <span className={`inline-block w-full text-center px-2 py-1 rounded-md text-xs font-semibold ${
                              slot.isBreak
                                ? 'bg-gray-200 text-gray-600'
                                : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                            }`}>
                              {slot.time}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className={`font-bold leading-snug ${slot.isBreak ? 'text-gray-500' : 'text-gray-900'}`}>
                              {slot.title}
                            </p>

                            {slot.talks && slot.talks.length > 0 && (
                              <ul className="mt-3 space-y-4">
                                {slot.talks.map((talk, tIdx) => (
                                  <li
                                    key={tIdx}
                                    className={`pl-4 border-l-2 ${
                                      talk.type === 'keynote'
                                        ? 'border-accent-400'
                                        : talk.type === 'tba'
                                        ? 'border-gray-300'
                                        : 'border-primary-300'
                                    }`}
                                  >
                                    {talk.type === 'tba' ? (
                                      <p className="text-gray-400 italic text-sm">TBA</p>
                                    ) : (
                                      <>
                                        {talk.type === 'keynote' && (
                                          <span className="inline-block px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-semibold rounded mb-1">
                                            Keynote
                                          </span>
                                        )}
                                        <p className="font-semibold text-gray-900 text-sm">
                                          "{talk.title}"
                                        </p>
                                        {talk.speaker && (
                                          <p className="text-sm text-primary-600 mt-0.5">
                                            {talk.speaker}
                                            {talk.speakerTitle && (
                                              <span className="text-gray-500 font-normal"> — {talk.speakerTitle}</span>
                                            )}
                                          </p>
                                        )}
                                        {talk.abstract && (
                                          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                            <span className="font-medium text-gray-700">Abstract: </span>
                                            {talk.abstract}
                                          </p>
                                        )}
                                      </>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionToggle>

                {/* Acknowledgement */}
                {event.acknowledgement && (
                  <>
                    <hr className="border-gray-200" />
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Acknowledgement
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {event.acknowledgement}
                      </p>
                    </div>
                  </>
                )}

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;