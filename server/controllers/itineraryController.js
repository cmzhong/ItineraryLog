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
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )
}

itineraryController.addCityName = (req, res, next) => {

  const newCity =
    `INSERT INTO city(name) VALUES($1)`
    
  const cityName = [req.body[0]];

  db.query(newCity, cityName)
    .then(() => {
      next();
    })
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )
}

itineraryController.deleteCityName = (req, res, next) => {

  const deleteCity =
    `DELETE FROM city WHERE name = $1`

  const deleteMe = [req.query['0']]

  const deleteCityItems =
    `DELETE FROM items WHERE city_id = $1`

  const deleteMeFirst = [req.query['1']]

  db.query(deleteCityItems, deleteMeFirst)
    .then(() => {
      next();
    })
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )

  db.query(deleteCity, deleteMe)
    .then(() => {
      next();
    })
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )

}

itineraryController.getCityDetails = (req, res, next) => {

  const cityDetails =
    `SELECT items.listitem, city.name city, activities.name activity
  FROM items
  LEFT JOIN city
  ON city_id = city._id
  LEFT JOIN activities 
  ON activities_id = activities._id
  WHERE city_id = $1`

  const cityId = [req.query.cityId]

  db.query(cityDetails, cityId)
    .then(cityDetails => {
      console.log('cityDetails: ', cityDetails);
      next();
    })
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )

}



itineraryController.updateCityDetails = (req, res, next) => {

  const updateDetails =
    `INSERT INTO items(listitem, activities_id, city_id) 
  VALUES ($1, $2, $3)`

  const details = req.body;

  db.query(updateDetails, details)
    .then(details => {
      console.log("details: ", details)
      next();
    })
    .catch(err =>
      next({
        message: { error: 'An error occurred: ' + err }
      })
    )
}

module.exports = itineraryController;