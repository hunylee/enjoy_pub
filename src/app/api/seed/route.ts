import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { Beer, Wine } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const db = await getDb();

    if (db.data.beers.length > 0 || db.data.wines.length > 0) {
        return NextResponse.json({ message: 'Database already seeded' });
    }

    const beers: Beer[] = [
        {
            id: uuidv4(),
            name: 'Cloudy Bay Sauvignon Blanc',
            type: 'White', // Using type generally, though typical for beer
            abv: 13.5,
            origin: 'New Zealand',
            description: 'A vibrant and expressive white wine with notes of passionfruit and lime.',
            image: '/images/wine-placeholder.jpg', // Placeholder
        },
        { // Actually adding a beer here to mix references, wait, let's keep them correct types
            id: uuidv4(),
            name: 'Heineken',
            type: 'Lager',
            abv: 5.0,
            origin: 'Netherlands',
            description: 'A pale lager beer with 5% alcohol by volume.',
            image: '/images/beer-placeholder.jpg',
        },
        {
            id: uuidv4(),
            name: 'Guinness Draught',
            type: 'Stout',
            abv: 4.2,
            origin: 'Ireland',
            description: 'A dark Irish dry stout that originated in the brewery of Arthur Guinness at St. James\'s Gate, Dublin.',
            image: '/images/beer-placeholder.jpg',
        }
    ];

    const wines: Wine[] = [
        {
            id: uuidv4(),
            name: 'Cabernet Sauvignon',
            type: 'Red',
            variety: 'Cabernet Sauvignon',
            vintage: 2018,
            origin: 'Napa Valley, USA',
            description: 'Full-bodied red wine with dark fruit flavors and savory notes.',
            image: '/images/wine-placeholder.jpg',
        },
        {
            id: uuidv4(),
            name: 'Chardonnay',
            type: 'White',
            variety: 'Chardonnay',
            vintage: 2020,
            origin: 'Burgundy, France',
            description: 'Dry white wine with crisp acidity and potential oak influence.',
            image: '/images/wine-placeholder.jpg',
        }
    ];

    // Correcting the manual mix-up above:
    // Let's separate them properly.
    const initialBeers: Beer[] = [
        {
            id: uuidv4(),
            name: 'Heineken',
            type: 'Lager',
            abv: 5.0,
            origin: 'Netherlands',
            description: 'A pale lager beer with 5% alcohol by volume.',
            image: 'https://placehold.co/600x400?text=Heineken',
        },
        {
            id: uuidv4(),
            name: 'Guinness Draught',
            type: 'Stout',
            abv: 4.2,
            origin: 'Ireland',
            description: 'A dark Irish dry stout.',
            image: 'https://placehold.co/600x400?text=Guinness',
        },
        {
            id: uuidv4(),
            name: 'Asahi Super Dry',
            type: 'Lager',
            abv: 5.2,
            origin: 'Japan',
            description: 'A Japanese rice lager.',
            image: 'https://placehold.co/600x400?text=Asahi',
        }
    ];

    const initialWines: Wine[] = [
        {
            id: uuidv4(),
            name: 'Cloudy Bay Sauvignon Blanc',
            type: 'White',
            variety: 'Sauvignon Blanc',
            vintage: 2022,
            origin: 'New Zealand',
            description: 'Vibrant and expressive.',
            image: 'https://placehold.co/600x400?text=Cloudy+Bay',
        },
        {
            id: uuidv4(),
            name: 'Penfolds Bin 389',
            type: 'Red',
            variety: 'Cabernet Shiraz',
            vintage: 2019,
            origin: 'Australia',
            description: 'Often referred to as Baby Grange.',
            image: 'https://placehold.co/600x400?text=Penfolds',
        }
    ];

    db.data.beers = initialBeers;
    db.data.wines = initialWines;
    await db.write();

    return NextResponse.json({ message: 'Database seeded successfully', beers: initialBeers, wines: initialWines });
}
