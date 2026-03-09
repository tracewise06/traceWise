import ContactForm from "../../components/sections/ContactForm";

export const metadata = {
  title: "Contact | Jainam Patel",
  description: "Get in touch for freelance projects and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Fill out the form below or email me directly at:{" "}
          <a href="mailto:you@example.com" className="text-blue-600">
            you@example.com
          </a>
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
