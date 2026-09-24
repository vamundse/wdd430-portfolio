import { Project } from '@/lib/projects-db';
import ProjectList from '../../../components/ProjectList';
import { Suspense } from 'react';
import DashboardSkeleton from '@/app/ui/skeletons';

async function getSchoolProjects(): Promise<Project[]> {
  await new Promise(res => setTimeout(res, 2000));
  const response = await fetch('http://localhost:3000/api/projects?type=school');
  const projects: Project[] = await response.json();
  return projects;
}

async function SchoolProjectsList() {
  const projects = await getSchoolProjects();
  return <ProjectList projects={projects} />;
}

export default async function SchoolProjects() {
  const SchoolProjects = <SchoolProjectsList />;
  return (
      <Suspense fallback={<DashboardSkeleton />}>
      <section className="text-center mt-12">
        <h1 className="text-xl font-bold mb-4">School Projects</h1>
          {SchoolProjects}
      </section>
      </Suspense>
  );
}