/**
 * Created by Cookie on 06-03-2016.
 */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//add your content here

app.listen(3000, function(){
    console.log("Server started, listening on: " + 3000)
})

app.use("/api/calculator/:operation/:n1/:n2", function(req, res, next){
    req.calculatorRequest = {
        operation: req.params.operation,
        n1: number(req.params.n1),
        n2: number(req.params.n2)
    };

    next();
})
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/calculator/*", function(req, res){
    var result = getResult(res.calculator.operation,
        res.calculator.n1,
        res.calculator.n2);
    res.send("Result is: "+result);
})

//var calculatorRequest = {
//    operation: req.params.operation,
//    n1: number(req.params.n1),
//    n2: number(req.params.n2)
//}
