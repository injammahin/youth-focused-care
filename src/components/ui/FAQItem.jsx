import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 text-left"
      >
        <span className="text-lg font-black text-brand-navy">{question}</span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-brand-magenta transition", open && "rotate-180")} />
      </button>
      {open ? <p className="text-muted mt-4">{answer}</p> : null}
    </div>
  );
}
