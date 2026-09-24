import { NextRequest, NextResponse } from 'next/server';
import { fetchFilteredProjects } from '../../../lib/projects-db';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);

    const projects = await fetchFilteredProjects(query, page);
    return NextResponse.json(projects);
}