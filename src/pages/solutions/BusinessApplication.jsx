import React from 'react';

const BusinessApplication = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Business Applications</h1>
            <p className="text-xl opacity-90">Transform Your Business with Custom Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's competitive business environment, leveraging technology to streamline operations and drive growth is essential. Custom business applications can be the key to unlocking efficiency, enhancing productivity, and improving customer experiences.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we specialize in designing, developing, and deploying tailored business applications that cater specifically to your company's unique requirements.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-11.jpg" alt="Business Applications" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Application Types */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Types of Business Applications We Develop</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Customer Relationship Management (CRM)',
                'Enterprise Resource Planning (ERP)',
                'Project Management Applications',
                'E-commerce Platforms',
                'Mobile Applications',
                'Business Analytics Tools',
                'Inventory Management Systems',
                'HR Management Software',
                'Custom Workflow Applications'
              ].map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessApplication;