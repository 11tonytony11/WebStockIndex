const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRoutes');

const app = express()
app.use(cors());


// Home Route
app.get('/', function (req, res, next) {
    res.send("<p>Please refer to the API documentation in order to make proper requests</p>");
    next();
  });

// API Routes
app.use("/api", apiRouter);

// starting listening
app.listen(5000);
