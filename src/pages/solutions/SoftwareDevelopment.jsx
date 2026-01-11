import React from 'react';

const SoftwareDevelopment = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Software Development</h1>
            <p className="text-xl opacity-90">Innovative Solutions for Every Business Need</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's fast-paced, technology-driven world, software development has become an integral part of business growth and success. Whether you are a startup or a large enterprise, the right software solutions can streamline your operations, enhance productivity, and drive innovation.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we specialize in delivering high-quality, custom software development services that cater to the unique needs of your business.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-9.jpg" alt="Software Development" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Web Development', desc: 'From simple websites to complex web applications' },
                { title: 'Mobile App Development', desc: 'iOS and Android applications' },
                { title: 'Enterprise Solutions', desc: 'ERP, CRM, and business management systems' },
                { title: 'Cloud Development', desc: 'Scalable cloud-based applications' },
                { title: 'Custom Software', desc: 'Tailored solutions for unique business needs' },
                { title: 'API Development', desc: 'Building robust APIs for integration' }
              ].map((expertise, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{expertise.title}</h3>
                  <p className="text-gray-600">{expertise.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;