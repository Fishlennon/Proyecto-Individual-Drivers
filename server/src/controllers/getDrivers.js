const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");


/*************************TRAER LOS DRIVER DESDE LA API GENERAL Y TODOS, unir resultados en array**************************************************************** */


const getDrivers = async (req, res) =>{

    try {
        const { name } = req.query;

        const {data} = await axios.get('http://localhost:5000/drivers');
        

        if(name){

        const driverDBName = await Driver.findAll({where:{name:{[Op.iLike]: `%${name}%`}}, include: Team, limit: 15})
                                       
        //  const driverAPIName = data.filter(driver => driver.name.forename.toLowerCase().includes(name.toLowerCase())); // trae todo lo que incluya el nombre 
         const driverAPIName = data.filter(driver => driver.name.forename.toLowerCase() === name.toLowerCase());
        
                   const driverDBName2 = driverDBName.map(driver=>({
                        id: driver.id,
                        // driverRef: driver.driverRef,
                        // number: driver.number,
                        // code: driver.code,
                        name : driver.name,
                        lastName : driver.lastName,
                        description: driver.description,
                        image : driver.image || 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                        nationality : driver.nationality,
                        birthdate : driver.birthdate,
                        teams: driver.Teams.map((team)=>team.name)

            }))
                   const driverAPI2 = driverAPIName.map(driver=>({
                        id: driver.id,
                        // driverRef: driver.driverRef,
                        // number: driver.number,
                        // code: driver.code,
                        name : driver.name.forename,
                        lastName : driver.name.surname,
                        description: driver.description,
                        // image : driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                        image : driver.image.url && driver.image.url !== 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png' ? driver.image.url : 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                        nationality : driver.nationality,
                        birthdate : driver.dob,
                        teams: driver.teams?.split(',') || []

            }))

            const allDrivers = [...driverDBName2, ...driverAPI2].slice(0,15)

            if(allDrivers.length === 0) return  res.status(404).send({Error: 'Driver not found'})


            return res.status(200).json(allDrivers);

        }
        

        else {  
            const allDriverDB = await Driver.findAll({include: Team})
            const allDriverDBMap = allDriverDB.map(driver =>({
                id: driver.id,
                name : driver.name,
                lastName : driver.lastName,
                nationality : driver.nationality,
                birthdate : driver.birthdate,
                image: driver.image || 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                teams: driver.Teams.map((team)=>team.name)
            }))
    
            const driversApi = data.map(driver => ({
                id: driver.id,
                name : driver.name.forename,
                lastName : driver.name.surname,
                nationality : driver.nationality,
                birthdate : driver.dob,
                // image: driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                image : driver.image.url && driver.image.url !== 
                'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png' 
                ? driver.image.url : 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                teams: driver.teams?.split(',') || []
            }))
            
            res.status(200).json([...allDriverDBMap, ...driversApi])
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getDrivers}