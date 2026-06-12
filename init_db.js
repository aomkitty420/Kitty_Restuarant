const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'restaurant.db');
const sqlPath = path.join(__dirname, 'setup_database.sql');

const db = new sqlite3.Database(dbPath);

const sql = fs.readFileSync(sqlPath, 'utf8');

db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Error executing SQL:', err.message);
        } else {
            console.log('Database created and populated successfully.');
        }
        db.close();
    });
});
