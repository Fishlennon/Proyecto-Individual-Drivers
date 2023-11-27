const { getTeams } = require('../controllers/getTeams');

const teamRouter = require('express').Router();


teamRouter.get('/', async (req, res) =>{
try {
    await getTeams(req, res)

} catch (error) {
    res.status(404).send({error: error.message})
}


})


module.exports = teamRouter