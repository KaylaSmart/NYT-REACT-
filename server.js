const express = require ("express");
const bodyParser = require ( " body-parser");
const routes = require( "./routes");
const app  = express ();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//routes, api and view
app.use(routes);


// connect to mongo
mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/nytarticles"
);

app.listen(PORT, () =>
console.log( 'App ==> API Server now listening on PORT ${PORT}!')
);