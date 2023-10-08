const express=require('express');
const app= express();
const port=9001;

app.get('/genres', (req, res) => {
    res.send("All Genres Data in JSON format from Mongo DB");
  })

app.get('/movies', (req, res) => {
    res.send("All movies Data in JSON format from Mongo DB");
})

app.get('/artists', (req, res) => {
    res.send("All Artists Data in JSON format from Mongo DB");
})

app.get('/users', (req, res)=>{
    res.send("All users Data in JSON format from Mongo DB");
})

app.get('/', (req, res) => {
    res.send("Welcome to Movie app");
})

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(port, () => {
    console.log("Server listening on port 9001 ! http://localhost:9001");
});