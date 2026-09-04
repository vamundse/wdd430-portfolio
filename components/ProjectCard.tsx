interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
    return (
        <article className="p-4 border-1-4 border-dark-green-600 bg-white-50 rounded">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-sm text-gray-600"><strong>Technologies:</strong> {technologies.join(', ')}</p>
            {link && (
                <p className="mt-2">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                </p>
            )}
        </article>
    );
}