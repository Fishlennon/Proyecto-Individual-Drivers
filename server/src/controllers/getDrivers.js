const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");

/***********************************SOLO TRAER TODOS LOS CONDUCTORES**************************************************** */

// const getDrivers = async (req, res) =>{

//     try {
//         const { data} = await  axios.get('http://localhost:5000/drivers')



//         const driverFotoDefault = data.map(driver => ({
//             ...driver,
//             image: driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'
//         }))
        
//         res.status(200).json(driverFotoDefault)
        
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

/********************************************TRAER LOS DRIVER DESDE LA API QUERY Y TODOS********************************************************************* */

// const getDrivers = async (req, res) =>{

//     try {
//         const { name } = req.query;
//         console.log(name)

//         if(name){
            
//             const {data} = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);

            
               
//                 if(data.length > 0) {
//                     const drivers = data.map((driver) => ({

//                 id: driver.id,
//                 // driverRef: data.driverRef,
//                 // number: data.number,
//                 // code: data.code,
//                 name : driver.name.forename,
//                 lastName : driver.name.surname,
//                 description: driver.description,
//                 image : driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
//                 nationality : driver.nationality,
//                 birthdate : driver.dob,
//                 // teams: data.teams,



//             }))
//             return res.status(200).json(drivers);

//         }
//         }

//         else {

//             const { data} = await  axios.get('http://localhost:5000/drivers')
    
    
    
//             const driverFotoDefault = data.map(driver => ({
//                 ...driver,
//                 image: driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'
//             }))
            
//             res.status(200).json(driverFotoDefault)
//         }
        
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }


/*************************TRAER LOS DRIVER DESDE LA API GENERAL Y TODOS, unir resultados en array**************************************************************** */

const getDrivers = async (req, res) =>{

    try {
        const { name } = req.query;

        const {data} = await axios.get('http://localhost:5000/drivers');
        

        if(name){

        const driverDB = await Driver.findAll({where:{name:{[Op.iLike]: `%${name}%`}}, include: Team, limit: 15})
        
        // const driverSinFoto = driverDB.map((driver)=>({
        //     ...driver.toJSON(), 
        //     image: driver.image || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'}))


        // if(driverDB.length > 0) {
        //     return res.status(200).json(driverDB.map((driver)=>({
        //         ...driver.toJSON(), 
        //         image: driver.image || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'})));
        // }
                                       
         const driverAPI = data.filter(driver => driver.name.forename.toLowerCase().includes(name.toLowerCase()));
        // const driverAPI = data.filter(driver => driver.name.forename == name);
        
                   const allDrivers = [...driverDB, ...driverAPI].slice(0,15).map(driver=>({
                        id: driver.id,
                        // driverRef: driver.driverRef,
                        // number: driver.number,
                        // code: driver.code,
                        name : driver.name.forename,
                        lastName : driver.name.surname,
                        description: driver.description,
                        image : driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                        nationality : driver.nationality,
                        birthdate : driver.dob,
                        // teams: driver.teams,

            }))
            if(allDrivers.length === 0) return  res.status(404).send({Error: 'Driver not found'})


            return res.status(200).json(allDrivers);

        }
        

        else {  
    
    
            const driverFotoDefault = data.map(driver => ({
                name : driver.name.forename,
                lastName : driver.name.surname,
                nationality : driver.nationality,
                birthdate : driver.dob,
                image: driver.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'
            }))
            
            res.status(200).json(driverFotoDefault)
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getDrivers}