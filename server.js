const express = require('express');
const app = express();
const port = 8080;

require("./server/config/moongose.config");

app.use( express.json(), express.urlencoded({extended:true}));

require("./server/routes/jokes.routes")(app);

app.listen(port, () => console.log("Server running"));

