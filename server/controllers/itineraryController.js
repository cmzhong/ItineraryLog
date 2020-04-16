const db = require('../models/newItinerary.js');

const itineraryController = {};

itineraryController.getItineraries = (req, res, next) => {
    const allCities = 
    `SELECT city.*,  activities.name activities, items.listitem listItem 
    FROM city 
    LEFT JOIN activities 
    ON city._id = activities.city_id
    LEFT JOIN items
    ON activities._id = items.activities_id`

    db.query(allCities)
    .then(citiesData => {
      res.locals.allCities = citiesData.rows; 
      next();
    })
    .catch(err => next('error in getItineraries middleware'))
}

itineraryController.getCity = (req, res, next) => {
  const city = 'sql query goes here'
  const cityId = [ req.query.id ]

  db.query(city, cityId)
  .then(foundCity => {
    next();
    })
    .catch(err => next('error in getCity middleware'))
}


itineraryController.deleteItinerary = (req, res, next) => {
    
}

module.exports = itineraryController;