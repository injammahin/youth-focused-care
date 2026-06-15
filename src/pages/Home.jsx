import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileHeart,
  HeartHandshake,
  HomeIcon,
  ImageIcon,
  MapPin,
  MessageCircleHeart,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import { highlights, images, programs, values } from "../data/siteData";

const premiumImages = {
  hero:
    images.hero ||
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
  residence:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
  counseling:
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=85",
  team:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  calmRoom:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  training:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
};

const carePath = [
  {
    icon: PhoneCall,
    title: "Initial Contact",
    text: "Families, agencies, or referral partners can reach out to discuss program fit, availability, and next steps.",
  },
  {
    icon: ClipboardCheck,
    title: "Referral Review",
    text: "The team reviews basic referral information, support needs, safety considerations, and placement requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Coordinated Admission",
    text: "Clear guidance is provided for documents, arrival expectations, care planning, and communication.",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "A structured setting focused on stability, supervision, emotional safety, and daily consistency.",
  },
  {
    icon: Users,
    title: "Youth-Focused Support",
    text: "Information is presented for families, youth-serving professionals, donors, and applicants.",
  },
  {
    icon: MessageCircleHeart,
    title: "Clear Communication",
    text: "Simple page flow helps visitors quickly understand services, referrals, careers, and contact options.",
  },
  {
    icon: Award,
    title: "Professional Presence",
    text: "Modern design, clean sections, strong colors, and trust-building content create a premium experience.",
  },
];

const supportAreas = [
  "Residential care overview",
  "Behavioral support information",
  "Admissions and referral guidance",
  "Family and agency communication",
  "Training resource links",
  "Career application with resume upload",
  "Donation page with secure external payment link",
  "Gallery and facility photo placeholders",
];

const imageShowcase = [
  {
    image: premiumImages.residence,
    title: "Residential Setting",
    text: "Warm, calm, and structured environment for daily support.",
  },
  {
    image: premiumImages.calmRoom,
    title: "Care Spaces",
    text: "Professional spaces designed to feel safe and welcoming.",
  },
  {
    image: premiumImages.training,
    title: "Team Development",
    text: "Room for training resources, staff learning, and community education.",
  },
];

function MiniStat({ value, label }) {
  return (
    <div className="rounded-[10px] border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <p className="text-2xl font-black text-brand-magenta">{value}</p>
      <p className="mt-1 text-sm font-bold leading-5 text-slate-600">{label}</p>
    </div>
  );
}

function QuickLink({ icon: Icon, title, text, to }) {
  return (
    <Card className="rounded-[10px]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-cream text-brand-magenta">
        <Icon />
      </div>
      <h3 className="text-2xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-8 text-slate-600">{text}</p>
      <Button to={to} variant="outline" className="mt-6">
        Learn More <ArrowRight size={16} />
      </Button>
    </Card>
  );
}

function TrustCard({ icon: Icon, title, text }) {
  return (
    <Card className="rounded-[10px]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-blue text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </Card>
  );
}

