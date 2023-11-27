const { getDriverById } = require('../controllers/getDriverById');
const { getDrivers } = require('../controllers/getDrivers');
const { postDriver } = require('../controllers/postDriver');
const { deleteDriver } = require('../controllers/deleteDriver');

const driverRouter = require('express').Router();



driverRouter.get('/', async (req, res) =>{
    try {
        
        await getDrivers(req, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


driverRouter.get('/:id', async (req, res) =>{
    try {
        
        await getDriverById(req, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }


})

driverRouter.post('/', async (req, res) =>{
    try {
        
        await postDriver (req, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }


})

driverRouter.delete('/:id', async (req, res) =>{
    try {
        
        await deleteDriver(req, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }


})


module.exports = driverRouter