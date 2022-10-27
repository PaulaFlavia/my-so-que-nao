const {Usuario, sequelize} = require('../database/models');

// Usuario.findAll({include:'publicacoes'}).then(
//     arrayDeUsuarios => {
//         arrayDeUsuarios.forEach(u=> console.log(u.toJSON()));
//         sequelize.close();
//     }
// );


async function levantarUsuarios(){
    let arrayDeUsuarios = await Usuario.findAll({
        includes:'publicacoes'});
    arrayDeUsuarios.forEach(u => console.log(u.toJSON()));
    sequelize.close();
}
levantarUsuarios();