/**
 * Copyright by Felipe Mantilla Gomez
 */

 module.exports = (sequelize, Sequelize) => {
    const MaterialNameArea = sequelize.define('material_name_areas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_type: {
            type: Sequelize.STRING
        },
        material_name_area: {
            type: Sequelize.STRING
        }
    });

    return MaterialNameArea;
}