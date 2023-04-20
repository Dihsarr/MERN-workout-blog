//handles all the route logic as to not clod the workouts file
const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'})
    }
    
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'Workout not found'})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout =  async (req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
    emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    console.log(req.body);
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete workout 
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'Workout not found'})
    }

    res.status(200).json(workout)
}

//update workout 
const updateWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
        
    console.log(req.body);
    if(!workout){
        return res.status(404).json({error: 'Workout not found'})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}