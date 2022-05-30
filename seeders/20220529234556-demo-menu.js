'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [{
      id: 1,
      name: 'Pizza muzzarella',
      description: 'Pizza muzarella de la casa',
      price: 700,
      comments: 'Con aceitunas',
      image: 'https://www.clarin.com/img/2018/12/11/la-pizza-de-muzzarella-un___trqq9bkXM_340x340__1.jpg',
      category: 'minutas'
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
