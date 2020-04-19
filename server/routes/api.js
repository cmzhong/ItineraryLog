const express = require('express');
const itineraryController = require('../controllers/itineraryController');
const router = express.Router();

// loads the whole page
router.get('/', itineraryController.getCityNames, (req, res)=>{
    res.status(200).json(res.locals.cityNames);
})

router.post('/', itineraryController.addCityName, (req, res)=>{
    res.sendStatus(200);
})

router.delete('/', itineraryController.deleteCityName, (req, res)=>{
    res.sendStatus(200);
})

router.get('/city', itineraryController.getCityDetails, (req, res)=>{
    res.status(200).json(res.locals.cityDetails);
})

router.post('/city', itineraryController.updateCityDetails, (req, res)=>{
    res.sendStatus(200);
})

module.exports = router;