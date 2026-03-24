'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    static associate(models) {
      this.belongsTo(models.Authors, { foreignKey: 'authorId' });

    }
  }

  Notes.init({
     title: DataTypes.STRING,
    content: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notes',
  });

  return Notes;
};