import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Beer from '@/models/Beer';

export async function GET() {
    await dbConnect();
    const beers = await Beer.find({});
    return NextResponse.json(beers);
}

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();

    const newBeer = await Beer.create({
        name: body.name,
        type: body.type,
        abv: body.abv,
        origin: body.origin,
        description: body.description,
        image: body.image || '/images/beer-placeholder.jpg',
    });

    return NextResponse.json(newBeer, { status: 201 });
}
