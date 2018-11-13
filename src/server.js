const express = require("express");
const morgan = require('morgan');
const app = express();

const moviesRouter  = require('./api/movies');

app.use(express.json());
app.use('/movies', moviesRouter);

app.use(morgan('combined'));

app.listen(3000);



