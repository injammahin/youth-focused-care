import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, UploadCloud } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Field from "../components/ui/Field";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { careerBenefits, images, openRoles } from "../data/siteData";

export default function Careers() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", position: "", availability: "", message: "", resume: null });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload your resume as PDF, DOC, or DOCX.");
      event.target.value = "";
      update("resume", null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Resume file size must be under 5MB.");
      event.target.value = "";
      update("resume", null);
      return;
    }

    setError("");
    update("resume", file);
  };

  const submit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.phone || !form.email || !form.position || !form.availability) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    if (!form.resume) {
      setError("Please upload a resume file.");
      return;
    }

    setSuccess("Application received in demo mode. Connect this form to your backend, Formspree, EmailJS, or Laravel API for live submissions.");
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a care team committed to safety, service, and positive youth outcomes."
        text="The careers page gives applicants role information, benefits, expectations, and a resume upload form with file validation."
        image={images.careers}
      />

      <section className="section-padding py-20">
        <div className="container-custom">
          <SectionHeader eyebrow="Opportunities" title="Open role categories" text="Replace these sample role categories with your current openings, shift details, pay range, and hiring requirements." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role) => (
              <div key={role} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
                <BriefcaseBusiness className="text-brand-magenta" />
                <h3 className="mt-4 font-black text-brand-navy">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Submit your resume and availability for consideration.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="badge-soft"><BriefcaseBusiness className="h-4 w-4 text-brand-magenta" /> Career Application</span>
            <h2 className="heading-lg mt-5">Apply online</h2>
            <p className="text-muted mt-5">Applicants can submit basic details and upload a resume. The form is frontend-ready and prepared for backend integration.</p>
            <div className="mt-8 grid gap-3">
              {careerBenefits.map((item) => <p key={item} className="flex gap-2 text-sm font-bold text-slate-600"><CheckCircle2 className="h-5 w-5 text-brand-teal" /> {item}</p>)}
            </div>
          </div>

          <Card>
            <form onSubmit={submit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name *"><input className="form-input" value={form.name} onChange={(e) => update("name", e.target.value)} /></Field>
                <Field label="Phone *"><input className="form-input" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email *"><input type="email" className="form-input" value={form.email} onChange={(e) => update("email", e.target.value)} /></Field>
                <Field label="Position Interested In *"><input className="form-input" value={form.position} onChange={(e) => update("position", e.target.value)} /></Field>
              </div>
              <Field label="Availability *">
                <select className="form-input" value={form.availability} onChange={(e) => update("availability", e.target.value)}>
                  <option value="">Select availability</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Weekends</option>
                  <option>Overnight</option>
                  <option>Flexible</option>
                </select>
              </Field>
              <Field label="Short Message"><textarea rows="5" className="form-input resize-none" value={form.message} onChange={(e) => update("message", e.target.value)} /></Field>
              <Field label="Upload Resume *" hint="Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB.">
                <div className="rounded-3xl border border-dashed border-brand-blue/25 bg-brand-cream/40 p-5">
                  <div className="flex items-center gap-3 text-brand-navy"><UploadCloud className="text-brand-magenta" /><span className="text-sm font-black">Choose resume file</span></div>
                  <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="mt-4 w-full text-sm font-semibold text-slate-600" onChange={handleFile} />
                  {form.resume ? <p className="mt-3 text-sm font-bold text-brand-teal">Selected: {form.resume.name}</p> : null}
                </div>
              </Field>
              {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p> : null}
              {success ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">{success}</p> : null}
              <Button type="submit">Submit Application <ArrowRight size={17} /></Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
