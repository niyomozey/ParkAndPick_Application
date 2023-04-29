"use strict";
const  {Model} = require("sequelize") 
module.exports = function (sequelize, DataTypes){
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
      Animal.belongsTo( models.Slaughterhouse, {
        foreignKey: 'SlaughterhouseId',
        as: 'Slaughterhouse',
        onDelete: 'CASCADE',
      })
    }
  }
  Animal.init(
    {
      animalId: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      type: DataTypes.STRING,
      SlaughterhouseId: DataTypes.INTEGER      
    },
    {
      sequelize,
      modelName: "Animal",
    },
    
   
  );
  return Animal;
};