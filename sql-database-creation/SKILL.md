---
name: sql-database-creation
description: Automates the creation and population of SQL databases (SQLite) with mock data. Use when the user needs to set up a database schema for testing, training, or demonstration purposes, especially for retail, restaurant, or transaction-based projects.
---

# SQL Database Creation

## Overview
This skill provides a streamlined workflow for initializing SQLite databases with custom schemas and mock data. It is particularly effective for generating structured datasets like restaurant menus, inventory lists, and transaction logs.

## Workflow

### 1. Schema Design
Analyze the user's requirements for data entities and relationships. 
- For a restaurant, typically includes `menu` and `transactions` tables.
- For retail, includes `products` and `sales`.

### 2. SQL Generation
Generate a SQL script (e.g., `setup_database.sql`) that:
- Creates tables with appropriate types and constraints.
- Inserts a diverse set of mock data to populate the tables.

### 3. Database Initialization
Use the bundled Node.js script `scripts/init_db.cjs` to execute the SQL script and create the `.db` file.

## Bundled Resources

### scripts/init_db.cjs
A Node.js utility that takes an SQL file and an output database name, then executes the SQL to create the database.

### assets/restaurant_template.sql
A sample SQL script for a restaurant database, including menu items and mock transactions.

## Example Usage
**User:** "Create a database for my bookstore with 5 categories of books and some sample sales."
**Action:** Use this skill to design the `books` and `sales` tables, generate the SQL, and run `init_db.cjs`.
