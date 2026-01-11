import React from 'react';

const DesktopApplication = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Desktop Applications</h1>
            <p className="text-xl opacity-90">Powerful Desktop Solutions for Enhanced Productivity</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                At Wirecto, we specialize in delivering high-quality, reliable, and feature-rich desktop applications tailored to meet the specific needs of businesses across various industries.
              </p>
              <p className="text-gray-600 text-lg">
                Desktop applications offer stability, powerful performance, and rich functionality, making them ideal for businesses that require customized software solutions that can operate independently of the web.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-8.jpg" alt="Desktop Applications" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Requirement Analysis', desc: 'Understanding business needs and objectives' },
                { title: 'Design & Prototyping', desc: 'Creating UI/UX designs and prototypes' },
                { title: 'Development', desc: 'Building the application with latest technologies' },
                { title: 'Testing & QA', desc: 'Thorough testing for performance and security' },
                { title: 'Deployment', desc: 'Installation and configuration on user systems' },
                { title: 'Maintenance', desc: 'Ongoing support and updates' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopApplication;