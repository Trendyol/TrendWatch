const { Couchbase } = require('./db/db');
const { TeamService } = require('./models/team-service');
const { UserService } = require('./models/user-service');
const client = new Couchbase();

const teamService = new TeamService(client);
const userService = new UserService(client);

module.exports = {
    teamService,
    userService,
    connect: client.connect
};
