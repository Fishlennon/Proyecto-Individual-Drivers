const axios = require('axios');

const getDrivers = async (req, res) =>{

    try {
        const { data} = await  axios.get('http://localhost:5000/drivers')



        const driverFotoDefault = data.map(driver => ({
            ...driver,
            image: driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'
        }))
        
        res.status(200).json(driverFotoDefault)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getDrivers}