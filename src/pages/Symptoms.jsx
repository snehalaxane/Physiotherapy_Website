import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { allSymptoms } from '../pages/SymptomData';

const Symptoms = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const symptomsArray = Object.keys(allSymptoms).map(key => ({
    id: key,
    ...allSymptoms[key]
  }));

  const filteredSymptoms = symptomsArray.filter(symptom =>
    symptom.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F5F3F0] min-h-screen font-poppins">
      {/* Header Section */}
      <section className="bg-[#095884] py-20 px-8 text-center text-white overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-reveal relative z-10">
          Symptoms We Treat
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10 animate-reveal relative z-10" style={{ animationDelay: '0.2s' }}>
          Identify your symptoms and discover how specialized physiotherapy can help you regain mobility and live pain-free.
        </p>

        {/* Animated Search Bar */}
        {/* <div className="max-w-xl mx-auto relative animate-reveal z-10" style={{ animationDelay: '0.4s' }}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a symptom (e.g. Back Pain, Vertigo...)"
            className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A1C948] shadow-2xl transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
      </section>

      {/* Grid Section - Updated for 4 columns and wider max-width */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map((symptom, index) => (
              <div 
                key={symptom.id} 
                className="animate-symptom-card bg-white rounded-[2rem] p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="mb-5 overflow-hidden rounded-2xl h-44 relative">
                  <img 
                    src={symptom.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"} 
                    alt={symptom.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <h3 className="text-xl font-bold text-[#095884] mb-3 group-hover:text-[#A1C948] transition-colors line-clamp-1">
                  {symptom.title}
                </h3>
                
                <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {symptom.excerpt}
                </p>

                <Link 
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-[#A1C948] text-sm font-bold hover:gap-4 transition-all uppercase tracking-wider"
                >
                  Consult Now <ArrowRight size={16} />
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 animate-reveal">
              <p className="text-xl text-gray-500">No symptoms found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Symptoms;