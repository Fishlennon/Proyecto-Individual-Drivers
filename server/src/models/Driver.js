const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
      // type:DataTypes.INTEGER,
      // primaryKey:true,
      // autoIncrement:true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25], 
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25], 
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate :{
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    age:{
      type: DataTypes.VIRTUAL,
      get() {
        const birthdate = this.getDataValue('birthdate');
        if (!birthdate) return undefined;
        const today = new Date();
        const cumple = new Date(birthdate);
        let age = today.getFullYear() - cumple.getFullYear();

        return age;
      }
    }
  }, {
    timestamps:false,
  });
};