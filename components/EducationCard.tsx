interface EducationCardProps {
    title: string;
    institution: string;
    year: string;
}

export default function EducationCard({title, institution, year}: EducationCardProps) {
    return (
        <article className="p-4 border-1-4 border-dark-green-600 bg-white-50 rounded">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-2">{institution}</p>
            <p className="text-sm text-gray-600"><strong>Year:</strong> {year}</p>
        </article>
    );
}