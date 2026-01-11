import React from 'react';

const OilGas = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Oil & Gas</h1>
            <p className="text-xl opacity-90">Powering Progress, Driving the Future</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                The oil and gas industry is a cornerstone of global energy systems, fueling economies and shaping modern life. At Wirecto, we offer cutting-edge solutions and services that cater to the dynamic needs of this critical sector.
              </p>
              <p className="text-gray-600 text-lg">
                From exploration to distribution, our expertise and commitment to innovation help businesses navigate challenges, optimize processes, and drive sustainable growth.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/0il-and-gas.jpg" alt="Oil & Gas" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Comprehensive Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive Oil and Gas Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Exploration & Production',
                  description: 'Geophysical surveys, drilling optimization, and reservoir evaluation.'
                },
                {
                  title: 'Processing & Refining',
                  description: 'Advanced refining technologies and pipeline solutions.'
                },
                {
                  title: 'Distribution & Retail',
                  description: 'Supply chain management and retail network optimization.'
                },
                {
                  title: 'Safety & Compliance',
                  description: 'Regulatory compliance and risk management strategies.'
                },
                {
                  title: 'Digital Transformation',
                  description: 'IoT integration and digital twin implementations.'
                },
                {
                  title: 'Environmental Management',
                  description: 'Emission control and environmental impact assessments.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cutting-Edge Technology */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Cutting-Edge Technology in Oil and Gas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Artificial Intelligence & Big Data Analytics',
                'Automation & Robotics for Operations',
                'IoT and Smart Sensor Networks',
                'Digital Twin Technology',
                'Advanced Drilling Technologies',
                'Predictive Maintenance Systems'
              ].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-700 text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;