const elasticsearch = require('elasticsearch');

const elastic = {
    _client: {},

    login: (host) => {
        elastic._client = new elasticsearch.Client({
            host: host,
            log: 'trace',
            maxRetries: 10
        });

        return elastic._client;
    },

    createIndex: (indexName, mapping) => {
        elastic._client.indices.create({
            index: indexName,
            body: mapping
        });
    },

    insert: (index, data) => {
        elastic._client.index({
            index: index,
            type: 'doc',
            body: JSON.stringify(data)
        }, function (err, res, status) {
            console.log(res);
        });
    }
};

module.exports = elastic;