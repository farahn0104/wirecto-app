// src/pages/about/Membership.jsx
import React from 'react';
import { 
  FaUsers, FaHandshake, FaChartLine, FaAward, 
  FaNetworkWired, FaRocket, FaHeadset, FaCertificate 
} from 'react-icons/fa';

const Membership = () => {
  const membershipLevels = [
    {
      name: 'Basic Partner',
      price: 'Free',
      description: 'Entry-level partnership for startups and small businesses',
      features: [
        'Access to basic resources',
        'Monthly newsletter',
        'Basic technical support',
        'Partner directory listing'
      ],
      buttonText: 'Join Now',
      popular: false
    },
    {
      name: 'Silver Partner',
      price: '₹25,000/year',
      description: 'For growing businesses seeking collaboration opportunities',
      features: [
        'All Basic features',
        'Quarterly business reviews',
        'Priority support',
        'Co-marketing opportunities',
        'Training sessions'
      ],
      buttonText: 'Upgrade Now',
      popular: false
    },
    {
      name: 'Gold Partner',
      price: '₹75,000/year',
      description: 'For established businesses seeking strategic partnerships',
      features: [
        'All Silver features',
        'Dedicated account manager',
        'Revenue sharing program',
        'Joint business development',
        'Custom training programs'
      ],
      buttonText: 'Become Gold Partner',
      popular: true
    },
    {
      name: 'Platinum Partner',
      price: 'Custom Pricing',
      description: 'For enterprise-level strategic alliances',
      features: [
        'All Gold features',
        'Strategic planning sessions',
        'Exclusive market rights',
        'Co-development opportunities',
        'Executive briefings'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <FaNetworkWired />,
      title: 'Network Expansion',
      description: 'Connect with other industry leaders and expand your professional network'
    },
    {
      icon: <FaChartLine />,
      title: 'Business Growth',
      description: 'Access new business opportunities and revenue streams through partnerships'
    },
    {
      icon: <FaCertificate />,
      title: 'Certification',
      description: 'Get certified in Wirecto technologies and solutions'
    },
    {
      icon: <FaHeadset />,
      title: 'Priority Support',
      description: 'Receive dedicated technical and business support'
    },
    {
      icon: <FaRocket />,
      title: 'Go-to-Market',
      description: 'Leverage joint marketing and sales initiatives'
    },
    {
      icon: <FaAward />,
      title: 'Recognition',
      description: 'Get featured as a preferred partner on our platforms'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Membership Programs</h1>
            <p className="text-xl opacity-90">
              Join our partner ecosystem and grow your business with Wirecto
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Why Join Our Partner Program?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our membership programs are designed to create mutually beneficial relationships 
              that drive business growth, innovation, and customer success for all partners.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipLevels.map((level, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden relative ${
                  level.popular ? 'transform scale-105 z-10 border-2 border-accent' : ''
                }`}
              >
                {level.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {level.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {level.price}
                    </div>
                    <p className="text-gray-600">
                      {level.description}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-700 mb-4">Features:</h4>
                    <ul className="space-y-3">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    level.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {level.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Membership Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-white">
            <h2 className="text-4xl font-bold text-center mb-12">
              Partner Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  partner: 'Tech Solutions Inc.',
                  type: 'Gold Partner',
                  achievement: 'Increased revenue by 40% through joint projects',
                  quote: 'Wirecto partnership transformed our business model'
                },
                {
                  partner: 'Digital Innovations',
                  type: 'Silver Partner',
                  achievement: 'Expanded service offerings to 5 new markets',
                  quote: 'The training and support helped us scale rapidly'
                },
                {
                  partner: 'Cloud Masters',
                  type: 'Platinum Partner',
                  achievement: 'Co-developed 3 successful products',
                  quote: 'Strategic collaboration at its best'
                }
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                >
                  <div className="text-2xl font-bold mb-2">{story.partner}</div>
                  <div className="text-accent font-semibold mb-4">{story.type}</div>
                  <div className="text-lg font-semibold mb-4">{story.achievement}</div>
                  <p className="opacity-90 italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Apply for Membership
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our partnership team will contact you within 48 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Company Website</label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Contact Person *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Membership Level *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option value="">Select membership level</option>
                    <option value="basic">Basic Partner</option>
                    <option value="silver">Silver Partner</option>
                    <option value="gold">Gold Partner</option>
                    <option value="platinum">Platinum Partner</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Tell us about your business *</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;