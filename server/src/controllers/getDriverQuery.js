const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");

const getDriverQuery = async (req, res) =>{

    try {
      
        const { name } = req.query;
      


        // const driverDB = await Driver.findAll({where:{name:{[Op.iLike]: `%${name}%`}}, include: Team, limit: 15})

        // if(driverDB.length > 0) {
        //     return res.status(200).json(driverDB.map((driver)=>({
        //         ...driver.toJSON(), 
        //         image: driver.image || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'})));
        // }

        // const {data} = await axios.get('http://localhost:5000/drivers');
        
        // const driverFilter = data.filter(driver => driver.name.forename.toLowerCase().includes(name.toLowerCase()));
        // // const driverFilter = data.filter(driver => driver.name.forename == name);
        
        // if(driverFilter.length>0){
            //     const drivers = driverFilter.map(driver=>({
                //         id: driver.id,
                //         // driverRef: driver.driverRef,
                //         // number: driver.number,
                //         // code: driver.code,
                //         name : driver.name.forename,
                //         lastName : driver.name.surname,
                //         description: driver.description,
                //         image : driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                //         nationality : driver.nationality,
                //         birthdate : driver.dob,
                //         // teams: driver.teams,

                const {data} = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);

                console.log(data);
               
                if(data.length > 0) {
                    const drivers = data.map((driver) => ({

                id: driver.id,
                // driverRef: data.driverRef,
                // number: data.number,
                // code: data.code,
                name : driver.name.forename,
                lastName : driver.name.surname,
                description: driver.description,
                image : driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                nationality : driver.nationality,
                birthdate : driver.dob,
                // teams: data.teams,
            }))
            return res.status(200).json(drivers);

        }

        return res.status(404).send('Driver not found')
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {getDriverQuery}