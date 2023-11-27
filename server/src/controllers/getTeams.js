const {Driver, Team} = require('../db')
const axios = require('axios');
const { Op, } = require("sequelize");



const getTeams = async (req, res) =>{
    
    try {
        const {data} = await axios.get('http://localhost:5000/drivers')
        
        const teamArrayApi= data.map((driver)=>driver.teams)
        const teamArray = teamArrayApi.flatMap((team)=>{
            if(team !== undefined && team !== null){
                return team.split(',').map(team => team.trim());
            } 
        })
       
        const teamsBD = await Team.findAll()

        if(teamsBD.length===0){

            await Promise.all(
            teamArray.filter((team) => team !== undefined && team !== null).map((team)=>Team.findOrCreate({
                where:{name: team},
                defaults: { name: team }
            })))

            

        }
        res.status(200).json(teamArray)
        
    } catch (error) {
        res.status(404).send({error: error.message})
    }


}

module.exports = {getTeams}