import ProjectList from '../../components/ProjectList';
import { Project } from '@/lib/projects-db';
import { ProjectsSearch } from '../../components/ProjectsSearch';
import Pagination from '../../components/Pagination';

async function getProjects(query: string | null, page: number): Promise<Project[]> {
  const params = new URLSearchParams();
  if (query) params.append('query', query);
  params.append('page', page.toString());

  const response = await fetch(`http://localhost:3000/api/projects?${params.toString()}`);
  const projects: Project[] = await response.json();
  return projects;
}

async function getTotalPages(query: string | null): Promise<number> {
  const params = new URLSearchParams();
  if (query) params.append('query', query);

  const response = await fetch(`http://localhost:3000/api/projects/pages?${params.toString()}`);
  const data = await response.json();
  return data.totalPages;
}

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page ?: string }>
}) {
  const params = await searchParams;
  const query = params.query || null;
  const currentPage = parseInt(params.page || '1', 10);

  const projects = await getProjects(query, currentPage);
  const totalPages = await getTotalPages(query);

  return (
      <section className="text-center mt-12">
        <h1 className="text-xl font-bold mb-4">Projects Overview</h1>
        <div className="mb-4">
          <ProjectsSearch />
        </div>
        <div>
          <ProjectList projects={projects} />
        </div>
        <div>
          <Pagination totalPages={totalPages} />
        </div>
      </section>
  );
}