function CareStep({ icon: Icon, title, text, index }) {
  return (
    <div className="relative rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-brand-magenta text-white">
          <Icon size={22} />
        </div>
        <span className="text-5xl font-black text-brand-blue/10">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ShowcaseCard({ image, title, text }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-brand-navy/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-white/80">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-herogrid bg-[length:34px_34px] pt-32 lg:pt-36">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-brand-magenta/10 blur-3xl" />

        <div className="container-custom relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <span className="badge-soft">
              <ShieldCheck className="h-4 w-4 text-brand-magenta" />
              Safe, supportive, youth-focused care
            </span>

            <h1 className="heading-xl text-bold mt-7">
              Residential care with warmth, structure, and hope.
            </h1>

            <p className="text-muted mt-6 max-w-2xl">
              A clean, premium website for a youth residential treatment center.
              It helps families, referral partners, applicants, donors, and
              community members quickly understand services, admissions, careers,
              training resources, and ways to connect.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/admissions">
                Admissions & Referrals <ArrowRight size={17} />
              </Button>
              <Button to="/programs" variant="outline">
                View Programs
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <MiniStat key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 z-10 hidden rounded-[10px] bg-white p-5 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] bg-brand-yellow/30 p-3 text-brand-navy">
                  <HeartHandshake />
                </div>
                <div>
                  <p className="font-black text-brand-navy">Care First</p>
                  <p className="text-sm font-semibold text-slate-500">
                    Simple referral path
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-white/80 bg-white p-3 shadow-soft">
              <img
                src={premiumImages.hero}
                alt="Warm residential care environment"
                className="h-[520px] w-full rounded-[12px] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-[10px] border border-white/20 bg-brand-navy/90 p-6 text-white backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
                  Modern Care
                </p>
                <p className="mt-2 text-2xl font-black">
                  Clear information builds trust before the first call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="section-padding pt-16">
        <div className="container-custom">
          <div className="grid gap-4 rounded-[10px] border border-slate-200 bg-white p-5 shadow-card md:grid-cols-4">
            {[
              "Safe residential setting",
              "Referral-friendly content",
              "Career-ready form",
              "Donation link ready",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                <p className="text-sm font-black text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Programs & Services"
            title="Support services presented with clarity."
            text="Use this section to introduce your actual program model, care philosophy, daily structure, and support services in a simple user-friendly way."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((item) => (
              <Card key={item.title} className="rounded-[10px]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-blue text-white">
                  <item.icon />
                </div>
                <h3 className="text-xl font-black text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.summary}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / Informational Split Section */}
      <section className="section-padding pb-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
              <img
                src={premiumImages.residence}
                alt="Residential treatment center building"
                className="h-[500px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-6 max-w-xs rounded-[10px] bg-brand-magenta p-6 text-white shadow-soft">
              <Sparkles className="mb-3 text-brand-yellow" />
              <p className="text-xl font-black">
                Designed to make important information easy to find.
              </p>
            </div>
          </div>

          <div>
            <span className="badge-soft">
              <HomeIcon className="h-4 w-4 text-brand-magenta" />
              Residential Care Information
            </span>

            <h2 className="heading-lg mt-6">
              A clear online presence for families, agencies, and community
              partners.
            </h2>

            <p className="text-muted mt-6">
              The homepage introduces the center in a calm and trustworthy way.
              Visitors can quickly understand the purpose of the program, how
              referrals work, what services are available, where to find training
              resources, how to donate, and how to apply for a position.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {supportAreas.map((item) => (
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
              <Button to="/about">
                About the Center <ArrowRight size={17} />
              </Button>
              <Button to="/contact" variant="outline">
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Path */}
      <section className="section-padding bg-brand-cream/60 py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Admissions Path"
            title="Make referrals simple and understandable."
            text="This section helps families and referral partners understand what happens before admission. You can edit the content based on the center's exact process."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {carePath.map((item, index) => (
              <CareStep key={item.title} index={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery Preview */}
      <section className="section-padding py-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="badge-soft">
                <ImageIcon className="h-4 w-4 text-brand-magenta" />
                Visual Preview
              </span>
              <h2 className="heading-lg mt-5">
                Warm spaces, professional care, and community connection.
              </h2>
            </div>

            <Button to="/gallery" variant="outline">
              View Gallery <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {imageShowcase.map((item) => (
              <ShowcaseCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Values Section */}
      <section className="section-padding pb-24">
        <div className="container-custom overflow-hidden rounded-[18px] bg-brand-navy p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Why this site works
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Built for trust, clarity, and easy navigation.
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                The layout is intentionally simple and premium. Visitors can
                understand the center quickly without feeling overwhelmed.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-white/10 bg-white/[0.08] p-5"
                >
                  <item.icon className="text-brand-yellow" />
                  <h3 className="mt-4 font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Trust Cards */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Visitor Experience"
            title="Every section has a clear purpose."
            text="The homepage is designed so different visitors can find what they need without confusion."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <TrustCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding pb-24">
        <div className="container-custom grid gap-8 lg:grid-cols-3">
          <QuickLink
            icon={CalendarCheck}
            title="Admissions"
            text="Explain referral steps, required information, intake expectations, and how families or agencies can contact your team."
            to="/admissions"
          />

          <QuickLink
            icon={BriefcaseBusiness}
            title="Careers"
            text="Collect applicant information with name, phone, email, position interest, availability, short message, and resume upload."
            to="/careers"
          />

          <QuickLink
            icon={CircleDollarSign}
            title="Donate"
            text="Send donors to a secure third-party provider without storing payment data on the website."
            to="/donate"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding pb-24">
        <div className="container-custom relative overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-navy to-brand-magenta p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Ready to connect?
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Help visitors take the next step with confidence.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                Whether someone needs referral information, wants to apply for a
                position, wants to donate, or has a general question, this homepage
                guides them clearly.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
                  <FileHeart />
                </div>
                <div>
                  <h3 className="font-black">Main Actions</h3>
                  <p className="text-sm text-white/70">
                    Keep visitors moving to the right page.
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