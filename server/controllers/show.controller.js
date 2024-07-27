import mongoose from "mongoose";
import Shows  from "../model/shows.model.js"

export const  createShow = async (req, res) =>{
     const showDetails = req.body;
     //console.log(showDetails);
     const response = await Shows.create(showDetails);

     res.status(200).send(response);
}

export const  showDetail = async (req, res) =>{
    const response = await Shows.findById(req.params.showId);

    res.status(200).send(response);
}

export const listShows = async (req, res) => {
    const movieId = req.query.movie;
    const movieDate = req.query.date;

    try {
        const response = await Shows.aggregate([
            {
                $match: { movie: new mongoose.Types.ObjectId(movieId) },
            },
            {
                $match: {
                    date: {
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

export const getShowById = async (req, res)=>{
    try {
        const { showId } = req.params;
        const show = await Shows.findById(showId)
          .populate("movie")
          .populate("theatre");

        ressend({
          success: true,
          message: "Show fetched successfully",
          data: show,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
}


