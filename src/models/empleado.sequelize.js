'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empleado.init({
    idEmpleado: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true},
    nombre: {
      type:DataTypes.STRING,
      allowNull:false},
    apellidos: {
      type:DataTypes.STRING,
      allowNull:false},
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Empleado',
    tableName: 'empleados',
    underscore: true,
    timestamps: false
  });
  return Empleado;
};