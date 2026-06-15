import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileCheck2,
  FileText,
  HeartHandshake,
  HomeIcon,
  Info,
  Mail,
  MessageCircleHeart,
  Phone,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import {
  admissionsSteps,
  images,
  referralChecklist,
  site,
} from "../data/siteData";

const admissionImages = {
  hero:
    images.admissions ||
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  intake:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
  residence:
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1400&q=85",
  planning:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  support:
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=85",
};

const defaultAdmissionsSteps = [
  {
    step: "01",
    title: "Contact Admissions",
    text: "Call, email, or submit a message so the team can understand the referral need and current situation.",
  },
  {
    step: "02",
    title: "Share Basic Information",
    text: "Provide youth information, guardian or agency contact, reason for referral, and current support needs.",
  },
  {
    step: "03",
    title: "Referral Review",
    text: "The admissions team reviews program fit, safety needs, availability, documents, and next-step options.",
  },
  {
    step: "04",
    title: "Plan Next Steps",
    text: "If appropriate, the team explains arrival expectations, required documents, communication, and care planning.",
  },
];

const whoCanRefer = [
  {
    icon: Users,
    title: "Families & Guardians",
    text: "Families can contact the admissions team to ask questions, understand program fit, and learn what information may be needed.",
  },
  {
    icon: ClipboardCheck,
    title: "Referral Agencies",
    text: "Agencies can request program information, share referral details, and coordinate next steps with the admissions team.",
  },
  {
    icon: HeartHandshake,
    title: "Community Partners",
    text: "Professionals and community partners can connect with the center for guidance, availability, and appropriate referral direction.",
  },
];

const prepareGroups = [
  {
    title: "Youth Information",
    items: [
      "Name and basic identifying information",
      "Age or date of birth",
      "Current living arrangement",
      "Guardian or agency contact details",
    ],
  },
  {
    title: "Referral Background",
    items: [
      "Reason for referral",
      "Current support needs",
      "Safety or supervision concerns",
      "Urgency and preferred timeline",
    ],
  },
  {
    title: "Helpful Documents",
    items: [
      "Referral forms, if available",
      "Relevant assessments or summaries",
      "Current medications, if applicable",
      "Insurance or funding information, if required",
    ],
  },
];

const expectations = [
  {
    icon: PhoneCall,
    title: "First Conversation",
    text: "The admissions team gathers basic information and answers initial questions about services, fit, and availability.",
  },
  {
    icon: FileCheck2,
    title: "Document Review",
    text: "If needed, the team may request documents to better understand care needs, placement fit, and referral readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Review",
    text: "The review process can include safety needs, supervision level, behavioral support needs, and environmental fit.",
  },
  {
    icon: CalendarCheck,
    title: "Admission Planning",
    text: "If the referral is appropriate, the team explains next steps, timing, arrival expectations, and communication process.",
  },
];

const readinessPoints = [
  "Referral information is complete enough for review",
  "Guardian, family, or agency contact is available",
  "Current needs and safety concerns are clearly shared",
  "Required documents can be provided when requested",
  "The team can discuss program fit and availability",
  "Next steps are understood by all involved parties",
];

function StepCard({ step, title, text }) {
  return (
    <Card className="rounded-[10px]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-lg font-black text-brand-navy">
        {step}
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </Card>
  );
}

function ReferCard({ icon: Icon, title, text }) {
  return (
    <Card className="rounded-[10px]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-blue text-white">
        <Icon size={23} />
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </Card>
  );
}

function ExpectationCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-magenta text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card">
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <div className="mt-5 grid gap-3">
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

