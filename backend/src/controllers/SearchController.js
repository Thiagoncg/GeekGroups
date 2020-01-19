const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');

const devDistanci = 50000;


module.exports = {

    async index(request, response) {
        //Buscar todos os devs num raio de 50Km
        //Filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,

            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],

                    },
                    $maxDistance: devDistanci,

                },

            },

        });


        return response.json({ devs });

    }
}