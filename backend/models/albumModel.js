import mongoose from "mongoose";

const albumSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        artist:{
            type: String,
            required: true,
        },
        releaseYear:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


export const Album = mongoose.model('Album', albumSchema);