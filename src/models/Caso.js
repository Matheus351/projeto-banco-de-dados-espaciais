const sequelize = require('../database/data-base')
const { DataTypes } = require('sequelize')

const Caso = sequelize.define('Caso',{
    coordenadas: {
        type: DataTypes.GEOMETRY,
    },
    nomeRua: {
      type: DataTypes.STRING,
    },
})

// Caso.sync({force:true})
module.exports = Caso;
