import React from 'react';
import { Scissors, Activity, Heart, Zap, Baby, UserCheck ,Accessibility, Brain, Home, VenetianMask, Trophy, UserPlus } from 'lucide-react';

export const allServices = [
  {
    id: "post-surgery-rehab",
    title: "Post-Surgical Rehabilitation",
    desc: "A specialized clinical program focused on restoring joint kinematics and neuromuscular strength following surgical intervention.",
    image: "https://images.unsplash.com/photo-1676155081561-865fab11da37?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Scissors className="text-teal-600" />,
    color: "bg-teal-50",
    fullContent: {
      introduction: "Post-surgical rehabilitation is a structured clinical protocol designed to restore joint range of motion (ROM), re-establish muscle synergy, and optimize functional mobility. While surgical procedures are completed in hours, the physiological recovery process is an extended journey—often spanning months to a year. Success relies heavily on a patient’s commitment to a phased recovery plan, tailored to the specific surgical intervention, whether orthopedic, cardiac, or neurological.",
      
      types: "Our rehabilitation framework integrates three core disciplines to ensure a holistic recovery: Physical Therapy (focused on mobility and strength), Occupational Therapy (focused on activities of daily living), and Speech-Language Pathology (where indicated). This multidisciplinary approach is essential for treating complex cases ranging from musculoskeletal repairs (ligament tears, arthroplasty) to neurological recovery following spinal cord injuries or stroke.",
      
      whenToSee: "Rehabilitation should commence as soon as medically cleared post-operation. It is critical for patients recovering from oncological, cardiac, or orthopedic surgeries. Early intervention utilizing targeted kinesiology—such as quadriceps sets, ankle pumps, and progressive resistance exercises—is vital to prevent scar tissue adhesions and muscle atrophy, ensuring the patient regains the independence necessary for routine daily tasks.",
      
      risks: [
        "Primary or Reactionary Hemorrhage management",
        "Basal Atelectasis (minor lung collapse prevention)",
        "Post-operative Shock and Pulmonary Embolism monitoring",
        "Fluid imbalance and Renal output monitoring",
        "Post-anesthesia Nausea and Acute Confusion management",
        "Secondary Infections and Secondary Hemorrhage prevention",
        "Post-operative Pneumonia and Respiratory complications",
        "Wound Dehiscence and Anastomotic leaks",
        "Deep Vein Thrombosis (DVT) prophylaxis",
        "Acute Urinary Retention and UTI prevention",
        "Pressure Sore prevention through assisted mobility"
      ],
      
      prevention: "The 'healing window' following soft tissue or bone surgery is time-sensitive. Immobilization or inadequate movement can lead to improper tissue healing, permanent loss of flexibility, and reduced surgical efficacy. Completing a professional physical therapy course is not optional; it is the primary safeguard against long-term disability and the most effective way to restore patient confidence and mechanical function.",
      
      treatments: "We offer both Inpatient and Outpatient rehabilitation services across our Bangalore and Hyderabad centers. Inpatient care focuses on acute recovery and stabilization immediately following surgery. Outpatient care provides a transition back to normalcy, offering a coordinated blend of physical therapy, psychological support, and occupational training to ensure a seamless return to an active lifestyle."
    }
},

 {
  id: "musculoskeletal-physiotherapy",
  title: "Musculoskeletal Physiotherapy",
  desc: "A clinical specialization focused on diagnosing and treating disorders of the muscles, joints, and connective tissues to restore optimal movement.",
  image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop",
  icon: <Activity className="text-teal-600" />, // Switched to Activity icon as it fits movement better
  color: "bg-teal-50",
  fullContent: {
    introduction: "Musculoskeletal Physiotherapy focuses on the assessment and treatment of conditions affecting the human locomotor system. Whether originating in the peripheral joints (ankles, knees, shoulders) or the spinal column, musculoskeletal dysfunction often leads to chronic pain and restricted mobility. Our clinical approach aims to restore the kinetic chain, ensuring that muscles, bones, and joints work in biomechanical harmony to improve overall quality of life.",
    
    types: "Our treatment pathways include specialized modalities tailored to the patient's specific mechanical dysfunction: \n• Neuromuscular Re-education: Strengthening weak muscle groups and correcting compensatory movement patterns. \n• Myofascial Release: Manual techniques and stretching to alleviate tension in the connective tissues. \n• Joint Mobilization & Manipulation: Evidence-based 'hands-on' techniques to restore arthrokinematics in stiff joints. \n• Clinical Kinesiology: Supervised, graded exercise programs designed to enhance speed, strength, and proprioceptive coordination.",
    
    whenToSee: "Consultation with a musculoskeletal specialist is recommended for individuals experiencing persistent back pain, neck pain, or joint stiffness. This branch of therapy is highly effective for managing chronic conditions such as Osteoarthritis and Osteoporosis, as well as acute injuries including Repetitive Strain Injuries (RSI), sports-related trauma, and work-related physical stress. It is also a critical component for patients recovering from joint replacement surgeries (Hip/Knee Arthroplasty).",

    risks: [
      "Ergonomic stressors and prolonged static posturing",
      "Repetitive motion disorders in high-intensity work cultures",
      "Mechanical strain from improper load handling (bending/twisting)",
      "Vibration-induced white finger (VWF) or cold-environment joint stiffness",
      "Compensatory movement patterns leading to secondary injuries",
      "Muscle fatigue resulting from sustained forceful exertion"
    ],
    
    prevention: "Prevention strategies center on biomechanical awareness and ergonomic optimization. Key interventions include: \n• Recognizing Physiological Limits: Utilizing assistive devices or team-lifting for heavy loads to prevent acute muscle fatigue. \n• Activity Pacing: Breaking repetitive tasks into manageable increments with scheduled micro-breaks. \n• Postural Variation: Implementing the '30-minute rule'—changing your physical position every half hour to reduce static load. \n• Clinical Ergonomic Assessments: Professional evaluation of workspace setups to identify and mitigate environmental risk factors.",
    
    treatments: "We provide comprehensive musculoskeletal interventions across our Hyderabad centers, tailored to each patient's diagnostic profile. Standard treatment protocols include: \n• Personalized Home Exercise Programs (HEP) to maintain clinical gains. \n• Manual Therapy: Targeted mobilization to improve joint mobility and tissue extensibility. \n• Hydrotherapy & Electrotherapy: Utilizing aquatic environments or electrical stimulation to manage pain and reduce inflammation. \n• Cognitive Coping Strategies: Advice on pain neurophysiology and long-term management of chronic symptoms."
  }
},


 {
  id: "pediatric-physiotherapy",
  title: "Pediatric Physiotherapy",
  desc: "Specialized clinical intervention designed to support children—from neonates to adolescents—in reaching their optimal physical and developmental potential.",
  image: "https://images.unsplash.com/photo-1708687045030-26702e62fc65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  icon: <Baby className="text-teal-600" />, // Changed to Baby icon for better representation
  color: "bg-teal-50",
  fullContent: {
    introduction: "Pediatric Physiotherapy is a specialized discipline focused on the physical development, movement, and functional well-being of infants, children, and adolescents. Recognizing that children are not merely 'small adults,' our therapists employ age-appropriate, play-based strategies to engage young patients. From neonatal care to managing adolescent growth spurts, our interventions are designed to maximize mobility, improve strength, and ensure each child reaches their key developmental milestones in a supportive environment.",
    
    types: "We provide a multidisciplinary range of pediatric services across our Hyderabad and Bangalore clinics: \n• Neuro-Pediatric Physiotherapy: Focused on the brain-body connection and motor control. \n• Pediatric Respiratory Care: Addressing lung health and breathing mechanics in premature infants and children. \n• Developmental Physiotherapy: Targeting gross motor skill acquisition (crawling, walking, coordination). \n• Musculoskeletal & Sports Injury: Specialized care for bone, joint, and growth-plate related issues in active children.",

    whenToSee: "Early intervention is key to long-term success. Parents should consult a specialist if they observe: \n• Delays in developmental milestones (e.g., sitting up, crawling, or walking late). \n• Observed 'clumsiness,' frequent falls, or coordination difficulties. \n• Postural abnormalities or asymmetrical movement. \n• Nervous system or muscle-related weakness. \n• Recovery needs following a childhood injury or surgery.",

    risks: [ // Replaced 'Risks' with 'Conditions Treated' for professionalism
      "Cerebral Palsy and Neuromuscular disorders",
      "Developmental Delay and 'Late Walker' syndrome",
      "Autism Spectrum Disorder (ASD) & Coordination issues",
      "Congenital disorders like Dyspraxia or Ataxia",
      "Spina Bifida and Spinal Cord injuries",
      "Respiratory conditions (Chest infections, Reduced exercise tolerance)",
      "Pediatric Orthopedic conditions (Scoliosis, Clubfoot)",
      "Fine motor and Handwriting difficulties (Dysgraphia)"
    ],
    
    prevention: "Preventive pediatric care focuses on early identification of musculoskeletal imbalances. By identifying basic symptoms during tender ages, we can prevent minor postural habits from evolving into permanent physical challenges. Our programs emphasize 'Preventive Health,' which integrates emotional and physical well-being to reduce the long-term incidence of injury and promote a lifelong foundation for healthy movement.",

    treatments: "Our therapeutic approach is tailored to the child's specific developmental stage: \n• Neurological Intervention: Focused on balance training, milestone re-education, and neuro-plasticity exercises. \n• Respiratory Therapy: Specialized positioning, lung clearance techniques, and breathing exercises, particularly for premature infants. \n• Developmental Milestone Training: Techniques to facilitate crawling, standing, and independent walking through play-based 'fun-struction.' \n• Sensory-Motor Integration: Helping children with learning difficulties improve their spatial awareness and functional activity levels. \n• Caregiver Education: Empowering parents with the tools to continue progress at home safely."
  }
},

  {
  id: "womens-health",
  title: "Women's Health  Physiotherapy",
  desc: "Specialized clinical care focusing on musculoskeletal and pelvic floor health across all stages of a woman's life, including pre- and post-natal care.",
  image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
  icon: <Heart className="text-pink-600" />, // Changed to Heart for a more sensitive, health-focused look
  color: "bg-pink-50",
  fullContent: {
    introduction: "Women's Health Physiotherapy is a clinical sub-specialty originating from Obstetrics and Gynecology. It provides comprehensive care for women throughout their lifespan, from adolescence through pregnancy and into menopause. Our focus is on managing the unique physiological changes a woman's body undergoes, specifically targeting pelvic floor rehabilitation, musculoskeletal stability during pregnancy, and restorative care following childbirth or gynecological surgeries.",
    
    types: "Our Women's Health department offers specialized protocols including: \n• Obstetric Physiotherapy: Managing the physical demands of pregnancy and preparing the body for labor. \n• Pelvic Floor Rehabilitation: Treating dysfunction such as incontinence or pelvic organ prolapse. \n• Post-Natal Restorative Care: Focused on Diastasis Recti repair and core strengthening. \n• Menopausal Wellness: Addressing bone density (Osteoporosis) and joint health during hormonal shifts.",

    whenToSee: "Clinical consultation is recommended for women experiencing: \n• Pelvic girdle pain (PGP) or lower back pain during or after pregnancy. \n• Stress or urge incontinence (bladder/bowel leakage). \n• Diastasis Recti (separation of abdominal muscles). \n• Painful scarring following a C-section or gynecological surgery. \n• Pelvic organ prolapse or pelvic floor heaviness. \n• Chronic pelvic pain or discomfort during physical activity.",

    risks: [ 
      "Antenatal and Postnatal musculoskeletal pain",
      "Pelvic Floor Dysfunction (Incontinence, Prolapse)",
      "Diastasis Recti Abdominis (DRA)",
      "Sacroiliac Joint (SIJ) dysfunction",
      "Symphysis Pubis Dysfunction (SPD)",
      "Pregnancy-induced Carpal Tunnel Syndrome",
      "Post-Surgical recovery (Hysterectomy, C-section)",
      "Osteoporosis management during menopause"
    ],
    
    prevention: "Preventive care in Women's Health emphasizes core and pelvic stability to avoid long-term complications. Early intervention during the first and second trimesters can significantly reduce the risk of chronic back pain and pelvic floor weakness. Furthermore, 'Pre-hab' (physiotherapy before planned gynecological surgery) ensures a faster and more efficient post-operative recovery.",

    treatments: "Our approach is holistic and evidence-based: \n• Targeted Pelvic Floor Muscle Training (PFMT): Personalized Kegel protocols and biofeedback. \n• Core Stabilization: Safely rebuilding the abdominal wall and pelvic stabilizers. \n• Manual Therapy: Soft tissue release for scar management and joint mobilization for pelvic pain. \n• Therapeutic Exercise: Low-impact conditioning tailored to the patient’s stage of pregnancy or recovery. \n• Education & Ergonomics: Advice on safe lifting, breastfeeding postures, and bladder/bowel habits."
  }
},

   {
  id: "neuro-physiotherapy-rehab",
  title: "Neurological Rehabilitation",
  desc: "A specialized clinical field focused on restoring physical function and mobility in individuals with impairments originating from the central and peripheral nervous systems.",
  image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
  icon: <Activity className="text-blue-600" />, // Changed from Scissors to Activity for a neurological focus
  color: "bg-blue-50",
  fullContent: {
    introduction: "Neurological Rehabilitation is a specialized therapeutic approach designed to address the complex needs of individuals with nervous system disorders. Whether recovering from a stroke, managing Parkinson’s disease, or coping with a traumatic brain injury, our protocols focus on neuro-plasticity—the brain's ability to reorganize itself. By utilizing advanced neuro-rehab techniques, our specialists aim to restore motor control, enhance muscle synergy, and maximize functional independence through evidence-based, personalized care.",
    
    types: "Our neuro-rehab framework includes a comprehensive range of clinical services: \n• Gait & Mobility Training: Expert guidance on ambulation and the strategic use of mobility aids (canes, frames) to restore safe, independent walking. \n• Therapeutic Mobilization: Facilitated movement transitions, including bed mobility, sitting-to-standing, and transfer techniques. \n• Cardio-Respiratory Neuro-Care: Specialized exercises to improve circulation, prevent Deep Vein Thrombosis (DVT), and maintain pulmonary hygiene. \n• Postural Control & Splinting: Advanced positioning strategies and custom splinting to prevent joint contractures and manage muscle spasticity. \n• Neuromuscular Re-education: A combination of passive and active-assisted range of motion (ROM) exercises to maintain joint integrity and prevent muscle atrophy.",

    whenToSee: "Consultation with a neurological physiotherapist is vital for managing: \n• Post-Stroke Recovery: To address hemiplegia, balance deficits, and motor loss. \n• Spinal Cord Injuries: To maximize residual function and manage secondary complications. \n• Movement Disorders: Including Parkinson’s Disease, Multiple Sclerosis (MS), and Ataxia. \n• Peripheral Nerve Conditions: Such as Bell’s Palsy or Guillain-Barré Syndrome. \n• Traumatic Brain Injury (TBI): To facilitate cognitive-motor reintegration and coordination.",

    risks: [ 
      "Ischemic and Hemorrhagic Stroke",
      "Parkinson's Disease and Tremor Management",
      "Multiple Sclerosis (MS) and Demyelinating Disorders",
      "Traumatic Brain and Spinal Cord Injuries",
      "Cerebral Palsy and Pediatric Neuro-conditions",
      "Motor Neuron Disease (MND / ALS)",
      "Peripheral Neuropathy and Nerve Palsies",
      "Vestibular Disorders and Balance Impairment"
    ],
    
    prevention: "In neurological care, prevention focuses on mitigating secondary complications. Without consistent movement, the body is at risk of 'disuse atrophy' and permanent joint contractures. Our preventive protocols are designed to maintain skin integrity (preventing pressure sores), ensure optimal respiratory function (preventing chest infections), and manage spasticity before it leads to skeletal deformities. Early intervention is the primary safeguard against the long-term decline of functional mobility.",

    treatments: "We utilize a data-driven approach to neurological recovery: \n• Neuro-Developmental Treatment (NDT): Facilitating normal movement patterns through manual handling. \n• Proprioceptive Neuromuscular Facilitation (PNF): Specialized stretching and strengthening to improve neuromuscular response. \n• Functional Electrical Stimulation (FES): Using electrical impulses to activate paretic muscles during gait. \n• Balance & Gait Re-education: Utilizing sensory-motor integration to improve postural stability. \n• Spasticity & Fatigue Management: Clinical strategies to balance activity levels and reduce involuntary muscle tension."
  }
},

 {
    id: "sports-physiotherapy",
    title: "Sports Injury & Performance Physiotherapy",
    desc: "Advanced clinical management for athletes of all levels, focusing on rapid injury recovery, biomechanical optimization, and preventative conditioning.",
    image: "https://plus.unsplash.com/premium_photo-1725576700671-28f9113cafa0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Trophy className="text-teal-600" />, // Changed to Trophy to reflect the sports theme
    color: "bg-teal-50",
    fullContent: {
      introduction: "Sports Physiotherapy is a specialized branch of medicine dedicated to the assessment, treatment, and prevention of injuries sustained during athletic activity. Our objective extends beyond simple pain relief; we focus on 'Return to Play' protocols that ensure athletes return to their peak performance levels. By analyzing movement patterns and athletic mechanics, our specialists provide evidence-based interventions for everyone from recreational enthusiasts to elite professional athletes.",
      
      types: "Our sports-specific therapeutic modalities include: \n• Progressive Resistance Training (PRT): Scientific muscle overloading protocols to enhance explosive power and metabolic endurance. \n• Advanced Soft Tissue Mobilization (ASTM): Clinical manual techniques to increase tissue extensibility, break down fibrotic adhesions (scar tissue), and accelerate intramuscular healing. \n• Neuromuscular Control & Proprioception: Training the body to maintain joint stability during high-velocity movements. \n• Sport-Specific Biomechanical Analysis: Evaluating form and technique to identify 'weak links' in an athlete's kinetic chain.",

      whenToSee: "Immediate consultation is advised following any acute trauma or persistent performance decline. Key indicators include: \n• Acute musculoskeletal trauma (sudden pops, tears, or swelling). \n• Chronic over-use injuries (tendinopathies or stress fractures). \n• Post-concussive symptoms or disorientation. \n• Recurring joint instability or 'giving way' during pivot movements. \n• Persistent pain that interferes with athletic form or speed.",

      risks: [
        "Biomechanical imbalances and poor kinetic chain integration",
        "Inadequate physiological recovery periods (Overtraining Syndrome)",
        "Inappropriate equipment or improper footwear for the specific terrain",
        "Environmental stressors (Extreme temperatures, high humidity)",
        "Previous unconditioned injury leading to compensatory movement",
        "Sudden changes in training volume or intensity levels"
      ],
      
      prevention: "Professional injury prevention is a 365-day commitment. Our 'Pre-hab' programs focus on: \n• Strategic Periodization: Planning rest phases to prevent tissue fatigue. \n• Dynamic Warm-ups & Mobility Drills: Increasing blood flow and joint lubrication before high-impact activity. \n• Sport-Specific Conditioning: Strengthening the precise muscle groups utilized in your specific discipline. \n• Biomechanical Correction: Ensuring proper technique to distribute forces evenly across joints and ligaments.",

      treatments: "We utilize a tiered approach to athletic recovery: \n• Acute Phase Management: Implementing the PRICE protocol (Protection, Rest, Ice, Compression, Elevation) to stabilize the injury site. \n• Manual & Electro-Therapy: Utilizing laser, ultrasound, or dry needling to manage localized inflammation. \n• Functional Rehabilitation: Graded exercises that mimic the specific demands of your sport (e.g., cutting, jumping, throwing). \n• Return-to-Sport Testing: Objective strength and stability benchmarks that must be met before an athlete is cleared for competition."
    }
},

  {
  id: "geriatric-physiotherapy",
  title: "Geriatric Physiotherapy",
  desc: "Specialized physical therapy focused on optimizing functional mobility, managing age-related degenerative conditions, and enhancing the quality of life for older adults.",
  image: "https://plus.unsplash.com/premium_photo-1661698068272-987480c4074d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  icon: <UserCheck className="text-teal-600" />, // Changed to UserCheck to reflect care and safety
  color: "bg-teal-50",
  fullContent: {
    introduction: "Geriatric Physiotherapy, or Geriatric Rehabilitation, is a clinical sub-specialty dedicated to addressing the unique physiological and musculoskeletal changes associated with aging. As the body undergoes natural degenerative shifts—including reduced muscle mass (sarcopenia) and bone density—specialized intervention becomes essential. Our approach focuses on maintaining autonomy, improving balance to prevent falls, and managing the complexities of multi-morbidity in a holistic, patient-centered environment.",
    
    types: "Our geriatric protocols are divided into specialized therapeutic pathways: \n• Fall Prevention & Balance Training: Identifying gait instabilities and implementing vestibular and proprioceptive exercises to reduce fracture risks. \n• Osteoporosis Management: Weight-bearing and resistance protocols to enhance bone mineral density. \n• Post-Operative Elder Care: Specialized rehab following hip or knee arthroplasty (replacements). \n• Cognitive-Motor Therapy: Integrating physical movement with cognitive tasks to support patients with early-stage dementia or Alzheimer's.",

    whenToSee: "Consultation with a geriatric specialist is recommended for: \n• Observed changes in walking speed or gait patterns. \n• Recurring 'near-falls' or loss of confidence in physical movement. \n• Chronic joint pain resulting from Osteoarthritis. \n• Recovery following a cardiac event or major surgery. \n• Management of progressive neurological conditions such as Parkinson’s Disease.",

    risks: [
      "Sarcopenia (age-related muscle wasting) and loss of power",
      "Increased risk of fragility fractures due to Osteoporosis",
      "Sedentary lifestyle leading to cardiovascular deconditioning",
      "Postural hypotension and increased fall risk",
      "Joint contractures and reduced flexibility",
      "Cognitive decline and social isolation due to limited mobility"
    ],
    
    prevention: "Proactive 'Aging-in-Place' strategies center on environment and movement: \n• Environmental Ergonomics: Modifying the home to remove trip hazards and improve lighting. \n• Strength Maintenance: Consistent, low-impact resistance training to offset natural muscle loss. \n• Sensory Optimization: Ensuring vision and hearing are checked to support better balance. \n• Nutritional Support: Coordinating with specialists to ensure adequate protein and Vitamin D intake for musculoskeletal health.",

    treatments: "We offer comprehensive, home-based and clinical interventions tailored to senior health: \n• Orthopedic Rehabilitation: Manual therapy and targeted exercises to restore joint mechanics after injury or surgery. \n• Cardiopulmonary Reconditioning: Evidence-based endurance training to improve heart and lung capacity. \n• Neurological Facilitation: Utilizing neuro-plasticity techniques to maintain motor control in Parkinson’s or post-stroke patients. \n• Pain Management Modalities: Using gentle manual therapy, heat/cold therapy, and TENS to manage chronic arthritic pain. \n• Assistive Device Training: Expert guidance on the correct selection and ergonomic use of walkers, canes, and specialized footwear."
  }
},

  {
  id: "physiotherapy-at-home",
  title: "In-Home Physiotherapy Services",
  desc: "Professional clinical care delivered within the patient's residence to ensure continuity of recovery, specifically following hospital discharge or for those with restricted mobility.",
  image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2042&auto=format&fit=crop",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "In-Home Physiotherapy brings expert clinical care to the safety and comfort of your personal environment. This service is designed for patients where clinical travel is contraindicated—such as post-operative cases, geriatric patients, or those with severe neurological impairments. By treating patients in their own space, our therapists can perform real-world functional assessments, tailoring recovery plans to the specific architecture and daily requirements of the patient's home life.",
    
    types: "We provide a full spectrum of clinical specialties via our mobile therapy units: \n• Post-Surgical Home Rehab: Critical intervention within 24-48 hours of discharge to prevent post-op complications. \n• Neurological Home Care: Long-term management for Stroke, MS, and Parkinson’s in a familiar, low-stress environment. \n• Pediatric Home Intervention: Early childhood development therapy provided in the child's natural play space for better engagement. \n• Geriatric Mobility Support: Focused on balance, 'Aging-in-Place' strategies, and preventing domestic falls. \n• Cardiopulmonary Home Care: Monitored respiratory exercises for chronic conditions like COPD or post-cardiac events.",

    whenToSee: "Home-based intervention is the preferred choice for: \n• Post-Operative Patients: When mobility is restricted and wound care is a priority. \n• Bedridden or High-Dependency Patients: Requiring intensive mobilization and respiratory hygiene. \n• Busy Professionals: Seeking clinical excellence without the time-cost of urban traffic (Bengaluru/Hyderabad). \n• Seniors with High Fall Risk: Who require a home-safety audit alongside physical strengthening. \n• Chronic Pain Management: Where privacy and immediate rest following therapy are required.",

    risks: [ // Rephrased 'Risks' to be clinically relevant to Home Care
      "Domestic environmental hazards (rugs, lighting, stairs) leading to falls",
      "Inconsistent compliance with Home Exercise Programs (HEP)",
      "Muscle atrophy and 'Deconditioning Syndrome' due to prolonged bed rest",
      "Respiratory congestion in non-ambulatory patients",
      "Caregiver burnout and improper manual handling techniques",
      "Delayed emergency response for high-risk cardiac or neuro-patients"
    ],
    
    prevention: "Our 'Safe-at-Home' prevention strategy focuses on: \n• Ergonomic Modification: Identifying and removing physical barriers in the home to prevent re-injury. \n• Caregiver Empowerment: Training family members on safe transfer techniques and assisted stretching. \n• Continuity of Care: bridging the gap between hospital discharge and independent living to prevent re-admission. \n• Digital Monitoring: Using telerehabilitation tools to track progress between physical visits.",

    treatments: "We utilize portable clinical technology to provide advanced treatments at your bedside: \n• Portable Electrotherapy (TENS/EMS): Targeted pain management and muscle stimulation. \n• Clinical Manual Therapy: Specialized mobilization and myofascial release performed in-home. \n• Medical Taping & Splinting: Structural support for joints and connective tissue to aid the healing process. \n• Home-Based Dry Needling & Acupuncture: Minimally invasive pain relief following strict sterile protocols. \n• Functional Re-training: Practicing 'Activities of Daily Living' (ADLs) such as safely navigating the patient's own kitchen, bathroom, and stairs."
  }
},


