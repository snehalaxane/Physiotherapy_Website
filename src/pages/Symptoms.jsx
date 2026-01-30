import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { allSymptoms } from '../pages/SymptomData'; // We will create this next

const Symptoms = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Convert the object to an array so we can filter and map it
  const symptomsArray = Object.keys(allSymptoms).map(key => ({
    id: key,
    ...allSymptoms[key]
  }));

  // Filter logic for the search bar
  const filteredSymptoms = symptomsArray.filter(symptom =>
    symptom.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F5F3F0] min-h-screen font-poppins">
      {/* Header Section */}
      <section className="bg-[#095884] py-20 px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Symptoms We Treat</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10">
          Identify your symptoms and discover how specialized physiotherapy can help you regain mobility and live pain-free.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a symptom (e.g. Back Pain, Vertigo...)"
            className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A1C948]"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map((symptom) => (
              <div 
                key={symptom.id} 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="mb-6 overflow-hidden rounded-2xl h-48">
                  <img 
                    src={symptom.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"} 
                    alt={symptom.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#095884] mb-3">
                  {symptom.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-8 flex-grow">
                  {symptom.excerpt}
                </p>

                <Link 
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-[#A1C948] font-bold hover:text-[#095884] transition-colors"
                >
                  Book Appointment <ArrowRight size={18} />
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-500">No symptoms found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Symptoms;