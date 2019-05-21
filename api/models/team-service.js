const {ViewQuery} = require("couchbase");

class TeamService {
    constructor(couchbase) {
        this.couchbase = couchbase;
    }

    addNewTeam(name) {
        return new Promise((resolve, reject) => {
            this.couchbase.bucket.insert(`team_${name.toLowerCase()}`, {
                name,
                users: [],
                type: 'team'
            }, (err) => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });
    }

    deleteTeam(name) {
        return new Promise((resolve, reject) => {
            this.couchbase.bucket.delete(`team_${name.toLowerCase()}`, (err) => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });
    }

    async getAllTeams() {
        const query = ViewQuery
            .from('teams', 'getAll')
            .stale(ViewQuery.Update.BEFORE);

        return await new Promise((resolve) => {
            this.couchbase.bucket.query(query, (err, result) => {
                if (err || !result || result.length === 0) {
                    resolve([]);
                } else {
                    resolve(result.map(res => res.value));
                }
            });
        });
    }

    async getTeamByName(nameList) {
        const query = ViewQuery
            .from('teams', 'getAll')
            .key(nameList.map(name => `team_${name.toLowerCase()}`))
            .stale(ViewQuery.Update.BEFORE);

        return await new Promise((resolve) => {
            this.couchbase.bucket.query(query, (err, result) => {
                if (err || !result || result.length === 0) {
                    resolve(null);
                } else {
                    resolve(result.map(res => res.value));
                }
            });
        });
    }

    addUserToTeam(name, motto, image, phone, team) {
        return new Promise((resolve, reject) => {
            this.couchbase.bucket.insert(`user_${name.toLowerCase()}`, {
                name,
                motto,
                image,
                phone,
                type: 'user'
            }, (err) => {
                if (err) {
                    reject();
                } else {
                    this.couchbase.bucket.get(`team_${team.toLowerCase()}`, (err, res) => {
                        res.value.users.push(`user_${name.toLowerCase()}`);
                        this.couchbase.bucket.upsert(`team_${team.toLowerCase()}`, res.value, resolve);
                    });
                }
            });
        });
    }
}

module.exports = {TeamService};
