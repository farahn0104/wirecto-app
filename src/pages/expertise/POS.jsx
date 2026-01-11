import React from 'react';

const POS = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">POS Software</h1>
            <p className="text-xl opacity-90">Streamline Sales with Powerful Point of Sale Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In the retail and hospitality sectors, we understand that every transaction is significant for your business. That's why Wirecto's Point of Sale (POS) software is here to support you in transforming your operations.
              </p>
              <p className="text-gray-600 text-lg">
                Our goal is to help you make sales smarter, faster, and more efficient, so you can focus on what truly matters—serving your customers.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/POS-SOFTWARE-1.jpg" alt="POS Software" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's POS Software */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's POS Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'User-Friendly Interface: Designed for ease of use with minimal training.',
                'Real-Time Inventory Management: Monitor stock levels to prevent shortages.',
                'Multi-Channel Sales: Manage in-store, online, and mobile sales from one platform.',
                'Secure Transactions: Accept various payment methods with industry-leading security.',
                'Comprehensive Reporting: Obtain valuable insights into sales trends and customer preferences.'
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
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Customizable Dashboard',
                  description: 'Personalize your POS system for faster workflows.'
                },
                {
                  title: 'Cloud Syncing',
                  description: 'Access your sales data anytime, anywhere.'
                },
                {
                  title: 'Customer Loyalty Programs',
                  description: 'Retain and reward customers with personalized offers.'
                },
                {
                  title: 'Employee Management',
                  description: 'Monitor staff performance and assign roles easily.'
                },
                {
                  title: 'Scalable Solutions',
                  description: 'Grows with your business from small to enterprise.'
                },
                {
                  title: 'Offline Mode',
                  description: 'Continue operations even without internet connectivity.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
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

export default POS;