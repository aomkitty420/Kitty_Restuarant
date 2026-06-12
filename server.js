const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;
const dbPath = path.join(__dirname, 'restaurant.db');

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    const db = new sqlite3.Database(dbPath);
    const data = { menu: [], transactions: [] };

    db.serialize(() => {
        db.all("SELECT * FROM menu", [], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            data.menu = rows;
        });

        db.all("SELECT * FROM transactions ORDER BY id DESC LIMIT 10", [], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            data.transactions = rows;
            db.close();
            res.json(data);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
