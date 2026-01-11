// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartLine, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: 'Customer Centric',
      description: 'We put our customers at the heart of everything we do.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaChartLine />,
      title: 'Innovation',
      description: 'Constantly evolving with cutting-edge technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'Building trust through transparency and honesty.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaLightbulb />,
      title: 'Excellence',
      description: 'Striving for perfection in every project.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      description: 'Top priority for data protection and privacy.',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Wirecto</h1>
            <p className="text-xl opacity-90 mb-8">
              Transforming businesses through innovative technology solutions since 2012
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about/whoweare" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Our Story
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                11+ Years of Excellence in Technology
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2012, Wirecto Technologies has grown from a small startup to a 
                leading technology solutions provider serving clients across the globe. Our 
                journey has been marked by continuous innovation, customer satisfaction, 
                and technological excellence.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                With a team of 150+ experts across multiple countries, we've successfully 
                delivered 1250+ projects for 2534+ happy clients. Our commitment to quality 
                and innovation has earned us 110+ industry awards and recognitions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Expert Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">11+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/about.jpg" 
                alt="Wirecto Office" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and form the foundation of our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="opacity-90">
                To empower businesses with innovative, scalable, and reliable technology 
                solutions that drive growth, efficiency, and competitive advantage in the 
                digital era.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90">
                To be the most trusted global technology partner, recognized for 
                transforming businesses through cutting-edge solutions and exceptional 
                customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;