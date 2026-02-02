// 1. Import all images at the top
import img1 from "../assets/gallery/doctor1.jpg";


function SocialFeeds() {
  // 2. Create an array of objects to store your data
  const feedData = [
    { id: 1, image: img1, title: "Clinic Opening", category: "Event" },
    // { id: 2, image: img2, title: "New Therapy", category: "Services" },
    // { id: 3, image: img3, title: "Health Tips", category: "Community" },
    // { id: 4, image: img4, title: "Our Experts", category: "Team" },
  ];

  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#095884] mb-8 text-center">Social Feeds</h2>
      
      {/* 3. Use .map() to show different images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedData.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-500 hover:shadow-2xl">
            
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Unique Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="text-[#A1C948] text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialFeeds;