import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { Wine } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const db = await getDb();
    return NextResponse.json(db.data.wines);
}

export async function POST(request: Request) {
    const db = await getDb();
    const body = await request.json();

    const newWine: Wine = {
        id: uuidv4(),
        name: body.name,
        type: body.type,
        variety: body.variety,
        vintage: body.vintage,
        origin: body.origin,
        description: body.description,
        image: body.image || '/images/wine-placeholder.jpg',
    };

    db.data.wines.push(newWine);
    await db.write();

    return NextResponse.json(newWine, { status: 201 });
}
