const connection = require('./connection');

module.exports = {
    getAll() {
        return connection('data');
    }
};
