// src/components/Home/QuoteSection.jsx
import React, { useState } from 'react';
import { FaReply, FaPhoneAlt } from 'react-icons/fa';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your quote request! We will contact you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white" data-aos="fade-right">
            <h5 className="font-semibold uppercase tracking-wider mb-4 opacity-90">
              Request A Quote
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Need A Free Quote? Please Feel Free to Contact Us
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaReply className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Reply within 24 hours</h4>
                  <p className="opacity-80">We guarantee a quick response to all inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">24 hrs telephone support</h4>
                  <p className="opacity-80">Round-the-clock support for our clients</p>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8 opacity-90">
              It is a way of expressing that Wirecto is open and welcoming to communication from 
              customers, clients, or other parties, and is willing to provide assistance, answer 
              questions, or address any concerns they may have.
            </p>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <FaPhoneAlt className="text-primary text-2xl" />
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">Call to ask any question</h5>
                <h4 className="text-2xl font-bold">+91 1147039975</h4>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="">Select A Service</option>
                      <option value="software">Software Development</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    Request A Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;