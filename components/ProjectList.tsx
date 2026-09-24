import ProjectCard from './ProjectCard';
import type { Project } from '@/lib/projects-db';

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 m-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
}