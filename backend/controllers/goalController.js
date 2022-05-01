const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goal' })
}

const postGoals = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

const putGoals = (req, res) => {
    res.status(200).json({ message: `Update ${req.params.id}` })
}

const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete ${req.params.id}` })
}


module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals,
}