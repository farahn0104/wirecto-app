// src/pages/about/WhoWeAre.jsx
import React from 'react';

const WhoWeAre = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl opacity-90">
              A premier technology solutions provider with a legacy of innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2012, Wirecto Technologies Private Limited began as a small startup with a 
                big vision: to revolutionize the software industry through innovation, quality, and 
                customer-centric solutions. What started as a team of three passionate developers has 
                now grown into a global technology solutions provider with 150+ experts across 
                multiple countries.
              </p>

              <p className="text-gray-600 text-lg mb-6">
                Our journey began in New Delhi, India, where we developed our first custom software 
                solution for a local retail business. The success of this project laid the foundation 
                for our growth, and within five years, we expanded our services to include web 
                development, mobile applications, cloud solutions, and digital marketing.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 my-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Our Growth Timeline
                </h3>
                <div className="space-y-6">
                  {[
                    { year: '2012', event: 'Company founded in New Delhi' },
                    { year: '2014', event: 'Launched first cloud-based product' },
                    { year: '2016', event: 'Expanded to international markets' },
                    { year: '2018', event: 'Reached 1000+ client milestone' },
                    { year: '2020', event: 'Launched AI/ML division' },
                    { year: '2023', event: 'Expanded to 7 countries' }
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6">
                        {milestone.year}
                      </div>
                      <div className="text-lg text-gray-700">{milestone.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h3>
              <p className="text-gray-600 text-lg mb-6">
                At Wirecto, we believe that technology should be an enabler, not a barrier. Our 
                philosophy is built on three core principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: 'Innovation First',
                    description: 'We continuously explore new technologies and methodologies to stay ahead of industry trends.'
                  },
                  {
                    title: 'Customer Success',
                    description: 'Our success is measured by our clients achievements and satisfaction.'
                  },
                  {
                    title: 'Sustainable Growth',
                    description: 'We build solutions that grow with our clients businesses over time.'
                  }
                ].map((principle, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h4>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">Global Presence</h3>
              <p className="text-gray-600 text-lg mb-6">
                Today, Wirecto Technologies serves clients across 7 countries including India, USA, 
                Canada, Singapore, Qatar, UAE, and Dubai. Our global presence allows us to bring 
                international best practices and diverse perspectives to every project.
              </p>

              <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h4>
                <p className="text-gray-600 mb-6">
                  Our team comprises 150+ technology experts including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Software Engineers', 'UX/UI Designers', 'Data Scientists', 'Cloud Architects', 
                    'DevOps Engineers', 'Project Managers', 'QA Specialists', 'Business Analysts'].map((role, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;