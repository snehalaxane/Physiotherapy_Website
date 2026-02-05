import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "919700354747";
  const whatsappMessage = encodeURIComponent("Hello! I would like to book a physiotherapy consultation.");
  const youtubeChannelUrl = "https://www.youtube.com/@dr.madhuyadav48";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] items-end">
      

      {/* 1. YouTube Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#FF0000] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Watch on YouTube
        </span>
        <a
          href={youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#FF0000] p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 active:scale-95 border border-gray-100"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>

      {/* 1. Instagram Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#E4405F] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Instagram
        </span>
        <a
          href="https://www.instagram.com/sri_sai_priya_physiotherapy/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#E4405F] p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 active:scale-95 border border-gray-100"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.2-4.354-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      </div>

      {/* 2. Facebook Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#1877F2] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Facebook
        </span>
        <a
          href="https://www.facebook.com/nuneti"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      {/* 3. WhatsApp Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#25D366] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
          </span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .01 5.437 0 12.045c0 2.112.552 4.173 1.598 6.01L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.604 0 12.039-5.437 12.042-12.045a11.85 11.85 0 00-3.574-8.528"/>
          </svg>
        </a>
      </div>

      {/* 4. Caller Button */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#095884] px-4 py-2 rounded-xl shadow-xl text-sm font-bold pointer-events-none border border-gray-100 translate-x-4 group-hover:translate-x-0">
          Call Specialist
        </span>
        <a
          href={`tel:+${phoneNumber}`}
          className="bg-[#095884] text-white p-3 md:p-4 rounded-full shadow-[0_10px_25px_rgba(9,88,132,0.4)] hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <Phone size={20} fill="currentColor" />
        </a>
      </div>
      
    </div>
  );
};

export default FloatingActions;