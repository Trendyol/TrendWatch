const teamService = require('../services/team');

module.exports.create = async (request, reply) => {
    const team = await teamService.create(request.body.name);
    return reply.code(200).send({ team });
};

module.exports.getAll = async (request, reply) => {
    const team = await teamService.getAll();
    return reply.code(200).send({ team });
};

module.exports.delete = async (request, reply) => {
    await teamService.delete(request.params.teamId);
    return reply.code(200);
};
