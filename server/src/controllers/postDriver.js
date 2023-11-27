const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");

const postDriver = async (req, res) =>{
    try {
        let {name, lastName, description, image, nationality, birthdate, teams } = req.body;

        const [newDriver, created] = await Driver.findOrCreate({
            where: { name, lastName, nationality },
            defaults: { birthdate, description, image }
        })

        if(!created) return res.status(400).send('Driver already exists')
        
        if(teams){
            // if(!Array.isArray(teams)) teams =[teams];
            teams = Array.isArray(teams) ? teams : [teams];
            
            const teamsFind = await Team.findAll({where:{name:{[Op.in]: teams}}});
            
            await newDriver.setTeams(teamsFind);
        }
    
        res.status(200).send(newDriver);


    } catch (error) {
        res.status(400).json({error: error.message});
    }



}

module.exports = {postDriver}