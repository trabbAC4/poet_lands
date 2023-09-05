const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt= require('jsonwebtoken');

const jwt_secret= 'asdiibasdb12312'
const salt= bcrypt.genSaltSync(10);
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req,res) =>  {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username,  
            password: bcrypt.hashSync(password, salt),});
        res.json(userDoc); 
    } catch(e) {
        res.status(400).json(e);
    }
});


app.post('/login', async (req,res)=> {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({username, id:userDoc._id}, jwt_secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }

})
app.listen(4000);

//y2CI8pkYB3ziK4cb

//mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority