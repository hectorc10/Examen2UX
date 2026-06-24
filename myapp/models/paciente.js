'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paciente extends Model {
    static associate(models) {
      this.hasMany(models.cita, { foreignKey: 'pacienteId' });
    }
  }
  paciente.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paciente',
  });
  return paciente;
};