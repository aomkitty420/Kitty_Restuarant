const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;
const dbPath = path.join(__dirname, 'restaurant.db');

app.use(express.static('public'));
app.use(express.json());

// Helper function to get DB connection
const getDb = () => new sqlite3.Database(dbPath);

// --- MENU API ---

// Get all menu items
app.get('/api/menu', (req, res) => {
    const db = getDb();
    db.all("SELECT * FROM menu", [], (err, rows) => {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Get a single menu item
app.get('/api/menu/:id', (req, res) => {
    const db = getDb();
    db.get("SELECT * FROM menu WHERE id = ?", [req.params.id], (err, row) => {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Menu item not found" });
        res.json(row);
    });
});

// Create a new menu item
app.post('/api/menu', (req, res) => {
    const { name, category, price } = req.body;
    if (!name || !category || price === undefined) {
        return res.status(400).json({ error: "Missing required fields: name, category, price" });
    }
    const db = getDb();
    const sql = "INSERT INTO menu (name, category, price) VALUES (?, ?, ?)";
    db.run(sql, [name, category, price], function(err) {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, name, category, price });
    });
});

// Update a menu item
app.put('/api/menu/:id', (req, res) => {
    const { name, category, price } = req.body;
    const db = getDb();
    const sql = "UPDATE menu SET name = ?, category = ?, price = ? WHERE id = ?";
    db.run(sql, [name, category, price, req.params.id], function(err) {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Menu item not found" });
        res.json({ message: "Updated successfully", id: req.params.id });
    });
});

// Delete a menu item
app.delete('/api/menu/:id', (req, res) => {
    const db = getDb();
    db.run("DELETE FROM menu WHERE id = ?", [req.params.id], function(err) {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Menu item not found" });
        res.json({ message: "Deleted successfully" });
    });
});

// --- TRANSACTIONS API ---

// Get all transactions
app.get('/api/transactions', (req, res) => {
    const db = getDb();
    db.all("SELECT * FROM transactions ORDER BY timestamp DESC", [], (err, rows) => {
        db.close();
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Legacy endpoint for backward compatibility with existing frontend
app.get('/api/data', (req, res) => {
    const db = getDb();
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
