const userService = require('../services/user');

module.exports.getUsersOfTeam =  async (request, reply) => {
    const users = await userService.getUsersOfTeam(request.params.teamId);
    return reply.code(200).send({ users: [
            {name: 'ramazan', motto: 'I am hero', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '55445000099'},
            {name: 'herro', motto: 'avradina kadavro', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '55435430099'},
            {name: 'merro', motto: 'I am merro', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '55654345099'},
            {name: 'mustafa', motto: 'I am mustafa', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '576545600099'},
            {name: 'erdo', motto: 'I am erdo', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '55445543399'},
            {name: 'ahmet', motto: 'I am ahmet', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '56453000099'},
        ]
    });
};

module.exports.create = async (request, reply) => {
    const userObject = {
        motto: request.body.motto,
        name: request.body.name,
        avatar: request.body.avatar,
        phone: request.body.phone
    };
    const user = await userService.create({ userObject });
    return reply.code(200).send({ user:  {name: 'ahmet', motto: 'I am ahmet', avatar: 'https://gravatar.com/avatar/c98453d2dfbd16fa08c50e0a79b786c5?s=400&d=robohash&r=x', phone: '56453000099'}});
};

module.exports.delete = async (request, reply) => {
    await userService.delete(request.params.userId);
    return reply.code(200);
};
