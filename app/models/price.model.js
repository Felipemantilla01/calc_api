/**
 * Copyright by Felipe Mantilla Gomez
 */

 module.exports = (sequelize, Sequelize) => {
    const Price = sequelize.define('prices', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        builder: {
            type: Sequelize.STRING
        },
        supplier: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        conct: {
            type: Sequelize.STRING
        },
        material: {
            type: Sequelize.STRING
        },
        material_name: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        }
    });

    return Price;
}