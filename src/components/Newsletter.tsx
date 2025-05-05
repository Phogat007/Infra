import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, ArrowRight, Bell } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  const BenefitItem = ({ text }) => (
    <div className="flex items-center text-blue-700">
      <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
      <span>{text}</span>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-800/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-3xl"></div>
        
        {/* Animated dots */}
        <div className="absolute w-full h-full overflow-hidden opacity-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 7}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-700 relative overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer"></div>
          </div>
          
          <div className="p-10 md:p-14">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
                <Bell className="mr-2 h-4 w-4" />Stay Updated
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-7 relative inline-block">
                Join Our Newsletter
                <span className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-blue-500 rounded-full"></span>
              </h2>
              
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Subscribe to stay updated with our latest products, exclusive offers, and market insights.
              </p>
              
              <div className="relative max-w-md mx-auto transition-all duration-300">
                {!isSubmitted ? (
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="border-blue-200 bg-blue-50/50 text-blue-900 placeholder:text-blue-400 rounded-full pl-12 pr-6 py-6 h-auto focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300"
                        />
                      </div>
                      <Button 
                        onClick={handleSubmit}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full px-8 py-6 h-auto flex items-center gap-2 group transition-all duration-300 shadow-md shadow-blue-200/50"
                      >
                        Subscribe
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    {/* Floating features */}
                    <div className="absolute -top-3 -right-3 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium text-blue-700 border border-blue-100 hidden sm:flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1 text-blue-500" />No spam, ever
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-8 rounded-xl bg-blue-50 border border-blue-100 animate-fadeIn">
                    <CheckCircle className="text-blue-600 h-6 w-6 mr-2" />
                    <p className="text-blue-800 font-medium">Thank you for subscribing!</p>
                  </div>
                )}
              </div>
              
              <p className="text-gray-500 text-xs mt-4 max-w-sm mx-auto">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
          
          {/* Bottom benefit bar */}
          <div className="bg-blue-50 py-4 px-6 border-t border-blue-100">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
              {['Weekly Updates', 'Exclusive Offers', 'Unsubscribe Anytime'].map(text => 
                <BenefitItem key={text} text={text} />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Newsletter;