{
  id: "gynecology-rehab",
  title: "Gynecology Rehabilitation",
  desc: "Gynecological conditions can affect pelvic floor muscles, posture, core stability, and daily activities. Physiotherapy addresses pelvic floor dysfunction, pain, weakness, and movement limitations through personalized, non-invasive rehabilitation programs.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTBrpbhR_vTYiY93H0UeJ15rr4mxrTMEkOw&s",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Gynecology Rehabilitation is a specialized physiotherapy program focused on improving pelvic health, strength, and function in women. It helps manage conditions related to pregnancy, childbirth, hormonal changes, and gynecological surgeries, enhancing overall quality of life.",
types: "Gynecology Rehabilitation offers specialized physiotherapy programs tailored to women’s pelvic health needs.\n• Pelvic Floor Rehabilitation: Strengthening or relaxation training to restore pelvic floor muscle function.\n• Antenatal Rehabilitation: Exercise guidance and education to support physical health during pregnancy.\n• Postnatal Rehabilitation: Recovery-focused therapy to regain strength and stability after childbirth.\n• Post-Gynecological Surgery Rehabilitation: Restoring mobility and function following hysterectomy or other gynecological procedures.\n• Menstrual and Pelvic Pain Management: Non-invasive techniques to reduce pain and improve comfort."
,    whenToSee: "Gynecology Rehabilitation should be considered when pelvic health issues affect comfort, function, or quality of life.\n• Pelvic Pain or Discomfort: Ongoing pain in the pelvic region or lower abdomen.\n• Urinary or Bowel Incontinence: Leakage or difficulty controlling bladder or bowel function.\n• Pain During Intercourse: Discomfort affecting intimacy and daily life.\n• Postnatal Weakness or Core Instability: Reduced strength or abdominal separation after childbirth.\n• Post-Surgical Recovery Challenges: Difficulty regaining function after gynecological surgery.",
    risks: [ 
      "Mild discomfort during pelvic floor assessment or exercises", 
      "Temporary muscle soreness or fatigue",
   "Emotional discomfort during initial sessions",
   "Minimal risks when therapy is performed by trained pelvic health professionals",
    ],
    
    prevention: "Many gynecological conditions can be prevented or minimized with proactive care and lifestyle management.\n• Pelvic Floor Strengthening: Regular exercises to maintain muscle support and control.\n• Correct Posture and Body Mechanics: Reducing strain on pelvic and core muscles.\n• Regular Physical Activity: Maintaining overall strength, flexibility, and circulation.\n• Healthy Weight Management: Minimizing excess pressure on pelvic structures.\n• Early Physiotherapy Intervention: Preventing complications during pregnancy and postpartum recovery.",

    treatments: "Gynecology Rehabilitation focuses on restoring pelvic health through personalized therapeutic approaches.\n• Pelvic Floor Muscle Training: Targeted exercises to improve strength, coordination, or relaxation.\n• Core Stabilization Exercises: Enhancing abdominal and spinal support.\n• Posture Correction: Improving alignment to reduce pelvic and lower back strain.\n• Breathing and Relaxation Techniques: Supporting muscle control and pain reduction.\n• Pain Management Strategies: Non-invasive methods to relieve pelvic and menstrual pain.\n• Patient Education and Lifestyle Guidance: Empowering long-term pelvic health and recovery."
  }
},

