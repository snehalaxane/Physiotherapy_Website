// SocialFeed.jsx
import img2 from "../assets/Socialgallery/Img2.jpg"
import img3 from "../assets/Socialgallery/Img3.jpg"
import img4 from "../assets/Socialgallery/Img4.jpg"
// import img5 from "../assets/Socialgallery/Img5.jpg"

const socialData = [
{ id: 2, image: img2, title: "Community Outreach", category: "Social" },
{ id: 3, image: img3, title: "Community Outreach", category: "Social" },
{ id: 4, image: img4, title: "Community Outreach", category: "Social" },
// { id: 5, image: img5, title: "Community Outreach", category: "Social" },
  // Add more social items here
];

function SocialFeed() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#095884] mb-8 text-center">Social Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialData.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-500 hover:shadow-2xl">
            
            {/* Added a background color here so you can see the box even if image fails */}
            <div className="aspect-[1/1] overflow-hidden bg-gray-300 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                // This logs the error to your browser console (F12)
                onError={(e) => console.error("Could not find image at path:", item.image)}
              />
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

export default SocialFeed;