// src/components/Home/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    const slides = [
        {
            image: '/img/wbg-1.jpg',
            title: 'Innovative & Digitally Digital Solution',
            subtitle: 'Innovative & Digitally',
            buttonText: 'Free Quote',
            buttonLink: '/quote'
        },
        {
            image: '/img/wbg-2.jpg',
            title: 'Inventive & Visionary Tech Solution',
            subtitle: 'Inventive & Visionary',
            buttonText: 'Free Quote',
            buttonLink: '/quote'
        },
        {
            image: '/img/wbg-3.jpg',
            title: 'Creative & Innovative Software Solution',
            subtitle: 'Forward-thinking & Revolutionary',
            buttonText: 'Free Quote',
            buttonLink: '/quote'
        },
        {
            image: '/img/wbg-4.jpg',
            title: 'Creative & Innovative Design Solution',
            subtitle: 'Creative & Innovative',
            buttonText: 'Free Quote',
            buttonLink: '/quote'
        },
    ];

    return (
        <div className="relative h-[80vh]">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative container mx-auto px-4 h-full flex items-center">
                                <div className="text-white max-w-3xl">
                                    <h5 className="text-xl md:text-2xl font-light mb-4 animate-fade-in-up">
                                        {slide.subtitle}
                                    </h5>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-zoom-in">
                                        {slide.title}
                                    </h1>
                                    <div className="flex flex-wrap gap-4 animate-slide-in-left">
                                        <Link
                                            to={slide.buttonLink}
                                            className="bg-accent hover:bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                                        >
                                            {slide.buttonText}
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;