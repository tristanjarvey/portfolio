import projectsData from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-theme mb-6">My Projects</h1>
                <p className="text-xl text-theme max-w-2xl mx-auto">
                    A collection of my latest work, showcasing full-stack development, 
                    AI integrations, and user-centered design solutions.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        images={project.images}
                        year={project.year}
                        features={project.features}
                        links={project.links}
                    />
                ))}
            </div>
        </main>
    );
}