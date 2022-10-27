const {Usuario, sequelize, sequelize} = require('../database/models');


async function levantarUsuarios(){

    let arrayDeUsuarios = await Usuario.findAll({include:'publicacoes'});
    arrayDeUsuarios.forEach(u => console.log(u.toJSON()));
    sequelize.close();
}

levantarUsuarios();

// Usuario.findAll({include:'publicacoes'}).then(
//     arrayDeUsuarios => {
//         arrayDeUsuarios.forEach(u=> console.log(u.toJSON()));
//         sequelize.close();
//     }
// );

