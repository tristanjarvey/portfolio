import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
  TypographyList,
  TypographyBlockquote,
} from "@/components/ui/typography";

// Tailwind class constants
const bodyText = "text-lg leading-relaxed text-theme";
const sectionHeader = "text-theme mb-8 border-theme";

export default function AboutPage() {
  const skills = {
    "Frontend": ["Next.js", "TypeScript", "React", "Angular", "Tailwind CSS"],
    "Backend": ["Java", "Node.js", "TypeScript", "Python"],
    "Database": ["MongoDB", "MySQL", "SQL"],
    "Tools": ["Git", "VS Code", "Docker", "Vercel"]
  };

  const coreValues = [
    {
      title: "Responsibility with Purpose",
      description: "I take ownership of the work I do, seeking not just to meet expectations, but to meaningfully improve the systems, experiences, and people around me."
    },
    {
      title: "Growth Through Challenge",
      description: "I seek out environments that demand more of me—where learning is constant, stakes are real, and contribution means pushing boundaries with integrity."
    },
    {
      title: "Human-Centered Software & AI",
      description: "I build technology that honors the human experience—where functionality, trust, and psychological insight intersect to create lasting value."
    },
    {
      title: "Innovation Through Systems Thinking",
      description: "I thrive at the intersection of complexity and clarity—breaking down large problems and designing scalable, creative solutions from the ground up."
    }
  ];

  const funFacts = [
    `Lived in eight cities before the age of 21.`,
    `Served six years as a Combat Engineer in the Army Reserves. 
    At the tail end of my career I led an eight-member team in 
    mobility, countermobility, and survivability operations.`,
    `Strength training is my daily anchor to stay focused, process 
    challenges, and build on solid foundations.`,
    `I enjoy biking, hiking and deep reflection.`,
  ];

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <TypographyH1 className="text-theme mb-6">
          Bridging Human Insight and Technical Precision
        </TypographyH1>
        <TypographyLead className="text-theme max-w-2xl mx-auto">
        Building tools that optimize focus, amplify creativity, and allow 
        people to do their best work.
        </TypographyLead>
      </div>

      {/* Bio Section */}
      <section className="mb-16">
        <TypographyH2 className={sectionHeader}>
          About Me
        </TypographyH2>
        <div className="space-y-6">
          <TypographyP className={bodyText}>
          I&apos;m a psychology graduate turned software developer, dedicated to building human-centered 
          software that automates the tedious and amplifies what makes us uniquely capable—our ability 
          to think, create, and connect.
          </TypographyP>
          <TypographyP className={`${bodyText} pb-4`}>
          With over a decade of experience across 15+ roles and 8 industries, I&apos;ve developed a 
          systems-oriented lens that thrives on complexity and nuance. Whether it&apos;s streamlining 
          workflows, architecting AI integrations, or translating messy human problems into elegant 
          code, I bring a unique ability to connect human insight with technical innovation.
          </TypographyP>
          <TypographyBlockquote className="text-xl border-theme text-theme py-8">
            &ldquo;I have no intention of trying to outsmart the future—just to build tools that help 
            us meet it with more focus and less friction.&rdquo;
          </TypographyBlockquote>
          <TypographyP className={`${bodyText} pt-4`}>
            I hold space for opportunities that align skill with soul—where I can build meaningful, human-centered software alongside thoughtful, driven people. I&apos;m especially drawn to roles or projects where:
          </TypographyP>
          <div className={bodyText}>
            <TypographyList>
              <li><strong>Systems thinking meets real-world impact</strong>—where I can architect resilient, elegant solutions that serve people, not just metrics.</li>
              <li><strong>Curiosity and integrity are cultural cornerstones</strong>—valuing the why behind the work, not just the what.</li>
              <li><strong>There&apos;s room to grow</strong>—not through titles, but by taking ownership, showing up consistently, and supporting others.</li>
            </TypographyList>
            <TypographyP>
              <em>TL;DR: Thoughtful builder who takes ownership, navigates complexity, and follows through.</em>
            </TypographyP>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <TypographyH2 className={sectionHeader}>
          Skills & Technologies
        </TypographyH2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, techList]) => (
            <Card key={category} className="bg-card border-theme">
              <CardHeader>
                <CardTitle className="text-xl text-theme">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techList.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-sm border-theme text-theme"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <TypographyH2 className={sectionHeader}>
          Core Values & Professional Focus
        </TypographyH2>
        <div className="grid md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="bg-card border-theme">
              <CardHeader>
                <CardTitle className="text-theme text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-theme">
                  {value.description}
                </TypographyP>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="mb-16">
        <TypographyH2 className={sectionHeader}>
          Fun Facts
        </TypographyH2>
        <Card className="bg-card border-theme">
          <CardContent className="pt-6">
            <TypographyList className="text-theme">
              {funFacts.map((fact, index) => (
                <li key={index} className="mb-3">{fact}</li>
              ))}
            </TypographyList>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <TypographyH3 className="text-theme mb-4">Ready to Work Together?</TypographyH3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/projects">
              View My Work
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
  