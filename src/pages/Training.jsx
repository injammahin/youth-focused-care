import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartHandshake,
  ListChecks,
  MonitorPlay,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { images, trainingResources } from "../data/siteData";

const trainingImages = {
  hero:
    images.training ||
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
  classroom:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
  workshop:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  orientation:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
  resource:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
};

const fallbackTrainingResources = [
  {
    icon: ShieldCheck,
    title: "Safety & Care Standards",
    text: "External resource placeholder for safety, supervision, documentation, and residential care standards.",
    url: "https://www.samhsa.gov/",
  },
  {
    icon: HeartHandshake,
    title: "Behavioral Support Basics",
    text: "Helpful learning pathway for trauma-informed communication, positive support, and youth-centered care.",
    url: "https://www.cdc.gov/mental-health/",
  },
  {
    icon: Users,
    title: "Family Engagement",
    text: "Resource pathway for family communication, referral coordination, and community support.",
    url: "https://www.hhs.gov/",
  },
  {
    icon: BookOpen,
    title: "Staff Orientation",
    text: "Placeholder for onboarding documents, staff guides, training videos, or internal policies.",
    url: "https://www.samhsa.gov/",
  },
];

const learningTracks = [
  {
    icon: ShieldCheck,
    title: "Safety & Supervision",
    text: "Training around safe environments, supervision expectations, incident awareness, and professional boundaries.",
  },
  {
    icon: HeartHandshake,
    title: "Youth Support Skills",
    text: "Communication, emotional regulation support, respectful redirection, and positive relationship building.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentation & Policy",
    text: "Internal procedures, required forms, incident reporting, handbooks, and policy updates.",
  },
  {
    icon: GraduationCap,
    title: "Professional Growth",
    text: "Continuing education links, workshops, certifications, and learning opportunities for staff development.",
  },
];

const orientationSteps = [
  {
    step: "01",
    title: "Review Orientation",
    text: "New staff can begin with basic center information, program values, expectations, and workplace overview.",
  },
  {
    step: "02",
    title: "Learn Safety Standards",
    text: "Training can introduce supervision, boundaries, confidentiality, emergency awareness, and safety procedures.",
  },
  {
    step: "03",
    title: "Understand Daily Support",
    text: "Staff can learn how daily routines, youth engagement, communication, and behavior support are structured.",
  },
  {
    step: "04",
    title: "Access Resources",
    text: "External links, PDFs, videos, forms, and future LMS content can be added as the training hub grows.",
  },
];

const documentPlaceholders = [
  "Staff orientation handbook",
  "Residential care procedures",
  "Safety and supervision checklist",
  "Referral communication guide",
  "Incident reporting guide",
  "Training completion checklist",
];

