import React from 'react';

const MobileApplication = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Mobile Applications</h1>
            <p className="text-xl opacity-90">Empower Your Business with Custom Mobile Apps</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's fast-paced digital world, mobile applications have become a vital tool for businesses to stay competitive, engage customers, and streamline operations.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're a startup looking to make your mark or an established enterprise aiming to enhance customer experience, Wirecto offers tailored mobile app development solutions that meet your business needs.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/3999649.jpg" alt="Mobile Applications" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Mobile App Types */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mobile App Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Native iOS Apps', desc: 'Built specifically for Apple devices' },
                { title: 'Native Android Apps', desc: 'Optimized for Android ecosystem' },
                { title: 'Cross-Platform Apps', desc: 'Single codebase for multiple platforms' },
                { title: 'Progressive Web Apps', desc: 'Web applications with native features' },
                { title: 'Hybrid Apps', desc: 'Combining web and native technologies' },
                { title: 'Enterprise Mobile Apps', desc: 'Custom solutions for businesses' }
              ].map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApplication;