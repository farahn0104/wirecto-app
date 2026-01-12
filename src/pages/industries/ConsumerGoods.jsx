import React from 'react';
import { Link } from 'react-router-dom'

const ConsumerGoods = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Consumer Goods</h1>
            <p className="text-xl opacity-90">
              Empowering Consumer Goods Companies with Innovative Solutions
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
                In today's competitive market, consumer goods companies face a rapidly changing landscape driven by consumer demand, technological advancements, and evolving market trends. To stay ahead, businesses must adapt, innovate, and optimize their operations.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we provide cutting-edge solutions that empower consumer goods companies to thrive in this dynamic environment.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/CONSUMER-GOODS.jpg" 
                alt="Consumer Goods Solutions" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Tailored Solutions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Tailored Solutions for Consumer Goods Success</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Wirecto, we understand the unique challenges within the consumer goods sector. Our comprehensive range of services is designed to meet the specific needs of businesses in this industry. Whether you are involved in manufacturing, distribution, retail, or e-commerce, our solutions can help streamline operations, reduce costs, and improve overall efficiency.
            </p>
            <p className="text-gray-600 text-lg">
              We offer specialized tools that support product development, supply chain management, and customer relationship management. Our expertise in creating scalable, flexible solutions ensures that your business can grow while maintaining high levels of quality and customer satisfaction.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Streamlined Supply Chain',
                description: 'Optimize supply chains from end to end with advanced data analytics and real-time tracking.',
                icon: '📦'
              },
              {
                title: 'Product Development',
                description: 'Accelerate time-to-market and reduce development costs with innovative tools.',
                icon: '🔧'
              },
              {
                title: 'Customer Relationship',
                description: 'Build stronger relationships with CRM solutions for targeted marketing campaigns.',
                icon: '🤝'
              },
              {
                title: 'E-commerce Solutions',
                description: 'Succeed in the digital marketplace with seamless online store solutions.',
                icon: '🛒'
              },
              {
                title: 'Data Analytics',
                description: 'Make informed decisions with actionable insights and real-time data reporting.',
                icon: '📊'
              },
              {
                title: 'Sustainability',
                description: 'Implement sustainable practices while ensuring compliance with regulations.',
                icon: '🌱'
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Wirecto */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Years of industry experience and deep market understanding',
                'Customized solutions for unique business challenges',
                'Focus on innovation and technological advancement',
                'Commitment to efficiency and operational excellence',
                'Proven track record of delivering measurable results',
                'End-to-end support throughout your business journey'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ✓
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Started Today</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Looking to grow your consumer goods business? Let Wirecto help you enhance efficiency and drive success. Contact us today and discover how our tailored solutions can help you enhance operations, improve customer experiences, and drive growth in an increasingly competitive marketplace.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerGoods;