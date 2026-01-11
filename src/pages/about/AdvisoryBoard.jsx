// src/pages/about/AdvisoryBoard.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaBuilding, FaGraduationCap, FaAward } from 'react-icons/fa';

const AdvisoryBoard = () => {
  const advisors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Technology Strategy Advisor',
      expertise: 'Former CTO, Tech Giant Inc.',
      experience: '25+ years in Technology',
      bio: 'Dr. Kumar brings extensive experience in technology strategy and digital transformation.',
      achievements: [
        'Led digital transformation for Fortune 500 companies',
        'Patent holder in AI algorithms',
        'Advisor to government tech initiatives'
      ],
      linkedin: 'https://linkedin.com/in/rajeshkumar'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Growth Advisor',
      expertise: 'Global Business Expansion',
      experience: '20+ years in International Business',
      bio: 'Specializes in scaling technology businesses in global markets.',
      achievements: [
        'Successfully expanded 50+ businesses internationally',
        'Expert in cross-cultural business strategies',
        'Published author on global expansion'
      ],
      linkedin: 'https://linkedin.com/in/sarahjohnson'
    },
    {
      id: 3,
      name: 'Prof. Michael Chen',
      role: 'AI/ML Research Advisor',
      expertise: 'Artificial Intelligence Research',
      experience: '15+ years in AI Research',
      bio: 'Leading researcher in machine learning and neural networks.',
      achievements: [
        'PhD in Computer Science from Stanford',
        'Published 100+ research papers',
        'Advisor to leading AI startups'
      ],
      linkedin: 'https://linkedin.com/in/michaelchen'
    },
    {
      id: 4,
      name: 'Lisa Rodriguez',
      role: 'Startup Ecosystem Advisor',
      expertise: 'Venture Capital & Funding',
      experience: '18+ years in Venture Capital',
      bio: 'Helps technology startups secure funding and scale operations.',
      achievements: [
        'Managed $500M+ venture fund',
        'Mentored 200+ startups',
        'Board member of multiple unicorns'
      ],
      linkedin: 'https://linkedin.com/in/lisarodriguez'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Advisory Board</h1>
            <p className="text-xl opacity-90">
              Industry leaders guiding our strategic direction
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Strategic Guidance from Industry Experts
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our Advisory Board comprises seasoned professionals and industry veterans who provide 
              strategic guidance, industry insights, and mentorship to ensure Wirecto stays at the 
              forefront of technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {advisors.map(advisor => (
              <div
                key={advisor.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-4xl">
                      {advisor.name.charAt(0)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {advisor.name}
                          </h3>
                          <div className="text-accent font-semibold mb-2">
                            {advisor.role}
                          </div>
                          <div className="flex items-center text-gray-600 mb-3">
                            <FaBuilding className="mr-2" />
                            {advisor.expertise}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaGraduationCap className="mr-2" />
                            {advisor.experience}
                          </div>
                        </div>
                        
                        <a
                          href={advisor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 md:mt-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                        >
                          <FaLinkedin />
                        </a>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {advisor.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                          <FaAward className="mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {advisor.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Impact of Our Advisory Board
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Strategic Direction',
                  description: 'Guiding long-term business strategy and market positioning',
                  impact: '30% faster growth rate'
                },
                {
                  title: 'Technology Innovation',
                  description: 'Advising on emerging technologies and R&D investments',
                  impact: '40% increase in innovation'
                },
                {
                  title: 'Market Expansion',
                  description: 'Supporting international growth and market entry strategies',
                  impact: 'Expanded to 7 countries'
                },
                {
                  title: 'Investor Relations',
                  description: 'Facilitating connections with investors and venture capitalists',
                  impact: '$10M+ funding secured'
                }
              ].map((impact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-4">
                    {impact.impact}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Meetings */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Quarterly Strategy Sessions
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our advisory board meets quarterly to review performance, discuss market trends, 
              and provide strategic guidance for upcoming initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Technology Review',
                  description: 'Evaluation of tech stack and innovation roadmap'
                },
                {
                  title: 'Market Analysis',
                  description: 'Assessment of market trends and opportunities'
                },
                {
                  title: 'Growth Planning',
                  description: 'Strategic planning for business expansion'
                }
              ].map((session, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-2xl font-bold mb-2">Q{index + 1}</div>
                  <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                  <p className="text-sm opacity-80">{session.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryBoard;