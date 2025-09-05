import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCarousel from './ProjectCarousel';

type Project = {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    year: number;
    features?: string[];
    links: {
        github?: string;
        liveDemo?: string;
    };
};

export default function ProjectCard({
    title,
    description,
    technologies,
    images,
    year,
    features,
    links
}: Project) {
    return (
        <Card className="bg-card text-theme overflow-hidden border-theme">
            <CardHeader className="p-0">
                <ProjectCarousel images={images} title={title} />
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold flex-1 leading-tight text-theme">{title}</h2>
                    <span className="text-sm text-gold flex-shrink-0">{year}</span>
                </div>
                <p className="text-md text-theme">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm border-gold text-gold">
                            {tech}
                        </Badge>
                    ))}
                </div>
                {features && (
                    <ul className="list-disc list-inside text-md text-theme">
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                )}
                <div className="flex gap-3">
                    {links.github && (
                        <Button asChild variant="outline">
                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </Button>
                    )}
                    {links.liveDemo && (
                        <Button asChild>
                            <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}