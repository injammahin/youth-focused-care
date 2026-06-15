import { ArrowRight, CircleDollarSign, LockKeyhole } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { donationOptions, images, site } from "../data/siteData";

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support safe care, youth development, and community impact."
        text="The donation page is designed to connect donors to a secure third-party payment page. The website itself does not store card or payment information."
        image={images.donate}
      />

      <section className="section-padding py-20">
        <div className="container-custom">
          <SectionHeader eyebrow="Ways to Support" title="Make giving clear and trustworthy." text="Use these cards to describe how donations support your mission. Replace sample text with your approved fundraising language." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {donationOptions.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-magenta text-white"><CircleDollarSign /></div>
                <h3 className="text-2xl font-black text-brand-navy">{item.title}</h3>
                <p className="text-muted mt-3">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-navy text-brand-yellow"><LockKeyhole size={32} /></div>
            <h2 className="text-3xl font-black text-brand-navy">Secure third-party donation</h2>
            <p className="text-muted mx-auto mt-4 max-w-xl">Connect this button to PayPal, Stripe Payment Link, Donorbox, Givebutter, or your preferred secure donation platform.</p>
            <Button href={site.donationUrl} target="_blank" rel="noreferrer" className="mt-8">Donate Securely <ArrowRight size={17} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
