import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // For the close button

import img1 from "../assets/ClinicalGallery/Img1.jpg";
import img2 from "../assets/ClinicalGallery/Img2.jpg";
import img3 from "../assets/ClinicalGallery/Img3.jpg";
import img4 from "../assets/ClinicalGallery/Img4.jpg";
import img5 from "../assets/ClinicalGallery/Img5.jpg";
import img6 from "../assets/ClinicalGallery/Img6.jpg";
import img7 from "../assets/ClinicalGallery/Img7.jpg";
import img8 from "../assets/ClinicalGallery/Img8.jpg";
import img9 from "../assets/ClinicalGallery/Img9.jpg";
import img10 from "../assets/ClinicalGallery/Img10.jpg";
import img11 from "../assets/ClinicalGallery/Img11.jpg";


const clinicalData = [
   { id: 1, image: img1, title: "Clinical Treatments" },
   { id: 2, image: img2, title: "Clinical Treatments" },
   { id: 3, image: img3, title: "Clinical Treatments" },
   { id: 4, image: img4, title: "Clinical Treatments" },
   { id: 5, image: img5, title: "Clinical Treatments" },
   { id: 6, image: img6, title: "Clinical Treatments" },
   { id: 7, image: img7, title: "Clinical Treatments" },
   { id: 8, image: img8, title: "Clinical Treatments" },
     { id: 9, image: img9, title: "Clinical Treatments" },
   { id: 10, image: img10, title: "Clinical Treatments" },
   { id: 11, image: img11, title: "Clinical Treatments" },

];

function ClinicalFeed() {
  // 1. State to track the selected image
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="mb-16 px-4">
      <h2 className="text-3xl font-bold text-[#095884] mb-8 text-center">Clinical Feed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clinicalData.map((item) => (
          <motion.div 
            key={item.id} 
            layoutId={`img-${item.id}`} // For smooth transition
            onClick={() => setSelectedImg(item)} // 2. Set the image on click
            className="group relative overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer transition-all duration-500 hover:shadow-2xl"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. The Modal / Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Close Button */}
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white hover:text-[#A1C948] transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            {/* Full View Image Container */}
            <motion.div 
              layoutId={`img-${selectedImg.id}`}
              className="relative z-[105] max-w-5xl w-full flex flex-col items-center"
            >
              <img 
                src={selectedImg.image} 
                alt={selectedImg.title} 
                className="max-h-[85vh] w-auto rounded-xl shadow-2xl object-contain"
              />
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white text-xl font-bold mt-6"
              >
                {selectedImg.title}
              </motion.h3>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ClinicalFeed;