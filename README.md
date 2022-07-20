# Steps
* For execute the server is used the next command: node archiveName.js in my case i used: node app.js
* Install Express 
```
npm i express
or
npm i express --save
```
### First Hello World in Node
* Import with require express
```
const express = require('express');
```
* Create a instance of express with the next method:
```
const app = express();
```
* The next variable i used for mark the port
```
const port = 8080;
```

* Create the first method or handler for mark a path with a response of server.
```
app.get(path,(request,response)=>{
    response.send('Some any response by part of server')
})
```

* Now create the handler for add to listen port
```
app.listen(port,()=>{
    console.log(`the port when listen is the next ${port}`)
})
```