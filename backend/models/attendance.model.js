'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define('Attendance', {
    sessionId: {
      type: Datatypes.INTEGER,
      allowNull: false,
      required: true
    },
    studentId: {
      type: Datatypes.INTEGER,
      isNumeric: true,
      allowNull: false,
      required: true
    },
    mode: {
      type: Datatypes.STRING,
      allowNull: false,
      required: true,
      len: [2, 10]
    }
  }, {
    underscored: true,
    paranoid: true
  })
};
