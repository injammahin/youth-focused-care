import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GraduationCap,
  HeartHandshake,
  HomeIcon,
  Info,
  MessageCircleHeart,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { images, programs } from "../data/siteData";

const programImages = {
  hero:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  residential:
    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1400&q=85",
  counseling:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  activity:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
  training:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  planning:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  careRoom:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
};

const programVisuals = [
  {
    image: programImages.residential,
    audience: "Youth needing a safe residential setting",
    duration: "Structured daily support",
    outcome: "Stability, routine, and guided progress",
    details:
      "This program area explains how the residential environment provides structure, consistency, supervision, and a calm setting where youth can receive support and begin building healthier daily routines.",
  },
  {
    image: programImages.counseling,
    audience: "Youth needing emotional and behavioral support",
    duration: "Based on individual care planning",
    outcome: "Improved communication and coping skills",
    details:
      "This program area describes supportive behavioral guidance, positive communication, emotional awareness, and respectful accountability within the care environment.",
  },
  {
    image: programImages.activity,
    audience: "Youth developing practical life skills",
    duration: "Ongoing skill-building activities",
    outcome: "Confidence, responsibility, and independence",
    details:
      "This program area highlights routines, responsibility, healthy decision-making, social confidence, and preparation for future steps.",
  },
  {
    image: programImages.training,
    audience: "Families, staff, and referral partners",
    duration: "Resource-based learning",
    outcome: "Better understanding and stronger support",
    details:
      "This program area can connect visitors to training resources, educational materials, and approved external learning links.",
  },
  {
    image: programImages.planning,
    audience: "Families and referral agencies",
    duration: "From referral to transition planning",
    outcome: "Clear next steps and coordinated care",
    details:
      "This program area explains communication, referral review, planning, and coordination with guardians, agencies, and support partners.",
  },
  {
    image: programImages.careRoom,
    audience: "Youth needing a calm care environment",
    duration: "Daily structured care",
    outcome: "Safety, consistency, and positive direction",
    details:
      "This program area presents the safe setting, daily expectations, professional support, and care environment in a way visitors can understand quickly.",
  },
];

const serviceHighlights = [
  {
    icon: HomeIcon,
    title: "Residential Care",
    text: "A safe and structured setting where youth can receive daily support, guidance, supervision, and routine.",
  },
  {
    icon: HeartHandshake,
    title: "Behavioral Support",
    text: "Supportive guidance focused on emotional regulation, communication, accountability, and positive behavior.",
  },
  {
    icon: BookOpen,
    title: "Life Skills",
    text: "Practical development areas such as routines, responsibility, confidence, healthy choices, and future planning.",
  },
  {
    icon: Users,
    title: "Family Coordination",
    text: "Clear communication for guardians, families, agencies, referral partners, and community support teams.",
  },
];

const carePath = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Referral Contact",
    text: "Families or referral partners contact the center to discuss needs, availability, eligibility, and initial next steps.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Review & Fit",
    text: "The team reviews referral information, care needs, safety considerations, documentation, and program fit.",
  },
  {
    step: "03",
    icon: BedDouble,
    title: "Admission Planning",
    text: "If appropriate, the center provides guidance for arrival, documents, placement expectations, and communication.",
  },
  {
    step: "04",
    icon: Target,
    title: "Ongoing Support",
    text: "Youth receive daily structure, supportive guidance, skill-building opportunities, and progress-focused care.",
  },
];

const dailyStructure = [
  "Morning routine and daily expectations",
  "Supportive check-ins and communication",
  "Structured activities and skill development",
  "Family or referral partner coordination",
  "Healthy routines and responsibility building",
  "Evening reflection and next-day planning",
];

const clinicalSupport = [
  "Behavioral support planning",
  "Emotional regulation guidance",
  "Crisis-aware communication approach",
  "Safe environment and supervision",
  "Positive routine development",
  "Transition and next-step planning",
];

const referralInfo = [
  "Youth basic information",
  "Reason for referral",
  "Current support needs",
  "Guardian or agency contact",
  "Relevant history or documentation",
  "Urgency and placement timeline",
];

