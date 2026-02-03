// ClinicalFeed.jsx
import img1 from "../assets/ClinicalGallery/Img1.jpg";
import img2 from "../assets/ClinicalGallery/Img2.jpg";
import img3 from "../assets/ClinicalGallery/Img3.jpg";
import img4 from "../assets/ClinicalGallery/Img4.jpg";
import img5 from "../assets/ClinicalGallery/Img5.jpg";
import img6 from "../assets/ClinicalGallery/Img6.jpg";
import img7 from "../assets/ClinicalGallery/Img7.jpg";
import img8 from "../assets/ClinicalGallery/Img8.jpg";
import img9 from "../assets/ClinicalGallery/Img9.jpg";


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
];

function ClinicalFeed() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[#095884] mb-8 text-center">Clinical Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clinicalData.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-500 hover:shadow-2xl">
            <div className="aspect-[1/1] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="text-[#A1C948] text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClinicalFeed;