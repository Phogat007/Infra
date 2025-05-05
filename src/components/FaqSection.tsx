import { useState } from 'react';
import { HelpCircle, MessageCircle } from 'lucide-react';

// Custom FAQ accordion component
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-blue-100 last:border-b-0">
      <button 
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="text-blue-900 font-medium">
          <span className="text-lg hover:text-blue-700 transition-colors duration-300">{question}</span>
        </div>
        <div className={`flex items-center justify-center h-6 w-6 rounded-full transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
          {isOpen ? (
            <span className="text-sm font-bold">−</span>
          ) : (
            <span className="text-sm font-bold">+</span>
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5 pt-1 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I purchase Infra Industries products?",
      answer: "You can place an order by visiting our official website or by contacting our nearest distributor. Our products are also available through select retail partners across India."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept UPI, Net Banking, Debit/Credit Cards (Visa, MasterCard, RuPay), and bank transfers. For bulk or B2B orders, payment via cheque or NEFT is also accepted."
    },
    {
      question: "What is the delivery timeline for orders?",
      answer: "Delivery within Maharashtra usually takes 3-5 working days. For other regions in India, delivery may take 5-10 working days depending on the location and size of the order."
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Yes, if there is any damage during transport or manufacturing defect, we offer hassle-free replacements within 7 days of delivery. Kindly retain the original packaging and invoice for verification."
    },
    {
      question: "Are your water tanks and furniture made with safe materials?",
      answer: "Absolutely. Our water storage containers are food-grade and UV-stabilized to ensure safe and long-lasting usage. Our furniture is crafted using premium plastic and cane-finish materials that are durable, lightweight, and weather-resistant."
    }
  ];
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-800/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
            If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-50 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-medium text-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <MessageCircle className="mr-3 h-5 w-5" />
              Still Have Questions? Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}