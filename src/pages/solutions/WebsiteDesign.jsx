import React from 'react';

const WebsiteDesign = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Website Design</h1>
            <p className="text-xl opacity-90">
              Expert Website Design Services for Your Digital Success
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                At Wirecto, we excel in crafting beautiful and intuitive websites that are meticulously tailored to meet the unique needs of your business. Our talented team of designers fuses innovative creativity with in-depth technical know-how to produce websites that are not only visually stunning but also operate flawlessly across all devices.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you are a budding startup eager to make your mark or a well-established enterprise looking to enhance your online presence, we offer bespoke website design solutions that empower you to distinguish yourself in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/service-1.jpg" 
                alt="Website Design Services" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Why Choose Wirecto */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto for Your Website Design?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Custom Designs',
                  description: 'Every business is unique, and your website should reflect that. Our designers create customized designs that resonate with your brand.'
                },
                {
                  number: '02',
                  title: 'Mobile-Optimized',
                  description: 'With more people browsing the web on mobile devices, we ensure your website is fully responsive and optimized for all devices.'
                },
                {
                  number: '03',
                  title: 'SEO-Friendly Structure',
                  description: 'We build websites with SEO-friendly structures, helping you rank higher in search engine results and attract organic traffic.'
                },
                {
                  number: '04',
                  title: 'User-Centric Approach',
                  description: 'Our design philosophy centers on user experience. We create intuitive navigation and fast-loading pages.'
                },
                {
                  number: '05',
                  title: 'Flexible Solutions',
                  description: 'We design websites with scalability in mind, ensuring that your site can evolve alongside your business.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-accent mb-4">{item.number}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Website Design Process */}
          <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Website Design Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation & Research',
                  description: 'We start by understanding your business, target audience, and goals to design a website that speaks directly to your customers.'
                },
                {
                  step: '02',
                  title: 'Creative Design Concepts',
                  description: 'Our design team drafts several website concepts based on your preferences and business requirements.'
                },
                {
                  step: '03',
                  title: 'Development & Testing',
                  description: 'We develop your website with cutting-edge technology and ensure thorough testing for functionality and speed.'
                },
                {
                  step: '04',
                  title: 'Launch & Support',
                  description: 'After launching your site, we provide ongoing support to ensure it runs smoothly with regular updates.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affordable Website Design */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Affordable Website Design</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Wirecto, we understand that quality web design should be accessible to all businesses. That's why we offer affordable pricing options without compromising on quality or functionality. Our flexible pricing plans allow businesses of all sizes to have a powerful online presence.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Started Today!</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Ready to take your business online with a professional website that drives results? Contact Wirecto today for a consultation, and let's create a website that not only impresses your visitors but also boosts your business growth!
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;