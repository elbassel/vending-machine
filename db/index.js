const mongoose = require('mongoose');
const sampleData = require('./sample-data')

mongoose.connect('mongodb://database:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

sampleData();
