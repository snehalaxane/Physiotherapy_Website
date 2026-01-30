import React from 'react';
import { Link } from 'react-router-dom';
import { TherapyList } from '../pages/TherapyData'; // Import your separate list

const TherapyPage = () => {
  return (

     <div className="bg-[#FDFCFB] min-h-screen">
     {/* Search Header */}
      <section className="bg-blue-950 py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Therapies</h1>
        </div>
      </section>

    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TherapyList.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-serif text-[#095884] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3 mb-6">{item.desc}</p>
              
              <Link 
                to={`/offerings/therapies/${item.id}`}
                className="text-white px-6 py-2 rounded-full font-bold text-xs uppercase"
                style={{ background: 'linear-gradient(135deg, #095884 0%, #A1C948 100%)' }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TherapyPage;