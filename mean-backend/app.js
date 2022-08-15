const http = require('http');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const appRoutes = require('./routes/appRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// connect to database
const config = require('./config/database');
mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);


// start server
app.listen(port, () => {
    console.log('server started on port ' + port);
});