import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function Button({ children, className, variant = "primary", asChild = false, to, href, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition-all duration-300 focus:outline-none focus:ring-4 disabled:pointer-events-none disabled:opacity-60";
  const variants = {
    primary: "bg-brand-magenta text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-pink focus:ring-brand-magenta/20",
    blue: "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:-translate-y-0.5 hover:bg-brand-navy focus:ring-brand-blue/20",
    yellow: "bg-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/30 hover:-translate-y-0.5 hover:bg-yellow-300 focus:ring-brand-yellow/30",
    outline: "border border-brand-blue/15 bg-white text-brand-navy shadow-sm hover:-translate-y-0.5 hover:border-brand-magenta hover:text-brand-magenta focus:ring-brand-magenta/10",
    ghost: "bg-white/10 text-white hover:bg-white/20 focus:ring-white/20"
  };

  if (href) {
    return (
      <a className={cn(base, variants[variant], className)} href={href} {...props}>
        {children}
      </a>
    );
  }

  if (asChild || to) {
    return (
      <Link className={cn(base, variants[variant], className)} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
