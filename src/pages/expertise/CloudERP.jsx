import React from 'react';

const CloudERP = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Cloud ERP</h1>
            <p className="text-xl opacity-90">Enhance Business Efficiency with Cloud ERP Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's fast-paced business environment, agility and accuracy are non-negotiable. Wirecto's Cloud ERP software empowers businesses to streamline operations, optimize resources, and make informed, data-driven decisions—all from a single powerful platform.
              </p>
              <p className="text-gray-600 text-lg">
                Our cloud-based solution delivers real-time access to your critical business processes, whether you are managing inventory, finances, or human resources.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/ERP-SOFTWARE.jpg" alt="Cloud ERP Software" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's Cloud ERP */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's Cloud ERP?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scalability',
                  description: 'Our ERP is designed to grow alongside your business, accommodating everyone from small startups to large enterprises.'
                },
                {
                  title: 'Seamless Integration',
                  description: 'Effortlessly connect with your existing tools and systems for a cohesive experience.'
                },
                {
                  title: 'Real-Time Insights',
                  description: 'Access up-to-date data that allows you to make informed decisions on the spot.'
                },
                {
                  title: 'Global Accessibility',
                  description: 'Work from anywhere, at any time, thanks to secure cloud hosting.'
                },
                {
                  title: 'Cost Efficiency',
                  description: 'Avoid the expense of costly hardware with our affordable cloud solutions.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Core Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Finance Management',
                  description: 'Streamline your accounting, budgeting, and financial reporting processes.'
                },
                {
                  title: 'Inventory Control',
                  description: 'Effortlessly manage stock levels, procurement, and the supply chain.'
                },
                {
                  title: 'HR & Payroll',
                  description: 'Simplify employee management, payroll processing, and performance tracking.'
                },
                {
                  title: 'CRM Integration',
                  description: 'Enhance customer interactions and track sales more effectively.'
                },
                {
                  title: 'Customizable Modules',
                  description: 'Tailor the ERP system to meet the unique needs of your industry.'
                },
                {
                  title: 'Business Intelligence',
                  description: 'Advanced analytics and reporting for data-driven decision making.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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

export default CloudERP;