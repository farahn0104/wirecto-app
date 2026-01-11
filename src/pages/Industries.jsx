// src/pages/Industries.jsx
import React, { useState } from 'react';
import { 
  FaSeedling, FaUniversity, FaShoppingCart, FaWifi,
  FaBullhorn, FaFilm, FaShoppingBag, FaGraduationCap,
  FaLandmark, FaHeartbeat, FaHotel, FaLaptopCode,
  FaIndustry, FaOilCan, FaStore, FaBuilding
} from 'react-icons/fa';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('agriculture');

  const industries = [
    {
      id: 'agriculture',
      icon: <FaSeedling />,
      title: 'Agriculture',
      description: 'Digital solutions for modern farming and agribusiness management.',
      solutions: [
        'Farm Management Software',
        'Crop Monitoring Systems',
        'Supply Chain Management',
        'Weather Analytics',
        'Marketplace Platforms'
      ],
      technologies: ['IoT', 'AI/ML', 'Cloud', 'Mobile Apps', 'Data Analytics']
    },
    {
      id: 'banking',
      icon: <FaUniversity />,
      title: 'Banking & Financial Services',
      description: 'Secure and scalable solutions for financial institutions.',
      solutions: [
        'Core Banking Systems',
        'Mobile Banking Apps',
        'Loan Management',
        'Fraud Detection',
        'Investment Platforms'
      ],
      technologies: ['Blockchain', 'AI', 'Cloud Security', 'APIs', 'Microservices']
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart />,
      title: 'eCommerce',
      description: 'Complete eCommerce solutions for online businesses.',
      solutions: [
        'Online Marketplaces',
        'Inventory Management',
        'Payment Gateways',
        'Order Processing',
        'Customer Analytics'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS']
    },
    {
      id: 'iot',
      icon: <FaWifi />,
      title: 'IoT Solutions',
      description: 'Internet of Things solutions for connected devices.',
      solutions: [
        'Smart Home Systems',
        'Industrial IoT',
        'Asset Tracking',
        'Predictive Maintenance',
        'Energy Management'
      ],
      technologies: ['IoT Platforms', 'Edge Computing', 'MQTT', 'Raspberry Pi', 'Azure IoT']
    },
    {
      id: 'advertising',
      icon: <FaBullhorn />,
      title: 'Advertising',
      description: 'Digital advertising platforms and analytics.',
      solutions: [
        'Ad Serving Platforms',
        'Programmatic Advertising',
        'Campaign Management',
        'Analytics Dashboards',
        'Audience Targeting'
      ],
      technologies: ['React', 'Python', 'Big Data', 'Machine Learning', 'Real-time Analytics']
    },
    {
      id: 'media',
      icon: <FaFilm />,
      title: 'Media & Entertainment',
      description: 'Solutions for content creation and distribution.',
      solutions: [
        'Streaming Platforms',
        'Content Management',
        'Digital Rights Management',
        'Audience Analytics',
        'Advertising Platforms'
      ],
      technologies: ['Video Streaming', 'CDN', 'DRM', 'Analytics', 'Cloud Storage']
    },
    {
      id: 'consumer',
      icon: <FaShoppingBag />,
      title: 'Consumer Goods',
      description: 'Retail and consumer product solutions.',
      solutions: [
        'POS Systems',
        'Inventory Management',
        'Supply Chain',
        'Customer Loyalty',
        'Market Analysis'
      ],
      technologies: ['React Native', 'Java', 'MySQL', 'Redis', 'Cloud']
    },
    {
      id: 'education',
      icon: <FaGraduationCap />,
      title: 'Education & Training',
      description: 'EdTech solutions for institutions and learners.',
      solutions: [
        'LMS Platforms',
        'Online Examination',
        'Virtual Classrooms',
        'Student Management',
        'Skill Development'
      ],
      technologies: ['React', 'WebRTC', 'AI', 'Cloud', 'Mobile Apps']
    },
    {
      id: 'government',
      icon: <FaLandmark />,
      title: 'Government',
      description: 'Digital governance and public service solutions.',
      solutions: [
        'E-Governance Portals',
        'Citizen Services',
        'Document Management',
        'Compliance Systems',
        'Public Grievance'
      ],
      technologies: ['Java', '.NET', 'Oracle', 'Security', 'Compliance']
    },
    {
      id: 'healthcare',
      icon: <FaHeartbeat />,
      title: 'Healthcare',
      description: 'Medical and healthcare management solutions.',
      solutions: [
        'Hospital Management',
        'Telemedicine',
        'Electronic Health Records',
        'Pharmacy Management',
        'Medical Analytics'
      ],
      technologies: ['HIPAA Compliance', 'IoT', 'AI', 'Cloud', 'Mobile Health']
    },
    {
      id: 'hospitality',
      icon: <FaHotel />,
      title: 'Hospitality & Tourism',
      description: 'Solutions for hotels, travel, and tourism.',
      solutions: [
        'Hotel Management',
        'Booking Systems',
        'Travel Portals',
        'Customer Service',
        'Revenue Management'
      ],
      technologies: ['React', 'Node.js', 'Payment Gateways', 'Mobile Apps', 'Cloud']
    },
    {
      id: 'itites',
      icon: <FaLaptopCode />,
      title: 'IT/ITES',
      description: 'Solutions for technology and service companies.',
      solutions: [
        'Project Management',
        'Resource Planning',
        'Client Portals',
        'Service Desk',
        'Analytics & Reporting'
      ],
      technologies: ['Agile Tools', 'Cloud', 'DevOps', 'AI/ML', 'Automation']
    },
    {
      id: 'manufacturing',
      icon: <FaIndustry />,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for manufacturing.',
      solutions: [
        'ERP Systems',
        'Production Planning',
        'Quality Control',
        'Supply Chain',
        'Predictive Maintenance'
      ],
      technologies: ['IoT', 'AI', 'Robotics', 'Cloud', 'Data Analytics']
    },
    {
      id: 'oilgas',
      icon: <FaOilCan />,
      title: 'Oil & Gas',
      description: 'Solutions for energy and resource management.',
      solutions: [
        'Asset Management',
        'Supply Chain',
        'Safety Compliance',
        'Data Analytics',
        'Remote Monitoring'
      ],
      technologies: ['IoT Sensors', 'AI', 'Cloud', 'Big Data', 'GIS']
    },
    {
      id: 'retail',
      icon: <FaStore />,
      title: 'Retail',
      description: 'Retail management and omnichannel solutions.',
      solutions: [
        'POS Systems',
        'Inventory Management',
        'E-commerce',
        'Customer Analytics',
        'Supply Chain'
      ],
      technologies: ['React', 'Node.js', 'Mobile Apps', 'Cloud', 'AI']
    },
    {
      id: 'realestate',
      icon: <FaBuilding />,
      title: 'Real Estate & Construction',
      description: 'Property management and construction solutions.',
      solutions: [
        'Property Management',
        'CRM for Real Estate',
        'Construction Management',
        'Virtual Tours',
        'Document Management'
      ],
      technologies: ['3D Visualization', 'Mobile Apps', 'Cloud', 'CRM', 'Analytics']
    }
  ];

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90">
              Tailored solutions for diverse industry verticals
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {industries.map(industry => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex flex-col items-center p-4 rounded-2xl transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-2">{industry.icon}</div>
                <span className="text-sm font-semibold text-center">{industry.title}</span>
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center text-white text-3xl mr-6">
                    {selectedIndustryData.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800">
                      {selectedIndustryData.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {selectedIndustryData.description}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Solutions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedIndustryData.solutions.map((solution, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedIndustryData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Industry Solution</h3>
                  <p className="text-gray-600 mb-6">
                    Looking for a custom solution for your industry? Contact us for a free consultation.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-primary to-accent text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Request Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Industry Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Banking',
                title: 'Digital Transformation for Regional Bank',
                result: '40% increase in mobile banking users',
                description: 'Implemented mobile banking and online loan processing system'
              },
              {
                industry: 'Healthcare',
                title: 'Hospital Management System Implementation',
                result: '30% reduction in patient waiting time',
                description: 'Developed comprehensive HMS for multi-specialty hospital'
              },
              {
                industry: 'Retail',
                title: 'Omnichannel Retail Platform',
                result: '25% increase in online sales',
                description: 'Built integrated POS, e-commerce, and inventory system'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                  {caseStudy.industry}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {caseStudy.title}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  {caseStudy.result}
                </div>
                <p className="text-gray-600 mb-6">
                  {caseStudy.description}
                </p>
                <a
                  href="/case-studies"
                  className="text-accent hover:text-primary font-semibold"
                >
                  Read Case Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;