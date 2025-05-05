import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-800/5 blur-3xl"></div>

        {/* Animated dots */}
        <div className="absolute w-full h-full overflow-hidden opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 7}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-blue-800 mb-6 relative inline-block">
              INFRA
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <p className="text-gray-600 mb-6">
              Since 1991, Infra Industries Ltd. has been a trusted name in
              rotationally molded plastic products, known for durable water and
              chemical storage tanks across Maharashtra.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full text-blue-700 hover:text-blue-800 transition shadow-sm"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full text-blue-700 hover:text-blue-800 transition shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full text-blue-700 hover:text-blue-800 transition shadow-sm"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-blue-800 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#investor"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  Investor Desk
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  News
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-700 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-50 rounded-full text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-blue-800 mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 mr-3 mt-0.5 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-gray-600">
                  Survey No. 46, Plot No. 5,
                  <br />
                  Pen Khopoli Road, Village Arav,
                  <br />
                  P.O. Ransai, Pen,
                  <br />
                  Dist. Raigad, 402 107.
                </span>
              </li>

              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 mr-3 flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+14155550123"
                  className="text-gray-600 hover:text-blue-700"
                >
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 mr-3 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:info@INFRA.com"
                  className="text-gray-600 hover:text-blue-700"
                >
                  info@INFRA.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 mr-3 mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="text-gray-600">
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 4pm
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-serif font-bold text-blue-800 mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions? Send us a message and we'll respond as soon as
              possible.
            </p>

            <div className="relative">
              <Input
                type="text"
                placeholder="Your Name"
                className="border-blue-200 bg-blue-50/50 text-blue-900 placeholder:text-blue-400 rounded-lg pl-4 pr-4 h-12 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                className="border-blue-200 bg-blue-50/50 text-blue-900 placeholder:text-blue-400 rounded-lg pl-4 pr-4 h-12 focus:border-blue-400 focus:ring focus:ring-blue-200 transition-all duration-300"
                required
              />
            </div>

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg w-full py-3 flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-blue-200/50"
            >
              Send Message
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="container relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>

      {/* Copyright */}
      <div className="py-6 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} INFRA. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-base mt-1">
              Made with ❤️ by{" "}
              <a
                href="https://flux8labs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                flux8labs
              </a>
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 text-sm flex items-center"
              >
                <CheckCircle className="h-3 w-3 mr-1 text-blue-500" />
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 text-sm flex items-center"
              >
                <CheckCircle className="h-3 w-3 mr-1 text-blue-500" />
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
