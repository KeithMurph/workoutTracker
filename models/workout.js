const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Add your Exercise'
      },

      type: {
        type: String,
        trim: true,
        required: "Select Exercise type",
      },
      distance: {
        type: Number,
        default: 0,
        required: "Distance (miles)"
      },
      duration: {
        type: Number,
        required: 'Duration (mins)'
      },
      
      weight: {
        type: Number,
        default: 0,
        required: 'Weight (lbs)'
      },

      sets: {
        type: Number,
        default: 0,
        required: 'Number of sets'
      },
      reps: {
        type: Number,
        default: 0,
        required: 'Number of reps'
      },
    
     
    },
  ],
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

