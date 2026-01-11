// src/pages/Partners.jsx
import React from 'react';
import { FaHandshake, FaUsers, FaChartLine, FaAward, FaHeadset, FaRocket } from 'react-icons/fa';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/img/Microsoft.jpg',
      category: 'Technology Partner',
      description: 'Gold Certified Partner for Cloud Solutions',
      since: '2015'
    },
    {
      name: 'AWS',
      logo: '/img/Amazon.jpg',
      category: 'Cloud Partner',
      description: 'Advanced Consulting Partner',
      since: '2017'
    },
    {
      name: 'Google Cloud',
      logo: '/img/Google.jpg',
      category: 'Cloud Partner',
      description: 'Premier Partner for GCP Services',
      since: '2018'
    },
    {
      name: 'Salesforce',
      logo: '/img/Salesforce.jpg',
      category: 'CRM Partner',
      description: 'Consulting Partner for Salesforce',
      since: '2019'
    },
    {
      name: 'Oracle',
      logo: '/img/Oracle.jpg',
      category: 'Database Partner',
      description: 'Gold Level Partner',
      since: '2016'
    },
    {
      name: 'Adobe',
      logo: '/img/Adobe.jpg',
      category: 'Digital Experience',
      description: 'Solution Partner for Adobe Experience Cloud',
      since: '2020'
    },
    {
      name: 'SAP',
      logo: '/img/SAP.jpg',
      category: 'ERP Partner',
      description: 'Silver Partner for SAP Business One',
      since: '2018'
    },
    {
      name: 'IBM',
      logo: '/img/IBM.jpg',
      category: 'Technology Partner',
      description: 'Business Partner for IBM Cloud',
      since: '2017'
    }
  ];

  const benefits = [
    {
      icon: <FaHandshake />,
      title: 'Strategic Partnership',
      description: 'Access to exclusive resources and early product releases'
    },
    {
      icon: <FaChartLine />,
      title: 'Revenue Sharing',
      description: 'Lucrative commission structure and revenue sharing models'
    },
    {
      icon: <FaUsers />,
      title: 'Joint Marketing',
      description: 'Co-marketing opportunities and lead sharing'
    },
    {
      icon: <FaAward />,
      title: 'Certification Support',
      description: 'Free certification and training programs'
    },
    {
      icon: <FaHeadset />,
      title: 'Dedicated Support',
      description: '24/7 technical support and account management'
    },
    {
      icon: <FaRocket />,
      title: 'Growth Opportunities',
      description: 'Access to new markets and business expansion support'
    }
  ];

  const wbapsProgram = {
    name: 'Wirecto Business Alliance Partner Program (WBAPS)',
    description: 'Join our exclusive partner program and grow your business with Wirecto',
    levels: [
      {
        name: 'Silver Partner',
        requirements: 'Min. $50K annual revenue',
        benefits: ['Lead Sharing', 'Marketing Support', 'Technical Training']
      },
      {
        name: 'Gold Partner',
        requirements: 'Min. $200K annual revenue',
        benefits: ['Revenue Sharing', 'Joint Marketing', 'Dedicated Support']
      },
      {
        name: 'Platinum Partner',
        requirements: 'Min. $500K annual revenue',
        benefits: ['Strategic Alliance', 'Co-development', 'Exclusive Rights']
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl opacity-90">
              Building successful partnerships for mutual growth and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-8"
              >
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
                    {partner.category}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {partner.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    Partner since {partner.since}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WBAPS Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {wbapsProgram.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {wbapsProgram.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {wbapsProgram.levels.map((level, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden ${
                    index === 1 ? 'transform scale-105 z-10' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 rounded-bl-lg font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {level.name}
                  </h3>
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Requirements</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {level.requirements}
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-4">Benefits</div>
                    <ul className="space-y-3">
                      {level.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Partnership Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
              <p className="text-xl opacity-90 mb-8">
                Join our network of successful partners and grow your business with Wirecto.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Select Partner Program</option>
                    <option value="silver">Silver Partner</option>
                    <option value="gold">Gold Partner</option>
                    <option value="platinum">Platinum Partner</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your company and partnership goals"
                    rows="4"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-gray-100 py-4 px-6 rounded-xl font-semibold text-lg transition-all"
                >
                  Submit Partnership Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;