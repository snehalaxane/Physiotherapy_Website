import React from 'react';
import { 
  ArrowLeft, CheckCircle2, AlertTriangle, 
  Activity, Droplets, Zap, Shield 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KinesioTapingSpecificContent = () => {
  const tableOfContents = [
    { id: "goals", label: "Primary Goals" },
    { id: "techniques", label: "Taping Techniques" },
    { id: "timeline", label: "Recovery Timeline" },
    { id: "safety", label: "Safety & Removal" },
    { id: "contra", label: "Contraindications" },
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-28 pb-20">
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/offerings/therapies" className="flex items-center gap-2 text-[#095884] font-bold mb-6 hover:text-[#A1C948] transition-colors uppercase text-xs tracking-widest">
          <ArrowLeft size={16} /> Back to Treatments
        </Link>
        <h1 className="text-4xl md:text-6xl font-poppins text-[#095884] leading-tight max-w-4xl mb-6">
          Kinesio Taping Therapy for <span className="text-[#A1C948]">Achilles Tendon Rupture</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed border-l-4 border-[#A1C948] pl-6 mb-12">
          A specialized clinical guide on using elastic therapeutic tape to accelerate recovery, manage pain, and restore confidence after an Achilles injury.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 2. STICKY SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Contents</p>
            <nav className="space-y-5">
              {tableOfContents.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block text-sm font-bold text-[#095884] hover:text-[#A1C948] transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* 3. MAIN CONTENT */}
        <main className="lg:col-span-9 space-y-20">
          
          {/* Section: Primary Goals */}
          <section id="goals" className="scroll-mt-32">
            <h2 className="text-3xl font-serif text-[#095884] mb-10">Primary Goals of Taping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Droplets className="text-blue-400" />, title: "Reduce Swelling", desc: " By gently lifting the skin, the tape creates space in the subcutaneous layer, which can improve lymphatic drainage and blood flow. This is especially useful in the early post-immobilization phases when swelling is common." },
                { icon: <Zap className="text-yellow-500" />, title: "Decrease Pain", desc: "The tape can alleviate pain by reducing pressure on underlying pain receptors (nociceptors) and providing novel sensory input that can override pain signals (Gate Control Theory)." },
                { icon: <Activity className="text-green-500" />, title: "Proprioception", desc: "The tape on the skin provides continuous feedback to the brain about the position and movement of the ankle. This enhanced body awareness can help improve stability, prevent compensatory movements, and build confidence during gait training." },
                { icon: <Shield className="text-[#095884]" />, title: "Offload Tendon", desc: "While the elastic tape cannot provide rigid mechanical support like a brace, a specific application can serve as a tactile cue to limit excessive dorsiflexion (stretching of the tendon), effectively offloading some of the tension during movement." },
                 { icon: <Activity className="text-green-500" />, title: "Improve Scar Tissue Mobility (Later Stages)", desc: "Once the surgical incision is fully healed, Kinesio tape can be applied over the scar to help promote more pliable and aligned scar tissue formation, reducing restrictions." },
                { icon: <Shield className="text-[#095884]" />, title: "Inhibit Overuse of Compensatory Muscles", desc: "Often, other muscles (like the peroneals or tibialis posterior) work overtime to compensate for the weak Achilles. Taping can be used to inhibit these overactive muscles." },
              ].map((goal, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl h-fit">{goal.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#095884]">{goal.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Techniques */}
          <section id="techniques" className="scroll-mt-32">
            <h2 className="text-3xl font-serif text-[#095884] mb-4">Common Taping Techniques</h2>
            <p className="text-gray-500 mb-10">A physical therapist selects the most appropriate technique based on the healing stage.</p>
            
            <div className="space-y-8">
              {/* Technique 1 Card */}
              <div className="bg-[#095884] text-white p-8 rounded-[2.5rem] shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A1C948]">Technique 01</span>
                <h3 className="text-2xl font-serif mt-2 mb-6">Swelling & Edema Reduction (Lymphatic)</h3>
                <div className="grid md:grid-cols-2 gap-8 text-blue-100 text-sm leading-relaxed">
                  <div className="space-y-4">
                    <p><strong className="text-white">Tape Cut : </strong> A "Fan Cut" or "Web Cut." A single piece of tape is cut into 4-6 thin "tails," leaving a solid base of about 2 inches.
</p>
                    <p><strong className="text-white">Application:</strong> This technique is applied with minimal stretch to encourage fluid movement without restricting circulation. The patient lies down with their leg elevated.
The solid base of the fan strip is anchored without stretch just above the swollen area (e.g., on the mid-calf), pointing towards the lymph nodes behind the knee (popliteal fossa).
The tails are then laid down without stretch over the swollen area, fanning out to cover the entire region.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl  border border-white/10">
                    Target: Popliteal fossa (behind the knee) to encourage fluid movement.
                  </div>
                </div>
              </div>

              {/* Technique 2 Card */}
              <div className="bg-[#095884] text-white p-8 rounded-[2.5rem] shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A1C948]">Technique 02</span>
                <h3 className="text-2xl font-serif mt-2 mb-6">Tendon Support and Offloading</h3>
                <div className="grid md:grid-cols-2 gap-8 text-blue-100 text-sm leading-relaxed">
                  <div className="space-y-4">
                    <p><strong className="text-white">Tape Cut : </strong> An "I" strip or a "Y" strip.
</p>
                    <p><strong className="text-white">Application:</strong> The tape is applied with light tension to support the tendon while still allowing normal ankle movement.
The patient sits or lies with their foot hanging off a table, placed in a gentle stretch (slight dorsiflexion).
Measure a piece of tape from the bottom of the heel to the middle of the calf muscle. Cut the tape lengthwise into a "Y," leaving a 2-inch base.
Anchor the base of the "Y" without stretch to the bottom of the heel (calcaneus).
Apply the two "tails" of the Y-strip with a light (15-25%) stretch, running up along either side of the Achilles tendon, effectively "cradling" it.
Lay the ends of the tails down on the calf muscle without stretch.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl  border border-white/10">
                    Target: Popliteal fossa (behind the knee) to encourage fluid movement.
                  </div>
                </div>
              </div>

               {/* Technique 3 Card */}
              <div className="bg-[#095884] text-white p-8 rounded-[2.5rem] shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A1C948]">Technique 03</span>
                <h3 className="text-2xl font-serif mt-2 mb-6">Proprioceptive Support for Ankle Stability</h3>
                <div className="grid md:grid-cols-2 gap-8 text-blue-100 text-sm leading-relaxed">
                  <div className="space-y-4">
                    <p><strong className="text-white">Tape Cut : </strong>Two "I" strips.
</p>
                    <p><strong className="text-white">Application:</strong> This application aims to improve joint awareness and guide ankle movement during weight-bearing tasks:
One strip is applied from the outside of the mid-foot, under the arch, and up the inside of the ankle, similar to a "stirrup."
A second strip can be applied in a "heel lock" or figure-eight pattern around the ankle to provide feedback against excessive inversion or eversion.
These strips are typically applied with light to moderate stretch over the joint line.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl  border border-white/10">
                    Target: Popliteal fossa (behind the knee) to encourage fluid movement.
                  </div>
                </div>
              </div>

              {/* [Repeat similar cards for Techniques 2 and 3] */}
            </div>
          </section>

          {/* Section: Timeline */}
          <section id="timeline" className="scroll-mt-32 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-serif text-[#095884] mb-8">Rehabilitation Timeline</h2>
            <div className="space-y-6">
              {[
                { stage: "0-6 Weeks", label: "Acute Phase", text: "Typically no taping; immobilization in cast/boot." },
                { stage: "6-12 Weeks", label: "Early Mobilization", text: "Proprioceptive feedback and swelling control." },
                { stage: "3-6 Months", label: "Strengthening", text: "Confidence and gentle offloading during calf raises." },
                { stage: "6+ Months", label: "Return to Sport", text: "Continued support during high-load activities." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start border-l-2 border-gray-100 pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#A1C948] border-4 border-white shadow-sm" />
                  <div>
                    <span className="text-xs font-black text-[#A1C948] uppercase">{item.stage}</span>
                    <h4 className="font-bold text-[#095884] text-lg mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Contraindications */}
          <section id="contra" className="scroll-mt-32 bg-red-50 p-10 rounded-[2.5rem] border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-600" size={28} />
              <h2 className="text-3xl font-serif text-red-900">Contraindications</h2>
            </div>
            <p className="text-red-800/70 mb-6 font-medium">Do NOT use Kinesio tape if you have any of the following:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Open wounds or unhealed incisions", "Active skin infections", 
                "Adhesive allergies", "Deep Vein Thrombosis (DVT)", 
                "Fragile/Sensitive skin", "Active cancer in the area"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-red-900 text-sm font-semibold">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {item}
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default KinesioTapingSpecificContent;