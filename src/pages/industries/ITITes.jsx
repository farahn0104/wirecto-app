import React from 'react';

const ITITes = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">IT & ITES Solutions</h1>
            <p className="text-xl opacity-90">Empowering Digital Transformation</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's fast-paced digital world, businesses across industries are leveraging IT and ITES to drive innovation, enhance productivity, and stay competitive.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we provide comprehensive IT and ITES solutions tailored to your business needs, ensuring that you are equipped to thrive in an increasingly digital landscape.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/IT.jpg" alt="IT & ITES Solutions" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive IT Services for Modern Businesses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Custom Software Development',
                'Cloud Computing Solutions',
                'Cybersecurity & Data Protection',
                'IT Infrastructure Management',
                'Enterprise Resource Planning',
                'Network Solutions',
                'Database Management',
                'IT Consulting',
                'Disaster Recovery'
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                  <h3 className="text-lg font-bold text-gray-800">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* ITES Solutions */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">ITES Solutions for Operational Excellence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Business Process Outsourcing',
                  description: 'Customer service, back-office functions, and operational support.'
                },
                {
                  title: 'Customer Support Services',
                  description: '24/7 call centers, help desks, and technical support.'
                },
                {
                  title: 'Data Entry & Management',
                  description: 'Data processing, conversion, and analytics solutions.'
                },
                {
                  title: 'Finance & Accounting',
                  description: 'Payroll management, bookkeeping, and financial analysis.'
                },
                {
                  title: 'Human Resource Outsourcing',
                  description: 'Recruitment, payroll, and employee benefits administration.'
                },
                {
                  title: 'Knowledge Process Outsourcing',
                  description: 'Research, analytics, and intellectual property services.'
                }
              ].map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITITes;