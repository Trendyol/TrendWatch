const watcherService = require('../services/watcher');

module.exports.getWatchers = async (request, reply) => {
    const watcher = await watcherService.getWatchers(request.query.teamId);
    return reply.code(200).send({ watcher: {user: {name: 'merro', motto: 'I am merro', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '55654345099'}, day: '2019-06-01'} });
};
