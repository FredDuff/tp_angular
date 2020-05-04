const db = require('../config/database');
const Sequelize = require('sequelize');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  pwd: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  /*timestamps: false,*/
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'user'
});

module.exports = User;