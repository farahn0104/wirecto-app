import React from 'react';

const DigitalMarketing = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Digital Marketing</h1>
            <p className="text-xl opacity-90">Powerful Strategies to Boost Your Business</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In the current digital era, maintaining a robust online presence is essential for achieving business success. Digital marketing has revolutionized how brands connect with their audience, drive traffic, and boost sales.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we specialize in delivering customized digital marketing solutions that are designed to meet the specific needs of your business.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-12.jpg" alt="Digital Marketing" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Digital Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'SEO', desc: 'Search Engine Optimization' },
                { title: 'Social Media', desc: 'Marketing across platforms' },
                { title: 'Content Marketing', desc: 'Valuable content creation' },
                { title: 'PPC Advertising', desc: 'Pay-per-click campaigns' },
                { title: 'Email Marketing', desc: 'Targeted email campaigns' },
                { title: 'Analytics', desc: 'Performance tracking & optimization' },
                { title: 'Video Marketing', desc: 'Engaging video content' },
                { title: 'Influencer Marketing', desc: 'Brand collaborations' }
              ].map((service, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{service.title}</div>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;