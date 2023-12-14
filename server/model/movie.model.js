import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
     title : {
         type : String,
         required : true,

     },
     description : {
        type : String,
        required : true,

    },
     thumbnail : {
        type : String,
        required : true,

    },
     bannerImage : {
        type : String,
        required : true,

    },
     trailerVideo : {
        type : String,
        required : true,

    },
     rating : String,
     casts : [{
        name:String, 
        image:String,
    }],
    duration : {
        type : String,
        required : true,

    },
     genre : {
        type : String,
        required : true,
        enum : ['Drama','Triller','Horror','Fiction','Biography',"Comedy"],
     },
     releaseDate :{
        type : String ,
        required : true,
     } ,
     languages : [{
        type : String,
        required : true,
        enum : ['English','Hindi','Telgu','Marathi'],
     }]



})

const Movie = model('movie', MovieSchema);


export default Movie 