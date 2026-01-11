// src/components/Home/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sejal Leon',
    position: 'Managing Director',
    content: 'I am extremely impressed with Wirecto Technologies. Their team has been able to provide me with innovative and reliable technology solutions for my business. The level of professionalism and expertise they bring to the table is truly commendable. Since implementing their solutions, I have seen a significant improvement in my operations and efficiency.',
    image: '/img/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'S. A. Rehman',
    position: 'SEO - Elome',
    content: 'The final result exceeded my expectations. The technology solution developed by Wirecto Technologies has streamlined my business processes, improved efficiency, and helped me save time and resources. The level of professionalism, technical expertise, and commitment to excellence has made a significant positive impact on my business.',
    image: '/img/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'John Thomas',
    position: 'Managing Director',
    content: 'I highly recommend Wirecto Technologies to any business looking for innovative and reliable technology solutions. Their exceptional service, expertise, and dedication to customer satisfaction make them a trusted partner for any technology needs. Thank you, Wirecto Technologies, for your outstanding work!',
    image: '/img/testimonial-3.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Sofia Hayat',
    position: 'Director',
    content: 'Throughout the entire process, the team at Wirecto Technologies demonstrated outstanding communication skills and kept me updated on the progress of the project. They were always prompt in responding to my inquiries and were proactive in addressing any concerns or issues that arose.',
    image: '/img/testimonial-4.jpg',
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
            Testimonial
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say About Our Digital Services
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-accent font-medium">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Verified Client</span>
                    <span className="text-sm text-gray-500">⭐ 5.0 Rating</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;