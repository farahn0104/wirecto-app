import React from 'react';

const MLDevelopment = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">ML Development</h1>
            <p className="text-xl opacity-90">Machine Learning Solutions for Data-Driven Success</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Harness the Power of Machine Learning</h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Machine Learning enables computers to learn from data and make intelligent decisions without explicit programming. At Wirecto, we build sophisticated ML models that help businesses extract valuable insights, predict trends, and automate complex processes.
              </p>

              <div className="my-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our ML Development Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Predictive Analytics',
                      description: 'Build models that forecast trends and behaviors'
                    },
                    {
                      title: 'Natural Language Processing',
                      description: 'Process and understand human language data'
                    },
                    {
                      title: 'Computer Vision',
                      description: 'Image and video analysis for various applications'
                    },
                    {
                      title: 'Recommendation Systems',
                      description: 'Personalized suggestions based on user behavior'
                    },
                    {
                      title: 'Anomaly Detection',
                      description: 'Identify unusual patterns in data'
                    },
                    {
                      title: 'Time Series Analysis',
                      description: 'Analyze time-stamped data for forecasting'
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white my-12">
                <h3 className="text-2xl font-bold mb-6">Why Choose Wirecto for ML Development?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Expert Data Scientists',
                    'End-to-End ML Pipeline',
                    'Scalable Solutions',
                    'Real-time Processing',
                    'Model Optimization',
                    'Continuous Monitoring'
                  ].map((reason, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent font-bold mr-3">
                        ✓
                      </div>
                      <span className="text-lg">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">ML Development Lifecycle</h3>
              <div className="space-y-6">
                {[
                  {
                    phase: 'Problem Definition',
                    description: 'Understand business objectives and define ML problem'
                  },
                  {
                    phase: 'Data Collection & Preparation',
                    description: 'Gather and preprocess data for model training'
                  },
                  {
                    phase: 'Model Selection & Training',
                    description: 'Choose appropriate algorithms and train models'
                  },
                  {
                    phase: 'Evaluation & Validation',
                    description: 'Test models and validate performance'
                  },
                  {
                    phase: 'Deployment',
                    description: 'Integrate models into production systems'
                  },
                  {
                    phase: 'Monitoring & Maintenance',
                    description: 'Continuously monitor and improve models'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl mr-6">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{step.phase}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MLDevelopment;