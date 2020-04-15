const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/api', apiRouter);

app.get('/', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/build/bundle.js', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))

// error handler for routes into the known
app.use((req, res)=> res.sendStatus(404));

// express catch-all error handler
app.use((err, req, res, next)=> {
    let errorMessage = `you've found the catch-all error handler`
    if (err) errorMessage = err;

    console.log(err);
    return res.status(400).send(err);
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;