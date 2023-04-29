const  {Model} = require("sequelize") 
module.exports = function (sequelize, DataTypes){
  class Slaughterhouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  }}
  Slaughterhouse.init({
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    address: DataTypes.STRING,
    TIN: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Slaughterhouse',
    timestamps: false,
  });
  return Slaughterhouse;
};
