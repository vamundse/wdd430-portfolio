// lib/projects-db.ts

import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type?: 'opensource' | 'school';
  technologies: string[];
  link?: string;
  yearCompleted: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'My First Open Source Contribution',
    description: 'A bug fix contributed to a popular library.',
    type: 'opensource',
    technologies: ['TypeScript', 'React'],
    link: 'https://github.com/example/repo',
    yearCompleted: 2023
  },
  {
    id: 2,
    title: 'Database Design Final Project',
    description: 'An ER diagram and normalized schema for a library system.',
    type: 'school',
    technologies: ['PostgreSQL', 'SQL'],
    yearCompleted: 2023
  }
];

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT id, title, description, technologies, year_completed AS "yearCompleted"
      FROM projects
      WHERE type = ${type} ORDER BY ID
    `;
    return rows;
  }
  const { rows } = await sql<Project>`
    SELECT id, title, description, technologies, year_completed AS "yearCompleted"
    FROM projects
    ORDER BY id
  `;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
  SELECT id, title, description, technologies, year_completed AS "yearCompleted"
  FROM projects
  WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
) : Promise<Project[]> {
  const ITEMS_PER_PAGE = 6;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT id, title, description, technologies, year_completed AS "yearCompleted"
    FROM projects
    WHERE title ILIKE ${`%${query}%`}
      OR description ILIKE ${`%${query}%`}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;
  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const { rows } = await sql<{ count: number}>`
    SELECT COUNT(*) AS count FROM projects
    WHERE title ILIKE ${'%' + query + '%'}
      OR description ILIKE ${'%' + query + '%'}
      `;
    return Math.ceil(rows[0].count / 6);
}