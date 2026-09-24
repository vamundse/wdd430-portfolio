import EducationList from '@/components/EducationList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about my background and education.'
};

const educations = [
    {
        title: "Master of Science in Innovation and Entrepreneurship",
        institution: "BI Business School",
        year: "2011"
    },
    {
        title: "Masters in Education",
        institution: "Hedmark University College",
        year: "2018"
    },
    {
        title: "Bachelor in Software Design",
        institution: "BYU Pathway",
        year: "2028"
    }
]

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-4"> About Me</h2>
                <p className="text-lg text-gray-700">
                I am a former educator with a strong desire to become a full-stack software developer.
                </p>
            </section>
            <section className="text-center py-12">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <EducationList educations={educations} />
            </section>
        </main>
    );
}