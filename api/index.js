// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const teamController = require('./controllers/team');
const userController = require('./controllers/user');

fastify.post('/teams', teamController.create);

fastify.get('/teams', teamController.getAll);

fastify.delete('/teams/:teamId', teamController.delete);

fastify.get('/teams/:teamId/users', userController.getUsersOfTeam);

fastify.post('/teams/:teamId/users', userController.create);

fastify.delete('/teams/users/:userId', userController.delete);

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
};
start()
