'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define('Student', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Datatypes.STRING,
      notEmpty: true,
      isAlphanumeric: true,
      allowNull: false,
      required: true,
      len: [2, 50]
    },
    lastName: {
      type: Datatypes.STRING,
      notEmpty: true,
      allowNull: false,
      required: true,
      len: [2, 50]
    },
    membership: {
      type: Datatypes.STRING,
      notEmpty: true,
      allowNull: false,
      required: true,
      len: [5, 50]
    },
    email: {
      type: Datatypes.STRING,
      isEmail: true,
      unique: true,
      allowNull: false,
      required: true,
      len: [5, 255]
    },
    password: {
      type: Datatypes.STRING(500),
      allowNull: false,
      notEmpty: true,
      required: true,
      len: [6, 50]
    },
  }, {
    underscored: true,
  })
};
