const {Driver, Team} = require('../db')
const axios = require('axios');

const getDriverById = async (req, res) =>{
    try {
        const {id} = req.params;

        const driverDB = await Driver.findByPk(id, {include: Team})

        if(driverDB){
              return  res.status(200).json({
                ...driverDB.toJSON(),
                image: driverDB.image || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png'
            })
            
        }
 
        const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);


        if(data.id){
            const driver = {
                id: data.id,
                // driverRef: data.driverRef,
                // number: data.number,
                // code: data.code,
                name : data.name.forename,
                lastName : data.name.surname,
                description: data.description,
                image : data.image.url || 'https://forblitz.ru/wp-content/uploads/2021/12/1-4.png',
                nationality : data.nationality,
                birthdate : data.dob,
                // teams: data.teams,
            }
            return res.status(200).json(driver);
        }
 
        return res.status(404).send('Driver not found');
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }

}

module.exports = {getDriverById}