{
  id: "cardio-pulmonary-rehab",
  title: "Cardio Pulmonary Rehabilitation",
  desc: "Heart and lung conditions can lead to breathlessness, fatigue, reduced stamina, and limited daily activity. Cardio Pulmonary Rehabilitation focuses on improving cardiovascular fitness, breathing efficiency, and functional capacity through individualized and monitored rehabilitation programs.",
  image: "https://www.lyfstylewellness.com/wp-content/uploads/2022/07/cardiac-rehabilitation-clinic-india.webp",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Cardio Pulmonary Rehabilitation is a structured physiotherapy program designed to improve heart and lung function, physical endurance, and overall quality of life in individuals with cardiac and respiratory conditions. It supports safe recovery and long-term health through supervised exercise and education.",
    
    types: "Cardio Pulmonary Rehabilitation offers structured programs based on individual cardiac and respiratory needs.\n• Cardiac Rehabilitation: Supports recovery after heart attack, cardiac surgery, or chronic heart disease.\n• Pulmonary Rehabilitation: Manages long-term respiratory conditions such as COPD, asthma, and post-infection lung disorders.\n• Post-Surgical Cardio Pulmonary Rehabilitation: Restores endurance and breathing capacity after heart or lung surgery.\n• Post-ICU Rehabilitation: Improves strength, mobility, and respiratory function following prolonged critical illness or ventilator support.",
    whenToSee: "Cardio Pulmonary Rehabilitation should be considered when heart or lung conditions limit physical capacity or daily function.\n• Persistent Breathlessness: Shortness of breath during rest or minimal activity.\n• Reduced Exercise Tolerance: Difficulty walking, climbing stairs, or performing routine tasks.\n• Post-Cardiac or Respiratory Illness Recovery: Weakness or fatigue after heart or lung-related conditions.\n• Chest Fatigue or Low Stamina: Early exhaustion during physical effort.\n• Post-Surgical or ICU Recovery Challenges: Difficulty regaining strength and confidence after hospitalization.",
    risks: [ 
      "Temporary fatigue after exercise sessions", 
      "Mild breathlessness during initial training phases",
   "Muscle soreness due to deconditioning",
   "Risk of overexertion without proper monitoring",
    ],
    
    prevention: "Long-term heart and lung complications can be minimized through proactive lifestyle and rehabilitation strategies.\n• Regular Physical Activity: Maintaining cardiovascular and respiratory fitness.\n• Breathing Exercises: Improving lung efficiency and oxygen utilization.\n• Smoking Cessation: Reducing further damage to heart and lung tissues.\n• Healthy Weight and Nutrition: Supporting metabolic and cardiovascular health.\n• Stress Management and Early Rehabilitation: Preventing deconditioning after illness or surgery.",

    treatments: "Cardio Pulmonary Rehabilitation focuses on improving endurance, strength, and breathing efficiency through monitored therapy.\n• Breathing Retraining: Techniques to enhance lung expansion and breathing control.\n• Aerobic Conditioning: Safe cardiovascular exercises to improve stamina.\n• Strength and Endurance Training: Building muscle strength to support daily activities.\n• Posture Correction: Optimizing breathing mechanics and reducing strain.\n• Relaxation Techniques: Managing breathlessness, anxiety, and fatigue.\n• Patient Education: Teaching self-monitoring, lifestyle modification, and safe activity progression."
  }
},

