const couch = require('./couchdb');

couch.db.create('test2', function(err) {
    if (err && err.statusCode != 412) {
        console.error(err);
    }
    else {
        console.log('database forgedata exists');
    }
});