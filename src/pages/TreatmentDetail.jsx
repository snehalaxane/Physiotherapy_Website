import { useParams } from 'react-router-dom';
import React from 'react';
import { TherapyList } from './TreatmentList';
import { ArrowRightCircle, CheckCircle } from 'lucide-react';

const TherapyDetail = () => {
  const { id } = useParams(); // Gets 'ift-therapy' from URL

  // Look through the list and find the one that matches the ID
  const therapy = TherapyList.find((item) => item.id === id);

  if (!therapy) {
    return <div className="p-20 text-center">Therapy not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#FDFCFB]">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* SIDEBAR: Table of Contents */}
        <aside className="lg:w-1/3">
          <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-poppins text-blue-950 mb-8 border-b pb-4">Contents</h2>
            <nav className="space-y-6">
              {therapy.faqs?.map((item, index) => (
                <a 
                  key={index}
                  href={`#faq-${index}`}
                  className="flex items-start gap-4 group text-gray-600 hover:text-teal-600 transition-all"
                >
                  <ArrowRightCircle className="text-blue-950 group-hover:text-teal-500 shrink-0 mt-1" size={20} />
                  <span className="text-[15px] font-medium leading-tight">
                    {item.question}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lg:w-2/3">
          {/* Header Image & Title */}
          <div className="mb-12">
            <img src={therapy.image} className="w-full h-[400px] object-cover rounded-[2.5rem] mb-8 shadow-md" />
            <h1 className="text-4xl font-poppins text-blue-950 mb-6">{therapy.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-teal-500 pl-6">
               {therapy.fullContent}
            </p>
          </div>

          {/* DYNAMIC FAQ SECTIONS */}
          <div className="space-y-10">
            {therapy.faqs?.map((item, index) => (
              <section key={index} id={`faq-${index}`} className="scroll-mt-32">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-poppins text-blue-950 mb-4 flex items-center gap-3">
                    <CheckCircle className="text-teal-500" size={24} />
                    {item.question}
                  </h3>
                  <div className="text-gray-600 leading-relaxed text-md">
                    {item.answer}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default TherapyDetail;