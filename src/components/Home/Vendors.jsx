// src/components/Home/Vendors.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const vendors = [
  'Altizon', 'Accenture', 'Aodocs', 'Apporbit', 'BizCredit', 'Cumulocity',
  'Ebay', 'FruityPebbles', 'Informatica',  'International',
  'Microsoft', 'Publisher', 'Samsung', 'Soundwave',
  'TCS', 'Terillium', 'Thingworx', 'Wipro', 'workato', 'Xebialabs'
];

const Vendors = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to collaborate with top companies and deliver exceptional results
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 }
          }}
          loop={true}
        >
          {vendors.map((vendor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center h-32 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative w-full h-16 flex items-center justify-center">
                  <img 
                    src={`/img/${vendor}.jpg`} 
                    alt={vendor}
                    className="max-h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <div className="inline-flex items-center space-x-6">
            <div className="flex items-center text-white">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>Active Partnerships</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="text-gray-300">
              <span className="text-2xl font-bold">22+</span>
              <span className="ml-2">Global Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;