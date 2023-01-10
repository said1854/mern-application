const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel');

//@desc     Get goals
//@route    GET /api/goals
//access    Private
const getGoals = asyncHandler( async (req, res) => {
    const id = req.params.id;
    if (!id) {        
        const goals = await Goal.find()
        res.status(200).json(goals)
    } else {
        const goals = await Goal.findById(id);
        res.status(201).json({goals,message:"success!"});
    }
})

//@desc     Post goals
//@route    POST /api/goals
//access    Private
const setGoal = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field!");
    }
    const goal = await Goal.create({
        text:req.body.text
    })
    res.status(200).json(goal)
    
})

//@desc     Update goals
//@route    PuT /api/goals/id
//access    Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).send(updatedGoal)
})

//@desc     Delete goals
//@route    Delete /api/goals/id
//access    Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400).send('not found')
    } else {
        await goal.remove({id:req.params.id})
        res.status(200).json({message:`Goal ${req.params.id} deleted`})
    }

})

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}