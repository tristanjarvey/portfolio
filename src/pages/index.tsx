import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8">
            Building human-centered software with clarity and care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-light text-dark hover:overLight">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neutral-300 text-white hover:overDark">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Technologies */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "Next.js", "TypeScript", "React", "Node.js",
              "Angular", "Java", "MongoDB", "Tailwind CSS"
            ].map((tech) => (
              <div key={tech} className="text-center p-4 border border-neutral-300/20 rounded-lg">
                <span className="text-neutral-300 font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 border border-neutral-300/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="text-neutral-300 mb-4">Learn about my background, skills, and experience</p>
            <Button asChild variant="outline" className="border-neutral-300 text-white hover:overDark">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="text-center p-6 border border-neutral-300/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Projects</h3>
            <p className="text-neutral-300 mb-4">Explore my latest work and development projects</p>
            <Button asChild variant="outline" className="border-neutral-300 text-white hover:overDark">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="text-center p-6 border border-neutral-300/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-neutral-300 mb-4">Ready to work together? Let&apos;s discuss your project</p>
            <Button asChild variant="outline" className="border-neutral-300 text-white hover:overDark">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
