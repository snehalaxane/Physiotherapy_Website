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
  id: "vestibular-rehab",
  title: "Vestibular Rehabilitation (VRT)",
  desc: "An exercise-based clinical program designed to promote central nervous system compensation for inner ear deficits and balance disorders.",
  image: "https://plus.unsplash.com/premium_photo-1702598939246-e415d02c24a3?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  icon: <Activity className="text-teal-600" />, // Changed from Scissors to Activity for a clinical look
  color: "bg-teal-50",
  fullContent: {
    introduction: "Vestibular Rehabilitation Therapy (VRT) is a specialized form of physical therapy aimed at alleviating the primary and secondary effects of vestibular disorders. Dizziness and balance impairment are leading causes of restricted mobility, particularly in patients over 75, where falls represent a significant clinical risk. VRT utilizes targeted neuro-plasticity to retrain the brain to process signals from the vestibular system in coordination with visual and proprioceptive input, ultimately stabilizing the patient's gaze and gait.",
    
    types: "VRT is a highly customized protocol focusing on three primary therapeutic pathways: \n• Habituation Training: Targeted exposure to specific visual or motion stimuli to desensitize the nervous system and reduce dizziness triggered by quick head movements or complex environments. \n• Gaze Stabilization: Specialized oculomotor exercises (such as VOR x1 and x2) designed to improve eye-head coordination and eliminate 'bouncing' vision (oscillopsia). \n• Balance & Proprioceptive Retraining: A combination of static and dynamic exercises—utilizing somatosensory cues and dual-tasking—to enhance postural stability during activities of daily living.",

    whenToSee: "Clinical intervention is recommended for individuals experiencing chronic vertigo, persistent 'off-balance' sensations, or vestibular migraines. Specific red flags include: \n• Benign Paroxysmal Positional Vertigo (BPPV) symptoms \n• Oscillopsia (blurred vision during head movement) \n• Frequent stumbling or unexplained falls \n• Spatial disorientation or a 'floating' sensation \n• Motion sensitivity in visually stimulating environments.",

    risks: [
      "Increased fall risk and secondary skeletal injuries",
      "Compromised safety during essential tasks (e.g., driving, cooking)",
      "Social isolation and anxiety-related 'fear of falling'",
      "Deconditioning due to self-imposed activity restriction",
      "Persistent postural-perceptual dizziness (PPPD)"
    ],
    
    prevention: "While many vestibular issues are idiopathic or age-related, risk can be mitigated through: \n• Neuro-Vascular Health: Managing cardiovascular health and diet to reduce the frequency of vestibular migraines. \n• Environmental Safety: Ergonomic modifications at home to prevent secondary injuries from falls. \n• Early Intervention: Prompt clinical assessment of 'minor' dizzy spells to prevent the development of permanent balance deficits.",

    treatments: "Our VRT clinics in Hyderabad and Bangalore employ advanced diagnostic and therapeutic maneuvers: \n• Canalith Repositioning Procedures (CRP): Specialized maneuvers, such as the Epley or Semont Maneuvers, to treat BPPV by relocating displaced otoliths within the inner ear. \n• Progressive Oculomotor Training: Clinically supervised eye-movement protocols. \n• Customized Home Exercise Programs (HEP): Structured balance retraining that evolves as the patient’s neurological compensation improves. \n• Dietary Optimization: Identification of nutritional triggers for patients suffering from vestibular migraines or endolymphatic hydrops."
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
  id: "chiropractor-treatment",
  title: "Chiropractic Care & Spinal Alignment",
  desc: "A specialized healthcare discipline focused on the diagnosis and manual treatment of mechanical disorders of the musculoskeletal system, particularly the spine.",
  image: "https://plus.unsplash.com/premium_photo-1682094353412-c68d7cc503bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  icon: <Activity className="text-teal-600" />, // Changed from Scissors to Activity for a modern health feel
  color: "bg-teal-50",
  fullContent: {
    introduction: "Chiropractic therapy is a non-invasive, evidence-based clinical approach centered on spinal health and its direct correlation with the nervous system. Our specialists utilize precise manual adjustments to correct vertebral subluxations (misalignments), which can interfere with neural communication and physical mobility. By restoring structural integrity to the spine, chiropractic care facilitates the body's innate regenerative processes, reduces chronic inflammation, and optimizes overall biomechanical function.",
    
    types: "Our chiropractic clinic utilizes advanced mechanical and manual modalities: \n• High-Velocity Low-Amplitude (HVLA) Adjustments: Traditional manual thrusts to restore joint cavitation and mobility. \n• Spinal Traction & Decompression: Controlled mechanical force used to create space between vertebrae, relieving pressure on spinal discs and exiting nerve roots. \n• Flexion-Distraction Technique: A specialized, rhythmic decompression therapy performed on a moving table—ideal for treating herniated discs and spinal stenosis with minimal patient discomfort. \n• Myofascial Trigger Point Therapy: Addressing the soft-tissue tension that often accompanies spinal misalignment.",

    whenToSee: "Early chiropractic intervention is recommended for individuals experiencing: \n• Chronic spinal pain (Cervical, Thoracic, or Lumbar). \n• Radiculopathy (numbness, tingling, or 'pins and needles' in the extremities). \n• Sciatica and radiating leg pain. \n• Frequent tension headaches or migraines originating from the neck. \n• Restricted range of motion or postural imbalances resulting from sedentary work environments.",

    risks: [ 
      "Herniated and Bulging Intervertebral Discs",
      "Sciatica and Piriformis Syndrome",
      "Spondylosis and Degenerative Joint Disease",
      "Whiplash and Acute Neck Injuries",
      "Kyphosis and Scoliosis-related discomfort",
      "Facet Joint Syndrome",
      "Postural Fatigue and Ergonomic Strain"
    ],
    
    prevention: "Preventive Chiropractic care focuses on 'Spinal Hygiene' to mitigate the cumulative effects of gravity and daily stress. Regular postural screenings and maintenance adjustments can prevent the progression of minor misalignments into chronic degenerative conditions. We emphasize ergonomic education—modifying workspace setups and sleeping postures—to ensure that the structural gains achieved in the clinic are maintained in your daily life.",

    treatments: "Our chiropractic treatment plans are data-driven and multi-modal: \n• Comprehensive Orthopedic & Neurological Assessments: Utilizing physical exams and imaging reviews to isolate the root cause of dysfunction. \n• Diversified Spinal Manipulation: Targeted adjustments to improve spinal segment mobility. \n• Personalized Kinesiology Exercises: Custom stretching and strengthening to support the newly aligned spinal structure. \n• Posture Re-training: Specific protocols to correct 'Forward Head Posture' and other common structural imbalances. \n• Nutritional & Lifestyle Guidance: Advice on anti-inflammatory diets to support musculoskeletal healing."
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
}
];