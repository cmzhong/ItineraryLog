const db = require('../models/newItinerary.js');

const itineraryController = {};

itineraryController.getCityNames = (req, res, next) => {
    const cityNames = 
    `SELECT _id, name FROM city`

    db.query(cityNames)
    .then(citiesData => {
      res.locals.cityNames = citiesData.rows; 
      next();
    })
    .catch(err => next('error in getItineraries middleware'))
}

itineraryController.addCityName = (req, res, next) =>{
    const newCity = 
    `INSERT INTO city(name) VALUES($1)`
    const cityName = [ req.body[0] ];

    db.query(newCity, cityName)
    .then(data=>{
      res.locals.new = data;
      next();
    })
    .catch(err=>next('error in addCityName middleware'))

}

itineraryController.deleteCityName = (req, res, next) =>{
    const deleteCity = 
    `DELETE FROM city WHERE name = $1`
    const deleteMe = [ req.query['0'] ]
    console.log(deleteMe)

    db.query(deleteCity, deleteMe)
    .then(data=>{
        console.log(data)
        res.locals.deleted = data;
        next();
    })
    .catch(err=>next('error in deleteCityName middleware'))


}


module.exports = itineraryController;