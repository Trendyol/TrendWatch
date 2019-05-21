// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const teamController = require('./controllers/team');

// TODO: POST /teams
fastify.post('/teams', teamController.create);

// TODO: GET /teams
fastify.get('/teams', teamController.getAll);

// TODO: DELETE /teams/:teamId
fastify.get('/teams/:teamId', teamController.delete);

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
