const db = require("../models");
const router = require("express").Router();





// all workouts
router.get("/workouts", async (req, res) => {
  try {
   const workouts = await db.Workout.aggregate([{
      $addFields:{
        totalDuration:{
          $sum: `$exercises.duration`
        }
      }
    }])
  
    res.json(workouts);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});



// create and post workouts by ID


router.put("/workouts/:id", async (req, res) => {
  try {
    const newEx = await db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      }
    );
    res.json(newEx);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});


router.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await db.Workout.create(req.body);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    re.json(err);
  }
});


// 

router.get("/workouts/range", async (req, res) => {
  try {
      const workoutRange = await db.Workout.aggregate([{
          $addFields:{
              totalDuration:{
       $sum: `$exercises.duration`
        }
      }
    }]).limit(7)
  
    res.json(workoutRange);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;