{
  id: "speech-rehab",
  title: "Speech Rehabilitation",
  desc: "Speech and communication difficulties can arise due to stroke, head injury, neurological disorders, developmental delays, or post-surgical conditions. Speech Rehabilitation works on improving speech production, language comprehension, voice quality, cognitive-communication skills, and swallowing through structured therapy programs.",
  image: "https://abilitychildcare.in/img/48.jpg",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Speech Rehabilitation is a specialized therapy focused on improving communication, speech clarity, language skills, and swallowing function in individuals affected by neurological or developmental conditions. It plays a key role in enhancing independence and quality of life.",
    
    types: "Speech Rehabilitation provides targeted therapy programs based on individual communication needs.\n• Post-Stroke Speech Rehabilitation: Restores speech clarity, language comprehension, and communication after stroke.\n• Pediatric Speech Rehabilitation: Supports children with developmental speech and language delays.\n• Neurogenic Speech Rehabilitation: Manages speech and communication difficulties caused by Parkinson’s disease, traumatic brain injury, or neurological disorders.\n• Swallowing (Dysphagia) Rehabilitation: Improves safe swallowing, feeding skills, and airway protection.",
    whenToSee: "Speech Rehabilitation should be considered when communication or swallowing difficulties affect daily life.\n• Difficulty Speaking or Slurred Speech: Reduced clarity or fluency in speech production.\n• Language Comprehension Problems: Difficulty understanding spoken or written language.\n• Voice Changes: Hoarseness, reduced volume, or altered voice quality.\n• Swallowing Difficulties: Choking, coughing, or discomfort during eating and drinking.\n• Post-Illness or Developmental Concerns: Communication challenges following illness, injury, or developmental delay.",
    risks: [ 
      "Temporary vocal fatigue after therapy sessions", 
      "Mild frustration during early learning phases",
   "Fatigue during cognitive or speech exercises",
   "Minimal risks when therapy is guided by trained professionals",
    ],
    
    prevention: "Long-term speech and communication difficulties can be minimized through early care and healthy communication habits.\n• Early Screening and Intervention: Identifying speech or swallowing issues at an early stage.\n• Regular Communication Practice: Maintaining speech, language, and cognitive engagement.\n• Cognitive Stimulation: Supporting brain health through mental activities.\n• Voice Care and Hygiene: Preventing vocal strain and voice disorders.\n• Early Rehabilitation After Neurological Events: Reducing long-term communication impairments.",

    treatments: "Speech Rehabilitation focuses on improving communication and swallowing through structured therapeutic techniques.\n• Speech and Language Exercises: Enhancing articulation, fluency, and language skills.\n• Voice Therapy: Improving voice strength, quality, and endurance.\n• Cognitive-Communication Training: Supporting attention, memory, and communication effectiveness.\n• Swallowing Therapy: Strengthening muscles involved in safe swallowing.\n• Alternative Communication Strategies: Introducing assistive communication methods when needed.\n• Caregiver Education: Training family members to support communication goals at home."
  }
},

