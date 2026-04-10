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
        coChairs: [
          {
            name: 'Armin Moin',
            affiliation: 'University of Colorado Colorado Springs (UCCS), USA',
          },
          {
            name: 'Aravind Machiry',
            affiliation: 'Purdue University, USA',
          },
        ],
      },
      programCommittee: [
        { name: 'Terrance E. Boult', affiliation: 'UCCS, Colorado, USA' },
        { name: 'G Edhaya Chandran', affiliation: 'Arm, Texas, USA' },
        { name: 'Srihari Danduri', affiliation: 'Purdue University, Indiana, USA' },
        { name: 'Connor Glosner', affiliation: 'Purdue University, Indiana, USA' },
        { name: 'Tim Lewis', affiliation: 'Insyde Software, Massachusetts, USA' },
        { name: 'Alex Matrosov', affiliation: 'Binarly Inc., California, USA' },
        { name: 'Dick Wilkins', affiliation: 'Phoenix Technologies, California, USA' },
      ],
      about: `A firmware program is embedded in non-volatile storage on a computer's motherboard. It controls how computing devices, ranging from cloud servers to resource-constrained Internet of Things (IoT) platforms, start their boot processes and interact with their operating systems after power-on. The Unified Extensible Firmware Interface (UEFI) is an open standard for computing system firmware architecture specification. The TianoCore community maintains reference implementations of various components of the UEFI specification, for example, EDK II. This has resulted in a vibrant and mature Open-Source Ecosystem (OSE) with a significant impact on global security, safety, and privacy. Given the widespread use of the TianoCore repositories, security vulnerabilities may be leveraged by malicious actors and cyber-criminals to develop exploits that could cause potentially massive-scale harm to individuals, businesses, and the public sectors, including critical infrastructure. A recent $1.2M project (2025-2027) sponsored by the U.S. National Science Foundation (NSF), named TianoShield, aims to enhance the state of security of the TianoCore OSE and improve its overall open-source development process and practices. FirmVuln26 will focus on improvements, new results, and open problems in protecting the TianoCore OSE by using the TianoShield project as the anchor, while welcoming talks from other participants and stakeholders in the firmware world.`,
      callForTalks: {
        description: `If you are interested in delivering a talk at FirmVuln26, please email your proposed talk title and abstract (150-250 words) to `,
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
          title: 'Welcome by the organizers and the keynote talk',
          talks: [
            {
              title: 'All Models Are Wrong, Some Are Useful: Firmware-Aware Risk Scoring for Real-World Prioritization',
              speaker: 'Alex Matrosov',
              speakerTitle: 'Binarly Inc.',
              abstract: 'Opaque scoring models are everywhere in vulnerability management, yet they often fail to drive clear action. This talk presents a transparent, firmware-aware risk scoring approach designed to support real-world prioritization for device and embedded security.',
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
              title: "Meeting the NSA's Guidance for Managing UEFI Secure Boot",
              speaker: 'Kevin Davis',
              speakerTitle: 'Insyde Software',
              abstract: 'As the foundational layer of modern computing, UEFI firmware has become a primary target for sophisticated adversaries seeking "below-the-OS" persistence. This talk explores the evolution of the National Security Agency\'s (NSA) recommendations, specifically contrasting the 2017 defensive practices with the updated "Guidance for Managing UEFI Secure Boot" released in late 2025. Attendees will learn why the shift from the 2017 guidance was necessary, moving from a passive "enablement" stance to an active "management and customization" model. This change was driven by the rise of vulnerabilities like BootHole, BlackLotus, and PKFail, which demonstrated that default configurations are no longer sufficient against modern bootkits. The session will demonstrate how InsydeH2O® implementations address these requirements. We will cover how H2O provides the granular controls needed to replace factory keys, manage DBX revocation lists, and utilize "Thorough Boot" modes to audit all firmware modules and expansion devices. We will hint at some possible changes being proposed by UEFI groups. By the end of this session, participants will understand not only the why behind the NSA\'s rigorous new standards but also the how of implementing them using industry-leading UEFI solutions to mitigate persistent firmware threats.',
              type: 'talk',
            },
            {
              title: 'Journey towards identifying sufficient fidelity for effective fuzzing of EDK-2 components',
              speaker: 'Srihari Danduri',
              speakerTitle: 'Purdue University',
              abstract: 'Modern firmware forms the foundation of platform security, yet its complexity and tight coupling with hardware make effective testing particularly challenging. While fuzzing is a well-established technique for vulnerability discovery, applying it to EDK II introduces unique challenges. Its layered architecture and reliance on hardware-backed protocols raise key questions: how can EDK II components be rehosted for fuzzing, what level of granularity should be targeted (function, component, or system), and which execution semantics must be preserved to ensure meaningful results? This talk presents a practical journey toward identifying the level of fidelity required for effective fuzzing of EDK II components. We examine where and how to inject fuzzing inputs across layers—for example, whether a DHCP implementation should be fuzzed via raw protocol inputs (UDP), through driver interfaces (PCI), or at higher-level abstractions. We show how these choices directly impact code coverage, bug discovery, and scalability. Through experiments on representative EDK II modules, we demonstrate that insufficient fidelity can hide entire classes of vulnerabilities, while overly complex environments can significantly reduce fuzzing throughput. We further explore strategies for rehosting components, selecting appropriate fuzzing boundaries, and maintaining critical semantics to minimize false positives while preserving realistic execution behavior. Attendees will gain actionable guidance on building balanced fuzzing setups that maximize bug-finding effectiveness without sacrificing fidelity. We conclude with lessons learned from achieving strong bug coverage while maintaining enough environmental accuracy to produce trustworthy results in firmware fuzzing.',
              type: 'talk',
            },
            {
              title: 'Enhancing the software maintenance process in TianoCore',
              speaker: 'Devin Haggitt',
              speakerTitle: 'UCCS',
              abstract: 'This talk introduces our efforts for enabling a streamlined process of handling bugs in the TianoCore ecosystem, starting from the EDK II project and extending it further to other repositories. Our focus is on enhancing the structure of bug reports and bringing some lessons learned and best practices with respect to the software maintenance process from other open-source ecosystems to the TianoCore community. We also work on improving the patch propagation throughout the ecosystem, as well as restructuring the CI/CD pipelines and integrating modern static and dynamic analysis and testing into these pipelines.',
              type: 'talk',
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
              speakerTitle: 'Insyde Software',
              abstract: "How do you convince 600+ system firmware engineers that they could be the reason that a customer's platform gets hacked? This is the real problem for one of the companies that provides the kit used by companies producing hundreds of laptop and server models each year. The solution is to pare down the lists of theoretical attacks on firmware to the list that are most likely to be encountered in the day-to-day coding activities of these engineers, and help them recognize the vulnerability patterns. In this talk, we will discuss the industry trends and the seven high-risk technology areas where most of the weaknesses lie in production UEFI system firmware, and the rules that help engineers recognize them.",
              type: 'talk',
            },
            {
              title: 'BreakingBoot: The Shortcomings of Modern Software Testing Tools in EDK II and How to Improve Them',
              speaker: 'Connor Glosner',
              speakerTitle: 'Purdue University',
              abstract: 'Firmware operates at the highest privilege level in modern systems, yet its testing ecosystem remains immature. EDK2, the reference open-source implementation of UEFI, relies on development workflows that were never designed for boot-phase–aware static and dynamic analysis. As a result, commonly used tools such as CodeQL and boot-phase fuzzing frameworks struggle with incomplete modeling of PEI/DXE/SMM transitions, fragile harness construction, shallow coverage, and poor CI/CD integration. In this talk, we analyze the practical shortcomings of modern firmware testing pipelines and demonstrate how they fail to surface high-impact vulnerabilities in real EDK2 modules. We then present targeted improvements: phase-aware static analysis extensions, automated UEFI harness generation, firmware-compatible memory instrumentation, and CI-ready orchestration. Our results show improved coverage, reduced false positives, and newly discovered vulnerabilities.',
              type: 'talk',
            },
            {
              title: 'Using Artificial Intelligence (AI) to enhance the bug triage process in TianoCore (e.g., EDK II)',
              speaker: 'Nazanin Siavash',
              speakerTitle: 'UCCS',
              abstract: 'Bug triage in large-scale open-source firmware projects, such as the TianoCore EDK II, is inherently time-consuming and resource-intensive. As the codebase expands, the manual process of bug triage faces a substantial bottleneck. This talk outlines our ongoing research on applying Artificial Intelligence (AI), specifically Machine Learning (ML) methods and techniques, to automate and streamline the bug triage pipeline within EDK II and beyond. We decompose the bug triage workflow into four focused sub-tasks: automated duplicate detection, automated bug prioritization, automated bug assignment, and automated invalid bug report detection. Additionally, we study automated bug title optimization. In this talk, we report the current progress on the first three components, duplicate detection, prioritization, and assignment, detailing our methodology and presenting preliminary results. In addition, we describe early-stage research directions for invalid bug report detection and bug title optimization, emphasizing the distinct challenges associated with the TianoCore bug reports. Our objective is to reduce the triage overhead, shorten bug resolution cycles, and enable software maintainers to concentrate on higher-value engineering activities. We conclude by discussing key lessons learned, open challenges, and the broader applicability of this approach to other open-source ecosystems.',
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
          title: 'Session 3',
          talks: [
            {
              title: 'Responsible Disclosure is a Two-Way Street: Empirically Measuring the Responsible Disclosure Contract in the Firmware Ecosystem',
              speaker: 'Hui Jun Tay',
              speakerTitle: 'Arizona State University (ASU)',
              abstract: 'Responsible disclosure is the process by which researchers and vendors cooperate to release information on newly discovered vulnerabilities to the public in an ethically responsible manner. Proper vulnerability disclosure is especially important for the security of embedded firmware in the Internet-of-Things, where a single exploit often impacts thousands of consumer devices. The currently prevalent belief is that disclosing vulnerabilities on some devices is better than not bringing up observed vulnerabilities at all, leaving us with an unknown set of potentially affected devices. Implicitly, this assumes that the potential vulnerability impact of these “invisible” devices is minimal relative to the rest of the publicized set. Yet, should this assumption prove false, a partial reporting of vulnerable devices would conversely pose a greater security risk as malicious actors can trivially use released exploits to target the invisible devices. Our work seeks to quantify the degree to which such vulnerable devices are overlooked during responsible disclosure. We provide a lower-bound estimate of the security impact these “invisible” yet vulnerable devices have for end users. To this end, we model the disclosure process and develop an automated pipeline, BucketLeak, to run a collection of 54 vulnerability exploitation scripts from the years 2010–2025 against a large-scale dataset of 3,569 firmware images belonging to 572 router and camera devices. Our pipeline uncovers 467 unique device-exploit pairs, of which 422 are undisclosed potential N-days that correspond to 290 device models still in circulation. Furthermore, 181 of the models with undisclosed vulnerabilities are still vulnerable even with the latest versions of their firmware installed. By scanning the Internet-of-Things with ZoomEye, we find that these 181 vulnerable yet undisclosed devices have more than 1.04 million real-world device counterparts still active and discoverable over the public Internet.',
              type: 'talk',
            },
            {
              title: 'Large Language Models for Software Security Weakness and Vulnerability Mitigation Through Patch Generation',
              speaker: 'Michael Conner',
              speakerTitle: 'UCCS',
              abstract: 'We propose a novel approach to automated software security weakness and vulnerability mitigation, called LPatcher. We deploy Large Language Models (LLMs), such as Generative Pretrained Transformer (GPT) models of OpenAI and other similar generative AI artifacts, to generate software patches that can eliminate security threats in code snippets. Currently, we focus on C/C++, Python, Java, and JavaScript in our experimental study using the developed prototype. However, the LLM-based approach is flexible enough to be extended to other programming languages and libraries. This is a work-in-progress.',
              type: 'talk',
            },
            {
              title: 'Cascaded Vulnerability Attacks in Software Supply Chains',
              speaker: 'Michael Conner',
              speakerTitle: 'UCCS',
              speakerNote: 'presenting the work of Laura Baird, UCCS',
              abstract: 'Most of the current software security analysis tools assess vulnerabilities in isolation. However, sophisticated software supply chain security threats often stem from cascaded vulnerability and security weakness chains that span dependent components. Moreover, although the adoption of Software Bills of Materials (SBOMs) has been accelerating, downstream vulnerability findings vary substantially across SBOM generators and analysis tools. We propose a novel approach to SBOM-driven security analysis methods and tools. We model vulnerability relationships over dependency structure rather than treating scanner outputs as independent records. We represent enriched SBOMs as heterogeneous graphs with nodes being the SBOM components and dependencies, the known software vulnerabilities, and the known software security weaknesses. We then train a Heterogeneous Graph Attention Network (HGAT) to predict whether a component is associated with at least one known vulnerability. Since documented multi-vulnerability chains are scarce, we model cascade discovery as a link prediction problem over CVE pairs using a multi-layer perceptron neural network. This way, we produce ranked candidate links that can be composed into multi-step paths. The HGAT component classifier achieves an Accuracy of 91.03% and an F1-score of 74.02%.',
              type: 'talk',
            },
          ],
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

            {/* Event Title Banner */}
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
                      <div>
                        <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">
                          Workshop Co-Chairs
                        </span>
                        <ul className="mt-2 space-y-3">
                          {event.organizingCommittee.coChairs.map((chair, idx) => (
                            <li key={idx} className="flex flex-col">
                              <span className="font-semibold text-gray-900">{chair.name}</span>
                              <span className="text-sm text-gray-600">{chair.affiliation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

                {/* Program */}
                <SectionToggle label={`Program (${event.date})`} eventId={event.id} sectionKey="program">
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
                        <div className="flex items-start gap-4 p-4">

                          {/* Time badge */}
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
                                            {talk.speakerNote && (
                                              <span className="text-gray-400 font-normal italic"> ({talk.speakerNote})</span>
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