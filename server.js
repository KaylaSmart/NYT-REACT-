const express = require ("express");
const bodyParser = require ("body-parser");
const routes = require( "./routes");
const app  = express ();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//routes, api and view
app.use(routes);

// const mongoURI= "mongodb://127.0.0.1:27017/nytarticles"
// connect to mongo
// mongoose.connect(
//     process.env.MONGOD_URI || "mongodb://localhost/nytarticles"
// );

mongoose.connect( "mongodb://localhost:27017/nytarticles", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to DB!');
    }).catch(err => {
         console.log('ERROR', err.message);     
    });


app.listen(PORT, () =>
console.log( `App ==> API Server now listening on PORT ${PORT}!`)
);