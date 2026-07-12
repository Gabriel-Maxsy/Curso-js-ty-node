const bcryptjs = require('bcryptjs');

'use strict';

// const { password } = require('../../config/database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        nome: 'Maxsy',
        email: 'gabrielmaxsy1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Maxsy2',
        email: 'gabrielmaxsy2@gmail.com',
        password_hash: await bcryptjs.hash('123123', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Maxsy3',
        email: 'gabrielmaxsy3@gmail.com',
        password_hash: await bcryptjs.hash('145123', 8),
        created_at: new Date(),
        updated_at: new Date(),

      }
    ], {});

  },

  async down() { }
};
