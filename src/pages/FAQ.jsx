import FAQItem from "../components/ui/FAQItem";
import PageHero from "../components/ui/PageHero";
import { faqs, images } from "../data/siteData";

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions answered clearly."
        text="The FAQ page helps families, referral partners, donors, applicants, and staff quickly understand the website and next steps."
        image={images.training}
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />

      <section className="section-padding py-20">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid gap-4">
            {faqs.map((faq) => <FAQItem key={faq.question} {...faq} />)}
          </div>
        </div>
      </section>
    </>
  );
}
