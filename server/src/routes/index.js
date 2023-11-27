const { Router } = require("express");
// const {getDrivers} = require('../controllers/getDrivers');
// const {getDriverById} = require('../controllers/getDriverById');
// const {getDriverQuery} = require('../controllers/getDriverQuery');
// const {postDriver} = require('../controllers/postDriver');
// const {getTeams} = require('../controllers/getTeams');
// const { deleteDriver } = require("../controllers/deleteDriver");
const driverRouter = require("./driverRouter");
const teamRouter = require("./teamRouter");

const router = Router();


router.use('/drivers', driverRouter)
router.use('/teams', teamRouter)


// router.get('/drivers', getDrivers)
// // router.get('/drivers', getDriverQuery)
// router.get('/drivers/:id', getDriverById)
// router.post('/drivers', postDriver)
// router.delete('/drivers', deleteDriver)
// router.get('/teams', getTeams)


module.exports = router;
