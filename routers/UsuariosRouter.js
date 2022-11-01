const express = require('express');
const UsuariosController = require('../Controllers/UsuariosController');

const UsuariosRouter = express.Router();

UsuariosRouter.get('/',UsuariosController.index); 
UsuariosRouter.get('/create',UsuariosController.create);
UsuariosRouter.post('/store',UsuariosController.store);
UsuariosRouter.get('/:id/edit',UsuariosController.edit);
UsuariosRouter.get('/:id/update',UsuariosController.update);
UsuariosRouter.get('/:id/delete',UsuariosController.delete);

module.exports = UsuariosRouter;