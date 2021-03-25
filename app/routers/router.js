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

module.exports = router;