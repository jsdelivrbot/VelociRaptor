var velocity = require("velocity.java");
var fs = require('fs');
var velocityjs = require("velocityjs");

exports.buildVelocity = function (contentName, contentHTML) {
    //create velocity file
    fs.writeFile("velocityFiles/" + contentName + ".vm", "#set( $" + contentName + " = '" + contentHTML + "' )", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    //print generated velocity file
    /*
    velocity.startServer(8000);
    velocity.render("test.vm", {}, "", function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data.toString());
        velocity.stopServer();
    });
    */

    //read generated file and
    //print id and value
    /*
    fs.readFile('test.vm', "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
        var asts = velocityjs.parse(data);
        console.log(asts[0].equal[0].id);
        console.log(asts[0].equal[1].value);
    });
    */
};