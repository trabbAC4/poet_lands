const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req,res) =>  {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username,  password});
        res.json(userDoc); 
    } catch(e) {
        res.status(400).json(e);
    }
});

app.listen(4000);

//y2CI8pkYB3ziK4cb

//mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority