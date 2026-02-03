import React, { useState } from 'react';
// Import your two sections
import ClinicalSection from '../components/ClinicalFeed';
import SocialSection from '../components/SocialFeed';

const GalleryPage = () => {
  // 1. Create the state to track the active tab
  const [activeTab, setActiveTab] = useState('clinical');

  return (
    <div className="min-h-screen bg-slate-50 pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#095884] mb-4">Our Gallery</h1>
          <p className="text-slate-500">Explore our clinic and community activities</p>
        </div>

        {/* 2. The Tabs UI */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex gap-2">
            <button
              onClick={() => setActiveTab('clinical')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'clinical' 
                ? 'bg-[#095884] text-white shadow-lg' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              Clinical
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'social' 
                ? 'bg-[#095884] text-white shadow-lg' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              Social
            </button>
          </div>
        </div>

        {/* 3. Conditional Rendering */}
        <div className="mt-8">
          {activeTab === 'clinical' ? (
            <ClinicalSection />
          ) : (
            <SocialSection />
          )}
        </div>

      </div>
    </div>
  );
};

export default GalleryPage;