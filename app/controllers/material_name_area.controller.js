/**
 * Copyright by Felipe Mantilla Gomez
 */

 const csv = require('csvtojson')
 const csvFilePath = 'material_name_area_db.csv';
 
 const db = require('../config/db.config.js');
 const MaterialNameArea = db.MaterialNameArea;
 
 exports.create = (req, res) => {
    csv({
        output: "csv"
    })
    .fromFile(csvFilePath)
    .then((rowCSV) => {
        rowCSV.map((row) => {
            if (row[0] != '') {
                let material_name_area = {
                    customer_type: row[0],
                    material_name_area: row[1],
                };

                try {
                    MaterialNameArea.create(material_name_area).then(result => {
                    });
                } catch (error) {
                    res.status(500).json({
                        message: "Fail!",
                        error: error.message
                    });
                }
            }
        })

    });

    res.status(200).json({
        message: "Upload Successfully materials"
    });
 }
 
 exports.getAll = (req, res) => {
  
    MaterialNameArea.findAll({
    order: [
        ['id', 'ASC'],
    ],
    })
        .then(materialInfos => {
            res.status(200).json({
                message: "Get all Material Name Areas' Infos Successfully!",
                material_name_areas: materialInfos
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

 exports.addAdditional = (req, res) => {
    let additionalData = [
        {
            customer_type: 'Builder',
            material_name_area: 'MSI Quartz Soapstone Metropolis',
        }
    ];
    
    additionalData.map(row => {
        MaterialNameArea.create(row).then(result => {});
    });

    res.status(200).json({
        message: "Added additional material name areas!"
    });
 }
