/**
 * Copyright by Felipe Mantilla Gomez
 */
const csv = require('csvtojson')
const csvFilePath = 'backup.csv';
const fs = require('fs');


const db = require('../config/db.config.js');
const Comparison = db.Comparison;

exports.create = (req, res) => {
    let comparisons = [];


    csv({
            // noheader:false,
            output: "csv"
        })
        .fromFile(csvFilePath)
        .then((rowCSV) => {
            rowCSV.map((row) => {
                if (row[0] != '') {
                    let comparison = {
                        date: row[0],
                        job_number: row[1],
                        job_status: row[2],
                        customer_type: row[3],
                        customer_builder_name: row[4],
                        customer_job_area: row[5],
                        material_name: row[6],
                        area_1: row[7],
                        material_name_area_1: row[8],
                        material_1: row[9],
                        brand_1: row[10],
                        level_1: row[11],
                        price_1: row[12],
                        area_2: row[13],
                        material_name_area_2: row[14],
                        material_2: row[15],
                        brand_2: row[16],
                        level_2: row[17],
                        price_2: row[18],
                        area_other: row[19],
                        material_name_area_other: row[20],
                        material_other: row[21],
                        brand_other: row[22],
                        level_other: row[23],
                        price_other: row[24],
                        phases: row[25],
                        material_name_phases: row[26],
                        material_phases: row[27],
                        brand_phases: row[28],
                        level_phases: row[29],
                        price_phases: row[30],
                        area_other_2: row[31],
                        material_name_area_other_2: row[32],
                        material_other_2: row[33],
                        brand_other_2: row[34],
                        level_other_2: row[35],
                        price_other_2: row[36],
                        phases_2: row[37],
                        material_name_phases_2: row[38],
                        material_phases_2: row[39],
                        brand_phases_2: row[40],
                        level_phases_2: row[41],
                        price_phases_2: row[42],
                        state: row[43],
                        oute_of_state: row[44],
                        complete_job_picture: row[45],
                        installer: row[46],
                        mw_cad_sqft_kitchen: row[47],
                        calculated_cad_sqft_kitchen: row[48],
                        mw_sold_sqft_kitchen: row[49],
                        calculated_sold_sqft_kitchen: row[50],
                        mw_cad_sqft_vanity: row[51],
                        calculated_cad_sqft_vanity: row[52],
                        mw_sold_sqft_vanity: row[53],
                        calculated_sold_sqft_vanity: row[54],
                        mw_cad_sqft_laundry: row[55],
                        calculated_cad_sqft_laundry: row[56],
                        mw_sold_sqft_laundry: row[57],
                        calculated_sold_sqft_laundry: row[58],
                        mw_cad_sqft_butlers: row[59],
                        calculated_cad_sqft_butlers: row[60],
                        mw_sold_sqft_butlers: row[61],
                        calculated_sold_sqft_butlers: row[62],
                        mw_cad_sqft_ppc: row[63],
                        calculated_cad_sqft_ppc: row[64],
                        mw_sold_sqft_ppc: row[65],
                        calculated_sold_sqft_ppc: row[66],
                        mw_cad_sqft_drop_zone: row[67],
                        calculated_cad_sqft_drop_zone: row[68],
                        mw_sold_sqft_drop_zone: row[69],
                        calculated_sold_sqft_drop_zone: row[70],
                        mw_cad_sqft_btwb: row[71],
                        calculated_cad_sqft_btwb: row[72],
                        mw_sold_sqft_btwb: row[73],
                        calculated_sold_sqft_btwb: row[74],
                        mw_cad_sqft_fhbs: row[75],
                        calculated_cad_sqft_fhbs: row[76],
                        mw_sold_sqft_fhbs: row[77],
                        calculated_sold_sqft_fhbs: row[78],
                        mw_cad_sqft_copy_print: row[79],
                        calculated_cad_sqft_copy_print: row[80],
                        mw_sold_sqft_copy_print: row[81],
                        calculated_sold_sqft_copy_print: row[82],
                        mw_cad_sqft_pantry_coffee: row[83],
                        calculated_cad_sqft_pantry_coffee: row[84],
                        mw_sold_sqft_pantry_coffee: row[85],
                        calculated_sold_sqft_pantry_coffee: row[86],
                        mw_cad_sqft_phase_19a: row[87],
                        calculated_cad_sqft_phase_19a: row[88],
                        mw_sold_sqft_phase_19a: row[89],
                        calculated_sold_sqft_phase_19a: row[90],
                        mw_cad_sqft_phase_19b: row[91],
                        calculated_cad_sqft_phase_19b: row[92],
                        mw_sold_sqft_phase_19b: row[93],
                        calculated_sold_sqft_phase_19b: row[94],
                        mw_cad_sqft_remake: row[95],
                        calculated_cad_sqft_remake: row[96],
                        mw_sold_sqft_remake: row[97],
                        calculated_sold_sqft_remake: row[98],
                        mw_cad_sqft_rework: row[99],
                        calculated_cad_sqft_rework: row[100],
                        mw_sold_sqft_rework: row[101],
                        calculated_sold_sqft_rework: row[102],
                        mw_cad_sqft_valet: row[103],
                        calculated_cad_sqft_valet: row[104],
                        mw_sold_sqft_valet: row[105],
                        calculated_sold_sqft_valet: row[106],
                        mw_cad_sqft_morning_room: row[107],
                        calculated_cad_sqft_morning_room: row[108],
                        mw_sold_sqft_morning_room: row[109],
                        calculated_sold_sqft_morning_room: row[110],
                        mw_cad_sqft_wine_bar: row[111],
                        calculated_cad_sqft_wine_bar: row[112],
                        mw_sold_sqft_wine_bar: row[113],
                        calculated_sold_sqft_wine_bar: row[114],
                        mw_cad_sqft_pocket_office: row[115],
                        calculated_cad_sqft_pocket_office: row[116],
                        mw_sold_sqft_pocket_office: row[117],
                        calculated_sold_sqft_pocket_office: row[118],
                        notes: row[119],
                        legend: row[120]
                    };
                    // comparisons.push(comparison)

                    try {
                        Comparison.create(comparison).then(result => {
                            // console.log(result)
                            // send uploading message to client
                            // res.status(200).json({
                            //     message: "Upload Successfully a Comparison with id = " + result.id,
                            //     comparison: result,
                            // });
                        });
                    } catch (error) {
                        res.status(500).json({
                            message: "Fail!",
                            error: error.message
                        });
                    }
                }
            })
            // cdata = JSON.stringify(comparisons);
            // fs.writeFileSync('student-2.json', cdata);

        })


    res.status(200).json({
        message: "Upload Successfully a Comparison with id = " //+ result.id,
        // comparison: result,
    });


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