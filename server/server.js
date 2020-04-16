const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/api');

const app = express();
const PORT = 3000; 

app.use(express.json());

app.use('/api', routes);

app.get('/build/bundle.js', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))
app.get('/', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/client/styles.css', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css')))

// catch-call error handler for routes into the unknown
app.use('/', (req, res)=> res.sendStatus(404));

// error handler
app.use('/', (err, req, res, next)=> {
    let errorMessage = `you've found the error handler`;
    if (err) errorMessage = err;

    console.log(err);
    return res.status(400).send(err);
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;
