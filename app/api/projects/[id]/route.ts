import { NextResponse, NextRequest } from "next/server";
import { getProjectById} from '../../../../lib/projects-db';

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }>}
 ) {
    
    const { id: idStr } = await params;
    const id = Number(idStr);

    if (Number.isNaN(id)) {
        return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
    }
    const project = await getProjectById(id);
    if (!project) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
        return NextResponse.json(project);
}