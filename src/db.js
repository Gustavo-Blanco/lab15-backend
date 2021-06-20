const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab15',{useNewUrlParser:true,useUnifiedTopology: true})
.then((db) => console.log('conectado'))
.catch((error) => console.log(error));

exports.mongoose = mongoose;

