import React from 'react';

const CloudDevelopment = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Cloud Development</h1>
            <p className="text-xl opacity-90">Scalable Cloud Solutions for Modern Businesses</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's fast-paced digital landscape, businesses need scalable, flexible, and cost-efficient solutions that support growth, innovation, and collaboration.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we provide comprehensive cloud development services designed to help organizations leverage the power of cloud technologies for operational efficiency, data management, and seamless connectivity.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-7.jpg" alt="Cloud Development" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Cloud Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Cloud Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Cloud Migration', desc: 'Seamless migration to cloud platforms' },
                { title: 'Cloud App Development', desc: 'Building cloud-native applications' },
                { title: 'Infrastructure Management', desc: 'Managing and optimizing cloud infrastructure' },
                { title: 'Cloud API Integration', desc: 'Seamless integration with third-party systems' },
                { title: 'DevOps & CI/CD', desc: 'Implementing continuous integration and deployment' },
                { title: 'Multi-Cloud Solutions', desc: 'Strategies for multiple cloud providers' },
                { title: 'Cloud Analytics', desc: 'Big data solutions on cloud platforms' },
                { title: 'Cloud Security', desc: 'Comprehensive security and compliance' }
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
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

export default CloudDevelopment;