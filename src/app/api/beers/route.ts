import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { Beer } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const db = await getDb();
    return NextResponse.json(db.data.beers);
}

export async function POST(request: Request) {
    const db = await getDb();
    const body = await request.json();

    const newBeer: Beer = {
        id: uuidv4(),
        name: body.name,
        type: body.type,
        abv: body.abv,
        origin: body.origin,
        description: body.description,
        image: body.image || '/images/beer-placeholder.jpg',
    };

    db.data.beers.push(newBeer);
    await db.write();

    return NextResponse.json(newBeer, { status: 201 });
}
