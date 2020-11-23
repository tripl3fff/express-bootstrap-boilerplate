const express = require('express'),
  router = express.Router();

// * Import Controllers
const BaseController = require('../controllers/BaseController');

router.get('/', BaseController.index);

module.exports = router;
