import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Button from "../ui/Button";
import { navItems, site } from "../../data/siteData";
import { cn } from "../../lib/utils";

function useScrollHeader() {
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setVisible(true);
      } else if (current > lastScroll.current + 8) {
        setVisible(false);
      } else if (current < lastScroll.current - 8) {
        setVisible(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

export default function Header() {
  const visible = useScrollHeader();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn("fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl transition-transform duration-500", visible ? "translate-y-0" : "-translate-y-full")}>
      <div className="section-padding">
        <div className="container-custom flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
            <img src="/logo.png" alt={`${site.name} logo`} className="hidden h-22 w-auto sm:block" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-yellow shadow-lg sm:hidden">
              <Sparkles size={23} />
            </div>
            <div className="sm:hidden">
              <p className="text-base font-black leading-none text-brand-navy">{site.name}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-magenta">Care Center</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-sm font-extrabold transition",
                    isActive ? "bg-brand-blue text-white" : "text-slate-700 hover:bg-brand-cream hover:text-brand-magenta"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button to="/contact" variant="outline">Contact</Button>
            <Button className="flex items-center gap-2" to="/admissions">
              Start Referral <ArrowRight size={16} />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy xl:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-brand-navy/55 backdrop-blur-sm xl:hidden">
          <div className="ml-auto h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5 shadow-soft">
            <div className="mb-8 flex items-center justify-between">
              <img src="/logo.png" alt={`${site.name} logo`} className="h-12 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-brand-navy"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn("rounded-2xl px-4 py-3 text-sm font-black", isActive ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-700")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button to="/admissions">Admissions</Button>
              <Button to="/donate" variant="yellow">Donate</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
