const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/', apiController.getDefault);
router.get("/:symbol", apiController.getBySymbol);

module.exports = router;