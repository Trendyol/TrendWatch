const userService = require('../services/user');

module.exports.getUsersOfTeam =  async (request, reply) => {
    const users = await userService.getUsersOfTeam(request.params.teamId);
    return reply.code(200).send({ users });
};

module.exports.create = async (request, reply) => {
    const userObject = {
        motto: request.body.motto,
        fullName: request.body.fullName,
        avatar: request.body.avatar,
        phone: request.body.phone
    };
    const user = await userService.create({ userObject });
    return reply.code(200).send({ user });
};

module.exports.delete = async (request, reply) => {
    await userService.delete(request.params.userId);
    return reply.code(200);
};
