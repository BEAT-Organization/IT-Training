const express = require('express');

const mongoose = require('mongoose');

const History = require('./models/history.js');



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





app.get('/', (req, res) => {


    History.find()
      .then((result) => {
        res.render('index', { history : result });
      })
      .catch((err) => {
          console.log(err);
      })
   

});


app.post('/posthistory', (req, res) => {


    const history = new History(req.body); 
    history.save()
     
     .catch((err) => {
         console.log(err);
     })

 

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

