const Journal = require('../models/Journal.js')
exports.getHistory = async (req,res) =>{
    try{
        const history = await Journal.find();
        res.status(200);
        res.json(history);
        console.log(history)
    }catch(e){
        res.status(404);
        console.log("Data not found",e);
    }
}

exports.addRequest = async (req,res) =>{
    try{
        const requestData = pick(req.body,"date","zip","feeling","temp","lat","lon");
        const newJournalRequest = await Journal.create(requestData);
        res.status(201);
        res.json(newJournalRequest);
    }catch(e){
        res.status(400);
        console.log("Data format not matched",e);
    }
}
function pick(o, ...props) {
    return Object.assign({}, ...props.map(prop => ({[prop]: o[prop]})));
}