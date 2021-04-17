const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController.js');


// define the home page route
router.get('/history',journalController.getHistory);
router.post('/addRequest',journalController.addRequest);
module.exports = router