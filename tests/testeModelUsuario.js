const {Usuario, sequelize} = require('../database/models');

async function levantarUsuarios(){

    let usuario = await Usuario.findByPk(5, {include:'amigos', attributes: ['id','nome','email']});
    console.log(usuario.toJSON());
    console.log(usuario.amigos[0].amizades.toJSON());
    sequelize.close();
}
levantarUsuarios();

// async function levantarUsuarios(){

// //     let arrayDeUsuarios = await Usuario.findAll({include:'publicacoes'});
// //     arrayDeUsuarios.forEach(u => console.log(u.toJSON()));
// //     sequelize.close();
// // }



// Usuario.findAll({include:'publicacoes'}).then(
//     arrayDeUsuarios => {
//         arrayDeUsuarios.forEach(u=> console.log(u.toJSON()));
//         sequelize.close();
//     }
// );

