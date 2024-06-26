'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.contact, {
        foreignKey: 'contact_id',
        as: 'contact'
      })
    }
  }
  contact_image.init({
    name: DataTypes.STRING,
    fileId: DataTypes.STRING,
    url: DataTypes.STRING,
    contact_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contact_image',
  });
  return contact_image;
};