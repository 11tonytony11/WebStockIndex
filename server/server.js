const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRoutes');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// DB connection
const dbURI = "mongodb+srv://client:CENSORED@cluster0.3vmuf.mongodb.net/stockIndex?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));


// Home Route
app.get('/', function (req, res, next) {
    res.send("<p>Please refer to the API documentation in order to make proper requests</p>");
    next();
  });

// API Routes
app.use("/api", apiRouter);

// starting listening
app.listen(5000);
