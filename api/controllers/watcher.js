const watcherService = require('../services/watcher');

module.exports.getWatchers = async (request, reply) => {
    const watcher = await watcherService.getWatchers(request.query.teamId);
    return reply.code(200).send({ watcher });
};
