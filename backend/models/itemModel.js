const db = require('../db');

const ItemModel = {
    getAllItems: (callback) => {
        const sql = 'SELECT * FROM items';
        db.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    addItem: (name, callback) => {
        const sql = 'INSERT INTO items (name) VALUES (?)';
        db.query(sql, [name], (err, results) => {
            if (err) return callback(err);
            callback(null, { id: results.insertId, name });
        });
    }
};

module.exports = ItemModel;