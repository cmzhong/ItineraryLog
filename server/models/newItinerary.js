const { Pool } = require('pg');

const PG_URI = 'postgres://pgtomdcf:KPX2FVBbnH6c28v53t57zXK-razThu5d@drona.db.elephantsql.com:5432/pgtomdcf';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback)
    }
}