function ResourceCard({ item }) {
  const Icon = item.icon || BookOpen;

  return (
    <Card className="rounded-[10px]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
        <Icon size={23} />
      </div>

      <h3 className="text-xl font-black text-brand-navy">{item.title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{item.text}</p>

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-black text-brand-magenta"
      >
        Open Resource <ExternalLink size={16} />
      </a>
    </Card>
  );
}

function TrackCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-blue text-white">
        <Icon size={22} />
      </div>

      <h3 className="text-xl font-black text-brand-navy">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function OrientationStep({ step, title, text }) {
  return (
    <div className="relative rounded-[10px] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
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

export default function Training() {
  const resources =
    trainingResources && trainingResources.length > 0
      ? trainingResources
      : fallbackTrainingResources;

  return (
    <>
      <PageHero
        eyebrow="Training Resources"
        title="A modern learning hub for staff, partners, and care teams."
        text="For now, training cards redirect externally. Later, this page can include embedded videos, downloadable handbooks, staff orientation modules, policy documents, or a complete learning portal."
        image={trainingImages.hero}
        primaryLabel="View Resources"
        primaryTo="#resources"
        secondaryLabel="Contact Team"
        secondaryTo="/contact"
      />

      {/* Training Hub Intro */}
      <section className="section-padding py-24">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-soft">
              <img
                src={trainingImages.classroom}
                alt="Training and learning environment"
                className="h-[530px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[10px] bg-brand-navy p-6 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
                Learning Hub
              </p>
              <p className="mt-2 text-xl font-black">
                Keep training links, handbooks, orientation materials, and future
                videos in one clear place.
              </p>
            </div>
          </div>

          <div>
            <span className="badge-soft">
              <GraduationCap className="h-4 w-4 text-brand-magenta" />
              Training Pathways
            </span>

            <h2 className="heading-lg mt-6">
              A resource page that feels organized, useful, and future-ready.
            </h2>

            <p className="text-muted mt-6">
              Training pages should be simple for staff and partners to use.
              This layout separates external resources, onboarding steps,
              policy documents, and future video training areas so the page can
              grow without becoming messy.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "External training links",
                "Staff onboarding pathway",
                "Future video module area",
                "Policy and handbook placeholders",
                "Resource cards with clear actions",
                "Simple structure for future LMS integration",
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
              <Button to="#resources">
                Explore Resources <ArrowRight size={17} />
              </Button>
              <Button to="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="section-padding bg-brand-cream/60 py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Learning Tracks"
            title="Organize training by purpose, not just by link."
            text="These tracks help visitors understand what type of learning content is available and why it matters."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningTracks.map((item) => (
              <TrackCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section id="resources" className="section-padding py-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="badge-soft">
                <ExternalLink className="h-4 w-4 text-brand-magenta" />
                External Resources
              </span>

              <h2 className="heading-lg mt-5">Training and learning links.</h2>

              <p className="text-muted mt-5 max-w-3xl">
                These links are placeholders. Replace them with your approved
                training providers, internal policies, staff onboarding
                resources, compliance resources, or learning portal links.
              </p>
            </div>

            <Button to="/contact" variant="outline">
              Request Help <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Orientation Pathway */}
      <section className="section-padding pb-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Staff Orientation"
            title="A clear path for new team members."
            text="Use this section for staff onboarding, center expectations, internal policy review, safety procedures, and program orientation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {orientationSteps.map((item) => (
              <OrientationStep key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Video Section */}
      <section className="section-padding pb-24">
        <div className="container-custom overflow-hidden rounded-[18px] bg-brand-navy p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Future Upgrade Ready
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Add videos later without changing the whole design.
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                The page is prepared for external links today and embedded video
                modules later, such as YouTube, Vimeo, private LMS videos,
                orientation clips, or internal training pages.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Embedded video lessons",
                  "Staff-only video library",
                  "Training completion checklist",
                  "Downloadable orientation files",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                    <p className="text-sm font-bold leading-6 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] border border-white/10 bg-white/10 p-3">
              <div className="relative h-[390px] overflow-hidden rounded-[8px]">
                <img
                  src={trainingImages.workshop}
                  alt="Training workshop"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/25 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-soft">
                      <PlayCircle size={42} />
                    </div>

                    <h3 className="mt-5 text-2xl font-black">
                      Video Module Placeholder
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm leading-7 text-white/75">
                      Add embedded orientation or training videos here when your
                      content is ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Library Placeholder */}
      <section className="section-padding pb-24">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="badge-soft">
              <FileText className="h-4 w-4 text-brand-magenta" />
              Document Library
            </span>

            <h2 className="heading-lg mt-6">
              Add handbooks, guides, forms, and policy documents later.
            </h2>

            <p className="text-muted mt-6">
              This section is prepared for downloadable files. For now, it works
              as a visual placeholder. Later, you can connect real PDFs,
              protected staff documents, or a backend file manager.
            </p>

            <div className="mt-8">
              <Button to="/contact">
                Request Training Info <ArrowRight size={17} />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documentPlaceholders.map((item) => (
              <div
                key={item}
                className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-cream text-brand-magenta">
                  <Download size={20} />
                </div>

                <h3 className="font-black text-brand-navy">{item}</h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                  Placeholder for downloadable training document.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Support CTA */}
      <section className="section-padding pb-24">
        <div className="container-custom relative overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-blue via-brand-navy to-brand-magenta p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-brand-yellow">
                Training Support
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Keep resources clear, accessible, and easy to update.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                This training page can grow into a full staff learning hub with
                videos, downloadable resources, policy documents, and protected
                internal content.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-navy">
                  <ListChecks />
                </div>

                <div>
                  <h3 className="font-black">Next Upgrade</h3>
                  <p className="text-sm text-white/70">
                    Add videos, PDFs, or staff login later.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <Button to="/contact" variant="yellow">
                  Contact Team <ArrowRight size={16} />
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