const getGoals = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

module.exports = {
    getGoals,
}