'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bills', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            billCode: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            address: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            phone: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            code: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            qty: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            sale: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            total: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            datePayment: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            payment: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            status: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            imageBill: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            cloudinary_id: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Bills');
    },
};
