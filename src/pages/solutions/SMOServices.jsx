import React from 'react';

const SMOServices = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">SMO Services</h1>
            <p className="text-xl opacity-90">Social Media Optimization for Maximum Engagement</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Enhance Your Social Media Presence</h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Social Media Optimization is essential for building brand awareness, engaging with your audience, and driving traffic to your website. At Wirecto, we provide comprehensive SMO services that help businesses maximize their social media impact.
              </p>

              <div className="my-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Our SMO Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Social Media Strategy',
                      description: 'Develop comprehensive social media plans'
                    },
                    {
                      title: 'Content Creation',
                      description: 'Create engaging content for all platforms'
                    },
                    {
                      title: 'Community Management',
                      description: 'Engage with your audience and build community'
                    },
                    {
                      title: 'Social Media Advertising',
                      description: 'Run targeted ad campaigns on social platforms'
                    },
                    {
                      title: 'Influencer Marketing',
                      description: 'Collaborate with influencers for brand promotion'
                    },
                    {
                      title: 'Analytics & Reporting',
                      description: 'Track performance and measure ROI'
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white my-12">
                <h3 className="text-2xl font-bold mb-6">Platforms We Cover</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Facebook', icon: '📘' },
                    { name: 'Instagram', icon: '📷' },
                    { name: 'Twitter', icon: '🐦' },
                    { name: 'LinkedIn', icon: '💼' },
                    { name: 'YouTube', icon: '🎬' },
                    { name: 'Pinterest', icon: '📌' },
                    { name: 'TikTok', icon: '🎵' },
                    { name: 'Snapchat', icon: '👻' }
                  ].map((platform, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl mb-2">{platform.icon}</div>
                      <span className="font-semibold">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">SMO Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Audit & Analysis',
                    description: 'Analyze current social media presence'
                  },
                  {
                    step: '02',
                    title: 'Strategy Development',
                    description: 'Create platform-specific strategies'
                  },
                  {
                    step: '03',
                    title: 'Content Planning',
                    description: 'Plan and schedule content calendar'
                  },
                  {
                    step: '04',
                    title: 'Implementation',
                    description: 'Execute strategy across platforms'
                  },
                  {
                    step: '05',
                    title: 'Engagement',
                    description: 'Manage community and interactions'
                  },
                  {
                    step: '06',
                    title: 'Optimization',
                    description: 'Refine strategies based on performance'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of SMO</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Increased Brand Awareness',
                    'Higher Engagement Rates',
                    'Improved Customer Loyalty',
                    'Better Website Traffic',
                    'Enhanced Brand Reputation',
                    'Competitive Advantage',
                    'Direct Customer Feedback',
                    'Cost-effective Marketing'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                        ✓
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMOServices;