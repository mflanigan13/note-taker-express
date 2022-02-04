// Welcome to my Note-Taker, based on Express.js

// importing modules
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// sets up the Express App
const app = express()
const PORT = process.env.PORT || 3000;

// linking to my assets
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use('/api', apiRoutes)

app.use('/', htmlRoutes)

// sets up the server
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
})