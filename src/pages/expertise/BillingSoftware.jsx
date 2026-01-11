import React from 'react';

const BillingSoftware = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Billing Software</h1>
            <p className="text-xl opacity-90">Streamline Your Finances with Smart Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Managing your finances doesn't have to be a complex process. Wirecto's billing software offers a straightforward solution designed to simplify invoicing, track payments effectively, and ensure financial accuracy.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're a small business or a large enterprise, our software is tailored to meet the needs of businesses of all sizes. It integrates speed, efficiency, and reliability into the billing process.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/BILLING-SOFTWARE.jpg" alt="Billing Software" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's Billing Software */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's Billing Software</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'User-Friendly Interface',
                  description: 'Create and send professional invoices in just a few clicks.'
                },
                {
                  title: 'Automated Processes',
                  description: 'Minimize manual effort with features like recurring billing and payment reminders.'
                },
                {
                  title: 'Multi-Payment Support',
                  description: 'Accept payments through various methods including credit cards and digital wallets.'
                },
                {
                  title: 'Real-Time Tracking',
                  description: 'Easily monitor outstanding invoices and payment statuses.'
                },
                {
                  title: 'Customizable Templates',
                  description: 'Personalize invoice designs to reflect your brand identity.'
                },
                {
                  title: 'Data Security',
                  description: 'Protect your financial data with advanced encryption.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'GST and Tax Management',
                  description: 'Accurately calculate taxes and generate compliant invoices.'
                },
                {
                  title: 'Inventory Integration',
                  description: 'Link billing with inventory to track stock and sales seamlessly.'
                },
                {
                  title: 'Expense Recording',
                  description: 'Keep track of operational costs for improved financial insights.'
                },
                {
                  title: 'Detailed Reporting',
                  description: 'Access comprehensive reports on revenue, expenses, and payment trends.'
                },
                {
                  title: 'Multi-Currency Support',
                  description: 'Handle international transactions with ease.'
                },
                {
                  title: 'Client Management',
                  description: 'Maintain client profiles and track payment histories.'
                },
                {
                  title: 'Recurring Billing',
                  description: 'Automate regular billing for subscription-based services.'
                },
                {
                  title: 'Mobile App Access',
                  description: 'Manage billing on-the-go with mobile applications.'
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

export default BillingSoftware;