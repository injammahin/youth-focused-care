import { Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

export default function SectionHeader({ eyebrow, title, text, centered = true, className }) {
  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <span className="badge-soft">
          <Sparkles className="h-4 w-4 text-brand-magenta" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="heading-lg mt-5">{title}</h2>
      {text ? <p className="text-muted mt-5">{text}</p> : null}
    </div>
  );
}
