'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorName: { type: Sequelize.STRING },
      especialidad: { type: Sequelize.STRING },
      tipoConsulta: { type: Sequelize.STRING },
      pacienteId: { allowNull: false, type: Sequelize.INTEGER, references: { model: 'pacientes', key: 'id' } },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('citas');
  }
};