import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, ThumbsUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Homeowner, Jaipur",
      quote: "I installed Infra's water storage tank last year, and it's been flawless. The quality is top-notch, and it withstands the harsh Rajasthan summers with ease.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      highlight: "Exceptional Durability",
      date: "April 2025"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Interior Designer, Mumbai",
      quote: "Infra's plastic-cane finish chairs added elegance to my client's home. They're stylish, sturdy, and eco-friendly—exactly what I was looking for.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      highlight: "Stylish & Sustainable",
      date: "March 2025"
    },
    {
      id: 3,
      name: "Anil Mehta",
      title: "Factory Manager, Pune",
      quote: "We've been using Infra's industrial storage tanks for over a decade. Their reliability and low maintenance have significantly improved our operations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      highlight: "Industrial Reliability",
      date: "May 2025"
    },
    {
      id: 4,
      name: "Sunita Verma",
      title: "Hotel Owner, Delhi",
      quote: "Our hotel's rooftop garden now features Infra's plastic-cane tables and chairs. Guests love the comfort and design, and they're weather-resistant too.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/70.jpg",
      highlight: "Guest Favorite",
      date: "February 2025"
    },
    {
      id: 5,
      name: "Vikram Singh",
      title: "Contractor, Bengaluru",
      quote: "Infra Industries has been my go-to for water tanks on all my projects. Their prompt service and quality products make them a reliable partner.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      highlight: "Trusted Partnership",
      date: "January 2025"
    }
  ];
  
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => handleNavigation("next"), 5000);
    return () => clearInterval(interval);
  }, [activeIndex, autoplay]);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === "next") {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else if (direction === "prev") {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (typeof direction === "number" && direction !== activeIndex) {
      setActiveIndex(direction);
    }
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextIndex = (activeIndex + 1) % testimonials.length;
  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-800/5 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-blue-200/10 blur-3xl animate-pulse"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-5">
            <MessageSquare className="inline-block mr-2 h-4 w-4" />
            Customer Experiences
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative">
            What Our Customers Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why customers love our INFRA and keep coming back for more.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured testimonial */}
            <div className="lg:col-span-8">
              <Card className={`bg-white border-none shadow-xl overflow-hidden h-full transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer"></div>
                </div>
                
                <CardContent className="pt-8 pb-6 px-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 w-24 h-24 rounded-full border-2 border-blue-400/30"></div>
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 z-10 relative shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1 shadow-md">
                        <ThumbsUp className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">
                        <Award className="w-3 h-3 mr-1" />
                        {activeTestimonial.highlight}
                        <span className="ml-2 text-blue-500 text-xs">{activeTestimonial.date}</span>
                      </div>
                      
                      <blockquote className="text-gray-700 text-lg italic mb-6">"{activeTestimonial.quote}"</blockquote>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-blue-900 text-xl font-bold">{activeTestimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{activeTestimonial.title}</p>
                        </div>
                        
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < activeTestimonial.rating ? "text-blue-500 fill-blue-500" : "text-gray-300"}`} />
                          ))}
                          <span className="ml-2 text-blue-700 font-bold">{activeTestimonial.rating}.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Navigation controls */}
              <div className="flex justify-center mt-6 gap-2">
                <Button onClick={() => handleNavigation("prev")} className="rounded-full w-10 h-10 p-0 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 shadow-md">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-blue-600 w-6" : "bg-blue-300 hover:bg-blue-400"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
                
                <Button onClick={() => handleNavigation("next")} className="rounded-full w-10 h-10 p-0 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 shadow-md">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Preview cards */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-4">
              {/* Next preview */}
              <Card onClick={() => handleNavigation("next")} className="bg-white border-l-4 border-l-blue-500 shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <img src={testimonials[nextIndex].image} alt={testimonials[nextIndex].name} className="w-12 h-12 rounded-full object-cover border border-blue-200" />
                  <div className="flex-1 truncate">
                    <p className="font-medium text-blue-900">{testimonials[nextIndex].name}</p>
                    <p className="text-xs text-gray-500 truncate">{testimonials[nextIndex].quote.substring(0, 60)}...</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                </CardContent>
              </Card>
              
              {/* Previous preview */}
              <Card onClick={() => handleNavigation("prev")} className="bg-white border-l-4 border-l-blue-300 shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <img src={testimonials[prevIndex].image} alt={testimonials[prevIndex].name} className="w-12 h-12 rounded-full object-cover border border-blue-200" />
                  <div className="flex-1 truncate">
                    <p className="font-medium text-blue-900">{testimonials[prevIndex].name}</p>
                    <p className="text-xs text-gray-500 truncate">{testimonials[prevIndex].quote.substring(0, 60)}...</p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-blue-500" />
                </CardContent>
              </Card>
              
              {/* Autoplay toggle */}
              <Button onClick={() => setAutoplay(!autoplay)} variant="ghost" size="sm" className={`mt-2 text-xs ${autoplay ? 'text-blue-700' : 'text-gray-500'}`}>
                {autoplay ? 'Auto-rotate: On' : 'Auto-rotate: Off'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-6 bg-white rounded-xl shadow-md border border-blue-50">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "92%", label: "Repeat Customers" },
              { value: "10k+", label: "Products Sold" }
            ].map((stat, i) => (
              <div key={i} className="text-center transform transition-all duration-300 hover:scale-105">
                <p className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;