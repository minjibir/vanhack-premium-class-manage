'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define('Session', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    classId: {
      type: Datatypes.INTEGER,
      isNumeric: true,
      allowNull: false
    },
    teacherId: {
      type: Datatypes.INTEGER,
      isNumeric: true,
      allowNull: false
    },
    date: {
      type: Datatypes.DATEONLY,
      allowNull: false,
      required: true
    },
    start: {
      type: Datatypes.TIME,
      notEmpty: true,
      allowNull: false,
      required: true
    },
    timeZone: {
      type: Datatypes.STRING,
      notEmpty: true,
      allowNull: false,
      required: true,
      len: [3, 5]
    },
    duaration: {
      type: Datatypes.INTEGER,
      allowNull: false,
      required: true
    },
    link: {
      type: Datatypes.STRING(500),
    },
    status: {
      type: Datatypes.STRING,
      notEmpty: true,
      allowNull: false,
      required: true,
      len: [3, 20]
    },
    sessionFile: {
      type: Datatypes.BLOB
    }
  }, {
    underscored: true,
  })
};
