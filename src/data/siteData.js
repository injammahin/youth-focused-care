import {
  Award,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  HeartHandshake,
  HomeIcon,
  LifeBuoy,
  LockKeyhole,
  MapPin,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
  GraduationCap,
  FileCheck2
} from "lucide-react";

export const site = {
  name: "Youth Haven Care",
  tagline: "Residential Treatment Center",
  phone: "+1 (000) 000-0000",
  email: "info@example.com",
  address: "123 Wellness Avenue, Your City, ST 00000",
  donationUrl: "https://www.paypal.com/donate",
  referralEmail: "referrals@example.com",
  officeHours: "Monday to Friday, 9:00 AM to 5:00 PM"
};

export const images = {
  hero: "https://cdn-ikpljjl.nitrocdn.com/UMAWTbYWivKvIniayMgoTasnmlnopols/assets/images/optimized/rev-08099a2/clearforkacademy.com/wp-content/uploads/2026/05/A-group-of-teenagers-undergoing-treatment-at-a-youth-residential-treatment-center-in-Texas.png",
  about: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  programs: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  admissions: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  careers: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  training: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
  donate: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  gallery: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
  contact: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
  room: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  care: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80",
  exterior: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  lounge: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80"
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Admissions", path: "/admissions" },
  { label: "Careers", path: "/careers" },
  { label: "Training", path: "/training" },
  { label: "Donate", path: "/donate" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" }
];

export const highlights = [
  { value: "24/7", label: "Structured care setting" },
  { value: "Safe", label: "Calm youth-focused environment" },
  { value: "Simple", label: "Clear admissions pathway" }
];

export const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "A stable environment with clear routines, respectful communication, and a strong focus on physical and emotional safety."
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    text: "Supportive relationships help youth feel seen, heard, and guided without judgement."
  },
  {
    icon: Sparkles,
    title: "Growth Mindset",
    text: "Every young person deserves the opportunity to build confidence, skills, and hope for the future."
  },
  {
    icon: LockKeyhole,
    title: "Privacy & Respect",
    text: "Sensitive information should be handled with care, proper authorization, and responsible communication."
  }
];

export const programs = [
  {
    icon: HomeIcon,
    title: "Residential Care",
    summary: "Structured daily living support in a safe and supervised setting.",
    points: ["Daily routine and supervision", "Supportive living environment", "Healthy boundaries and expectations", "Positive behavior encouragement"]
  },
  {
    icon: Brain,
    title: "Behavioral Support",
    summary: "Individualized support strategies for emotional regulation and healthy decision-making.",
    points: ["Coping skill development", "Communication practice", "Conflict resolution support", "Progress review and planning"]
  },
  {
    icon: Users,
    title: "Family Engagement",
    summary: "Coordinated communication with families, guardians, and referral partners where appropriate.",
    points: ["Family updates", "Referral coordination", "Resource connection", "Transition planning"]
  },
  {
    icon: GraduationCap,
    title: "Life Skills Development",
    summary: "Practical skill-building that supports stability, confidence, and future independence.",
    points: ["Healthy routines", "Social skills", "Goal setting", "Responsibility and accountability"]
  },
  {
    icon: Utensils,
    title: "Daily Wellness Support",
    summary: "A balanced environment that encourages rest, nutrition, recreation, and self-care.",
    points: ["Meal and daily rhythm", "Recreation planning", "Personal care habits", "Wellness-focused activities"]
  },
  {
    icon: FileCheck2,
    title: "Discharge & Transition Planning",
    summary: "Preparation for next steps with documentation, planning, and support coordination.",
    points: ["Aftercare planning", "Referral handoff", "Goal review", "Family and provider coordination"]
  }
];

export const admissionsSteps = [
  {
    step: "01",
    title: "Initial Contact",
    text: "Families, agencies, or referral partners contact the admissions team with basic information about needs, timing, and placement goals."
  },
  {
    step: "02",
    title: "Referral Review",
    text: "The team reviews available information to understand program fit, service needs, documentation, and next-step requirements."
  },
  {
    step: "03",
    title: "Intake Coordination",
    text: "If appropriate, the admissions team explains required documents, expected timeline, admission planning, and arrival preparation."
  },
  {
    step: "04",
    title: "Care Planning",
    text: "After admission, the care team begins structured planning focused on safety, stability, communication, and measurable progress."
  }
];