export default function Admissions() {
  const steps =
    admissionsSteps && admissionsSteps.length > 0
      ? admissionsSteps
      : defaultAdmissionsSteps;

  const phone = site?.phone || "+1 (000) 000-0000";
  const referralEmail = site?.referralEmail || "referrals@example.com";

  return (
    <>
      <PageHero
        eyebrow="Admissions & Referrals"
        title="A simple path for families, guardians, and referral partners."
        text="The admissions page helps visitors understand what to prepare, who to contact, and what usually happens during the first referral conversation."
        image={admissionImages.hero}
        primaryLabel="Contact Admissions"
        primaryTo="/contact"
        secondaryLabel="Read FAQ"
        secondaryTo="/faq"
      />

      {/* Referral Pathway */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Referral Pathway"
            title="Clear next steps from first contact to care planning."
            text="Use these steps to reduce confusion and help users know exactly what to do next before, during, and after the first admissions conversation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <StepCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Refer */}
      <section className="section-padding bg-brand-cream/60 py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Who Can Start The Process"
            title="Admissions information for every referral source."
            text="The page should make it easy for families, guardians, agencies, and community professionals to understand how to connect with the center."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whoCanRefer.map((item) => (
              <ReferCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Split */}
      <section className="section-padding py-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
              <img
                src={admissionImages.intake}
                alt="Admissions planning conversation"
                className="h-[530px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[10px] bg-brand-navy p-6 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
                Guided Intake
              </p>
              <p className="mt-2 text-xl font-black">
                Clear admissions content helps families and partners feel
                prepared before they contact the team.
              </p>
            </div>
          </div>

          <div>
            <span className="badge-soft">
              <MessageCircleHeart className="h-4 w-4 text-brand-magenta" />
              First Conversation
            </span>

            <h2 className="heading-lg mt-6">
              Make the first admissions conversation easier.
            </h2>

            <p className="text-muted mt-6">
              Families and referral partners may have urgent questions. This
              page should explain what information is helpful, what the team may
              review, and how the center guides people toward the right next
              step.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {readinessPoints.map((item) => (
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
              <Button to="/contact">
                Contact Admissions <ArrowRight size={17} />
              </Button>
              <Button to="/programs" variant="outline">
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What To Prepare */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="badge-soft">
                <FileText className="h-4 w-4 text-brand-magenta" />
                Referral Preparation
              </span>

              <h2 className="heading-lg mt-5">
                Helpful information to prepare before contact.
              </h2>

              <p className="text-muted mt-5 max-w-3xl">
                Having basic information ready can help the admissions team
                respond faster and guide the next step more clearly.
              </p>
            </div>

            <Button to="/faq" variant="outline">
              Read FAQ <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {prepareGroups.map((group) => (
              <ChecklistGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* Existing Referral Checklist */}
      <section className="section-padding pb-24">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <Card className="rounded-[10px]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-blue text-white">
              <FileText />
            </div>

            <h2 className="text-3xl font-black text-brand-navy">
              Basic referral checklist
            </h2>

            <p className="text-muted mt-4">
              This checklist can be customized based on your exact admissions
              process, required documentation, licensing standards, and referral
              workflow.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {referralChecklist.map((item) => (
                <p
                  key={item}
                  className="flex gap-2 text-sm font-bold leading-6 text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  {item}
                </p>
              ))}
            </div>
          </Card>

          <div className="rounded-[10px] bg-brand-navy p-7 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
              Admissions Contact
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Need guidance before submitting a referral?
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Contact the admissions team to discuss program fit, availability,
              referral requirements, and next steps.
            </p>

            <div className="mt-6 grid gap-4 text-white/80">
              <p className="flex gap-3">
                <Phone className="shrink-0 text-brand-yellow" />
                {phone}
              </p>

              <p className="flex gap-3">
                <Mail className="shrink-0 text-brand-yellow" />
                {referralEmail}
              </p>
            </div>

            <Button to="/contact" variant="yellow" className="mt-8">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens After Contact */}
      <section className="section-padding bg-white py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="After You Contact Us"
            title="What usually happens after an admissions inquiry."
            text="This section sets expectations and helps users understand the review and planning process."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <ExpectationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Support Split */}
      <section className="section-padding py-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="badge-soft">
              <ShieldCheck className="h-4 w-4 text-brand-magenta" />
              Placement Readiness
            </span>

            <h2 className="heading-lg mt-6">
              Help visitors understand program fit and readiness.
            </h2>

            <p className="text-muted mt-6">
              Admissions content should be clear but not overwhelming. It should
              explain that the team may need basic information before confirming
              fit, availability, and next steps.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "The admissions team reviews the referral before confirming next steps.",
                "Program fit may depend on current needs, safety considerations, and availability.",
                "Families or agencies may be asked to provide additional documentation.",
                "The team will explain next steps clearly if the referral is appropriate.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-card"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                    <p className="font-bold leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
            <img
              src={admissionImages.residence}
              alt="Residential admissions setting"
              className="h-[520px] w-full rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding pb-24">
        <div className="container-custom rounded-[18px] bg-brand-cream p-8 shadow-card sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.2fr_1fr_0.35fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
              <Info size={30} />
            </div>

            <div>
              <h2 className="text-3xl font-black text-brand-navy">
                Emergency or crisis situation?
              </h2>

              <p className="text-muted mt-3">
                This website is for general program and admissions information.
                If there is an immediate safety emergency, contact local emergency
                services or the appropriate crisis response resource in your area.
              </p>
            </div>

            <Button to="/contact" variant="blue">
              Contact Team
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding pb-24">
        <div className="container-custom relative overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-navy to-brand-magenta p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Ready To Start?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Give families and referral partners a clear next step.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                Admissions pages should reduce confusion, answer early
                questions, and make it easy to contact the right person.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
                  <BadgeCheck />
                </div>

                <div>
                  <h3 className="font-black">Admissions Help</h3>
                  <p className="text-sm text-white/70">
                    Start with a simple conversation.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <Button to="/contact" variant="yellow">
                  Contact Admissions <ArrowRight size={16} />
                </Button>

                <Button
                  to="/programs"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:text-brand-yellow"
                >
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}