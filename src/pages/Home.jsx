import React, { useState ,useEffect} from 'react';
import doctorimg from "../assets/doctorimg.png";
import { ArrowUpRight, Star, Plus, MessageCircle } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import AppointmentForm from '../components/AppointmentForm';
import RecoveryStories from '../components/RecoveryStories';
import FeaturedServices from '../components/FeaturedServices';
import Therapy from '../pages/Therapy';
import FaqSection from '../components/FaqSectionTemp';
import doctor4 from "../assets/doctor4.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor1 from "../assets/doctor1.jpg";


const PhysioHero = () => {
  // 1. Create the array of 5 images
  const heroSlides = [
    doctorimg,
    doctor4,
    doctor3,
    doctor1,
    doctor2,
   
 
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // 2. Set up the 1-second timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 1000); // Changes every 1 second
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const images = [
    "https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=400",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400",
  ];
  const scrollImages = [...images, ...images];

  return (
    <>
      <section className="relative py-12 md:py-24 bg-[#F5F3F0] font-poppins overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-3 z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#095884] mb-8 leading-tight animate-fade-up">
              Welcome To <br className="hidden md:block"/> Sri Sai Priya Physiotherapy
            </h2>
            
            <div className="flex justify-center lg:justify-start text-orange-400 mb-4 animate-fade-up delay-200 opacity-0">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-up delay-400 opacity-0">
              Where specialized care meets personalized recovery plans for every patient.
            </p>
            
            <div className="pt-8 text-blue-950 font-bold animate-fade-up delay-600 opacity-0">
               <div className="flex items-center justify-center lg:justify-start gap-2 text-4xl md:text-5xl">
                  <span className="bg-[#A1C948] text-white p-2 rounded-full animate-bounce"><Plus /></span>
                  125+
               </div>
               <p className="text-sm md:text-base text-gray-500 mt-2">Where Healing Begins,<br/> Transformation Follows.</p>
            </div>
          </div>

          {/* CENTER COLUMN - Floating Doctor Image */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center py-10 md:py-0">
          <div className="relative p-2 md:p-4 bg-white shadow-2xl animate-float-hero w-[280px] md:w-[400px] aspect-[4/6] overflow-hidden">
             {/* Image Loop */}
              {heroSlides.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Physiotherapy"
                  className={`absolute inset-0 w-full h-full object-cover p-2 md:p-4 transition-all duration-500 ease-in-out ${
                    index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
              ))}
              
             {/* <div className="absolute -left-6 md:-left-14 bottom-10 md:bottom-20 bg-[#2B6191] text-white p-3 md:p-4 rounded-sm flex items-center gap-4 shadow-lg min-w-[200px] rotate-[2deg] z-30">
                 <div className="w-2 h-2 rounded-full bg-[#A1C948] animate-pulse"></div>
                 <div>
                    <p className="font-bold text-xs md:text-sm">Dr. Madhu</p>
                    <p className="text-[10px] md:text-xs">MPT, MIAP, MTC, CDNT, CWCT, FOMT<br/>CERTIFIED OSTEOPATH-CHIROPRACTOR (UK)</p>
                 </div>
              </div> */}
            </div>
          </div>

          {/* RIGHT COLUMN - Slide in Header */}
          <div className="col-span-12 lg:col-span-4 z-10 overflow-hidden text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-[#A1C948] leading-[1.1] mb-8 animate-reveal-right">
              See Your Path <br className="hidden md:block"/> 
              To Recovery <br className="hidden md:block"/> 
              Begins.
              
              <button className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-800 text-white rounded-full ml-4 align-middle transition-transform hover:scale-110 active:scale-95 shadow-lg">
                <ArrowUpRight size={20} />
              </button>
            </h1>

            {/* AUTO-SCROLLING AREA */}
            <div className="relative mt-8 md:mt-12 w-full overflow-hidden animate-fade-up delay-600 opacity-0">
              <div className="flex gap-4 animate-infinite-scroll w-max hover:[animation-play-state:paused] cursor-pointer">
                {scrollImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md border-2 md:border-4 border-white transition-transform hover:scale-105"
                  >
                    <img src={src} className="w-full h-full object-cover" alt="therapy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedServices />
      <TeamSection />
      <FaqSection />
      <RecoveryStories /> 
    </>
  );
};

export default PhysioHero;