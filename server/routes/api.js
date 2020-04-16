const express = require('express');
const itineraryController = require('../controllers/itineraryController');
const router = express.Router();

// loads the whole page
router.get('/', itineraryController.getItineraries, (req, res)=>{
    res.status(200).json(res.locals.allCities);
})


module.exports = router;