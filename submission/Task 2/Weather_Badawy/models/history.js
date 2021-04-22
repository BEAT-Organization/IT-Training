const mongoose = require('mongoose');

const schema = mongoose.Schema;

const historySchema = new schema({

    city : {
        type: String,
        required: true
    },
    feeling : {
        type: String,
        required: true
    }
}, {timestamps:true});

const history = mongoose.model('history' , historySchema);

module.exports = history;