
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StorySection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden"
      id="story"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-800/5 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative max-w-[500px] mx-auto">
            <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-blue-300/30 blur-2xl"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl"></div>

            <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
              <img
                src="img/story.avif"
                alt="Our story"
                className="w-full h-auto max-h-[100rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-700 rounded-full flex items-center justify-center p-5 shadow-lg z-20">
              <p className="text-white font-bold text-center">Since 1991</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
              <span>Our Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Our Story
            </h2>

            <div className="w-20 h-1 bg-blue-600 mt-4 mb-6"></div>

            <p className="text-lg text-gray-600 mb-4">
              Since 1991, Infra Industries Ltd. has been committed to delivering
              high-quality water and industrial storage products using premium
              materials. Our reliability has earned us a trusted name in the
              industry.
            </p>

            <p className="text-lg text-gray-600 mb-4">
              With decades of experience, we serve industrial, commercial, and
              residential storage needs—and have now expanded into durable,
              stylish plastic-cane finish furniture.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Our people are our strength. For over 26 years, the Infra Family
              has thrived on purpose, unity, and a shared drive for excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-md border border-blue-50">
                <h3 className="text-blue-900 text-xl font-bold mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm">
                  To deliver complete, reliable, and quality-driven plastic
                  solutions for storage and seating needs across sectors.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border border-blue-50">
                <h3 className="text-blue-900 text-xl font-bold mb-2">
                  Our Promise
                </h3>
                <p className="text-gray-600 text-sm">
                  Excellence in materials, craftsmanship, and a customer-first
                  approach every step of the way.
                </p>
              </div>
            </div>

            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 h-auto rounded-lg flex items-center text-lg shadow-md shadow-blue-200/50">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
