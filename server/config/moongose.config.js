const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chistes',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then(()=> console.log("conexion a la base de datos establecida"))
    .catch(err=> console.log("algo salio mal", err));