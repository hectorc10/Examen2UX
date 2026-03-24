'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    static associate(models) {
      this.hasMany(models.Note, { foreignKey: 'authorId' });
    }
  }

  Authors.init({
    name: DataTypes.STRING,
    stack: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authors',
  });

  return Authors;
};