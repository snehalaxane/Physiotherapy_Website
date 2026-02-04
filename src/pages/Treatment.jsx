import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Search, ChevronRight, Activity } from 'lucide-react';
import { TherapyList } from './TreatmentList';

const TherapyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = TherapyList.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="bg-[#FDFCFB] min-h-screen">
      {/* Search Header */}
      <section className="bg-blue-950 py-10 px-8 overflow-hidden relative">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#A1C948] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block animate-reveal">
            Advanced Rehabilitation
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-1 animate-reveal">
            Our Treatment <span className="text-[#A1C948]">Modalities</span>
          </h1>
          
          {/* Animated Search Bar */}
          {/* <div className="max-w-2xl mx-auto relative animate-reveal" style={{ animationDelay: '0.2s' }}>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search therapies (e.g., 'Traction', 'Laser')..."
              className="w-full py-5 pl-14 pr-6 rounded-2xl text-blue-900 shadow-2xl outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}
        </div>
      </section>
      
      {/* Grid Section - Updated to max-w-[1440px] and lg:grid-cols-4 */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-therapy-card bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                {/* Visual Accent: Floating badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black text-blue-950 uppercase tracking-widest shadow-sm flex items-center gap-1">
                  <Activity size={10} className="text-teal-500" />
                  Technology
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold font-poppins text-[#095884] mb-3 group-hover:text-[#A1C948] transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-xs line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {item.fullContent.substring(0, 100)}...
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <Link 
                    to="/contact-us"
                    className="flex items-center gap-1 text-blue-900 font-bold text-[10px] uppercase tracking-wider hover:gap-2 transition-all hover:text-[#A1C948]"
                  >
                    Book Now <ChevronRight size={14} />
                  </Link>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-gray-300 uppercase">Available</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-32 animate-reveal">
            <div className="inline-flex p-6 bg-gray-50 rounded-full mb-4">
               <Search size={40} className="text-gray-300" />
            </div>
            <p className="text-gray-400 font-medium">No treatment modalities match your search.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default TherapyPage;