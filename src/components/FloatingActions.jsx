import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "919700354747"; // Replace with your actual number
  const whatsappMessage = encodeURIComponent("Hello! I would like to book a physiotherapy consultation.");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999]">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
          Chat with us
        </span>
        <MessageCircle size={28} fill="currentColor" />
      </a>

      {/* Caller Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="group flex items-center gap-3 bg-[#095884] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Call Us"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
          Call Now
        </span>
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default FloatingActions;