function IconBox({ children, className = "" }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
}

function ServiceHighlightCard({ icon: Icon, title, text }) {
  return (
    <Card className="rounded-[10px]">
      <IconBox className="mb-5 bg-brand-blue text-white">
        <Icon size={23} />
      </IconBox>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </Card>
  );
}

function ProgramCard({ item, onOpen }) {
  const Icon = item.icon;
  const points = item.points || [];

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group block h-full text-left"
    >
      <div className="h-full overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <div className="relative h-56 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/20 to-transparent" />
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-white text-brand-magenta shadow-card">
            <Icon size={22} />
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="mb-2 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-black text-brand-navy">
              Click to view details
            </p>
            <h3 className="text-2xl font-black text-white">{item.title}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="leading-7 text-slate-600">{item.summary}</p>

          {points.length > 0 && (
            <ul className="mt-5 grid gap-3 text-sm font-bold text-slate-600">
              {points.slice(0, 3).map((point) => (
                <li key={point} className="flex gap-2 leading-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-magenta">
            Program Details <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </button>
  );
}

function ProgramModal({ program, onClose }) {
  if (!program) return null;

  const Icon = program.icon;
  const points = program.points || [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/70 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[16px] bg-white shadow-soft">
        <div className="relative h-72 overflow-hidden rounded-t-[16px]">
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-card transition hover:bg-brand-yellow"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
              <Icon size={25} />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-yellow">
              Program Details
            </p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-5xl">
              {program.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <h3 className="text-2xl font-black text-brand-navy">
              Program Overview
            </h3>
            <p className="text-muted mt-4">{program.summary}</p>
            <p className="mt-4 leading-8 text-slate-600">{program.details}</p>

            {points.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-black text-brand-navy">
                  What this program may include
                </h4>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {points.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 rounded-[10px] border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                      <p className="text-sm font-bold leading-6 text-slate-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            <div className="rounded-[10px] border border-slate-200 bg-brand-cream/70 p-5">
              <Info className="mb-3 text-brand-magenta" />
              <h4 className="font-black text-brand-navy">Best For</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {program.audience}
              </p>
            </div>

            <div className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-card">
              <Clock className="mb-3 text-brand-magenta" />
              <h4 className="font-black text-brand-navy">Support Duration</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {program.duration}
              </p>
            </div>

            <div className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-card">
              <Target className="mb-3 text-brand-magenta" />
              <h4 className="font-black text-brand-navy">Primary Outcome</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {program.outcome}
              </p>
            </div>

            <div className="rounded-[10px] bg-brand-navy p-5 text-white">
              <h4 className="font-black">Need help choosing a program?</h4>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Contact the admissions team to discuss referral fit,
                availability, documents, and next steps.
              </p>

              <div className="mt-5 grid gap-3">
                <Button to="/admissions" variant="yellow">
                  Start Referral <ArrowRight size={16} />
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:text-brand-yellow"
                >
                  Contact Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarePathCard({ step, icon: Icon, title, text }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-blue text-white">
          <Icon size={22} />
        </div>
        <span className="text-4xl font-black text-brand-blue/10">{step}</span>
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ChecklistBlock({ title, text, items, icon: Icon }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card">
      <Icon className="mb-4 text-brand-magenta" />
      <h3 className="text-2xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>

      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
            <p className="text-sm font-bold leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const enhancedPrograms = useMemo(() => {
    return programs.map((program, index) => ({
      ...program,
      ...programVisuals[index % programVisuals.length],
    }));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProgram ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProgram]);

  return (
    <>
      <PageHero
        eyebrow="Programs & Services"
        title="Residential treatment programs explained clearly."
        text="Families, guardians, referral partners, and community professionals can quickly understand each program area, how support is structured, and what next step to take."
        image={programImages.hero}
        primaryLabel="Start Referral"
        primaryTo="/admissions"
        secondaryLabel="Ask a Question"
        secondaryTo="/contact"
      />

      <section className="section-padding py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Program Focus"
            title="Structured services for safety, stability, and positive youth development."
            text="This page is designed to explain your program model in a simple way so visitors can understand the center before calling."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item) => (
              <ServiceHighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream/60 py-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="badge-soft">
                <Sparkles className="h-4 w-4 text-brand-magenta" />
                Available Program Areas
              </span>

              <h2 className="heading-lg mt-5">
                Click a program to view complete details.
              </h2>

              <p className="text-muted mt-5 max-w-3xl">
                These program cards can be edited to match your licensed
                services, age range, care levels, referral requirements, and
                internal treatment model.
              </p>
            </div>

            <Button to="/admissions" variant="outline">
              Admissions Info <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enhancedPrograms.map((item) => (
              <ProgramCard
                key={item.title}
                item={item}
                onOpen={setSelectedProgram}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
              <img
                src={programImages.residential}
                alt="Residential program environment"
                className="h-[530px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[10px] bg-brand-navy p-6 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
                Program Structure
              </p>
              <p className="mt-2 text-xl font-black">
                Each section helps visitors understand what support looks like
                before they contact the team.
              </p>
            </div>
          </div>

          <div>
            <span className="badge-soft">
              <MessageCircleHeart className="h-4 w-4 text-brand-magenta" />
              How Programs Are Organized
            </span>

            <h2 className="heading-lg mt-6">
              Clear program information reduces confusion and builds trust.
            </h2>

            <p className="text-muted mt-6">
              Visitors need to understand the care environment, who the programs
              serve, how referrals work, and what outcomes the center supports.
              This layout keeps that information structured, warm, and easy to
              scan.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Program purpose and care focus",
                "Daily structure and support areas",
                "Admission and referral connection",
                "Family and agency communication",
                "Training and resource direction",
                "Clear next-step buttons",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[10px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/admissions">
                Start Referral <ArrowRight size={17} />
              </Button>
              <Button to="/faq" variant="outline">
                Read FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Referral To Care Path"
            title="A simple pathway from first contact to structured support."
            text="This section helps families and referral partners understand how the program process usually moves forward."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {carePath.map((item) => (
              <CarePathCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom grid gap-6 lg:grid-cols-3">
          <ChecklistBlock
            icon={Clock}
            title="Daily Structure"
            text="Explain the typical areas of daily life inside the residential program."
            items={dailyStructure}
          />

          <ChecklistBlock
            icon={ShieldCheck}
            title="Support Approach"
            text="Show how the program supports behavior, communication, safety, and progress."
            items={clinicalSupport}
          />

          <ChecklistBlock
            icon={ClipboardCheck}
            title="Referral Information"
            text="Help referral partners understand what information may be helpful before contact."
            items={referralInfo}
          />
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom overflow-hidden rounded-[18px] bg-brand-navy p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Program Outcomes
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Every program section should guide visitors toward the right next
                step.
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                The goal is to help people understand the environment, the
                support model, and the referral process without overwhelming
                them with too much text.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" variant="yellow">
                  Contact Team <ArrowRight size={16} />
                </Button>
                <Button
                  to="/gallery"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:text-brand-yellow"
                >
                  View Gallery
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safety and Stability",
                  text: "Visitors understand how the center creates a structured and supportive care setting.",
                },
                {
                  icon: GraduationCap,
                  title: "Skill Development",
                  text: "Program content can explain life skills, routines, responsibility, and personal growth.",
                },
                {
                  icon: Users,
                  title: "Connected Communication",
                  text: "Families and agencies can find clear contact points and referral direction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-white/10 bg-white/[0.08] p-6"
                >
                  <item.icon className="mb-4 text-brand-yellow" />
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom relative overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-navy to-brand-magenta p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Need Program Guidance?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Help visitors move from learning to action.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                Whether someone is a family member, guardian, agency contact, or
                community partner, this page gives a simple path to understand
                services and contact the right team.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
                  <CalendarCheck />
                </div>

                <div>
                  <h3 className="font-black">Recommended Next Step</h3>
                  <p className="text-sm text-white/70">
                    Guide users to admissions or contact.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <Button to="/admissions" variant="yellow">
                  Start Referral <ArrowRight size={16} />
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:text-brand-yellow"
                >
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
}