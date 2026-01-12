// src/pages/about/CoreValue.jsx
import React from 'react';
import { 
  FaUsers, FaLightbulb, FaHandshake, FaAward, 
  FaShieldAlt, FaRocket, FaHeart, FaBalanceScale 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const CoreValue = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: 'Customer Centricity',
      description: 'Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.',
      principles: [
        'Active listening to client needs',
        'Personalized approach to every project',
        'Long-term partnership mindset',
        'Transparent communication'
      ]
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace change and continuously seek innovative ways to solve complex problems.',
      principles: [
        'Continuous learning and improvement',
        'Adoption of emerging technologies',
        'Creative problem-solving approach',
        'Forward-thinking solutions'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'We build trust through honesty, transparency, and ethical business practices.',
      principles: [
        'Honest communication',
        'Ethical business conduct',
        'Accountability in actions',
        'Respect for all stakeholders'
      ]
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering quality that sets industry standards.',
      principles: [
        'Quality-first approach',
        'Attention to detail',
        'Continuous improvement',
        'Benchmarking against best practices'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      description: 'We prioritize data protection and security in all our solutions.',
      principles: [
        'Data privacy compliance',
        'Secure development practices',
        'Regular security audits',
        'Client data protection'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market dynamics.',
      principles: [
        'Flexible methodologies',
        'Rapid response to changes',
        'Continuous delivery',
        'Adaptable team structure'
      ]
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'We love what we do, and it shows in the quality of our work.',
      principles: [
        'Enthusiastic team members',
        'Commitment to craft',
        'Positive work environment',
        'Dedication to success'
      ]
    },
    {
      icon: <FaBalanceScale />,
      title: 'Sustainability',
      description: 'We build solutions that support sustainable business growth.',
      principles: [
        'Environmentally conscious practices',
        'Long-term solution design',
        'Resource optimization',
        'Social responsibility'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Core Values</h1>
            <p className="text-xl opacity-90">
              The principles that guide our actions and define our culture
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-blue-500 to-cyan-500' :
                    index % 4 === 1 ? 'from-purple-500 to-pink-500' :
                    index % 4 === 2 ? 'from-green-500 to-teal-500' :
                    'from-yellow-500 to-orange-500'
                  }`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {value.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Principles:</h4>
                    <ul className="space-y-2">
                      {value.principles.map((principle, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Culture in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we bring our values to life every day
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Living Our Values
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Weekly Innovation Sessions',
                      description: 'Regular brainstorming sessions where team members share innovative ideas and solutions.'
                    },
                    {
                      title: 'Client Success Stories',
                      description: 'Monthly showcase of successful client projects and lessons learned.'
                    },
                    {
                      title: 'Ethics Training',
                      description: 'Quarterly workshops on ethical business practices and compliance.'
                    },
                    {
                      title: 'Quality Circles',
                      description: 'Cross-functional teams that focus on improving quality processes.'
                    }
                  ].map((practice, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4 flex-shrink-0">
                        <div className="text-xl font-bold">{index + 1}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {practice.title}
                        </h4>
                        <p className="text-gray-600">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Value-Based Recognition
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      award: 'Innovation Champion',
                      criteria: 'For exceptional innovative thinking and implementation'
                    },
                    {
                      award: 'Customer Hero',
                      criteria: 'For outstanding customer service and satisfaction'
                    },
                    {
                      award: 'Quality Excellence',
                      criteria: 'For consistently delivering high-quality work'
                    },
                    {
                      award: 'Team Player',
                      criteria: 'For exceptional collaboration and support'
                    }
                  ].map((award, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-semibold text-gray-800">{award.award}</div>
                        <div className="text-sm text-gray-600">{award.criteria}</div>
                      </div>
                      <div className="text-2xl">🏆</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              When you choose Wirecto, you get more than just a technology provider. 
              You get a partner committed to your success, guided by strong values 
              and ethical principles.
            </p>
            
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Work with a Value-Driven Partner?
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Experience the difference that strong values make in technology solutions.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValue;