import { deleteProject } from "@/lib/actions";
import Link from "next/link";

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    yearCompleted: number;
}

export default function ProjectCard({id, title, description, technologies, link, yearCompleted}: ProjectCardProps) {
    return (
        <article className="p-4 border-2 border-green-800 bg-green-100/30 rounded">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-900 mb-2">{description}</p>
            <p className="text-sm text-gray-800"><strong>Technologies:</strong> {technologies.join(', ')}</p>
            {yearCompleted && <p className="text-sm text-gray-800"><strong>Year Completed:</strong> {yearCompleted}</p>}
            {link && (
                <p className="mt-2">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">View Project</a>
                </p>
            )}
            <div className="flex flex-row gap-2 justify-center">
                <Link href={`projects/${id}/edit`} className="mt-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-900 hover:cursor-pointer">Edit Project</Link>
                <form action={deleteProject}>
                    <input type="hidden" name="id" value={id} />
                    <button type="submit" className="mt-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-800 hover:cursor-pointer">Delete Project</button>
                </form>
            </div>
        </article>
    );
}