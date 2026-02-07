import mongoose, { Schema, Document } from 'mongoose';

export interface IWine extends Document {
    name: string;
    type: string;
    variety: string;
    vintage: number;
    origin: string;
    description: string;
    image: string;
}

const WineSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    variety: { type: String, required: true },
    vintage: { type: Number, required: true },
    origin: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
});

export default mongoose.models.Wine || mongoose.model<IWine>('Wine', WineSchema);
