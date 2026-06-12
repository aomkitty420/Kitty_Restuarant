const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'restaurant.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    console.log('--- Menu Counts ---');
    db.each("SELECT category, COUNT(*) as count FROM menu GROUP BY category", (err, row) => {
        if (err) console.error(err);
        console.log(`${row.category}: ${row.count}`);
    });

    console.log('\n--- Sample Transactions ---');
    db.each("SELECT * FROM transactions LIMIT 5", (err, row) => {
        if (err) console.error(err);
        console.log(`${row.customer_name} ordered ${row.dish_ordered} for $${row.cost_paid}`);
    }, () => {
        db.close();
    });
});
