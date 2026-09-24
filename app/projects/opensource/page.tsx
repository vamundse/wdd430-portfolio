import { Project } from '@/lib/projects-db';
import ProjectList from '../../../components/ProjectList';

async function getOpenSourceProjects(): Promise<Project[]> {
  await new Promise(res => setTimeout(res, 2000));
  const response = await fetch('http://localhost:3000/api/projects?type=opensource');
  const projects: Project[] = await response.json();
  return projects;
}

export default async function OpenSourceProjects() {

  const projects = await getOpenSourceProjects();

  return (
      <section className="text-center mt-12">
        <h1 className="text-xl font-bold mb-4">Open Source Projects</h1>
        <ProjectList projects={projects} />
      </section>
  );
}