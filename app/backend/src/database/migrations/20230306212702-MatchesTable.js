'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      homeTeamId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        field: 'teams_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeamId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        field: 'teams_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });

  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
