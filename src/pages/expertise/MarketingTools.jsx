import React from 'react';

const MarketingTools = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Marketing Tools</h1>
            <p className="text-xl opacity-90">Boost Your Brand with Powerful Marketing Software</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In the digital age, achieving success in marketing heavily depends on the right tools and strategies. Wirecto's marketing software provides businesses with the capability to effectively plan, execute, and measure impactful campaigns.
              </p>
              <p className="text-gray-600 text-lg">
                By offering a comprehensive suite that includes social media management, email marketing, and analytics, our solution equips you with everything necessary to thrive in a competitive landscape.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/MARKETING-TOOLS.jpg" alt="Marketing Tools" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's Marketing Tools Software */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's Marketing Tools Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'All-in-One Platform: Manage all marketing activities from a single dashboard.',
                'Automation at Its Best: Schedule posts, send automated emails, and nurture leads.',
                'Data-Driven Insights: Track campaign performance with real-time analytics.',
                'Scalable Solutions: Ideal for startups, agencies, and enterprises aiming for growth.',
                'User-Friendly Interface: Enjoy a seamless marketing experience with no steep learning curve.',
                'Cost-Effective: Get enterprise-level features at competitive pricing.'
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Social Media Management',
                  description: 'Plan, publish, and analyze posts across various platforms.'
                },
                {
                  title: 'Email Marketing',
                  description: 'Create personalized email campaigns that drive engagement.'
                },
                {
                  title: 'SEO Tools',
                  description: 'Optimize your website to improve search rankings and attract organic traffic.'
                },
                {
                  title: 'Lead Generation',
                  description: 'Easily capture, track, and convert leads with integrated tools.'
                },
                {
                  title: 'Campaign Analytics',
                  description: 'Gain actionable insights to refine your strategies and maximize ROI.'
                },
                {
                  title: 'Content Management',
                  description: 'Create, schedule, and distribute content across multiple channels.'
                },
                {
                  title: 'Marketing Automation',
                  description: 'Automate repetitive marketing tasks and workflows.'
                },
                {
                  title: 'Competitor Analysis',
                  description: 'Monitor competitors and benchmark your performance.'
                },
                {
                  title: 'CRM Integration',
                  description: 'Seamlessly connect marketing efforts with customer relationship management.'
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

export default MarketingTools;