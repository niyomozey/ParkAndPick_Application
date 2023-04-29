'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [ 
        { name: "admin" },
        {  name: 'operator'},
        { name: 'fakeRole'}
      ],
      {}
    )
  }, 

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Roles", null,{})
  }
};
