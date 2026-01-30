import React from 'react';
import { useParams } from 'react-router-dom';
import { allSymptoms } from '../pages/SymptomData'; // Your big data file

const SymptomDetail = () => {
  // 1. Get the ID from the URL (e.g., 'mononeuropathy')
  const { id } = useParams();
  
  // 2. Find the specific data for that ID
  const data = allSymptoms[id];

  // 3. Handle if the symptom doesn't exist
  if (!data) return <div className="py-20 text-center">Symptom Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-8 font-poppins">
      <h1 className="text-4xl font-bold text-[#095884] mb-4">{data.title}</h1>
      <img src={data.image} alt={data.title} className="w-full h-80 object-cover rounded-3xl mb-8" />
      
      <div className="prose prose-lg text-gray-600">
        <p className="text-xl font-medium text-[#A1C948] mb-6">{data.excerpt}</p>
        <div className="leading-relaxed">
          {/* This is where your unique detailed data goes */}
          {data.fullContent} 
        </div>
      </div>
    </div>
  );
};

export default SymptomDetail;