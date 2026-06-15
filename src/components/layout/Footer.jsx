import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { site } from "../../data/siteData";

function FooterGroup({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">{title}</h3>
      <div className="grid gap-3">
        {links.map(([label, path]) => (
          <Link key={path} to={path} className="text-sm font-semibold text-white/70 transition hover:text-brand-yellow">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="section-padding py-16">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy">
                <Sparkles />
              </div>
              <div>
                <p className="text-lg font-black">{site.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">{site.tagline}</p>
              </div>
            </div>
            <p className="max-w-md leading-8 text-white/70">
              A modern informational website for a youth residential treatment center, built to communicate safety, clarity, and compassionate support.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <p className="flex gap-3"><Phone className="h-5 w-5 text-brand-yellow" /> {site.phone}</p>
              <p className="flex gap-3"><Mail className="h-5 w-5 text-brand-yellow" /> {site.email}</p>
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-brand-yellow" /> {site.address}</p>
            </div>
          </div>

          <FooterGroup title="Explore" links={[["About Us", "/about"], ["Programs", "/programs"], ["Admissions", "/admissions"], ["Careers", "/careers"]]} />
          <FooterGroup title="Support" links={[["Training", "/training"], ["Donate", "/donate"], ["Gallery", "/gallery"], ["FAQ", "/faq"]]} />
          <FooterGroup title="Legal" links={[["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms-of-use"], ["Accessibility", "/accessibility"]]} />
        </div>

        <div className="container-custom mt-12 border-t border-white/10 pt-8 text-sm text-white/55">
          © {new Date().getFullYear()} {site.name}. All rights reserved. Replace placeholder content with your final approved copy before launch.
        </div>
      </div>
    </footer>
  );
}
