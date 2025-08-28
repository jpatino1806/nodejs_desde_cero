'use strict';

// /** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Jaime',
        lastName: 'Patiño',
        email: 'jaime@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

//module.exports = {
  
  // async up (queryInterface, Sequelize) {
  //   /**
  //    * Add seed commands here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkInsert('People', [{
  //    *   name: 'John Doe',
  //    *   isBetaMember: false
  //    * }], {});
  //   */
  // },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
