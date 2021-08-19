const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default:Date.now


    },

    // duration: {
    //     type:Number,
    //     default: 0,
    //     trim: true

    // },

    exercise: [{
        name: {
            type: String,
            required: 'Add your Exercise',
            trim:true
        },

        type: {
            type: String,
            required: "Select Exercise type",
            trim: true


        },
        distance: {
        type: Number,
        default: 0,
        required: "Distance (miles)"
        
        },

        duration: {
            type:Number,
            default: 0,
            trim: true
    
        },

        weight: {
            type: Number,
            default: 0,
            trim: true,
            reuired: "Weight (lbs)"
        },

        sets: {
        type: Number,
        deault: 0,
        trim:true,
        rquired: "Number of sets" 

        },

        reps: {

            type: Number,
            deault: 0,
            trim: true,
            required: "Number of reps"
        },


        


    }]



});


