import React, { useState } from "react";

import img2 from "../assets/Socialgallery/Img2.jpg"
import img4 from "../assets/Socialgallery/Img4.jpg"
import img10 from "../assets/Socialgallery/Img10.jpg";
// import img11 from "../assets/Socialgallery/img11.jpg";
import img12 from "../assets/Socialgallery/Img12.jpg";
import img13 from "../assets/Socialgallery/Img13.jpg";
import img14 from "../assets/Socialgallery/Img14.jpg";
import img15 from "../assets/Socialgallery/Img15.jpg";
import img16 from "../assets/Socialgallery/Img16.jpg";
import img17 from "../assets/Socialgallery/Img17.jpg";
import img18 from "../assets/Socialgallery/Img18.jpg";
import img20 from "../assets/Socialgallery/Img20.jpg";
import img21 from "../assets/Socialgallery/Img21.jpg";
import img22 from "../assets/Socialgallery/Img22.jpg";
import img23 from "../assets/Socialgallery/Img23.jpg";
import img24 from "../assets/Socialgallery/Img24.jpg";
import img25 from "../assets/Socialgallery/Img25.jpg";
import img26 from "../assets/Socialgallery/Img26.jpg";
import img27 from "../assets/Socialgallery/Img27.jpg";
import img28 from "../assets/Socialgallery/Img28.jpg";
import img29 from "../assets/Socialgallery/Img29.jpg";
import img30 from "../assets/Socialgallery/Img30.jpg";
import img31 from "../assets/Socialgallery/Img31.jpg";
import img32 from "../assets/Socialgallery/Img32.jpg";
import img33 from "../assets/Socialgallery/Img33.jpg";
import img34 from "../assets/Socialgallery/Img34.jpg";
import img35 from "../assets/Socialgallery/Img35.jpg";
import img36 from "../assets/Socialgallery/Img36.jpg";
import img37 from "../assets/Socialgallery/Img37.jpg";
import img38 from "../assets/Socialgallery/Img38.jpg";
import img39 from "../assets/Socialgallery/Img39.jpg";
import img40 from "../assets/Socialgallery/Img40.jpg";
import img41 from "../assets/Socialgallery/Img41.jpg";
import img42 from "../assets/Socialgallery/Img42.jpg";
import img43 from "../assets/Socialgallery/Img43.jpg";
import img44 from "../assets/Socialgallery/Img44.jpg";
import img45 from "../assets/Socialgallery/Img45.jpg";
import img46 from "../assets/Socialgallery/Img46.jpg";
import img47 from "../assets/Socialgallery/Img47.jpg";
import img48 from "../assets/Socialgallery/Img48.jpg";
import img49 from "../assets/Socialgallery/Img49.jpg";

const socialData = [
{ id: 2, image: img2, title: "Community Outreach", category: "Social" },
{ id: 4, image: img4, title: "Community Outreach", category: "Social" },
{ id: 10, image: img10, title: "Community Outreach", category: "Social" },
// { id: 11, image: img11, title: "Community Outreach", category: "Social" },
{ id: 12, image: img12, title: "Community Outreach", category: "Social" },
{ id: 13, image: img13, title: "Community Outreach", category: "Social" },
{ id: 14, image: img14, title: "Community Outreach", category: "Social" },
{ id: 15, image: img15, title: "Community Outreach", category: "Social" },
{ id: 16, image: img16, title: "Community Outreach", category: "Social" },
{ id: 17, image: img17, title: "Community Outreach", category: "Social" },
{ id: 18, image: img18, title: "Community Outreach", category: "Social" },
{ id: 20, image: img20, title: "Community Outreach", category: "Social" },
{ id: 21, image: img21, title: "Community Outreach", category: "Social" },
{ id: 22, image: img22, title: "Community Outreach", category: "Social" },
{ id: 23, image: img23, title: "Community Outreach", category: "Social" },
{ id: 24, image: img24, title: "Community Outreach", category: "Social" },
{ id: 25, image: img25, title: "Community Outreach", category: "Social" },
{ id: 26, image: img26, title: "Community Outreach", category: "Social" },
{ id: 27, image: img27, title: "Community Outreach", category: "Social" },
{ id: 28, image: img28, title: "Community Outreach", category: "Social" },
{ id: 29, image: img29, title: "Community Outreach", category: "Social" },
{ id: 30, image: img30, title: "Community Outreach", category: "Social" },
{ id: 31, image: img31, title: "Community Outreach", category: "Social" },
{ id: 32, image: img32, title: "Community Outreach", category: "Social" },
{ id: 33, image: img33, title: "Community Outreach", category: "Social" },
{ id: 34, image: img34, title: "Community Outreach", category: "Social" },
{ id: 35, image: img35, title: "Community Outreach", category: "Social" },
{ id: 36, image: img36, title: "Community Outreach", category: "Social" },
{ id: 37, image: img37, title: "Community Outreach", category: "Social" },
{ id: 38, image: img38, title: "Community Outreach", category: "Social" },
{ id: 39, image: img39, title: "Community Outreach", category: "Social" },
{ id: 40, image: img40, title: "Community Outreach", category: "Social" },
{ id: 41, image: img41, title: "Community Outreach", category: "Social" },
{ id: 42, image: img42, title: "Community Outreach", category: "Social" },
{ id: 43, image: img43, title: "Community Outreach", category: "Social" },
{ id: 44, image: img44, title: "Community Outreach", category: "Social" },
{ id: 45, image: img45, title: "Community Outreach", category: "Social" },
{ id: 46, image: img46, title: "Community Outreach", category: "Social" },
{ id: 47, image: img47, title: "Community Outreach", category: "Social" },
{ id: 48, image: img48, title: "Community Outreach", category: "Social" },
{ id: 49, image: img49, title: "Community Outreach", category: "Social" },
 
];

function SocialFeed() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
   <section className="mb-16 px-4">
      <h2 className="text-3xl font-bold text-[#095884] mb-8 text-center">Social Feed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedImg(item)} // Set image on click
            className="group relative overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="text-[#A1C948] text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all"
          onClick={() => setSelectedImg(null)} // Close when clicking background
        >
          {/* Close Button */}
          <button 
            className="absolute top-5 right-5 text-white text-4xl font-light hover:text-gray-300"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={selectedImg.image} 
              alt={selectedImg.title} 
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain animate-in zoom-in duration-300"
            />
            <div className="text-center mt-4">
               <h3 className="text-white text-xl font-semibold">{selectedImg.title}</h3>
               <p className="text-[#A1C948] uppercase tracking-widest text-sm">{selectedImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SocialFeed;