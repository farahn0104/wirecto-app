// src/components/Layout/Topbar.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="bg-secondary px-4 md:px-6 lg:px-8 py-2 hidden md:block">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-white/90 text-sm">
            <span className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              +91 9716670074
            </span>
            <span className="flex items-center">
              <FaEnvelope className="mr-2" />
              <Link to="mailto:info@wirecto.in" className="hover:text-accent transition-colors">
                info@wirecto.in
              </Link>
            </span>
          </div>

          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <Link to="https://x.com/WirectoTech" className="text-white/80 hover:text-accent transition-colors">
              <FaTwitter size={16} />
            </Link>
            <Link to="https://www.facebook.com/wirecto" className="text-white/80 hover:text-accent transition-colors">
              <FaFacebookF size={16} />
            </Link>
            <Link to="https://www.linkedin.com/company/wirecto-technologies/" className="text-white/80 hover:text-accent transition-colors">
              <FaLinkedinIn size={16} />
            </Link>
            <Link to="#" className="text-white/80 hover:text-accent transition-colors">
              <FaInstagram size={16} />
            </Link>
            <Link to="https://youtube.com/@wirecto" className="text-white/80 hover:text-accent transition-colors">
              <FaYoutube size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;