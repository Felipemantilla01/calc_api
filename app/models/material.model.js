/**
 * Copyright by Felipe Mantilla Gomez
 */

 module.exports = (sequelize, Sequelize) => {
    const Material = sequelize.define('materials', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        material_type: {
            type: Sequelize.STRING
        },
        material: {
            type: Sequelize.STRING
        },
        conteo: {
            type: Sequelize.STRING
        }
    });

    return Material;
}