import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Check, Award, Shield } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const Hero = () => {
  // Using different placeholder sizes to ensure proper loading
  const carouselImages = [
    {
      src: "/img/slide-1.png",
      alt: "Industrial water tank installation",
    },
    {
      src: "/img/slide-2.png",
      alt: "Commercial water storage solutions",
    },
    {
      src: "/img/slide-3.png",
      alt: "Residential water tanks",
    },
  ];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  // Auto-play functionality
  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000); // Auto-change every 4 seconds
      
      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <section className="pt-28 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-800/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-3xl"></div>
      
      <div className="container flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Hero Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pr-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <Droplet className="mr-2 h-4 w-4" />
            <span>Excellence Since 1991</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-2">
            Water and Industrial
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
            Storage Solutions
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            At Infra Industries Ltd., we've been committed since 1991 to producing the finest quality storage products using premium materials. From industrial to residential storage containers & tanks, we deliver complete solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 h-auto rounded-lg flex items-center text-lg shadow-md shadow-blue-200/50">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-200 px-6 py-3 h-auto rounded-lg flex items-center text-lg transition-all duration-300">
              Request Quote
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-blue-100">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">10-Year Warranty</p>
                <p className="text-sm text-gray-500">Guaranteed durability</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Award className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">ISO Certified</p>
                <p className="text-sm text-gray-500">Quality guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Carousel */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-300/30 blur-2xl"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl"></div>
            
            <div className="relative z-10">
              <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-lg">
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative">
                        <div className="w-full h-72 md:h-96 bg-blue-100 rounded-xl overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                            <p className="text-white font-medium">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Feature badges */}
              <div className="absolute -right-4 md:right-4 top-8 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <Check className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-sm font-medium text-blue-900">UV Resistant</span>
                </div>
              </div>
              <div className="absolute -left-4 md:left-4 bottom-24 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <Check className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-sm font-medium text-blue-900">BPA-Free Material</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick stats section */}
      <div className="container mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 bg-white rounded-xl shadow-md border border-blue-50">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">10,000+</p>
            <p className="text-sm text-gray-600">Installations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">30+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">99%</p>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">50+</p>
            <p className="text-sm text-gray-600">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;