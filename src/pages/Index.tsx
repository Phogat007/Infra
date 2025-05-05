
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Markets from "@/components/Markets";
import StorySection from "@/components/StorySection";
import ProductGallery from "@/components/ProductGallery";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Markets />
        <StorySection />
        <ProductGallery />
        <FaqSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
