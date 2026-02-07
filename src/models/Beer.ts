import mongoose, { Schema, Document } from 'mongoose';

export interface IBeer extends Document {
    name: string;
    type: string;
    abv: number;
    origin: string;
    description: string;
    image: string;
}

const BeerSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    abv: { type: Number, required: true },
    origin: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
});

// Check if model already exists to prevent OverwriteModelError in dev
export default mongoose.models.Beer || mongoose.model<IBeer>('Beer', BeerSchema);
