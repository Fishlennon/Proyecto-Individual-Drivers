const { getTeams } = require('../controllers/getTeams');

const teamRouter = require('express').Router();


teamRouter.get('/',getTeams)


module.exports = teamRouter