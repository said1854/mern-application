//@desc     Get goals
//@route    GET /api/goals
//access    Private
const getGoals = (req, res) => {
    res.status(200).json({message:"Get goals"})
}

//@desc     Post goals
//@route    POST /api/goals
//access    Private
const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400).send("Please add a text")
    }

    res.status(200).json({message:"Set goal"})
}

//@desc     Update goals
//@route    PuT /api/goals/id
//access    Private
const updateGoal = (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

//@desc     Delete goals
//@route    Delete /api/goals/id
//access    Private
const deleteGoal = (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}