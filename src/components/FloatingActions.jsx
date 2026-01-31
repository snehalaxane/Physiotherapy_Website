import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "919700354747";
  const whatsappMessage = encodeURIComponent("Hello! I would like to book a physiotherapy consultation.");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] items-end">
      
      {/* WhatsApp Button */}
      <div className="relative flex items-center justify-end group">
        {/* Label - Only shows when THIS specific button is hovered */}
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#25D366] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
        
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 active:scale-95"
        >
          {/* Notification Ping Effect */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
          </span>
          
          {/* Real WhatsApp SVG Logo */}
          <svg 
            viewBox="0 0 24 24" 
            width="30" 
            height="30" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .01 5.437 0 12.045c0 2.112.552 4.173 1.598 6.01L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.604 0 12.039-5.437 12.042-12.045a11.85 11.85 0 00-3.574-8.528"/>
          </svg>
        </a>
      </div>

      {/* Caller Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#095884] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Call Specialist
        </span>
        
        <a
          href={`tel:+${phoneNumber}`}
          className="bg-[#095884] text-white p-3 md:p-4 rounded-full shadow-[0_10px_25px_rgba(9,88,132,0.4)] hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <Phone size={28} fill="currentColor" />
        </a>
      </div>

    </div>
  );
};

export default FloatingActions;