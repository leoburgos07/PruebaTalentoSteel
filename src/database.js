const mongoose = require('mongoose');


const {HOST , DATABASE} = process.env;
MONGODB_URI = `mongodb://${HOST}/${DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex:true
}).then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));