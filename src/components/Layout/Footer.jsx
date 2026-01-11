// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/solutions' },
    { name: 'Products', path: '/expertise' },
    { name: 'Technology', path: '/technology' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Data Protection', path: '/data-protection' },
    { name: 'Software Policy', path: '/software-policy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo & About */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 h-full">
                <Link to="/" className="inline-block mb-6">
                  <img 
                    src="/img/Wirecto-Logo.png" 
                    alt="Wirecto" 
                    className="h-12"
                  />
                </Link>
                <p className="text-gray-300 mb-8">
                  Wirecto is dedicated to innovation, continuous improvement, and staying 
                  up-to-date with the latest trends in the software industry. We constantly 
                  strive to deliver cutting-edge software solutions that help businesses 
                  optimize their operations.
                </p>
                
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your Email Address"
                      className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-3"
                    />
                    <button className="bg-accent hover:bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Subscribe to our newsletter</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">C - 49, Triloki Colony New Delhi, India - 03</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@wirecto.in" className="text-gray-400 hover:text-accent transition-colors">
                      info@wirecto.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919716670074" className="text-gray-400 hover:text-accent transition-colors">
                      +91 9716670074
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a href="https://x.com/WirectoTech" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="https://www.facebook.com/wirecto" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.linkedin.com/company/wirecto-technologies/" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com/@wirecto" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-accent transition-colors group"
                    >
                      <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy Links */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-8 text-white">Legal & Policies</h3>
              <ul className="space-y-3">
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-accent transition-colors group"
                    >
                      <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} <Link to="/" className="text-accent hover:text-primary">Wirecto</Link>. 
                All Rights Reserved.
              </p>
              <p className="text-sm mt-2">India I USA I Canada I Singapore I Qatar I UAE I Dubai</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">24/7 Support Available</span>
              </div>
              <div className="h-4 w-px bg-gray-700"></div>
              <div className="text-sm text-gray-400">
                ISO 9001:2015 Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;