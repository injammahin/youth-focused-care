import { FileText } from "lucide-react";
import Card from "../components/ui/Card";

const pages = {
  privacy: {
    title: "Privacy Policy",
    intro: "This placeholder page explains how the website may collect, use, and protect information submitted through contact, career, and future referral forms.",
    sections: [
      ["Information Collected", "This website may collect basic information submitted through forms, including name, phone, email, message content, and uploaded resume files if the careers form is connected to a backend."],
      ["How Information Is Used", "Information may be used to respond to inquiries, review employment applications, coordinate referrals, and improve website communication."],
      ["Payment Information", "Donation buttons should redirect to a secure third-party payment provider. This website should not directly store card or payment information."],
      ["Your Rights", "Users may request information updates, deletion, or assistance by contacting the organization directly."],
      ["Legal Review", "This placeholder should be replaced with attorney-reviewed privacy language before launch."]
    ]
  },
  terms: {
    title: "Terms of Use",
    intro: "This placeholder page explains general website use, external links, content ownership, and limitations.",
    sections: [
      ["Website Content", "Information on this website is provided for general informational purposes and should be replaced with your approved official content before launch."],
      ["External Links", "Training and donation links may redirect to third-party websites. The organization is not responsible for third-party website content or policies."],
      ["No Emergency Use", "This website should not be used for emergencies. Emergency contact instructions should be added based on your organization’s policy."],
      ["Intellectual Property", "Logo, text, photos, and brand materials should only be used with permission from the organization."],
      ["Legal Review", "This placeholder should be reviewed by a qualified legal advisor before launch."]
    ]
  },
  accessibility: {
    title: "Accessibility Statement",
    intro: "This placeholder page communicates the organization’s commitment to making website content accessible and easy to use.",
    sections: [
      ["Commitment", "The website is designed with responsive layouts, readable text, strong contrast, keyboard-friendly navigation, and semantic page structure."],
      ["Ongoing Improvements", "The organization should regularly review content, forms, images, and navigation to improve accessibility."],
      ["Assistance", "Users who need help accessing information can contact the organization by phone or email."],
      ["Known Limitations", "Some third-party resources, embedded content, or external payment pages may be controlled by other providers."],
      ["Feedback", "Accessibility feedback can help improve the website for all users."]
    ]
  }
};

export default function LegalPage({ type }) {
  const page = pages[type];

  return (
    <section className="section-padding py-36">
      <div className="container-custom mx-auto max-w-4xl">
        <span className="badge-soft"><FileText className="h-4 w-4 text-brand-magenta" /> Legal Page</span>
        <h1 className="heading-lg mt-6">{page.title}</h1>
        <p className="text-muted mt-5">{page.intro}</p>
        <div className="mt-8 grid gap-5">
          {page.sections.map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-2xl font-black text-brand-navy">{title}</h2>
              <p className="text-muted mt-3">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
