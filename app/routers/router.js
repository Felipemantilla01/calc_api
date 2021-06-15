/**
 * Copyright by Felipe Mantilla Gomez
 */

let express = require('express');
let router = express.Router();
 
// const customers = require('../controllers/controller.js');

const comparisons = require('../controllers/comparison.controller.js');
const materials = require('../controllers/material.controller.js');
const prices = require('../controllers/price.controller.js');
const material_name_area = require('../controllers/material_name_area.controller.js');

router.get('/api/comparisons/create', comparisons.create);
router.get('/api/comparisons/all', comparisons.retrieveAllComparisons);
router.put('/api/comparisons/update/:id', comparisons.update);
router.post('/api/comparisons/addnew', comparisons.addNew);
router.delete('/api/comparisons/delete/:id', comparisons.delete);

router.get('/api/materials/create', materials.create);
router.get('/api/materials/all', materials.getAll);

router.get('/api/prices/create', prices.create);
router.get('/api/prices/all', prices.getAll);

router.get('/api/material_name_ares/create', material_name_area.create);
router.get('/api/material_name_ares/all', material_name_area.getAll);
router.get('/api/material_name_ares/add_additional', material_name_area.addAdditional);

module.exports = router;