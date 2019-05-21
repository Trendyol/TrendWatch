const {ViewQuery} = require("couchbase");

class UserService {
    constructor(couchbase) {
        this.couchbase = couchbase;
    }

    async getAllUsers() {
        const query = ViewQuery
            .from('users', 'getAll')
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

    async getUserByName(name) {
        return await new Promise((resolve, reject) => {
            this.couchbase.bucket.get(`user_${name.toLowerCase()}`, (err, res) => {
                if (!err) {
                    resolve(res.value);
                } else {
                    reject();
                }
            });
        })
    }

}

module.exports = {UserService};
