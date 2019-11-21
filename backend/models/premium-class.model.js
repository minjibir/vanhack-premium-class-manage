'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define('PremiumClass', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    teacherId: {
      type: Datatypes.INTEGER,
      isNumeric: true,
      allowNull: false,
      required: true
    },
    title: {
      type: Datatypes.STRING,
      allowNull: false,
      required: true,
      len: [5, 120]
    },
    description: {
      type: Datatypes.STRING(1000),
    }
  }, {
    underscored: true,
  })
};
