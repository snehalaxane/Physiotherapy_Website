import React, { useState } from 'react'; // 1. Import useState
import doctorimg from "../assets/doctorimg.png";
import { ArrowUpRight, Star, Plus, MessageCircle } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import AppointmentForm from '../components/AppointmentForm';
import RecoveryStories from '../components/RecoveryStories';
// import FeaturedServices from '../components/FeaturedServices';
import Therapy from '../pages/Therapy';
import FaqSection from '../components/FaqSection';

const PhysioHero = () => {
  // 2. Track which "slide" is active (0 or 1)
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=400"
  ];

  // 3. Logic: If activeSlide is 0, show img 0 & 1. If 1, show img 1 & 2.
  const visibleImages = activeSlide === 0 ? [images[0], images[1]] : [images[1], images[2]];

  return (
    <>
      {/* HERO SECTION - Background and padding limited to this section only */}
      <section className="relative min-h-screen bg-[#F5F3F0] px-8 py-12 font-serif overflow-hidden">
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
          {/* <span className="text-sm font-sans font-bold text-blue-900">01 ——————</span>
          <span className="text-sm font-sans font-bold text-blue-900 uppercase tracking-widest">Physio</span> */}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-center">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-3 z-10 space-y-8">
            <div>
              <h2 className="text-5xl text-blue-950 mb-4 leading-tight">Welcome To <br/> Sri Sai Priya Physiotherapy</h2>
              <div className="flex text-orange-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 font-sans text-m leading-relaxed">
                Where specialized care meets personalized recovery plans for every patient.
              </p>
            </div>
            
            <div className="pt-8 text-blue-950 font-bold">
               <div className="flex items-center gap-2 text-5xl">
                  <span className="bg-blue-600 text-white p-2 rounded-full scale-50"><Plus /></span>
                  125+
               </div>
               <p className="text-m text-gray-500 font-sans mt-2 italic font-normal">Where Healing Begins, Transformation Follows.</p>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center">
            <div className="relative p-4 bg-white shadow-2xl rotate-[-2deg] max-w-md">
              <img src={doctorimg} alt="Lead Doctor" className="w-full h-auto" />
              <div className="absolute -left-14 bottom-20 bg-[#2B6191] text-white p-4 rounded-sm flex items-center gap-4 shadow-lg min-w-[240px] rotate-[2deg]">
                 <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full border-2 border-blue-400" alt="doc" />
                 <div>
                    <p className="font-sans font-bold text-sm">Dr. XYZ</p>
                    <p className="text-xs opacity-80 font-sans">Lead Specialist</p>
                 </div>
                 <MessageCircle className="ml-auto opacity-80" size={18} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 lg:col-span-4 z-10">
            <h1 className="text-6xl text-blue-950 leading-[1.1] mb-8">
              See Your Path <br/> To Recovery <br/> Begins.
              <button className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full ml-4 align-middle">
                <ArrowUpRight size={20} />
              </button>
            </h1>

            {/* IMAGE SLIDER AREA */}
            <div className="flex gap-4 mt-12 transition-all duration-500 ease-in-out">
              {visibleImages.map((src) => (
                <div key={src} className="w-1/2 h-48 overflow-hidden rounded-sm shadow-md animate-in fade-in slide-in-from-right-4 duration-500">
                  <img src={src} className="w-full h-full object-cover" alt="therapy" />
                </div>
              ))}
            </div>

            {/* PAGINATION DOTS */}
            <div className="flex gap-2 mt-6 justify-center">
              <button 
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all duration-300 ${activeSlide === 0 ? "w-6 bg-blue-800" : "w-2 bg-blue-300"}`}
              />
              <button 
                onClick={() => setActiveSlide(1)}
                className={`h-2 rounded-full transition-all duration-300 ${activeSlide === 1 ? "w-6 bg-blue-800" : "w-2 bg-blue-300"}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE THE HERO SECTION - Now these can take 100% width */}
      <TeamSection />
      <AppointmentForm />
      <RecoveryStories /> 
      <FaqSection />
    </>
  );
};

export default PhysioHero;