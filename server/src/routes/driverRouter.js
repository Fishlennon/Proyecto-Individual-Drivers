const { getDriverById } = require('../controllers/getDriverById');
const { getDrivers } = require('../controllers/getDrivers');
const { postDriver } = require('../controllers/postDriver');
const { deleteDriver } = require('../controllers/deleteDriver');

const driverRouter = require('express').Router();



driverRouter.get('/', getDrivers)
driverRouter.get('/:id', getDriverById)
driverRouter.post('/', postDriver)
driverRouter.delete('/:id', deleteDriver)



module.exports = driverRouter