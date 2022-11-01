const express = require('express');
const UsuariosRouter = require('./Routers/UsuariosRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use('/usuarios', UsuariosRouter);

app.listen(3000, ()=>{console.log("Funcionando Servidor está joven Padawan em 3000")})