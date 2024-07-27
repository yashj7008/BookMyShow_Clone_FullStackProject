import { Schema, model } from "mongoose";

const ShowSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    time : {
        type: Date,
        required: true
    },
    movie : {
        type: Schema.Types.ObjectId,
        ref: 'movie',
        required: true
    },
    ticketPrice : {
        type: Number,
        required: true
    },
    totalSeats : {
        type: Number,
        required: true
    },
    bookedSeats : {
        type: Array,
        default: []
    },
    theatre : {
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        required: true
    },
} , { timestamps: true });


const Shows= model('shows', ShowSchema);

export default Shows;
