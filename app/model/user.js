// app/model/files.js
'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const Files = app.model.define('files', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: STRING,
      allowNull: false,
    },
    filepath: {
      type: STRING,
      allowNull: false,
    },
    created_at: {
      type: DATE,
      defaultValue: app.Sequelize.NOW,
    },
  });

  return Files;
};
