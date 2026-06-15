import { cn } from "../../lib/utils";

export default function Card({ children, className }) {
  return (
    <div className={cn("rounded-4xl border border-slate-200/75 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft", className)}>
      {children}
    </div>
  );
}
