/**
 * Copyright by Felipe Mantilla Gomez
 */

 let express = require('express');
 let router = express.Router();
  
 // const customers = require('../controllers/controller.js');
 
 const comparisons = require('../controllers/comparison.controller.js');
 
 // router.post('/api/customers/create', customers.create);
 // router.get('/api/customers/all', customers.retrieveAllCustomers);
 // router.get('/api/customers/onebyid/:id', customers.getCustomerById);
 // router.get('/api/customers/filteringbyage', customers.filteringByAge);
 // router.get('/api/customers/pagination', customers.pagination);
 // router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
 // router.put('/api/customers/update/:id', customers.updateById);
 // router.delete('/api/customers/delete/:id', customers.deleteById);
 
 router.get('/api/comparisons/create', comparisons.create);
 router.get('/api/comparisons/all', comparisons.retrieveAllComparisons);
 router.put('/api/comparisons/update/:id', comparisons.update);
 router.post('/api/comparisons/addnew', comparisons.addNew);
 
 module.exports = router;exports.retrieveAllComparisons = (req, res) => {
    // find all Comparison information from 
    Comparison.findAll({
        order: [
            ['id', 'ASC'],
        ],
    })
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

exports.update = (req, res) => {
    const id = req.params.id;

    Comparison.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if(num == 1) res.send({message: 'Updated successfully.'});
            else res.send({message: 'Cannot update'});
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating with id = ' + id
            });
        });
}

exports.addNew = (req, res) => {
    try {
        const comparison = {};
        Comparison.create(comparison).then(result => {
            res.status(200).json({
                data: result,
                message: "New Row added!",
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}