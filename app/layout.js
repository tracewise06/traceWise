// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // change later
  title: {
    default: "Jainam Patel | AI Engineer & Web Developer",
    template: "%s | Jainam Patel",
  },
  description:
    "AI/ML engineer specializing in Generative AI, automation systems, and full-stack web development.",
  keywords: [
    "AI Developer",
    "Machine Learning Engineer",
    "Generative AI",
    "Next.js Developer",
    "Freelance AI Engineer",
  ],
  openGraph: {
    title: "Jainam Patel | AI Engineer",
    description:
      "Building intelligent AI systems and scalable web platforms.",
    url: "https://yourdomain.com",
    siteName: "Jainam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jainam Patel | AI Engineer",
    description:
      "AI/ML engineer and web developer building modern intelligent systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jainam Patel",
              url: "https://yourdomain.com",
              jobTitle: "AI Engineer",
            }),
          }}
        />
      </body>
    </html>
  );
}
