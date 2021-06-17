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
            customer_type: 'Commercial Millwork',
            material_name_area: 'Quartz Q4042 Trail Ridge 2CM',
        },
        {
            customer_type: 'Commercial GC',
            material_name_area: 'AIA-Quartzite Taj Mahal',
        },
        {
            customer_type: 'Residential',
            material_name_area: 'Ubatua',
        },
        {
            customer_type: 'Builder',
            material_name_area: 'Celebrate VA Premiers III - Meridian Grey (for material name Other Areas)',
        },
        {
            customer_type: 'Builder',
            material_name_area: 'Windsor Manor (WM) - Granite - Ubatuba',
        }
    ];
    
    additionalData.map(row => {
        MaterialNameArea.create(row).then(result => {});
    });

    res.status(200).json({
        message: "Added additional material name areas!"
    });
 }
