//handles all the routing, exports the router so server.js can use it
const expess = require('express');
const {createWorkout,
      getWorkout,
      getWorkouts,
      updateWorkout,
      deleteWorkout
    } = require('../controllers/workoutController')

//creates an instance of the app router
const router = expess.Router();

//gets all workouts
router.get('/', getWorkouts)

//GET single workout :<param> is a parameter that is attached to the request
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)

//patch a workout
router.patch('/:id', updateWorkout)

module.exports = router;