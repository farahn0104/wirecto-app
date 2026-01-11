import React from 'react';

const SEOServices = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">SEO Services</h1>
            <p className="text-xl opacity-90">Boost Your Online Visibility and Drive Organic Traffic</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive SEO Solutions</h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Search Engine Optimization is crucial for improving your website's visibility in search engine results. At Wirecto, we offer comprehensive SEO services that help businesses attract more qualified traffic, generate leads, and increase revenue.
              </p>

              <div className="my-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Our SEO Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Technical SEO',
                      items: [
                        'Site Speed Optimization',
                        'Mobile Optimization',
                        'Schema Markup',
                        'Crawlability Analysis',
                        'Site Architecture'
                      ]
                    },
                    {
                      title: 'On-Page SEO',
                      items: [
                        'Keyword Optimization',
                        'Content Optimization',
                        'Meta Tags Optimization',
                        'Header Tags',
                        'Image Optimization'
                      ]
                    },
                    {
                      title: 'Off-Page SEO',
                      items: [
                        'Link Building',
                        'Brand Mentions',
                        'Social Signals',
                        'Local Citations',
                        'Influencer Outreach'
                      ]
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 my-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">SEO Benefits for Your Business</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Increased Organic Traffic',
                    'Higher Conversion Rates',
                    'Improved Brand Credibility',
                    'Better User Experience',
                    'Long-term Results',
                    'Cost-effective Marketing'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                        ↑
                      </div>
                      <span className="text-lg font-semibold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our SEO Process</h3>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'SEO Audit & Analysis',
                    description: 'Comprehensive analysis of your current SEO performance'
                  },
                  {
                    step: '02',
                    title: 'Keyword Research',
                    description: 'Identify high-value keywords for your industry'
                  },
                  {
                    step: '03',
                    title: 'Strategy Development',
                    description: 'Create customized SEO strategy for your business'
                  },
                  {
                    step: '04',
                    title: 'Implementation',
                    description: 'Execute on-page, off-page, and technical SEO'
                  },
                  {
                    step: '05',
                    title: 'Monitoring & Reporting',
                    description: 'Track performance and provide regular reports'
                  },
                  {
                    step: '06',
                    title: 'Optimization',
                    description: 'Continuous improvement based on results'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;