'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cita extends Model {
    static associate(models) {
      this.belongsTo(models.paciente, { foreignKey: 'pacienteId' });
    }
  }
  cita.init({
    doctorName: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    tipoConsulta: DataTypes.STRING,
    pacienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cita',
  });
  return cita;
};