// src/components/Home/Features.jsx
import React from 'react';
import { FaCubes, FaUsersCog, FaAward, FaPhoneAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCubes />,
      title: 'Best In Industry',
      description: 'Wirecto is a leading IT industry player, delivering cutting-edge software solutions and setting new standards of excellence.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaUsersCog />,
      title: 'Professional Staff',
      description: 'Highly skilled and experienced professional staff dedicated to delivering top-quality software solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaAward />,
      title: 'Award Winning',
      description: 'Renowned award-winning software company, excelling in delivering innovative and customized solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaPhoneAlt />,
      title: '24/7 Support',
      description: 'Top-notch 24x7 support team, providing prompt and reliable assistance to ensure smooth operations.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We Are Here to Grow Your Business Exponentially
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/feature.jpg" 
                alt="Why Choose Wirecto" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -z-10 w-40 h-40 bg-accent/10 rounded-full -top-8 -left-8"></div>
            <div className="absolute -z-10 w-32 h-32 bg-primary/10 rounded-full -bottom-8 -right-8"></div>
          </div>

          <div className="space-y-8">
            {features.slice(2).map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;