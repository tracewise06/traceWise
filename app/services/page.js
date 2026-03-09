import ServicesSection from "../../components/sections/ServicesSection";

export const metadata = {
  title: "Services | Jainam Patel",
  description: "AI/ML, Web Development, Generative AI & Automation services I offer.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          I provide a mix of AI engineering, web development, automation, and cloud services.
        </p>
        <ServicesSection />
      </div>
    </main>
  );
}
