// src/pages/Quote.jsx
import React, { useState } from 'react';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    'Website Design & Development',
    'Software Development',
    'Mobile Application',
    'Digital Marketing',
    'Corporate Training',
    'Cloud Development',
    'AI/ML Development',
    'UI/UX Design',
    'IT Consulting',
    'Other'
  ];

  const budgets = [
    'Less than ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    'More than ₹10,00,000'
  ];

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year'
  ];

  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: 'Free Consultation',
      description: '30-minute free consultation with our experts'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Detailed Proposal',
      description: 'Comprehensive project proposal within 48 hours'
    },
    {
      icon: <FaCheckCircle />,
      title: 'No Hidden Costs',
      description: 'Transparent pricing with no surprises'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Money Back Guarantee',
      description: '100% satisfaction guarantee'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Get a Free Quote</h1>
            <p className="text-xl opacity-90">
              Share your project requirements and get a customized quote within 24 hours
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Why Get a Quote from Us
                </h2>
                
                <div className="space-y-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-xl mr-4 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Quick Response Guaranteed
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-accent mr-3" />
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-gray-600">+91 9716670074</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-accent mr-3" />
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-gray-600">info@wirecto.in</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaHeadset className="text-accent mr-3" />
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div className="text-gray-600">24/7 Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Estimated Budget *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Project Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="6"
                      required
                      placeholder="Please describe your project requirements in detail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 text-accent rounded focus:ring-accent"
                    />
                    <label className="ml-2 text-gray-700">
                      I agree to the{' '}
                      <a href="/terms" className="text-accent hover:text-primary">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-accent hover:text-primary">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                  >
                    Get Free Quote
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>We typically respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Quote Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Request',
                description: 'Fill out the quote form with your project details'
              },
              {
                step: '02',
                title: 'Consultation',
                description: 'Free consultation with our experts to understand requirements'
              },
              {
                step: '03',
                title: 'Detailed Proposal',
                description: 'We prepare a comprehensive proposal with timeline and pricing'
              },
              {
                step: '04',
                title: 'Project Kickoff',
                description: 'Once approved, we start working on your project'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;