import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Beer from '@/models/Beer';
import Wine from '@/models/Wine';

export async function GET() {
    await dbConnect();

    const existingBeers = await Beer.find({});
    const existingWines = await Wine.find({});

    if (existingBeers.length > 0 || existingWines.length > 0) {
        return NextResponse.json({ message: 'Database already seeded' });
    }

    const initialBeers = [
        {
            name: 'Heineken',
            type: 'Lager',
            abv: 5.0,
            origin: 'Netherlands',
            description: 'A pale lager beer with 5% alcohol by volume.',
            image: 'https://placehold.co/600x400?text=Heineken',
        },
        {
            name: 'Guinness Draught',
            type: 'Stout',
            abv: 4.2,
            origin: 'Ireland',
            description: 'A dark Irish dry stout.',
            image: 'https://placehold.co/600x400?text=Guinness',
        },
        {
            name: 'Asahi Super Dry',
            type: 'Lager',
            abv: 5.2,
            origin: 'Japan',
            description: 'A Japanese rice lager.',
            image: 'https://placehold.co/600x400?text=Asahi',
        }
    ];

    const initialWines = [
        {
            name: 'Cloudy Bay Sauvignon Blanc',
            type: 'White',
            variety: 'Sauvignon Blanc',
            vintage: 2022,
            origin: 'New Zealand',
            description: 'Vibrant and expressive.',
            image: 'https://placehold.co/600x400?text=Cloudy+Bay',
        },
        {
            name: 'Penfolds Bin 389',
            type: 'Red',
            variety: 'Cabernet Shiraz',
            vintage: 2019,
            origin: 'Australia',
            description: 'Often referred to as Baby Grange.',
            image: 'https://placehold.co/600x400?text=Penfolds',
        }
    ];

    await Beer.insertMany(initialBeers);
    await Wine.insertMany(initialWines);

    return NextResponse.json({ message: 'Database seeded successfully', beers: initialBeers, wines: initialWines });
}
