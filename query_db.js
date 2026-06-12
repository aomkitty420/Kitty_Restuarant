const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'restaurant.db');
const db = new sqlite3.Database(dbPath);

console.log('--- SQL QUERY: SELECT * FROM menu; ---');
db.all("SELECT * FROM menu", [], (err, rows) => {
    if (err) throw err;
    console.table(rows);

    console.log('\n--- SQL QUERY: SELECT * FROM transactions LIMIT 10; ---');
    db.all("SELECT * FROM transactions LIMIT 10", [], (err, rows) => {
        if (err) throw err;
        console.table(rows);
        db.close();
    });
});
