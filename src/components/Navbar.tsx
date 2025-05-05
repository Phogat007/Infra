import React, { useState, useEffect } from "react";
import { Menu, X, Search, Droplet } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "#markets", text: "Markets" },
    { href: "#story", text: "Our Story" },
    { href: "#products", text: "Our Products" },
    { href: "#contact", text: "Contact" }
  ];
  
  const NavLink = ({ href, text, mobile = false }) => (
    <a
      href={href}
      className={mobile ? 
        "text-blue-900 hover:text-blue-700 hover:bg-blue-50 py-2 px-3 rounded-md transition-colors font-medium" : 
        "text-blue-900 hover:text-blue-700 font-medium transition-colors duration-200 px-1 py-2 relative group"}
      onClick={mobile ? () => setIsMobileMenuOpen(false) : undefined}
    >
      {text}
      {!mobile && <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>}
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-gradient-to-r from-blue-50/80 to-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Droplet className="h-6 w-6 text-blue-700 mr-2" />
          <span className="text-blue-900 text-2xl font-bold">INFRA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} text={link.text} />
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="hidden md:flex items-center">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-colors duration-200 mr-3">
            <Search size={18} />
          </button>
          <a 
            href="#quote" 
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm shadow-blue-200/50 transition-all duration-300"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-colors duration-200">
            <Search size={18} />
          </button>
          <button
            className={`p-2 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'bg-blue-100 text-blue-700' : 'text-blue-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 border-t border-blue-50 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} text={link.text} mobile />
              ))}
              <div className="pt-3 mt-2 border-t border-blue-50">
                <a 
                  href="#quote" 
                  className="block w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-center shadow-sm shadow-blue-200/50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;