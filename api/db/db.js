const { Bucket, Cluster } = require('couchbase');

class Couchbase {
  constructor(props) {
    this.host = props.host || process.env.COUCHBASE_HOST;
    this.dbUsername = props.username || process.env.COUCHBASE_USERNAME;
    this.dbPassword = props.password || process.env.COUCHBASE_PASSWORD;
    this.bucketName = props.bucket || process.env.COUCHBASE_BUCKET;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.cluster = new Cluster(this.host);

      this.cluster.authenticate(this.dbUsername, this.dbPassword);
      this.bucket = this.cluster.openBucket(this.bucketName);
      this.bucket.on('connect', resolve);
      this.bucket.on('error', reject);
    });
  }

  disconnect() {
    this.bucket.disconnect();
  }
}

module.exports = {
  Couchbase
};
