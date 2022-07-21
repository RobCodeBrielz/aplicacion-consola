// ===WITHOUT EXPRESS===

// const http = require('http');
// const port = 8080;

// Req, is petition of client
// Res, is response of server
// http.createServer((req,res)=>{
    // console.log(req);
    // But the File CSV has to have (tiene que tener) a code porcion, because if not, it is not recognized by the browser.
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    // The writeHead methos is used for manage the status of server, so return the response for part of server.
    // res.writeHead(200,{
        //'Content-type':'text/plain' //<-- Is for indicate the type of file. In this case if we put to text/plain, the server return a file of text.
        // 'Content-type':'text/csv' //<-- Is a file separated by commas
        // 'Content-type':'application/json' //<-- return a JSON file in the response
    // })
//    res.write('Hola Mundo');
//    res.end();
// }).listen(port)


// ===WITH EXPRESS===

// import express
const express = require('express');
require('dotenv').config();

// create the instance of express in a constant
const app = express();
// create the variable of manage the port of server
const port = process.env.PORT; //<-- variable of environment

// === USING HBS ===
// todo: require('hbs')
app.set('view engine','hbs')


// Execute the middleware of express: manage static content
app.use(express.static('public')) //if the path does not match with the folder name, will search (buscará) through (entre) the controllers created. Remember that folders have higher priority than controllers

// Method or handle by manage the paths of server...
// app.get('/',(req,res)=>{
//     res.send('Hola Mundo')
// })
app.get('/',(req,res)=>{ //<-- includes subPaths
    res.render('home');
})
app.get('/generic',(req,res)=>{ //<-- includes subPaths
    res.sendFile(__dirname + '/public/generic.html') // load the page
})
app.get('/elements',(req,res)=>{ //<-- includes subPaths
    res.sendFile(__dirname + '/public/elements.html') // load the page
})
app.get('*',(req,res)=>{ //<-- includes subPaths
    res.sendFile(__dirname + '/public/404.html') // load the page
})

// listen is a method that is used by realice of listen of port.
app.listen(port,()=>{
    console.log(`The server listen in port ${port}`);
})




