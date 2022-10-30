const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        minlength: [10, "Broma muy corta"]
    }, 
    punchline: {
        type:String,
        minlength: [3, "remate muy corto"]
    
    }
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;