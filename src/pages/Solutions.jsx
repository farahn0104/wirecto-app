// src/pages/Solutions.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  FaDesktop, FaCode, FaMobileAlt, FaBullhorn, FaChalkboardTeacher,
  FaLaptopCode, FaCloud, FaRobot, FaBrain, FaPaintBrush,
  FaNetworkWired, FaTools, FaSearch, FaShareAlt, FaChartLine
} from 'react-icons/fa';

const Solutions = () => {
  const { subpage } = useParams();
  const [selectedService, setSelectedService] = useState(subpage || 'website');

  const services = [
    {
      id: 'website',
      icon: <FaDesktop />,
      title: 'Website Design & Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'CMS Development',
        'Website Maintenance',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'WordPress', 'Shopify']
    },
    {
      id: 'software',
      icon: <FaCode />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      features: [
        'Enterprise Software',
        'CRM Development',
        'ERP Solutions',
        'Custom Applications',
        'Legacy System Migration'
      ],
      technologies: ['.NET', 'Java', 'Python', 'Node.js', 'C#']
    },
    {
      id: 'mobile',
      icon: <FaMobileAlt />,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'React Native Apps',
        'Flutter Development',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      id: 'digital',
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: [
        'SEO Services',
        'Social Media Marketing',
        'PPC Advertising',
        'Content Marketing',
        'Email Marketing'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'Mailchimp', 'SEMrush']
    },
    {
      id: 'corporate',
      icon: <FaChalkboardTeacher />,
      title: 'Corporate Training',
      description: 'Skill development programs for your team.',
      features: [
        'Technical Training',
        'Soft Skills Development',
        'Leadership Programs',
        'Certification Courses',
        'Workshops'
      ],
      technologies: ['Agile', 'DevOps', 'Cloud', 'Cybersecurity', 'Data Science']
    },
    {
      id: 'desktop',
      icon: <FaLaptopCode />,
      title: 'Desktop Application',
      description: 'Powerful desktop applications for Windows, macOS, and Linux.',
      features: [
        'Windows Applications',
        'macOS Applications',
        'Linux Applications',
        'Cross-platform Desktop Apps',
        'System Integration'
      ],
      technologies: ['Electron', '.NET MAUI', 'JavaFX', 'Qt', 'WPF']
    },
    {
      id: 'cloud',
      icon: <FaCloud />,
      title: 'Cloud Development',
      description: 'Scalable cloud solutions for modern businesses.',
      features: [
        'Cloud Migration',
        'Cloud Native Development',
        'Serverless Architecture',
        'Containerization',
        'Cloud Security'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      id: 'ai',
      icon: <FaRobot />,
      title: 'AI Development',
      description: 'Artificial Intelligence solutions to automate and optimize.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'Scikit-learn']
    },
    {
      id: 'ml',
      icon: <FaBrain />,
      title: 'ML Development',
      description: 'Machine Learning solutions for data-driven decision making.',
      features: [
        'Data Analysis',
        'Model Training',
        'MLOps',
        'Automated ML',
        'Model Deployment'
      ],
      technologies: ['Python', 'R', 'MLflow', 'Kubeflow', 'FastAPI']
    },
    {
      id: 'ui',
      icon: <FaPaintBrush />,
      title: 'UI/UX Development',
      description: 'User-centered design for exceptional digital experiences.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'UI Design',
        'UX Strategy',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer']
    },
    {
      id: 'it',
      icon: <FaNetworkWired />,
      title: 'IT Outsourcing',
      description: 'Reliable IT support and managed services.',
      features: [
        '24/7 IT Support',
        'Infrastructure Management',
        'Security Monitoring',
        'Disaster Recovery',
        'Network Management'
      ],
      technologies: ['ITIL', 'ServiceNow', 'Jira', 'Confluence', 'Zendesk']
    },
    {
      id: 'devops',
      icon: <FaTools />,
      title: 'DevOps Services',
      description: 'Streamline development and operations with DevOps.',
      features: [
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Performance Optimization',
        'Security Automation'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Ansible', 'Terraform', 'Prometheus']
    },
    {
      id: 'seo',
      icon: <FaSearch />,
      title: 'SEO Services',
      description: 'Improve search rankings and drive organic traffic.',
      features: [
        'Technical SEO',
        'On-page Optimization',
        'Off-page SEO',
        'Local SEO',
        'SEO Audits'
      ],
      technologies: ['Google Search Console', 'Ahrefs', 'Moz', 'SEMrush', 'Screaming Frog']
    },
    {
      id: 'smo',
      icon: <FaShareAlt />,
      title: 'SMO Services',
      description: 'Social media optimization for brand growth.',
      features: [
        'Social Media Strategy',
        'Content Creation',
        'Community Management',
        'Social Advertising',
        'Analytics & Reporting'
      ],
      technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok']
    },
    {
      id: 'business',
      icon: <FaChartLine />,
      title: 'Business Applications',
      description: 'Custom business solutions for process automation.',
      features: [
        'Workflow Automation',
        'Business Intelligence',
        'Reporting Tools',
        'Integration Services',
        'Custom Dashboards'
      ],
      technologies: ['Power BI', 'Tableau', 'QuickBooks API', 'Salesforce', 'Zapier']
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService) || services[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl opacity-90">
              Comprehensive digital solutions tailored to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-2 pb-4">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedService === service.id
                    ? 'bg-accent text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mr-6">
                  {selectedServiceData.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-800">
                    {selectedServiceData.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {selectedServiceData.description}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedServiceData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Form */}
            <div>
              <div className="sticky top-24 bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Get a Quote for {selectedServiceData.title}
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Project Requirements"
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Request Quote
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <span>24-48 hour response time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore All Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-accent' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  selectedService === service.id 
                    ? 'bg-gradient-to-br from-accent to-primary text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;