export const referralChecklist = [
  "Basic demographic information",
  "Referral reason and current concerns",
  "Guardian or agency contact details",
  "Relevant assessments or reports, if available",
  "Medication, allergy, or medical notes, if applicable",
  "Insurance, funding, or placement authorization details, if required"
];

export const careerBenefits = [
  "Mission-driven work environment",
  "Supportive team culture",
  "Opportunities for professional growth",
  "Training and development resources",
  "Structured procedures and supervision",
  "Chance to make meaningful community impact"
];

export const openRoles = [
  "Youth Care Specialist",
  "Residential Support Staff",
  "Case Support Coordinator",
  "Program Assistant",
  "Training Coordinator",
  "Administrative Support"
];

export const trainingResources = [
  {
    icon: BookOpen,
    title: "Behavioral Health Resource Center",
    text: "Helpful external information for behavioral health awareness, prevention, and support services.",
    url: "https://www.samhsa.gov/"
  },
  {
    icon: LifeBuoy,
    title: "Youth Mental Health Information",
    text: "General public health information related to youth mental health, wellness, and prevention topics.",
    url: "https://www.cdc.gov/mental-health/"
  },
  {
    icon: Award,
    title: "Professional Development Resources",
    text: "External government and professional resource links that can be replaced with your approved training providers.",
    url: "https://www.hhs.gov/"
  },
  {
    icon: ClipboardCheck,
    title: "Policy & Compliance Training",
    text: "Placeholder for future internal training, handbook links, orientation resources, or LMS content.",
    url: "https://www.hhs.gov/hipaa/index.html"
  }
];

export const donationOptions = [
  {
    title: "General Support",
    text: "Helps support program needs, supplies, and everyday care resources."
  },
  {
    title: "Youth Activities",
    text: "Supports recreation, enrichment, wellness, and life-skill activities."
  },
  {
    title: "Training & Staff Development",
    text: "Helps strengthen team knowledge, readiness, and professional development."
  }
];

export const galleryItems = [
  { src: images.exterior, title: "Facility Exterior", text: "A welcoming and professional first impression." },
  { src: images.lounge, title: "Comfortable Common Area", text: "Warm spaces designed for calm daily routines." },
  { src: images.room, title: "Learning & Support Room", text: "Flexible areas for planning, meetings, and training." },
  { src: images.meeting, title: "Team Coordination", text: "Collaboration supports consistent care delivery." },
  { src: images.nature, title: "Outdoor Calm", text: "Nature-inspired visuals help communicate peace and hope." },
  { src: images.programs, title: "Administrative Support", text: "Clear processes help families and partners navigate next steps." }
];

export const faqs = [
  {
    question: "Who is this website designed for?",
    answer: "This website is designed for families, guardians, referral partners, applicants, donors, and community members who need clear information about the center."
  },
  {
    question: "Can this website include a secure referral form later?",
    answer: "Yes. The admissions page is built so a secure referral form, document upload, or backend workflow can be added later."
  },
  {
    question: "Does the website store payment information?",
    answer: "No. The donation page is set up for a third-party payment link such as PayPal, Stripe, Donorbox, or another secure provider."
  },
  {
    question: "Can applicants upload resumes?",
    answer: "Yes. The careers page includes a form with name, phone, email, position, availability, message, and PDF/DOC/DOCX resume upload validation."
  },
  {
    question: "Can training videos be embedded later?",
    answer: "Yes. The training resource page currently uses external links, but embedded videos, LMS links, downloadable PDFs, or private pages can be added later."
  },
  {
    question: "Can the logo, colors, and imagery be changed?",
    answer: "Yes. The project uses a centralized data file and Tailwind color system, making it easy to replace the logo, photos, contact information, and brand links."
  },
  {
    question: "Are the legal pages complete?",
    answer: "Privacy Policy, Terms of Use, and Accessibility Statement pages are included as professional placeholders. They should be reviewed by a qualified legal or compliance advisor before launch."
  }
];

export const contactCards = [
  { icon: Phone, title: "Phone", text: site.phone },
  { icon: MessagesSquare, title: "Admissions Email", text: site.referralEmail },
  { icon: MapPin, title: "Location", text: site.address },
  { icon: CalendarCheck, title: "Office Hours", text: site.officeHours }
];
