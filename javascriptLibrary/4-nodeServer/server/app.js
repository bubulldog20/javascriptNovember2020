const express = require('express');
const app = express();
const sequelize = require("./db");
const journal = require("./controllers/journalcontroller");
const user = require("./controllers/usercontroller");
// app.use('/test', function(req, res){
//     res.send("This is a message from the test endpoint on the server!");
// })

// app.use('/jeremy', function(req, res){
//     res.send('My name is Jeremy and I am six feet tall');
// });

//Have endpoint of journal/practice
//send a response from that endpoint (This is a practice route)

sequelize.sync();

app.use(express.json());
app.use('/journal', journal);

app.use('/user', user);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})


//npm run dev