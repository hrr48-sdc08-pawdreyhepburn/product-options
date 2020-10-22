var ExpressCassandra = require('express-cassandra');
var db = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 1111 },
        keyspace: 'tarjay',
        queryOptions: { consistency: ExpressCassandra.consistencies.one }
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

module.exports = db;

const Stock = db.loadSchema('stock', {
    fields: {
        product_id: "int",
        uniq_id: "uuid",
        name: "text",
        location: "text",
        color: "text",
        colorurl: "text",
        size: "text",
        qty: "int"
    },
    key: [["product_id"], "name"],
    clustering_order: { "name": "desc" }
});


