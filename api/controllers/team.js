const { teamService } = require('../db');


module.exports.create = async (request, reply) => {
    await teamService.addNewTeam(request.body.name);
    return reply.code(200).send({ team: {name: 'mobil web'} });
};

module.exports.getAll = async (request, reply) => {
    const teams = await teamService.getAllTeams();
    return reply.code(200).send({ teams });
};

module.exports.delete = async (request, reply) => {
    await teamService.deleteTeam(request.params.teamId);
    return reply.code(200);
};
