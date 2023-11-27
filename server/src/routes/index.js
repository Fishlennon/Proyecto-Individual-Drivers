const { Router } = require("express");
const {getDrivers} = require('../controllers/getDrivers');
const {getDriverById} = require('../controllers/getDriverById');
const {getDriverQuery} = require('../controllers/getDriverQuery');
const {postDriver} = require('../controllers/postDriver');
const {getTeams} = require('../controllers/getTeams');
const { deleteDriver } = require("../controllers/deleteDriver");

const router = Router();


router.get('/drivers', getDrivers)
// router.get('/drivers', getDriverQuery)
router.get('/drivers/:id', getDriverById)
router.post('/drivers', postDriver)
router.get('/teams', getTeams)
router.delete('/drivers', deleteDriver)


module.exports = router;
