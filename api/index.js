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
const multer = require('multer');
const upload = multer();


const jwt_secret= 'asdiibasdb12312'
const salt= bcrypt.genSaltSync(10);
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

let current_user = '';

mongoose.connect('mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req,res) =>  {
    const {username, password} = req.body;
    console.log(username, password);
    try{
        const userDoc = await User.create({
            username,  
            password: bcrypt.hashSync(password, salt),});
        res.json(userDoc); 
    } catch(e) {
        alert("Incorrect password!")
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
        current_user  = info.username;
        console.log(current_user);

    });
});

app.post('/logout', (req,res)=> {
    res.cookie('token', '').json('ok');


})
  

app.post('/poem', upload.none(), async(req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwt_secret, {}, async(err, info) => {
        if (err) throw err;
        const {title, content} = req.body;
        const poemDoc = await Poem.create({
            title,
            content,
            author: info.id, 
        });
        res.json(poemDoc);
        console.log(poemDoc);
    });  
}); 

app.put('/poem', async(req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwt_secret, {}, async(err,info) => {
        if (err) throw err;
        const {id, title, content} = req.body;
        console.log(id, title, content);
        const poemDoc = await Poem.findById(id);
        const isAuthor = JSON.stringify(poemDoc) === JSON.stringify(info.id);
        if (!isAuthor) {
            return res.status(400).json('You are not the author');
            throw 'you are not the author';
        }
        await poemDoc.update({title, content});
    res.json(poemDoc);
    })
});

//Endpoint for deleting poems 
// app.post('/deletepoem', async(req, res) => ) {

// }
// app.post('/deletepoem', async(req, res) =>  {
//     const {poem_id} = req.body;
//     try {
//         User.deleteOne(
//             {_id: poemDoc.id}, function(err, res) {
//                 console.log(err);
//             });
//             res.send({status: 'ok', data: 'deleted'});

//     } catch (error) {
//         console.log(error);
//     }
// });


app.get('/poem',async(req,res) => {
    res.json(await Poem.find().populate('author', ['username']));

})

app.get('/poem/:id', async(req, res)=> {
    const {id} = req.params;
    const poemDoc = await Poem.findById(id).populate('author', [current_user]);
    res.json(poemDoc);
})
app.listen(4000);

//y2CI8pkYB3ziK4cb

//mongodb+srv://user1:y2CI8pkYB3ziK4cb@cluster0.2rkjome.mongodb.net/?retryWrites=true&w=majority