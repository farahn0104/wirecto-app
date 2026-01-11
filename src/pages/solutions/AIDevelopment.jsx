import React from 'react';

const AIDevelopment = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Development</h1>
            <p className="text-xl opacity-90">Intelligent Solutions for Smart Businesses</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Transform Your Business with Artificial Intelligence</h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Artificial Intelligence is revolutionizing industries by automating processes, gaining insights from data, and enhancing decision-making capabilities. At Wirecto, we develop cutting-edge AI solutions that help businesses stay competitive in the digital age.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our AI Expertise</h3>
                  <ul className="space-y-3">
                    {[
                      'Machine Learning Models',
                      'Natural Language Processing',
                      'Computer Vision Solutions',
                      'Predictive Analytics',
                      'AI Chatbots & Virtual Assistants',
                      'Recommendation Systems',
                      'AI-powered Automation',
                      'Deep Learning Solutions'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Benefits of AI</h3>
                  <ul className="space-y-3">
                    {[
                      'Enhanced Efficiency & Productivity',
                      'Data-Driven Decision Making',
                      'Improved Customer Experience',
                      'Cost Reduction',
                      'Competitive Advantage',
                      '24/7 Automated Operations',
                      'Scalable Solutions',
                      'Continuous Learning & Improvement'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our AI Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Planning',
                    description: 'Understanding business needs and defining AI objectives'
                  },
                  {
                    step: '02',
                    title: 'Data Preparation',
                    description: 'Collecting, cleaning, and preparing data for AI models'
                  },
                  {
                    step: '03',
                    title: 'Model Development',
                    description: 'Building and training AI/ML models'
                  },
                  {
                    step: '04',
                    title: 'Deployment & Integration',
                    description: 'Implementing solutions into existing systems'
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {process.step}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{process.title}</h4>
                    <p className="text-sm text-gray-600">{process.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Healthcare',
                    'Finance',
                    'Retail',
                    'Manufacturing',
                    'Education',
                    'Transportation',
                    'Energy',
                    'Telecommunications'
                  ].map((industry, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 text-center">
                      <span className="font-semibold text-gray-800">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopment;