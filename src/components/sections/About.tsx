import { useIsMobile } from "@/hooks/use-mobile";
import { useTypewriter } from "@/hooks/use-typewriter";
import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Code, Heart } from "lucide-react";
import { TiltedFigure } from "@/components/TiltedFigure";

export function About() {
  const isMobile = useIsMobile();
  const typeText = useTypewriter(resume.typewriterWords, 100, 2000);

  // Make sure this filename matches the image inside your public folder.
  const src = isMobile ? "/geethu.jpeg" : "/geethu.jpeg";

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex justify-center">
          <TiltedFigure src={src} alt={resume.name} />
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {resume.name}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              {resume.role} · {resume.location}
            </p>
            <p className="mt-4 text-primary">{typeText}</p>
          </div>

          <div className="space-y-3 text-muted-foreground">
            {resume.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <Code className="h-5 w-5 text-primary" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <Heart className="h-5 w-5 text-primary" />
              Strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.attributes.map((attribute) => (
                <Badge key={attribute.label} variant="outline">
                  {attribute.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
