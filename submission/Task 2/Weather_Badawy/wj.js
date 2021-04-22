const express = require('express');

const mongoose = require('mongoose');

const History = require('./models/history.js');

//express app [express is framework for nodejs]

const app = express();

//register view engine
app.set('view engine', 'ejs');
app.use(express.json());

//connect to mongodb

const dbURI = 'mongodb+srv://badawy780:badawy780@cluster0.kpewj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//static files 

app.use(express.static('views'));
app.use(express.urlencoded({ extended : true }));

//listen to port 3000

//app.listen(3000);

app.get('/', (req, res) => {

    //res.send('<h1>Hello World</h1>');
    History.find()
      .then((result) => {
        res.render('index', { history : result });
      })
      .catch((err) => {
          console.log(err);
      })
    // const history = new History({

    //     city : 'aswan',

    //     feeling : 'cool'
    // })
    // history.save()
    // .then((result) => {
    //     res.send(result);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
   // res.sendFile('./Task4/index.html', {root : __dirname});//express by defult read the path from the core of the computer so to make it read from this file type root..
   //  res.sendFile(__dirname + '/views/index.ejs');
    //res.render('index', {history});

    

});

// app.get('/history', (req, res) => {

//     const history = new History({

//         city : req.city,

//         feeling : req.feeling
//     })
//     history.save()
//      .then((result) => {
//          res.send(result);
//      })
//      .catch((err) => {
//          console.log(err);
//      })
// });

// app.get('/all-history', (req, res) => {
//     History.find()
//      .then((result) => {
//          res.send(result);
//      })
//      .catch((err) => {
//          console.log(err);
//      })
// });

app.post('/posthistory', (req, res) => {


    const history = new History(req.body); //.body to get the entire data in the request

    history.save()
      //.then((result) => {
          //res.redirect('/')
      //})
     .catch((err) => {
         console.log(err);
     })

  //  console.log(req.body);

});

app.get('/gethistory', (req, res) => {

    History.find()
      .then((result) => {
        res.render({ history : result });
      })
      .catch((err) => {
          console.log(err);
      })
})

