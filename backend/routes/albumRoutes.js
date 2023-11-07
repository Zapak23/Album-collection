import express from "express";
import { Album } from '../models/albumModel.js';

const router = express.Router();


//Route for save new Album
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.artist || !request.body.releaseYear)
        {
            return response.status(400).send({
                message: 'Send all required fields: title, artist, releaseYear'
            });
        }
        const newAlbum = {
            title: request.body.title,
            artist: request.body.artist,
            releaseYear: request.body.releaseYear,
        };
        const album = await Album.create(newAlbum);

        return response.status(201).send(album);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//Route for get all albums from database
router.get('/', async (request, response) => {
    try {
        const albums = await Album.find({});
        return response.status(200).json({
            count: albums.length,
            data: albums
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for get album by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const album = await Album.findById(id);
        return response.status(200).json(album);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for update album
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.artist || !request.body.releaseYear)
        {
            return response.status(400).send({
                message: 'Send all required fields: title, artist, releaseYear'
            });
        }
        const { id } = request.params;
        const result = await Album.findByIdAndUpdate(id, request.body);

        if (!result)
        {
            response.status(404).json({message: "Album not found"});
        }

        return response.status(200).send({message: "Album updated successfully"}); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for deleting an album
router.delete('/:id', async (request, response) =>{
    try {
        const { id } = request.params;
        const result = await Album.findByIdAndDelete(id);

        if (!result)
        {
            response.status(404).json({message: "Album not found"});
        }

        return response.status(200).send({message: "Album deleted successfully"}); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;