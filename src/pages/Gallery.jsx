import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { galleryItems, images } from "../data/siteData";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A warm visual story of safety, structure, and care."
        text="The current gallery uses professional stock placeholders. Replace them with licensed facility photos when available. Avoid identifiable youth photos unless you have proper rights and consent."
        image={images.gallery}
      />

      <section className="section-padding py-20">
        <div className="container-custom">
          <SectionHeader eyebrow="Visual Overview" title="Facility and care environment placeholders" text="These visuals are selected to feel warm, professional, safe, and youth-appropriate without relying on identifiable children." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-4xl bg-white shadow-card">
                <img src={item.src} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-lg font-black text-brand-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
