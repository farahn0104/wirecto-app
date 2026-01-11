// src/components/Home/Team.jsx
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Sadre Alam',
    position: 'Founder & Director',
    image: '/img/Sadre Alam.jpg',
    social: {
      twitter: 'https://x.com/Sadre06',
      facebook: 'https://www.facebook.com/sadre786',
      instagram: 'https://www.instagram.com/a_sadre/',
      linkedin: 'https://www.linkedin.com/in/sadrealamengineer/'
    }
  },
  {
    id: 2,
    name: 'Ekramul Haque',
    position: 'Chief Executive Officer',
    image: '/img/EkramulHaque.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Arman Al Nasar',
    position: 'International - BDM',
    image: '/img/ArmanAlNasar.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

const Team = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
            Expert Members
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional Stuffs Ready to Help Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={member.id * 100}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-accent hover:text-white transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href={member.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-accent hover:text-white transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-accent hover:text-white transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-accent hover:text-white transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4">{member.position}</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">Available for consultation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;