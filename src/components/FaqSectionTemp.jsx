// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';

// const FaqSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     // Left Column (First 5)
//     {
//       question: "What should I expect during my first visit?",
//       answer: "Your initial assessment involves a detailed discussion of your medical history, a physical examination of your movement and strength, and the creation of a personalized treatment plan."
//     },
//     {
//       question: "Do I need a doctor's referral for physiotherapy?",
//       answer: "In most cases, you can book an appointment directly. However, some specific insurance providers may require a referral for reimbursement purposes."
//     },
//     {
//       question: "How long does a typical session last?",
//       answer: "An initial assessment usually takes 45-60 minutes, while follow-up treatment sessions typically last between 30 to 45 minutes depending on your condition."
//     },
//     {
//       question: "How do musculoskeletal disorders take place?",
//       answer: "When fatigue from repetitive risk factors outruns the body's recovery system, it creates a musculoskeletal imbalance that leads to pain and dysfunction."
//     },
//     {
//       question: "Can physiotherapy help with chronic headaches?",
//       answer: "Yes, many headaches are 'cervicogenic,' meaning they stem from neck issues. Manual therapy and posture correction can significantly reduce headache frequency."
//     },
//     // Right Column (Next 5)
//     {
//       question: "What should I wear to my appointment?",
//       answer: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated (e.g., shorts for knee pain or a tank top for shoulder issues)."
//     },
//     {
//       question: "How many sessions will I need to recover?",
//       answer: "Recovery varies per individual. Some acute issues resolve in 3-5 sessions, while chronic conditions or post-surgery rehab may take several weeks or months."
//     },
//     {
//       question: "Is physiotherapy painful?",
//       answer: "The goal is to reduce pain. While some manual techniques or stretches may feel intense or slightly uncomfortable, your therapist will always work within your tolerance."
//     },
//     {
//       question: "Can I do my exercises at home?",
//       answer: "Absolutely. A consistent Home Exercise Program (HEP) is vital for recovery. We provide digital or printed guides to help you stay on track between visits."
//     },
//     {
//       question: "What is the difference between PT and Chiro?",
//       answer: "Physiotherapy focuses on movement, muscle function, and long-term rehabilitation, whereas Chiropractic care often focuses on spinal adjustments and nervous system alignment."
//     }
//   ];

//   // Split FAQs into two halves
//   const leftColumn = faqs.slice(0, 5);
//   const rightColumn = faqs.slice(5, 10);

//   const FaqItem = ({ faq, index, globalIndex }) => (
//   <div 
//       className="border border-white/20 rounded-xl overflow-hidden bg-white/5 transition-all mb-4"
//       // Change: Added onMouseEnter to open and onMouseLeave to close
//       onMouseEnter={() => setActiveIndex(globalIndex)}
//       onMouseLeave={() => setActiveIndex(null)}
//     >
//       <div // Change: Switched from <button> to <div> since hover triggers it now
//         className="w-full flex items-center justify-between p-5 text-left text-white cursor-pointer transition-colors"
//       >
//         <span className="text-lg font-medium pr-4">{faq.question}</span>
//         {activeIndex === globalIndex ? (
//           <ChevronDown size={20} className="shrink-0 text-[#A1C948]" />
//         ) : (
//           <ChevronRight size={20} className="shrink-0" />
//         )}
//       </div>
      
//       <div 
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           activeIndex === globalIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="p-5 pt-0 text-white/70 leading-relaxed">
//           {faq.answer}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="bg-[#095884] py-20 px-2">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <span className="text-[#A1C948] uppercase tracking-widest font-bold text-sm">Got Questions?</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         {/* Two Column Grid */}
//        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 min-h-[600px]">
//   {/* Left Side */}
//   <div className="flex flex-col h-full">
//     {leftColumn.map((faq, i) => (
//       <FaqItem key={i} faq={faq} index={i} globalIndex={i} />
//     ))}
//   </div>

