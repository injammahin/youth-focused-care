import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "./Button";

export default function PageHero({ eyebrow, title, text, image, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
  return (
    <section className="section-padding overflow-hidden pt-32 lg:pt-36">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="badge-soft">
              <ShieldCheck className="h-4 w-4 text-brand-magenta" />
              {eyebrow}
            </span>
            <h1 className="heading-lg mt-6">{title}</h1>
            <p className="text-muted mt-6 max-w-2xl">{text}</p>
            {(primaryLabel || secondaryLabel) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryLabel ? (
                  <Button to={primaryTo}>
                    {primaryLabel} <ArrowRight size={17} />
                  </Button>
                ) : null}
                {secondaryLabel ? (
                  <Button to={secondaryTo} variant="outline">
                    {secondaryLabel}
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-brand-yellow/40 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-brand-magenta/20 blur-3xl" />
            <img src={image} alt={title} className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-soft sm:h-[430px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
