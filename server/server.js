const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/api');

const app = express();
const PORT = 3000; 

// body parser
app.use(express.json());

// router
app.use('/api', routes);

//  static files
app.get('/build/bundle.js', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))
app.get('/', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/client/styles.css', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css')))

// catch all error-handler
app.use('*', (req, res)=> res.status(404).send('Page not found'));

// error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 400,
    message: { error: 'An error occurred: ' + err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;