{
  id: "occupational-theraphy",
  title: "Occupational Theraphy",
  desc: "Occupational Therapy addresses physical, cognitive, sensory, and coordination challenges that affect a person’s ability to perform daily tasks. Therapy aims to restore function, adapt activities, and modify environments to support safe and independent living.",
  image: "https://westcoastuniversity.edu/wp-content/uploads/2024/08/Occupational-Therapy-for-Kids-m.jpg",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Occupational Therapy is a specialized rehabilitation service that helps individuals regain independence in daily activities following injury, illness, or disability. It focuses on improving functional abilities needed for self-care, work, and everyday life.",
whenToSee: "Occupational Therapy may be needed when physical, cognitive, or sensory limitations affect daily functioning.\n• Difficulty with Self-Care Activities: Challenges in dressing, bathing, eating, or grooming independently.\n• Work or School Performance Issues: Trouble managing writing, typing, or job-related tasks.\n• Neurological or Orthopedic Conditions: Functional limitations following stroke, injury, or surgery.\n• Developmental Challenges: Delays in fine motor skills, coordination, or sensory processing in children.",    
types: "Occupational Therapy offers specialized programs based on individual functional needs.\n• Neurological Occupational Therapy: Supports recovery of daily living skills after stroke, head injury, or neurological disorders.\n• Pediatric Occupational Therapy: Helps children with developmental delays, sensory integration issues, and motor coordination challenges.\n• Orthopedic Occupational Therapy: Focuses on restoring function after fractures, surgeries, or hand and upper-limb injuries.\n• Geriatric Occupational Therapy: Promotes independence, safety, and mobility in older adults.\n• Hand Therapy & Fine Motor Rehabilitation: Improves hand strength, dexterity, and coordination for daily activities.",   
    risks: [ 
      "Temporary fatigue during task-based therapy", 
      "Mild frustration while learning new skills",
   "Muscle soreness with repetitive activity practice",
   "Minimal risks when therapy is guided by trained professionals",
    ],
    
prevention: "Long-term functional limitations can be reduced through early intervention and adaptive strategies.\n• Early Rehabilitation: Prompt therapy to restore functional abilities after injury or illness.\n• Ergonomic Adaptations: Modifying workspaces and daily environments to reduce strain.\n• Regular Activity Practice: Maintaining mobility and fine motor skills through daily use.\n• Proper Body Mechanics: Using correct movement techniques to prevent overuse and injury.",
treatments: "Occupational Therapy treatment focuses on improving independence and quality of life through functional training.\n• Functional Task Training: Practicing real-life activities such as dressing, feeding, and household tasks.\n• Hand and Fine Motor Exercises: Strengthening and coordination activities for hand function.\n• Cognitive Rehabilitation: Improving attention, memory, and problem-solving for daily tasks.\n• Adaptive Equipment Training: Learning to use assistive devices for safer independence.\n• Sensory Integration Therapy: Managing sensory processing difficulties, especially in children.\n• Caregiver Education: Training family members to support therapy goals at home.",
  }
},

