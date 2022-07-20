const express = require('express');
const router = require('./appRouter');
const app = express();
const port = 8080;

// app.get('/',(req,res)=>{
//     res.send('Im GET method')
// })
// app.post('/',(req,res)=>{
//     res.send('Im POST method')
// })
// app.put('/',(req,res)=>{
//     res.send('Im PUT method')
// })
// app.patch('/',(req,res)=>{
//     res.send('Im PATCH method')
// })
// app.delete('/',(req,res)=>{
//     res.send('Im DELETE method')
// })

app.use(('/home'),express.static(__dirname + '/public'))
app.use(('/'),router)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})