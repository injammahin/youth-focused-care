import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Field from "../components/ui/Field";
import PageHero from "../components/ui/PageHero";
import { contactCards, images } from "../data/siteData";

function ContactCard({ icon: Icon, title, text }) {
  return (
    <Card>
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-white"><Icon /></div>
        <div>
          <h3 className="font-black text-brand-navy">{title}</h3>
          <p className="mt-1 leading-7 text-slate-600">{text}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Questions about referrals, programs, careers, donations, or training?"
        text="This page gives users direct contact information and a simple form for general questions. Connect the form to a backend service for live delivery."
        image={images.contact}
      />

      <section className="section-padding py-20">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            {contactCards.map((item) => <ContactCard key={item.title} {...item} />)}
          </div>

          <Card>
            <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name *"><input className="form-input" required /></Field>
                <Field label="Email *"><input type="email" className="form-input" required /></Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Phone"><input className="form-input" /></Field>
                <Field label="Topic"><select className="form-input"><option>General Question</option><option>Admissions</option><option>Careers</option><option>Donation</option><option>Training</option></select></Field>
              </div>
              <Field label="Message *"><textarea rows="6" className="form-input resize-none" required /></Field>
              {sent ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">Message submitted in demo mode. Connect this form to your backend for live delivery.</p> : null}
              <Button type="submit">Send Message <ArrowRight size={17} /></Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
