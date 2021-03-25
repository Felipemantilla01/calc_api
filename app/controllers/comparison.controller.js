/**
 * Copyright by Felipe Mantilla Gomez
 */

const db = require('../config/db.config.js');
const Comparison = db.Comparison;

exports.create = (req, res) => {
    let comparison = {};

    try {
        // Building Customer object from upoading request's body
        comparison.job_number = '123';
       
        // Save to MySQL database
        Comparison.create(comparison).then(result => {
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a Comparison with id = " + result.id,
                comparison: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllComparisons = (req, res) => {
    // find all Comparison information from 
    Comparison.findAll()
        .then(comparisonInfos => {
            res.status(200).json({
                message: "Get all Comparisons' Infos Successfully!",
                comparisons: comparisonInfos
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