import Show  from "../model/show.model.js"
import mongoose from "mongoose";

export const  createShow = async (req, res) =>{
     const showDetails = req.body;
     //console.log(showDetails);
     const response = await Show.create(showDetails);

     res.status(200).send(response);
}

export const  showDetail = async (req, res) =>{
    const response = await Show.findById(req.params.showId);

    res.status(200).send(response);
}

export const listShows = async (req, res) => {
    const movieId = req.query.movie;
    const movieDate = req.query.date;

    try {
        const response = await Show.aggregate([
            {
                $match: { movie: new mongoose.Types.ObjectId(movieId) },
            },
            {
                $match: {
                    datetime: {
                        $gte: new Date(`${movieDate}T00:00:00.000+00:00`),
                        $lt: new Date(`${movieDate}T23:59:59.999+00:00`),
                    },
                },
            },
            {
                $lookup: {
                    from: 'theatres', // Assuming your theatre collection is named 'theatres'
                    localField: 'theatre',
                    foreignField: '_id',
                    as: 'theatreDetails',
                },
            },
            {
                $unwind: '$theatreDetails',
            },
            {
                $group: {
                    _id: '$theatre',
                    theatreName: { $first: '$theatreDetails.name' },
                    theatreLocation: { $first: '$theatreDetails.location' },
                    shows: { $push: '$$ROOT' },
                },
            },
        ]).exec();

        res.status(200).json(response);
    } catch (error) {
        console.error('Error listing shows:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
