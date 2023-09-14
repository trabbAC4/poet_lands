const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const Poem = require('./models/Poem');
const bcrypt = require('bcryptjs');
const app = express();
const jwt= require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const jwt_secret= 'asdiibasdb12312'
const salt= bcrypt.genSaltSync(10);
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

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
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }

});
app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwt_secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req,res)=> {
    res.cookie('token', '').json('ok');
})


app.post('/poem', async(req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwt_secret, {}, async(err, info) => {
        if (err) throw err;
        const {title, content} = req.body;
        const poemDoc = await Poem.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(poemDoc);
    });

    res.json({title, content});       
});

app.get('/poem', async(req,res) => {
    res.json(await Poem.find().populate('author'), ['username']);
});

app.listen(4000);

//y2CI8pkYB3ziK4cb

//mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority