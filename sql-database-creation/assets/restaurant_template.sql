-- Menu Table
CREATE TABLE IF NOT EXISTS menu (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL
);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    category TEXT NOT NULL,
    dish_ordered TEXT NOT NULL,
    cost_paid REAL NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert Menu Items
-- 5 Main Dishes
INSERT INTO menu (name, category, price) VALUES ('Pad Thai', 'Main Dish', 12.50);
INSERT INTO menu (name, category, price) VALUES ('Green Curry', 'Main Dish', 13.00);
INSERT INTO menu (name, category, price) VALUES ('Basil Fried Rice', 'Main Dish', 11.00);
INSERT INTO menu (name, category, price) VALUES ('Massaman Curry', 'Main Dish', 14.50);
INSERT INTO menu (name, category, price) VALUES ('Tom Yum Noodles', 'Main Dish', 12.00);

-- 6 Appetizers
INSERT INTO menu (name, category, price) VALUES ('Spring Rolls', 'Appetizer', 6.00);
INSERT INTO menu (name, category, price) VALUES ('Chicken Satay', 'Appetizer', 8.50);
INSERT INTO menu (name, category, price) VALUES ('Fried Calamari', 'Appetizer', 9.00);
INSERT INTO menu (name, category, price) VALUES ('Corn Fritters', 'Appetizer', 5.50);
INSERT INTO menu (name, category, price) VALUES ('Pork Dumplings', 'Appetizer', 7.00);
INSERT INTO menu (name, category, price) VALUES ('Crispy Tofu', 'Appetizer', 5.00);

-- 3 Drinks
INSERT INTO menu (name, category, price) VALUES ('Thai Iced Tea', 'Drink', 4.50);
INSERT INTO menu (name, category, price) VALUES ('Fresh Coconut Water', 'Drink', 5.50);
INSERT INTO menu (name, category, price) VALUES ('Lemongrass Juice', 'Drink', 4.00);

-- 7 Desserts
INSERT INTO menu (name, category, price) VALUES ('Mango Sticky Rice', 'Dessert', 8.00);
INSERT INTO menu (name, category, price) VALUES ('Coconut Ice Cream', 'Dessert', 6.00);
INSERT INTO menu (name, category, price) VALUES ('Fried Bananas', 'Dessert', 5.50);
INSERT INTO menu (name, category, price) VALUES ('Thai Custard', 'Dessert', 6.50);
INSERT INTO menu (name, category, price) VALUES ('Sweet Ginger Soup', 'Dessert', 5.00);
INSERT INTO menu (name, category, price) VALUES ('Durian with Sticky Rice', 'Dessert', 10.00);
INSERT INTO menu (name, category, price) VALUES ('Red Ruby in Coconut Milk', 'Dessert', 7.50);

-- Insert Mock Transactions
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('John Doe', 'Main Dish', 'Pad Thai', 12.50);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Jane Smith', 'Appetizer', 'Spring Rolls', 6.00);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Alice Brown', 'Drink', 'Thai Iced Tea', 4.50);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Bob Wilson', 'Dessert', 'Mango Sticky Rice', 8.00);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Charlie Davis', 'Main Dish', 'Green Curry', 13.00);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Emma White', 'Appetizer', 'Chicken Satay', 8.50);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Frank Miller', 'Dessert', 'Coconut Ice Cream', 6.00);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Grace Lee', 'Drink', 'Fresh Coconut Water', 5.50);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Henry Ford', 'Main Dish', 'Basil Fried Rice', 11.00);
INSERT INTO transactions (customer_name, category, dish_ordered, cost_paid) VALUES ('Ivy Chen', 'Appetizer', 'Fried Calamari', 9.00);
