import ProjectsSection from "../../components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Jainam Patel",
  description: "Professional and personal development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          A collection of practical, client, personal, and open-source projects.
        </p>
        <ProjectsSection />
      </div>
    </main>
  );
}
