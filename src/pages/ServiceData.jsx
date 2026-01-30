import React from 'react';
import { Scissors, Activity, Zap, Baby, Accessibility, Brain, Home, VenetianMask, Trophy, UserPlus } from 'lucide-react';

export const allServices = [
  {
    id: "post-surgery-rehab",
    title: "Post Surgery Rehabilitation",
    desc: "Program of re-establishing proper joint movements and muscle strengths after surgical procedures.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600",
    icon: <Scissors className="text-teal-600" />,
    color: "bg-teal-50",
    fullContent: {
      introduction: "Post-surgery rehabilitation is a program of re-establishing proper joint movements, muscle-strengths around the joint and joint function. It is vital to understand that rehabilitation is one long procedure. Even though surgery can be performed within hours, the rehabilitation will need months and even a year. The difference between the surgery’s length and time needed for Post-surgery rehabilitation is huge. Whenever a patient undergoes cartilage surgery or the shoulder, ankle or knee, it is going to be a long recovery procedure. So, it is vital that the patient remains committed to the entire procedure. However, the timeframe of a year for recovering is just an example. The actual time frame will depend on various factors.",
      types: "Primarily speaking, there are three major types of post surgery rehabilitation therapies available, and those are speech, physical and occupational. Each rehabilitation form will serve the unique purpose of helping people to reach full recovery. But, all will share the main common goal of helping patients to return to their active and healthy lifestyles. Rehabilitation therapy will be used for treating wide ranges of conditions or injuries. Common conditions treated will include musculoskeletal and orthopedic injuries like stairs, sprains, tears, or post-surgical rehabilitation. Then you have other neurological injuries like spinal cord or brain injury, stroke, or multi-trauma injuries as a result of the accident.",
      physioGoal: "Reputed physiotherapists will also treat the most common conditions like degenerative diseases, genetic disorders, and specialized conditions too. They will treat patients of all ages, from newborns to the oldest patient. The goal of post surgery rehabilitation in Bangalore or post surgery rehabilitation in Hyderabad will vary from one person to another. Physiotherapists will ask every patient about their rehabilitation goals first before developing pain. It might include multiple therapy types like music or recreational, speech, physical or occupational.",
      whenToSee: "Post surgery rehabilitation is vital for patients who are undergoing surgeries related to cancer, cardiac, orthopedic, and other critical surgeries. Using a wide range of exercises, physiotherapists will help the patients to regain strength and movement of the muscle to perform some routine tasks whenever possible. Physical exercises like straight leg raise, knee straightening exercises, ankle pumps, quadriceps sets, and more are highly recommended to help patients in re-establishing the joint motion, the strength of the muscle, flexibility, and full joint movement.",
      risks: [
        "Primary hemorrhage or reactionary hemorrhage – replacing blood loss and might have to re-explore the wound.",
        "Basal atelectasis or minor lung collapse",
        "Shock- resulting in pulmonary embolism or septicemia, acute myocardial infarction, blood loss",
        "Lower urine output or inadequate fluid replacement after the surgery took place",
        "Acute confusion excluding sepsis and dehydration",
        "Vomiting and nausea tendency related to anesthesia",
        "Fever",
        "Secondary hemorrhage as a result of infection",
        "Pneumonia",
        "Anastomosis or wound dehiscence",
        "DVT",
        "Accurate urinary retention",
        "Urinary tract infection",
        "Postoperative wound infection",
        "Pressure sores"
      ],
      prevention: "Bone, muscle, and soft tissue-related surgeries will undergo a healing period. Failing to use the joint might cause it to heal in an improper manner. This can further limit the motion range, joint function, flexibility, and overall outcome of the surgery. So, it is always essential to complete physical therapy after the operation. It helps in speeding up the healing process and regains confidence once again.",
      treatments: "You can either opt for inpatient or outpatient post surgery rehabilitation in Bangalore or post surgery rehabilitation in Hyderabad. Inpatient rehabilitation refers to therapy or treatment that patients receive in the clinic or hospital before being discharged. On the other hand, outpatient rehabilitation therapy means treatment received when not admitted to a clinic or hospital. Outpatient therapy will present a blend of services from speech pathologists to psychologists, physical therapists, or occupational therapists."
    }
  }
];
  // Other services would follow the same pattern...
// ];
//   {
//     id: "vestibular-rehab",
//     title: "Vestibular Rehabilitation",
//     desc: "Specialized exercises resulting in gaze and gait stabilization for balance disorders.",
//     image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=600",
//     icon: <Zap className="text-amber-600" />,
//     color: "bg-amber-50"
//   },
//   {
//     id: "pediatric-physio",
//     title: "Pediatric Physiotherapy",
//     desc: "Specialized training to help children achieve their final physical development milestones.",
//     image: "https://plus.unsplash.com/premium_photo-1682089689634-aca38807b52f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     icon: <Baby className="text-pink-600" />,
//     color: "bg-pink-50"
//   },
//   {
//     id: "womens-health",
//     title: "Women's Health Physiotherapy",
//     desc: "Dedicated care for women during and after childbirth (Postnatal and Ante-natally).",
//     image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600",
//     icon: <Accessibility className="text-purple-600" />,
//     color: "bg-purple-50"
//   },
//   {
//     id: "neuro-rehab",
//     title: "Neuro Physiotherapy Rehab",
//     desc: "Focusing on treatments for individuals with neurological conditions and brain injuries.",
//     image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
//     icon: <Brain className="text-indigo-600" />,
//     color: "bg-indigo-50"
//   },
//   {
//     id: "home-physio",
//     title: "Physiotherapy At Home",
//     desc: "Hospital-grade care within 24 hours of discharge, delivered in the comfort of your home.",
//     image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
//     icon: <Home className="text-emerald-600" />,
//     color: "bg-emerald-50"
//   },
//   {
//     id: "chiropractic",
//     title: "Chiropractic Therapy",
//     desc: "Natural pain relief focusing on the neuro-musculoskeletal system and spinal health.",
//     image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600",
//     icon: <VenetianMask className="text-orange-600" />,
//     color: "bg-orange-50"
//   },
//   {
//     id: "sports-injury",
//     title: "Sports Injury Physiotherapy",
//     desc: "Management and prevention of injuries resulting from exercise and sports participation.",
//     image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=600",
//     icon: <Trophy className="text-red-600" />,
//     color: "bg-red-50"
//   },
//   {
//     id: "geriatric-physio",
//     title: "Geriatric Physiotherapy",
//     desc: "Specialized branch helping manage physical issues and mobility in elderly patients.",
//     image: "https://plus.unsplash.com/premium_photo-1661698068272-987480c4074d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     icon: <UserPlus className="text-cyan-600" />,
//     color: "bg-cyan-50"
//   }
// ];