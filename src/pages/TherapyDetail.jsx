import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// 1. Import your existing specific pages
import KinesioTapingSpecificContent from './KinesioTaping';
// import PemfSpecificContent from './PemfTherapy';

// 2. Map the ID from TherapyData.js to the Component
const detailComponents = {
  "kinesio-taping-achilles": KinesioTapingSpecificContent,
  // "pemf-therapy-achilles": PemfSpecificContent,
  // Add new ones here as you create them
};

const TherapyDetail = () => {
  const { id } = useParams();

  // Look for the specific page in our map
  const SpecificContent = detailComponents[id];

  // IF IT EXISTS: Show the custom page you designed
  if (SpecificContent) {
    return <SpecificContent />;
  }

  // IF IT DOES NOT EXIST (Instead of crashing or looking for a missing file):
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFB] px-6 text-center">
      <h2 className="text-3xl font-poppins text-[#095884] mb-4">Treatment Details Coming Soon</h2>
      <p className="text-gray-500 max-w-md mb-8">
        We are currently preparing the detailed medical guide for <span className="font-bold text-[#A1C948]">"{id.replace(/-/g, ' ')}"</span>. 
        Please check back shortly or contact our clinic for more information.
      </p>
      <Link 
        to="/offerings/therapies" 
        className="flex items-center gap-2 text-[#095884] font-bold hover:text-[#A1C948] transition-colors"
      >
        <ArrowLeft size={20} /> Back to Therapies
      </Link>
    </div>
  );
};

export default TherapyDetail;