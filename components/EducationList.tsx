import EducationCard from './EducationCard';

interface Education {
    title: string;
    institution: string;
    year: string;
}

interface EducationProps {
    educations: Education[]
}

export default function Education({ educations }: EducationProps) {
    return (
        <article className="mb-6">
            {educations.map((education) => (
                            <EducationCard key={education.title} {...education} />
                        ))}
        </article>
    );
}