{
  id: "cognitive-rehabilitation",
  title: "Cognitive Rehabilitation",
  desc: "Cognitive difficulties can occur due to stroke, head injury, neurological disorders, post-COVID conditions, or aging. Cognitive Rehabilitation aims to restore impaired cognitive functions, develop compensatory strategies, and improve overall mental performance through structured therapeutic programs.",
  image: "https://sukinohealthcare.com/wp-content/uploads/2023/06/Cognitive-Rehabilitation-Exercises.webp",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Cognitive Rehabilitation is a specialized therapy focused on improving thinking skills such as memory, attention, problem-solving, and executive function after injury or illness. It helps individuals regain independence and improve daily functioning.",
    whenToSee: "Cognitive Rehabilitation should be considered when changes in thinking abilities affect daily life and independence.\n• Memory Difficulties: Frequent forgetfulness, trouble recalling recent events, or difficulty learning new information.\n• Reduced Attention and Concentration: Difficulty staying focused, easily distracted, or mentally fatigued.\n• Impaired Problem-Solving or Decision-Making: Trouble planning, organizing tasks, or making everyday decisions.\n• Confusion or Disorientation: Feeling confused about time, place, or routine activities.\n• Post-Neurological or Medical Conditions: Cognitive challenges following stroke, head injury, neurological disorders, or post-COVID recovery.",
types: "Cognitive Rehabilitation includes specialized programs tailored to the individual’s cognitive deficits.\n• Post-Stroke Cognitive Rehabilitation: Focuses on improving memory, attention, reasoning, and problem-solving skills following a stroke.\n• Traumatic Brain Injury (TBI) Cognitive Rehabilitation: Aims to restore cognitive functions such as attention, processing speed, and executive control after head injury.\n• Neurodegenerative Cognitive Rehabilitation: Provides supportive strategies to manage cognitive decline in conditions like Parkinson’s disease or dementia.\n• Post-Illness Cognitive Rehabilitation: Helps manage brain fog, reduced concentration, and mental fatigue after COVID or prolonged illness.",    
    risks: [ 
      "Mental fatigue during therapy sessions", 
      "Frustration during challenging cognitive tasks",
   "Temporary headache or tiredness",
   "Minimal risks when therapy is guided by trained professionals",
    ],
    
prevention: "Long-term cognitive decline can be reduced through proactive lifestyle and rehabilitation strategies.\n• Mental Stimulation: Engaging in activities that challenge memory, attention, and problem-solving skills.\n• Healthy Sleep Habits: Maintaining consistent sleep routines to support brain recovery and cognitive performance.\n• Regular Physical Activity: Improving blood flow and neural health through movement and exercise.\n• Stress Management: Reducing mental fatigue and cognitive overload through relaxation techniques.\n• Early Rehabilitation: Timely cognitive therapy after neurological events to prevent further decline.",
treatments: "Cognitive Rehabilitation treatment focuses on restoring and enhancing cognitive function through structured therapeutic interventions.\n• Memory Training: Exercises designed to improve short-term and long-term memory skills.\n• Attention and Concentration Exercises: Activities that enhance focus, processing speed, and mental endurance.\n• Problem-Solving Tasks: Structured challenges to improve reasoning, planning, and decision-making abilities.\n• Executive Function Training: Programs aimed at improving organization, multitasking, and self-regulation skills.\n• Compensatory Strategy Development: Teaching adaptive techniques to manage cognitive limitations in daily life.\n• Caregiver Education: Guidance and training to support cognitive recovery at home and in daily routines."
  }
},


