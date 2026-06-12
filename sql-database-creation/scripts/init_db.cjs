const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

/**
 * Initializes a SQLite database from an SQL file.
 * Usage: node init_db.cjs <sql_file_path> <db_file_path>
 */

const sqlFilePath = process.argv[2];
const dbFilePath = process.argv[3];

if (!sqlFilePath || !dbFilePath) {
    console.error('Usage: node init_db.cjs <sql_file_path> <db_file_path>');
    process.exit(1);
}

const db = new sqlite3.Database(dbFilePath);
const sql = fs.readFileSync(sqlFilePath, 'utf8');

db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Error executing SQL:', err.message);
            process.exit(1);
        } else {
            console.log(`Database '${dbFilePath}' created and populated successfully.`);
        }
        db.close();
    });
});