//           {/* Right Side */}
//           <div className="flex flex-col h-full">
//     {rightColumn.map((faq, i) => (
//       <FaqItem key={i + 5} faq={faq} index={i} globalIndex={i + 5} />
//     ))}
//   </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;




import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    // Left Column (First 5)
    {
      question: "What should I expect during my first visit?",
      answer: "Your initial assessment involves a detailed discussion of your medical history, a physical examination of your movement and strength, and the creation of a personalized treatment plan."
    },
    {
      question: "Do I need a doctor's referral for physiotherapy?",
      answer: "In most cases, you can book an appointment directly. However, some specific insurance providers may require a referral for reimbursement purposes."
    },
    {
      question: "How long does a typical session last?",
      answer: "An initial assessment usually takes 45-60 minutes, while follow-up treatment sessions typically last between 30 to 45 minutes depending on your condition."
    },
    {
      question: "How do musculoskeletal disorders take place?",
      answer: "When fatigue from repetitive risk factors outruns the body's recovery system, it creates a musculoskeletal imbalance that leads to pain and dysfunction."
    },
    {
      question: "Can physiotherapy help with chronic headaches?",
      answer: "Yes, many headaches are 'cervicogenic,' meaning they stem from neck issues. Manual therapy and posture correction can significantly reduce headache frequency."
    },
    // Right Column (Next 5)
    {
      question: "What should I wear to my appointment?",
      answer: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated (e.g., shorts for knee pain or a tank top for shoulder issues)."
    },
    {
      question: "How many sessions will I need to recover?",
      answer: "Recovery varies per individual. Some acute issues resolve in 3-5 sessions, while chronic conditions or post-surgery rehab may take several weeks or months."
    },
    {
      question: "Is physiotherapy painful?",
      answer: "The goal is to reduce pain. While some manual techniques or stretches may feel intense or slightly uncomfortable, your therapist will always work within your tolerance."
    },
    {
      question: "Can I do my exercises at home?",
      answer: "Absolutely. A consistent Home Exercise Program (HEP) is vital for recovery. We provide digital or printed guides to help you stay on track between visits."
    },
    {
      question: "What is the difference between PT and Chiro?",
      answer: "Physiotherapy focuses on movement, muscle function, and long-term rehabilitation, whereas Chiropractic care often focuses on spinal adjustments and nervous system alignment."
    }
  ];

  // Split FAQs into two halves
  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  const FaqItem = ({ faq, index, globalIndex }) => (
    <div 
      className="border border-white/20 rounded-xl overflow-hidden bg-white/5 transition-all mb-3" // Reduced mb-4 to mb-3
      onMouseEnter={() => setActiveIndex(globalIndex)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div 
        className="w-full flex items-center justify-between p-4 text-left text-white cursor-pointer transition-colors" // Reduced p-5 to p-4
      >
        <span className="text-base font-medium pr-4">{faq.question}</span> {/* Reduced text-lg to text-base */}
        {activeIndex === globalIndex ? (
          <ChevronDown size={18} className="shrink-0 text-[#A1C948]" />
        ) : (
          <ChevronRight size={18} className="shrink-0" />
        )}
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          activeIndex === globalIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-white/70 text-sm leading-relaxed"> {/* Reduced p-5 to p-4 and added text-sm */}
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#095884] py-10 px-4"> {/* Reduced py-20 to py-10 */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8"> {/* Reduced mb-12 to mb-8 */}
          <span className="text-[#A1C948] uppercase tracking-widest font-bold text-xs">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2"> {/* Reduced text sizes and mt */}
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12"> {/* Removed min-h-[600px] and reduced gap-x */}
          {/* Left Side */}
          <div className="flex flex-col">
            {leftColumn.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} globalIndex={i} />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {rightColumn.map((faq, i) => (
              <FaqItem key={i + 5} faq={faq} index={i} globalIndex={i + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;