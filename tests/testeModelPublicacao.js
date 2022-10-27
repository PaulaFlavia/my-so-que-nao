const {Publicacao, sequelize} = require('../database/models');
// Publicacao.findAll({include:'autor'}).then(
//     data => {
//         data.forEach(d => console.log(d.toJSON()));
//         sequelize.close();
//     }
// )
Publicacao.findByPk(33, {
    include: ['autor','curtidores'],
    attributes:['id', 'texto']})
    .then(data => {
        console.log(data.toJSON());
        sequelize.close();
    })