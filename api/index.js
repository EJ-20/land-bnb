const express = require('express'); // for creating apis
const app = express();
const cors = require('cors');
const mongoose = require('mongoose'); //for connecting to MongoDB
const User = require('./models/User.js');
const bcrypt = require('bcryptjs'); //for encrypting passwords before sending to the db

const bCryptSalt = bcrypt.genSaltSync(8);

require('dotenv').config(); // for reading env files

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",

}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {

    res.json('test ok');
});


app.post("/register", async (req,res) => {
    const {name, email, password} = req.body;
    // create a user object to store the user information in the db

    try{
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bCryptSalt),
        })

        res.json(userDoc);

    } catch(e){
        res.status(422).json(e);
    }
    
});


app.post("/login", async (req,res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
        res.json("found")
    } else {
        res.json("not found")
    }

});

app.listen(4000); //starts the server and listens for requests on port 4000