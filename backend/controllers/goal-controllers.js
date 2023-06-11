const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: 'get goals' });
});

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text');
    }
    res.json({ message: 'set goal' });
});

const updateGoal = asyncHandler(async (req, res) => {
    res.json({ message: `update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};