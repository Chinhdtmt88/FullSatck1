
const dbConfig = require("../config/db.config");
const mongoosePaginate = require('mongoose-paginate-v2');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db ={};
db.mongoose = mongoose;

db.tutorials = require("./tutorial.model")(mongoose,mongoosePaginate);

module.exports = db;