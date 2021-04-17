const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose');
const journalRouter = require('./routes/journalRouter.js')
require('dotenv').config();

const app = new express();
const { PORT, DB} = process.env;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use('/journal',journalRouter);
app.get('/',(req,res)=>{
    res.send("This is a server for the journal weather app")
})


const serverSpin = async () =>{
    try{
        await mongoose.connect(DB,{ useNewUrlParser: "true", useUnifiedTopology: true });
        app.listen(PORT,listening);
    }catch (e){
        console.log("Error on Spinning the server\n",e);
    }
}

function listening(){
    console.log(`Listening on port ${PORT}... `);
}

serverSpin();
