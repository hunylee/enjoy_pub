import { JSONFilePreset } from 'lowdb/node';
import { Beer, Wine } from './types';

// Define the structure of our database
export interface Data {
    beers: Beer[];
    wines: Wine[];
}

// Initialize the database with default data
const defaultData: Data = { beers: [], wines: [] };

// Singleton instance of the database
// We use a function to get the DB instance to handle potential async initialization if needed in future
// For JSONFilePreset, it's synchronous-like but returns a Promise-like object usually, 
// strictly speaking it returns a Promise<Low<Data>>.

export const getDb = async () => {
    const db = await JSONFilePreset<Data>('db.json', defaultData);
    return db;
}
