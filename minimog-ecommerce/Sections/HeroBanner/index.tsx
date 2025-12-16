"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Responsible Denim Lab",
            subtitle: "New Arrivals",
            buttonText: "Shop Now",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-2.jpg?v=1747132121&width=3840",
            footerText: "The ReCotton Tee",
            footerLink: "#"
        },
        {
            title: "Ultimate Winter Warmer",
            subtitle: "New Collection",
            buttonText: "Shop Now",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-1.jpg?v=1747132121&width=3840",
            footerText: "Winter Collection",
            footerLink: "#"
        },
        {
            title: "Spring Fashion",
            subtitle: "Latest Trends",
            buttonText: "Discover More",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-3.jpg?v=1747132121&width=3840",
            footerText: "Spring Collection",
            footerLink: "#"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: React.SetStateAction<number>) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full h-150 lg:h-175 bg-gray-100 overflow-hidden">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent"></div>
                        </div>
                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center h-full">
                                <div className="max-w-xl">
                                    <p className="text-[20px] font-medium text-black mb-2 tracking-wider">
                                        {slide.subtitle}
                                    </p>
                                    <h1 className="text-5xl lg:text-7xl font-medium text-black mb-8 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <button className="px-8 py-3 rounded-[10px] border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-8 right-8 hidden lg:block">
                                <a href={slide.footerLink} className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
                                    <span className="mr-2 font-medium">{slide.footerText}</span>
                                    <span className="font-semibold">| Shop Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
            >
                <ChevronLeft size={24} className="text-gray-900" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
            >
                <ChevronRight size={24} className="text-gray-900" />
            </button>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-gray-900 h-8'
                                : 'bg-gray-400 hover:bg-gray-600'
                            }`}
                    />
                ))}
            </div>
            <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 flex-col gap-0">
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                    </svg>
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                </button>
            </div>
        </section>
    );
}