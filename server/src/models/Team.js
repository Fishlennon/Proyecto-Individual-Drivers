const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

    sequelize.define('Team', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [3, 25], 
            },
        },
    },{
        timestamps:false,
    });
}