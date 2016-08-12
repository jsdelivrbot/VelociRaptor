var express = require('express');
var app = express();
var velociLogic = require('./velociLogic');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('pad');
});

app.get('/createVelocity', function (req, res) {
    var name = req.query.contentName;
    var html = req.query.contentHTML;
    velociLogic.buildVelocity(name, html);
});

// listen on port 8000 (for localhost) or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);

/*
//create velocity file
fs.writeFile("test.vm", "#set( $name = '\"<b>Velocity</b>\"' ) Hello $name!  Welcome to Velocity!", function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

//print generated velocity File
velocity.startServer(8000);
velocity.render("test.vm", {}, "", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
    velocity.stopServer();
});

//read generated file and
//print id and value
fs.readFile('test.vm', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    var asts = velocityjs.parse(data);
    console.log(asts[0].equal[0].id);
    console.log(asts[0].equal[1].value);
});
*/
