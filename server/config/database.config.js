require('dotenv').config();
const mongoose = require('mongoose'),
    db = "projectmanager_db";
    // db = process.env.DB_URI;

mongoose.connect(`mongodb://localhost/${db}`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(()=> console.log("You are now in the mainframe..."))
    .catch(err => console.log(`Meltdown Meltdown Meltdown`, err))