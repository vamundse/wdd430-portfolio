import { NextResponse, NextRequest } from 'next/server';
import { fetchProjectsPages } from '../../../../lib/projects-db';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';

    const totalPages = await fetchProjectsPages(query);
    return NextResponse.json({ totalPages });
}