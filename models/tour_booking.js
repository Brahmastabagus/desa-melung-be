'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tour_booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      })

      this.belongsTo(models.tour_package, {
        foreignKey: 'tour_package_id',
        as: 'tour_package'
      })
    }
  }
  tour_booking.init({
    arrival_date: DataTypes.DATE,
    departure_date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    meal_count: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE,
    midtrans_token: DataTypes.STRING,
    midtrans_booking_code: DataTypes.STRING,
    tour_package_id: DataTypes.INTEGER,
    payment_status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tour_booking',
  });
  return tour_booking;
};