{
  id: "tele-physiotherapy",
  title: "Tele-physiotherapy",
  desc: "Tele-physiotherapy is virtual physiotherapy, which uses telecommunications technology to conduct appointments at a distance. Tele-physiotherapy provides patient care including consultation, assessment, diagnosis, and treatment plan. It uses techniques such as video calling, email, and various applications. ",
  image: "https://www.arogyaphysio.com/wp-content/uploads/2021/06/telehe.jpeg",
  icon: <Home className="text-teal-600" />, // Changed from Scissors to Home for immediate relevance
  color: "bg-teal-50",
  fullContent: {
    introduction: "Tele-Physiotherapy is a modern physiotherapy service where assessment, treatment guidance, and rehabilitation are delivered remotely through video calls, phone consultations, or digital platforms. It allows patients to receive professional physiotherapy care from their home under the supervision of a licensed physiotherapist. Tele-physiotherapy focuses on guided exercises, posture correction, pain management strategies, education, and progress monitoring, making it a convenient and safe option for people with mobility limitations, busy schedules, or limited access to in-clinic care.",
    whenToSee: "Tele-Physiotherapy is suitable when in-person visits are difficult or when continued guidance is needed.\n• Mobility Limitations: Difficulty traveling due to pain, disability, or recovery phase.\n• Post-Surgical or Injury Recovery: Need for supervised exercises at home.\n• Chronic Pain or Long-Term Conditions: Regular follow-ups without frequent clinic visits.\n• Busy Schedules or Remote Locations: Limited access to physiotherapy centers.\n• Preventive Care and Exercise Guidance: Maintaining mobility and strength remotely.",
types: "Tele-Physiotherapy delivers professional physiotherapy care remotely through secure virtual platforms.\n• Virtual Consultation: Online assessment, diagnosis guidance, and treatment planning.\n• Guided Exercise Therapy: Live or recorded exercise sessions supervised by a physiotherapist.\n• Post-Surgical Follow-Up: Remote monitoring and progression of rehabilitation programs.\n• Chronic Condition Management: Ongoing support for pain, mobility, and functional conditions.\n• Home-Based Rehabilitation Programs: Personalized exercise plans designed for safe practice at home.",    
    risks: [ 
      "Tele-Physiotherapy is generally safe when guided by trained professionals, but certain limitations may exist.", 
      "Limited Physical Assessment: Hands-on examination and manual techniques cannot be performed remotely.",
   "Incorrect Exercise Performance: Risk of improper technique if instructions are not followed carefully.",
   "Technology Issues: Poor internet connection or device limitations may affect session quality.",
   "Delayed Identification of Red Flags: Some conditions may require in-person evaluation for accurate diagnosis."
    ],
    
prevention: "Tele-Physiotherapy helps prevent complications by promoting consistency and early intervention.\n• Regular Virtual Follow-Ups: Ensuring correct exercise technique and progression.\n• Early Identification of Issues: Addressing pain or movement problems before they worsen.\n• Home Exercise Compliance: Encouraging adherence to prescribed rehabilitation programs.\n• Posture and Movement Education: Preventing strain and injury during daily activities.\n• Lifestyle Guidance: Supporting long-term musculoskeletal and functional health.",
treatments: "Tele-Physiotherapy provides effective rehabilitation through remote clinical guidance.\n• Exercise Prescription and Supervision: Customized programs delivered via video sessions.\n• Pain Management Techniques: Guided stretching, mobility, and relaxation strategies.\n• Posture and Ergonomic Training: Correcting movement habits at home or work.\n• Functional Training: Improving strength, balance, and coordination remotely.\n• Education and Self-Management Strategies: Empowering patients to manage recovery independently."
  }
},

];