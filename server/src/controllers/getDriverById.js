const { INTEGER } = require('sequelize');
const {Driver, Team} = require('../db')
const axios = require('axios');

const getDriverById = async (req, res) =>{
    try {
        const {id} = req.params;

        if(!Number.isInteger(Number(id))/*!isNaN(id)*/){


        const driverDB = await Driver.findByPk(id, {include: Team})

        if(driverDB){
              return  res.status(200).json({
                ...driverDB.toJSON(),
                image : driverDB.image && driverDB.image !== 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png' ? driverDB.image : 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                teams: driverDB.Teams.map((team)=>team.name)
            })
            
        }
    }
        const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);
    

        if(data.id){
            const driver = {
                id: data.id,
                driverRef: data.driverRef,
                number: data.number,
                code: data.code,
                name : data.name.forename,
                lastName : data.name.surname,
                description: data.description,
                image : data.image.url && data.image.url !== 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png' ? data.image.url : 'https://th.bing.com/th/id/OIG.9o7Q9fgiECFzH.tWyoDV?pid=ImgGn',
                nationality : data.nationality,
                birthdate : data.dob,
                teams: data.teams?.split(',') || [] 
            }
            return res.status(200).json(driver);
        }
 
        return res.status(404).send('Driver not found');
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }

}

module.exports = {getDriverById}