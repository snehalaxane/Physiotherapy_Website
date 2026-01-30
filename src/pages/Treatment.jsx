import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Search, ChevronRight, Activity, Zap, Info } from 'lucide-react';
import { TherapyList } from './TreatmentList'; // <--- IMPORT DATA HERE

const TherapyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = TherapyList.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="bg-[#FDFCFB] min-h-screen">
      {/* Search Header */}
      <section className="bg-blue-950 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-poppins text-white mb-6">Our Treatment Modalities</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search therapies (e.g., 'Traction', 'Laser')..."
              className="w-full py-4 pl-12 pr-4 rounded-xl text-blue-900 shadow-2xl outline-none focus:ring-2 focus:ring-teal-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins text-blue-950 mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
            <p className="text-gray-500 text-sm line-clamp-2 mb-6">
  {/* Show only the first 100 letters followed by dots */}
  {item.fullContent.substring(0, 100)}...
</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <Link 
                    to={`/offerings/treatments/${item.id}`} // This now pulls from the 'id' in your data
                    className="flex items-center gap-1 text-blue-900 font-bold text-xs uppercase tracking-tighter hover:text-teal-600 transition-colors"
                  >
                    Read More <ChevronRight size={14} />
                  </Link>
                  {/* ... icons ... */}
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