
const { text } = require("express");
var express = require("express");

var apiServer = express();

// console.log("funzia");
// var a = 5;
// var b = "3";
// console.log(a+b);
var port = 3000;
var host = "localhost"
apiServer.listen(port,host,()=>{
    console.log("server running at http://%s:%d",host,port);
}); //attiva processo web server in alcolto su una specifica porta
apiServer.get("/", (request,response) => {
    console.log("sono in get /");
    response.send("<h1>Home</h1>");
});
apiServer.get("/nome", (request,response) => {
    console.log("sono in get /");
    response.send("<h1>Porretta</h1>");
});
apiServer.get("/mioNome", (request,response) => {
    console.log("sono in get /");
    response.send("<h1>"+request.query.nome+"</h1>");
});
apiServer.get("/somma", (request,response) => {
    console.log("sono in get /");
    response.send("<h1> risultato = "+eval(parseInt(request.query.a)+parseInt(request.query.b))+"</h1>");
});