import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  HomeIcon,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { images, values } from "../data/siteData";

const aboutImages = {
  about:
    images.about ||
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  residence:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
  team:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  careSpace:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
};

const commitments = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "The care environment is designed around stability, supervision, respectful communication, and clear expectations.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Support",
    text: "Youth are supported with patience, dignity, structure, and encouragement throughout their care journey.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Process",
    text: "Families and referral partners can understand the admission path, documentation needs, and next steps easily.",
  },
  {
    icon: Users,
    title: "Connected Care",
    text: "The website can communicate with families, guardians, agencies, staff applicants, donors, and community partners.",
  },
];

const approach = [
  "Structured daily routines that support stability",
  "Safe and respectful residential environment",
  "Youth-focused communication and guidance",
  "Family and referral partner coordination",
  "Behavioral support information presented clearly",
  "Life skills, responsibility, and positive development",
];

const timeline = [
  {
    step: "01",
    title: "A Safe Place to Begin",
    text: "The center introduces a calm environment where youth can receive structure, support, and daily guidance.",
  },
  {
    step: "02",
    title: "Personal Growth and Routine",
    text: "Programs can highlight healthy routines, communication, emotional regulation, accountability, and life skills.",
  },
  {
    step: "03",
    title: "Planning for Next Steps",
    text: "The website can explain family involvement, referral communication, transition support, and future planning.",
  },
];

function InfoCard({ icon: Icon, title, text }) {
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

function TimelineCard({ step, title, text }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-magenta text-sm font-black text-white">
          {step}
        </span>
        <Sparkles className="text-brand-yellow" />
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A calm, professional center focused on safety and positive growth."
        text="This page introduces your mission, care philosophy, leadership, facility values, and commitment to supporting youth in a structured residential setting."
        image={aboutImages.about}
        primaryLabel="View Programs"
        primaryTo="/programs"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />

      {/* Mission and Vision */}
      <section className="section-padding py-24">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <Card className="rounded-[10px]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-cream text-brand-magenta">
              <Target />
            </div>
            <h2 className="text-3xl font-black text-brand-navy">
              Our Mission
            </h2>
            <p className="text-muted mt-4">
              To provide a safe, structured, and compassionate residential
              environment where youth can receive support, build healthy routines,
              strengthen communication, and work toward positive next steps.
            </p>
          </Card>

          <Card className="rounded-[10px]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-cream text-brand-magenta">
              <Award />
            </div>
            <h2 className="text-3xl font-black text-brand-navy">
              Our Vision
            </h2>
            <p className="text-muted mt-4">
              To be a trusted care partner for families, guardians, referral
              agencies, and communities by creating a setting where young people
              can feel supported, respected, and guided.
            </p>
          </Card>
        </div>
      </section>

      {/* Premium Image Split */}
      <section className="section-padding pb-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
              <img
                src={aboutImages.residence}
                alt="Residential treatment center environment"
                className="h-[520px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[10px] bg-brand-navy p-6 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
                Care Environment
              </p>
              <p className="mt-2 text-xl font-black">
                A warm, structured, and professional setting helps visitors feel
                confident before making contact.
              </p>
            </div>
          </div>

          <div>
            <span className="badge-soft">
              <HomeIcon className="h-4 w-4 text-brand-magenta" />
              Who We Are
            </span>

            <h2 className="heading-lg mt-6">
              Built around trust, structure, and clear communication.
            </h2>

            <p className="text-muted mt-6">
              A youth residential treatment center needs a website that feels
              professional, warm, and easy to understand. The About page should
              clearly explain your purpose, values, care environment, and how the
              center supports youth, families, and referral partners.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {approach.map((item) => (
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
                Admissions Information <ArrowRight size={17} />
              </Button>
              <Button to="/programs" variant="outline">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-brand-cream/60 py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Commitment"
            title="A center experience designed around safety, respect, and stability."
            text="These sections help visitors quickly understand what your organization stands for and why families or agencies can feel confident contacting your team."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="section-padding py-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="badge-soft">
              <MessageCircleHeart className="h-4 w-4 text-brand-magenta" />
              Care Philosophy
            </span>

            <h2 className="heading-lg mt-6">
              A balanced approach that feels human, structured, and supportive.
            </h2>

            <p className="text-muted mt-6">
              The care philosophy section can describe how your team supports
              youth through routine, accountability, emotional support, skill
              building, and positive relationships. It can also explain how
              communication with referral partners and families is handled.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Youth are treated with dignity and respect.",
                "The environment encourages safety, consistency, and healthy routines.",
                "Families and referral partners receive clear communication.",
                "Programs can be edited to match your actual licensed services.",
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
              src={aboutImages.careSpace}
              alt="Calm professional care space"
              className="h-[520px] w-full rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Support Journey"
            title="Show visitors how your center guides youth toward positive next steps."
            text="This section gives families and referral partners a simple way to understand the overall journey from admission to ongoing support."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <TimelineCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership and Facility */}
      <section className="section-padding pb-24">
        <div className="container-custom overflow-hidden rounded-[18px] bg-brand-navy p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Leadership & Facility
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Present your team and facility with confidence.
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                This section can be updated with your executive team,
                administrators, licensing information, facility details, care
                standards, accreditations, and community partnerships.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Leadership overview",
                  "Facility and care environment",
                  "Operating standards",
                  "Community and referral partnerships",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-yellow" />
                    <p className="font-bold text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] border border-white/15 bg-white/10 p-3">
              <img
                src={aboutImages.team}
                alt="Professional care team discussion"
                className="h-[420px] w-full rounded-[8px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Core Values"
            title="Values that shape the care environment."
            text="These sections can be edited to match your actual licensed services, operating standards, and care model."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <Card key={item.title} className="rounded-[10px]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-cream text-brand-magenta">
                  <item.icon />
                </div>
                <h3 className="text-xl font-black text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </Card>
            ))}
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
                Learn More
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Help families and referral partners understand your center
                clearly.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                Use the next pages to explain your programs, referral process,
                career opportunities, training resources, and ways to contact the
                team.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
                  <HeartHandshake />
                </div>
                <div>
                  <h3 className="font-black">Next Steps</h3>
                  <p className="text-sm text-white/70">
                    Guide visitors to the right page.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <Button to="/programs" variant="yellow">
                  View Programs <ArrowRight size={16} />
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:text-brand-yellow"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}