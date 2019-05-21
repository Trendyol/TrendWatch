const teamService = require('../services/team');

module.exports.create = async (request, reply) => {
    const team = await teamService.create(request.body.name);
    return reply.code(200).send({ team: {name: 'mobil web'} });
};

module.exports.getAll = async (request, reply) => {
    const teams = await teamService.getAll();
    return reply.code(200).send({ teams: [
            {name: 'Mobil Web'},
            {name: 'Web'},
            {name: 'Browsing'},
            {name: 'Checkout'},
            {name: 'System'},
        ]
    });
};

module.exports.delete = async (request, reply) => {
    await teamService.delete(request.params.teamId);
    return reply.code(200);
};
