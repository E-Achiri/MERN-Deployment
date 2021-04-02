require('dotenv').config();
const express = require('express'),

    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    server = app.listen(port,() => console.log(`listening of port ${port}`));

app.use(cors(),express.json(),express.urlencoded({extended:true}));

require('./config/database.config');
require('./routes/project.routes')(app);