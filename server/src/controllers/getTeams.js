const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");



const getTeams = async (req, res) =>{
    
    try {
       
        const teamsBD = await Team.findAll()          
        const teamsNames = teamsBD.map(team => team.name)
    
        res.status(200).json(teamsNames);
        
    } catch (error) {
        res.status(404).send({error: error.message})
    }


}

module.exports = {getTeams}