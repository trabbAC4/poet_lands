const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

//mongoose.connect('mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', (req,res) =>  {
    res.json('test okay');
    console.log('test');
    //const {username, password} = req.body;
});

app.listen(4000);

//y2CI8pkYB3ziK4cb

//mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority