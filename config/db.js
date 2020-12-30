var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// mongoose
//     .connect('mongodb://127.0.0.1/dataBase', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("connected to the database")
//     })
//     .catch(err => {
//         console.log("error", err);
//         process.exit();
//     })
