// MainGallery.jsx
import ClinicalFeed from "../components/ClinicalFeed";
import SocialFeed from "../components/SocialFeed";

function MainGallery() {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      {/* Rendering the two separate files */}
      <ClinicalFeed />
      <SocialFeed />
    </div>
  );
}

export default MainGallery;