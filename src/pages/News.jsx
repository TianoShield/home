import React from 'react';

import { FaNewspaper, FaExternalLinkAlt, FaQrcode } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import surveyQR from '../assets/survey_qr.png';


const News = () => {

  const newsItems = [

    {

      id: 1,

      date: 'Survey Open Until March 24, 2026 AoE',

      tag: 'Survey',

      tagColor: 'from-primary-500 to-accent-500',

      title: 'UEFI Firmware & TianoCore Community Survey',

      content: `We have launched an online survey to gain some information about the UEFI Firmware and/or the TianoCore open-source community, which develops and maintains the core of the UEFI Firmware. If you have any expertise in this area, please participate and give us some input. Participation may be anonymous.`,

      surveyUrl: 'https://surveyuccs.co1.qualtrics.com/jfe/form/SV_es7liivwFk0aDY2',

      qrCode: true,

      closing: 'The survey will be open until March 24, 2026 AoE. Thank you!',

    },

  ];


  return (

    <div className="min-h-screen bg-gray-50">

      {/* Header */}

      <div className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">

            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">

              News

            </span>

          </h1>

          <p className="text-gray-300 text-lg max-w-3xl">

            Latest updates, announcements, and news from the TianoShield project.

          </p>

        </div>

      </div>


      {/* News List */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

        {newsItems.map((item) => (

          <div

            key={item.id}

            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary-500"

          >

            {/* Card Header */}

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 px-8 py-6 border-b border-gray-200">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <span

                  className={`inline-block px-3 py-1 bg-gradient-to-r ${item.tagColor} text-white text-sm font-semibold rounded-full w-fit`}

                >

                  {item.tag}

                </span>

                <span className="text-sm font-semibold text-primary-600 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full w-fit">

                  {item.date}

                </span>

              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 flex items-center gap-3">

                <FaNewspaper className="text-primary-500 flex-shrink-0" />

                {item.title}

              </h2>

            </div>


            {/* Card Body */}

            <div className="px-8 py-8">

              <p className="text-gray-700 leading-relaxed text-base mb-6">

                {item.content}

              </p>


              {/* Survey Link + QR Code */}

              {item.surveyUrl && (

                <div className="flex flex-col lg:flex-row gap-6 items-start">

                  {/* Left: link box */}

                  <div className="flex-1 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-lg p-5">

                    <p className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-3">

                      Survey Link

                    </p>

                    <a

                      href={item.surveyUrl}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all font-medium text-sm break-all"

                    >

                      <FaExternalLinkAlt className="flex-shrink-0" />

                      Take the Survey

                    </a>

                    <p className="mt-3 text-xs text-gray-500 break-all">

                      {item.surveyUrl}

                    </p>

                  </div>


                  {/* Right: QR code placeholder */}

                  {item.qrCode && (

                    <div className="flex-shrink-0 bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center gap-3">

                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">

                        <FaQrcode className="text-primary-500" />

                        QR Code

                      </p>

                      {/* Render QR via Google Charts API — no extra package needed */}

                      <img
                        src={surveyQR}
                        alt="Survey QR Code"
                        className="w-36 h-36 rounded-md border border-gray-200"
                      />

                    </div>

                  )}

                </div>

              )}


              {/* Closing note */}

              {item.closing && (

                <p className="mt-6 text-gray-600 text-sm leading-relaxed italic border-l-4 border-primary-300 pl-4">

                  {item.closing}

                </p>

              )}

            </div>

          </div>

        ))}

      </div>


      {/* Back to Home */}

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

        <Link

          to="/"

          className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-md hover:from-primary-600 hover:to-accent-600 transition-all"

        >

          ← Back to Home

        </Link>

      </div> */}

    </div>

  );

};


export default News;