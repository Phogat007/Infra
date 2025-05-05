
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const marketItems = [
  {
    id: 1,
    title: "Building & Construction",
    description: "Durable storage and infrastructure solutions for construction sites.",
    image: "/img/buildings.avif",
    color: "from-gray-700/20 to-blue-700/20"
  },
  {
    id: 2,
    title: "Chemical & Pharma Industries",
    description: "Safe and compliant storage containers for chemical handling.",
    image: "/img/chemical.avif",
    color: "from-lime-600/20 to-green-700/20"
  },
  {
    id: 3,
    title: "Leisure & Home",
    description: "Cane-finish furniture and decor for home and garden use.",
    image: "/img/home.avif",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: 4,
    title: "OEM",
    description: "Customized components and containers for Original Equipment Manufacturers.",
    image: "/img/oem.avif",
    color: "from-zinc-800/20 to-slate-600/20"
  },
  {
    id: 5,
    title: "Material Handling",
    description: "Robust plastic drums and tanks designed for industrial logistics.",
    image: "/img/material.avif",
    color: "from-red-600/20 to-red-800/20"
  },
  {
    id: 6,
    title: "Fisheries & Marine Industries",
    description: "Reliable products built for aquatic farming and marine use.",
    image: "/img/fish.avif",
    color: "from-cyan-500/20 to-indigo-600/20"
  }
];


const Markets = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden" id="markets">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-800/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Our Markets
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our tailored water storage solutions designed for various markets and applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketItems.map((item) => (
            <div key={item.id} className="group">
              <div className="h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-blue-50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href={`/markets/${item.id}`} className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Markets;
