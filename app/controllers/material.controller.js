/**
 * Copyright by Felipe Mantilla Gomez
 */

const csv = require('csvtojson')
const csvFilePath = 'materialdb.csv';

const db = require('../config/db.config.js');
const Material = db.Material;

exports.create = (req, res) => {
    csv({
        output: "csv"
    })
    .fromFile(csvFilePath)
    .then((rowCSV) => {
        rowCSV.map((row) => {
            if (row[0] != '') {
                let material = {
                    title: row[0],
                    material_type: row[1],
                    material: row[2],
                    conteo: row[3]
                };

                try {
                    Material.create(material).then(result => {
                    });
                } catch (error) {
                    res.status(500).json({
                        message: "Fail!",
                        error: error.message
                    });
                }
            }
        })

    })

    res.status(200).json({
        message: "Upload Successfully materials"
    });
}

exports.getAll = (req, res) => {
 
    Material.findAll({
        order: [
            ['id', 'ASC'],
        ],
    })
        .then(materialInfos => {
            res.status(200).json({
                message: "Get all Materials' Infos Successfully!",
                materials: materialInfos
            });
        })
        .catch(error => {
            // log on console
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}