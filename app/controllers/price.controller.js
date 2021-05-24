/**
 * Copyright by Felipe Mantilla Gomez
 */
const csv = require('csvtojson')
const csvFilePath = 'pricedb.csv';

const db = require('../config/db.config.js');
const Price = db.Price;

exports.create = (req, res) => {
    csv({
        output: "csv"
    })
    .fromFile(csvFilePath)
    .then((rowCSV) => {
        rowCSV.map((row) => {
            if (row[0] != '') {
                let price = {
                    builder: row[0],
                    supplier: row[1],
                    color: row[2],
                    conct: row[3],
                    material: row[4],
                    material_name: row[5],
                    level: row[6],
                    price: row[7],
                };

                try {
                    Price.create(price).then(result => {
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
        message: "Upload Successfully prices"
    });
}

exports.getAll = (req, res) => {
 
    Price.findAll({
        order: [
            ['id', 'ASC'],
        ],
    })
        .then(priceInfos => {
            res.status(200).json({
                message: "Get all Prices' Infos Successfully!",
                prices: priceInfos
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
