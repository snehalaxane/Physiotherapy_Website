import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';
import { TherapyList } from '../pages/TherapyData';

const TherapyPage = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="bg-blue-950 py-24 px-8 relative overflow-hidden">
        {/* Decorative elements for a medical-tech feel */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-96 h-96 bg-[#A1C948] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10 animate-reveal">
            <Zap size={14} className="text-[#A1C948]" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Advanced Equipment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 animate-reveal">
            Our <span className="text-[#A1C948]">Therapies</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto opacity-80 text-lg font-light animate-reveal" style={{ animationDelay: '0.2s' }}>
            Experience faster recovery with our evidence-based physical therapy modalities using state-of-the-art medical technology.
          </p>
        </div>
      </section>

      {/* Grid Section - Updated for 4 Columns */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TherapyList.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-flip-card bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with Hover Zoom */}
              <div className="overflow-hidden h-44 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-poppins font-bold text-[#095884] mb-3 group-hover:text-[#A1C948] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                  <Link 
                    to="/contact-us"
                    className="flex items-center gap-1 text-[#095884] font-bold text-[10px] uppercase tracking-wider hover:gap-3 transition-all hover:text-[#A1C948]"
                  >
                    Book Slot <ChevronRight size={14} className="text-[#A1C948]" />
                  </Link>
                  <span className="text-[9px] font-black text-slate-200 group-hover:text-[#A1C948]/30 transition-colors uppercase">
                    Modality {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TherapyPage;