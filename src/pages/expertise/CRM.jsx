import React from 'react';

const CRM = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">CRM Software</h1>
            <p className="text-xl opacity-90">Build Stronger Customer Relationships</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's competitive business environment, building and maintaining strong customer relationships has never been more essential for success. Wirecto offers a robust CRM software that serves as the ultimate tool for businesses aiming to attract, engage, and retain customers effectively.
              </p>
              <p className="text-gray-600 text-lg">
                Our CRM system is designed with a focus on both simplicity and effectiveness, ensuring that organizations of all sizes can easily navigate its features without unnecessary complexity.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/CRM-SOFTWARE.jpg" alt="CRM Software" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's CRM Software */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's CRM Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '360° Customer View: Gain complete insights into customer behavior and interactions.',
                'Seamless Integration: Easily connect with your favorite tools and systems.',
                'Real-Time Updates: Access and manage customer data anytime, anywhere.',
                'Improved Collaboration: Keep your teams aligned with shared customer data.',
                'Enhanced Sales Tracking: Effortlessly monitor leads, deals, and sales pipelines.',
                'Mobile Accessibility: Manage your CRM on-the-go with mobile apps.'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Lead Management',
                  description: 'Track and nurture leads from first contact to conversion.'
                },
                {
                  title: 'Customizable Dashboards',
                  description: 'Visualize critical data using widgets and reports.'
                },
                {
                  title: 'Marketing Automation',
                  description: 'Streamline campaigns with automated emails and follow-ups.'
                },
                {
                  title: 'Customer Support Tools',
                  description: 'Provide excellent service with ticketing systems.'
                },
                {
                  title: 'Sales Pipeline Management',
                  description: 'Track deals through every stage of the sales process.'
                },
                {
                  title: 'Email Integration',
                  description: 'Sync emails with customer records automatically.'
                },
                {
                  title: 'Reporting & Analytics',
                  description: 'Measure performance and identify trends.'
                },
                {
                  title: 'Social Media Integration',
                  description: 'Connect with customers across social platforms.'
                },
                {
                  title: 'Workflow Automation',
                  description: 'Automate repetitive tasks and processes.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;