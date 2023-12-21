import { Schema, model } from "mongoose";

const ShowSchema = new Schema({
    datetime: {
        type: Date,
        required: true,
    },
    language:  String,
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'movie',
        required: true,
    },
    theatre: {
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        required: true,
    },
    totalSeats: {
        type: Number,
    },
    availableSeats: {
        type: Number,
    },
    seats: [
        {
            category: String,
            price: Number,
            arrangements: [[
                {
                    seatNumber: String,
                    status: String
                }
            ]]
        }
    ]
})

const Show = new model ('show', ShowSchema);

export default Show;