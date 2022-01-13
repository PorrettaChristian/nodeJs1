
const { text } = require("express");
var express = require("express");
var fs = require("fs");
const { stringify } = require("querystring");

var apiServer = express();

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
apiServer.get("/student", (request,response) => {
    console.log("student id: ", request.query.id);
    //leggere il file
    fs.readFile("studenti.json", (err, data) => {
        if (err) {
            console.log("error: " + err);
        } else {
            var students = JSON.parse(data);
            for (let index = 0; index < students.length; index++) {
                if (students[index].id == request.query.id) {
                    response.send("<h1>"+students[index].surname+"</h1>");
                }
            }
            // response.send(students.find(x => x.id === request.query.id));
        }
    })
});
apiServer.get("/newStudent", (request,response) => {
    //leggere il file
    fs.readFile("studenti.json", (err, data) => {
        var students = JSON.parse(data);
        students.push({"nome" : request.query.nome, "cognome" :  request.query.cognome, "id" :  request.query.id});
        console.log(students);
    })
    
    // data = '{ "nome" : "'+request.query.nome+'","cognome" : "'+request.query.cognome+'","id" : "'+request.query.id+'"},';

    // fs.writeFile("studenti.json", data, (err) => {
    //     if (err)
    //       console.log(err);
    //     else {
    //       console.log("File written successfully\n");
    //     }
    //   });
        // if (err) {
        //     console.log("error: " + err);
        // } else {
        //     var students = JSON.parse(data);
        //     for (let index = 0; index < students.length; index++) {
        //         if (students[index].id == request.query.id) {
        //             response.send("<h1>"+students[index].surname+"</h1>");
        //         }
        //     }
        //     // response.send("<h1>"+students.find(x => x.id === request.query.id)+"</h1>")
        // }
});
