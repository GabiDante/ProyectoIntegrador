const express = require('express');
const app = express();
app.use(express.static('Public'));


app.listen(3000,() => console.log(" Servidor corriendo puerto 3000 "))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});