import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Wine from '@/models/Wine';

export async function GET() {
    await dbConnect();
    const wines = await Wine.find({});
    return NextResponse.json(wines);
}

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();

    const newWine = await Wine.create({
        name: body.name,
        type: body.type,
        variety: body.variety,
        vintage: body.vintage,
        origin: body.origin,
        description: body.description,
        image: body.image || '/images/wine-placeholder.jpg',
    });

    return NextResponse.json(newWine, { status: 201 });
}
