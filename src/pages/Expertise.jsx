// src/pages/Expertise.jsx
import React, { useState } from 'react';
import { FaLaptop, FaChartBar, FaFileInvoice, FaUsers, FaHandshake, 
         FaCashRegister, FaCloud, FaGraduationCap, FaHospital, 
         FaPills, FaFlask, FaShoppingCart, FaStore, FaBox } from 'react-icons/fa';

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      category: 'software',
      title: 'HRMS Software',
      description: 'Complete human resource management system with payroll, attendance, and performance tracking.',
      icon: <FaUsers />,
      link: 'https://hrms.wirecto.in/Account/Login',
      features: ['Payroll Management', 'Leave Management', 'Performance Reviews', 'Employee Self-service'],
      price: 'Starting at ₹15,000/year'
    },
    {
      id: 2,
      category: 'software',
      title: 'CRM System',
      description: 'Customer relationship management system to manage leads, contacts, and sales pipeline.',
      icon: <FaHandshake />,
      link: 'https://crm.wirecto.in',
      features: ['Lead Management', 'Contact Management', 'Sales Pipeline', 'Email Integration'],
      price: 'Starting at ₹12,000/year'
    },
    {
      id: 3,
      category: 'software',
      title: 'ERP Solutions',
      description: 'Enterprise resource planning for integrated management of business processes.',
      icon: <FaChartBar />,
      link: 'https://erp.wirecto.in',
      features: ['Inventory Management', 'Accounting', 'Supply Chain', 'Manufacturing'],
      price: 'Custom Pricing'
    },
    {
      id: 4,
      category: 'software',
      title: 'POS System',
      description: 'Point of sale system for retail businesses with inventory and sales management.',
      icon: <FaCashRegister />,
      link: 'https://retailpos.wirecto.in/login',
      features: ['Billing & Invoicing', 'Inventory Tracking', 'Sales Reports', 'Customer Management'],
      price: 'Starting at ₹8,000/year'
    },
    {
      id: 5,
      category: 'cloud',
      title: 'Cloud ERP',
      description: 'Cloud-based ERP solution accessible from anywhere, anytime.',
      icon: <FaCloud />,
      link: 'https://clouderp.wirecto.in',
      features: ['Multi-tenant', 'Real-time Analytics', 'Mobile Access', 'Automatic Updates'],
      price: 'Starting at ₹18,000/year'
    },
    {
      id: 6,
      category: 'education',
      title: 'School/College ERP',
      description: 'Complete management system for educational institutions.',
      icon: <FaGraduationCap />,
      link: 'https://school.wirecto.in',
      features: ['Student Management', 'Fee Collection', 'Exam Management', 'Library Management'],
      price: 'Starting at ₹25,000/year'
    },
    {
      id: 7,
      category: 'healthcare',
      title: 'Hospital Management',
      description: 'Comprehensive hospital management system for patient care and administration.',
      icon: <FaHospital />,
      link: '/expertise/hospital',
      features: ['Patient Records', 'Appointment Scheduling', 'Billing', 'Pharmacy Management'],
      price: 'Custom Pricing'
    },
    {
      id: 8,
      category: 'healthcare',
      title: 'Pharma ERP',
      description: 'Pharmaceutical management system for drug stores and distributors.',
      icon: <FaPills />,
      link: '/expertise/pharma',
      features: ['Stock Management', 'Expiry Tracking', 'Supplier Management', 'Prescription Management'],
      price: 'Starting at ₹20,000/year'
    },
    {
      id: 9,
      category: 'healthcare',
      title: 'Lab Management',
      description: 'Laboratory information management system for diagnostic centers.',
      icon: <FaFlask />,
      link: '/expertise/lab',
      features: ['Test Management', 'Report Generation', 'Sample Tracking', 'Quality Control'],
      price: 'Starting at ₹15,000/year'
    },
    {
      id: 10,
      category: 'retail',
      title: 'Retail Management',
      description: 'Retail management system for stores and chain outlets.',
      icon: <FaStore />,
      link: 'https://erpmvc.wirecto.in',
      features: ['Multi-store Support', 'Purchase Management', 'Sales Analytics', 'Customer Loyalty'],
      price: 'Starting at ₹22,000/year'
    },
    {
      id: 11,
      category: 'network',
      title: 'MLM Software',
      description: 'Multi-level marketing management system with commission tracking.',
      icon: <FaUsers />,
      link: 'https://mlm.wirecto.in',
      features: ['Network Management', 'Commission Calculation', 'Payout Management', 'Performance Tracking'],
      price: 'Starting at ₹30,000/year'
    },
    {
      id: 12,
      category: 'ecommerce',
      title: 'eCommerce Platform',
      description: 'Complete eCommerce solution for online stores.',
      icon: <FaShoppingCart />,
      link: '/expertise/ecommerce',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      price: 'Starting at ₹15,000/year'
    },
    {
      id: 13,
      category: 'billing',
      title: 'Billing Software',
      description: 'Professional billing and invoicing software for businesses.',
      icon: <FaFileInvoice />,
      link: '/expertise/billing',
      features: ['Invoice Generation', 'Tax Calculation', 'Payment Tracking', 'Report Generation'],
      price: 'Starting at ₹5,000/year'
    },
    {
      id: 14,
      category: 'marketing',
      title: 'Marketing Tools',
      description: 'Suite of marketing tools for campaign management.',
      icon: <FaChartBar />,
      link: '/expertise/marketing',
      features: ['Email Marketing', 'SMS Campaigns', 'Social Media', 'Analytics Dashboard'],
      price: 'Starting at ₹10,000/year'
    },
    {
      id: 15,
      category: 'software',
      title: 'Custom Software',
      description: 'Tailored software solutions for specific business needs.',
      icon: <FaLaptop />,
      link: '/expertise/software',
      features: ['Custom Development', 'Integration Services', 'Maintenance', 'Support'],
      price: 'Custom Pricing'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'software', name: 'Software', count: products.filter(p => p.category === 'software').length },
    { id: 'cloud', name: 'Cloud', count: products.filter(p => p.category === 'cloud').length },
    { id: 'healthcare', name: 'Healthcare', count: products.filter(p => p.category === 'healthcare').length },
    { id: 'education', name: 'Education', count: products.filter(p => p.category === 'education').length },
    { id: 'retail', name: 'Retail', count: products.filter(p => p.category === 'retail').length },
    { id: 'ecommerce', name: 'eCommerce', count: products.filter(p => p.category === 'ecommerce').length },
    { id: 'marketing', name: 'Marketing', count: products.filter(p => p.category === 'marketing').length },
    { id: 'billing', name: 'Billing', count: products.filter(p => p.category === 'billing').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl opacity-90">
              Industry-leading software solutions built with cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl">
                      {product.icon}
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={product.link}
                      target={product.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                    >
                      View Details
                    </a>
                    <button className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We specialize in building tailored software solutions for unique business requirements.
              Share your needs and we'll create the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Request Custom Solution
              </a>
              <a
                href="tel:+919716670074"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Call: +91 9716670074
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;