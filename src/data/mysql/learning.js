// /data/mysql/learning.js – Complete MySQL guide with 50 basic + 50 advanced topics + use cases

export const learning = {
  basic: {
    title: "🐬 MYSQL BASICS: 50+ TOPICS FOR BEGINNERS",
    description: "Complete beginner's guide to MySQL. Covers installation, CRUD, data types, constraints, joins, subqueries, views, stored procedures, functions, triggers, events, transactions, locking, user management, backup, performance tuning, and more. Each topic includes detailed description, code example, line‑by‑line explanation, sample output, and real‑world use case.",
    topics: [
      {
        name: "1. MySQL Introduction & Installation",
        description: "MySQL is an open‑source relational database management system (RDBMS) used by millions of applications. It stores data in tables with rows and columns, supports ACID transactions, and offers high performance. Installation on Ubuntu involves `sudo apt install mysql-server`. After installation, you connect using `mysql -u root -p`. The default port is 3306. Always run `mysql_secure_installation` after installing to improve security.",
        code: "sudo apt update\nsudo apt install mysql-server\nmysql --version\nmysql -u root -p",
        lineByLine: ["Update package list", "Install MySQL server", "Check version", "Login as root"],
        simpleMeaning: "Set up MySQL database server on your machine.",
        output: "mysql Ver 8.0.35",
        note: "Default port 3306. Use strong passwords.",
        use_case: "Used in web apps (e‑commerce, CMS, banking) to store user data, products, orders, and transactions."
      },
      {
        name: "2. Database Create / Drop / Use",
        description: "A database is a container for tables. `CREATE DATABASE` creates a new database, `USE` selects it for subsequent queries, and `DROP DATABASE` permanently deletes a database and all its tables. Use `SHOW DATABASES` to list all databases. Always double‑check before dropping a database because the action is irreversible. In production, create separate databases for different environments (dev, test, prod).",
        code: "CREATE DATABASE company;\nSHOW DATABASES;\nUSE company;\nDROP DATABASE company;",
        lineByLine: ["Create database", "List all databases", "Switch to it", "Delete it"],
        simpleMeaning: "Manage multiple databases on the same server.",
        output: "Database created.",
        note: "DROP is irreversible.",
        use_case: "Separate databases for different projects (e.g., `ecommerce_db`, `blog_db`, `analytics_db`) on one server."
      },
      {
        name: "3. MySQL Data Types",
        description: "Data types define what kind of data a column can store. Choose the smallest type that fits your data to save space and improve performance. Numeric types: `INT`, `DECIMAL` (exact for money), `FLOAT` (approximate). String types: `VARCHAR` (variable length), `CHAR` (fixed length), `TEXT` (long text). Date/Time: `DATE`, `DATETIME`, `TIMESTAMP` (auto‑updates). Using the correct type prevents errors and optimises storage.",
        code: "CREATE TABLE products (\n    id INT,\n    name VARCHAR(100),\n    price DECIMAL(10,2),\n    created DATE\n);",
        lineByLine: ["INT for ID", "VARCHAR for variable text", "DECIMAL for exact money", "DATE for date"],
        simpleMeaning: "Define column storage format.",
        output: "Table created.",
        note: "Use DECIMAL for money; TIMESTAMP auto‑updates.",
        use_case: "Product ID (INT), product name (VARCHAR), price (DECIMAL), release date (DATE)."
      },
      {
        name: "4. CREATE TABLE",
        description: "`CREATE TABLE` defines a new table with specified columns and constraints. Each column has a data type and optional constraints (NOT NULL, UNIQUE, PRIMARY KEY, etc.). Always define a PRIMARY KEY to uniquely identify each row. You can also set AUTO_INCREMENT for auto‑generated IDs. The table is created in the currently selected database (USE db).",
        code: "CREATE TABLE users (\n    user_id INT PRIMARY KEY AUTO_INCREMENT,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 18)\n);",
        lineByLine: ["PRIMARY KEY + AUTO_INCREMENT", "NOT NULL", "UNIQUE", "CHECK constraint"],
        simpleMeaning: "Create a new table with columns and constraints.",
        output: "Table created.",
        note: "Always set a PRIMARY KEY.",
        use_case: "Creating user accounts table for a website with unique email and age validation."
      },
      {
        name: "5. INSERT INTO",
        description: "`INSERT INTO` adds new rows (records) to a table. You can specify column names (order matters) or omit them if you provide values for all columns in the same order as the table definition. Use `AUTO_INCREMENT` columns – they are automatically generated and should be omitted or given NULL. You can insert multiple rows in one statement by separating value lists with commas.",
        code: "INSERT INTO users (username, email, age) VALUES ('john_doe', 'john@example.com', 25);",
        lineByLine: ["Specify columns", "Provide corresponding values"],
        simpleMeaning: "Add new records to a table.",
        output: "1 row inserted.",
        note: "Omit AUTO_INCREMENT column.",
        use_case: "Adding a new customer to the `customers` table in an e‑commerce application."
      },
      {
        name: "6. SELECT Statement",
        description: "`SELECT` retrieves data from one or more tables. You can select all columns (`*`) or specific columns. Use `WHERE` to filter rows, `ORDER BY` to sort, `GROUP BY` to aggregate, and `LIMIT` to restrict number of rows. Always prefer selecting only needed columns rather than `*` for better performance, especially on large tables.",
        code: "SELECT username, email FROM users WHERE age > 18;",
        lineByLine: ["Select specific columns", "Filter rows"],
        simpleMeaning: "Fetch data from the database.",
        output: "Rows matching the condition.",
        note: "Avoid `SELECT *` in production.",
        use_case: "Display a list of active customers over 18 on a dashboard."
      },
      {
        name: "7. WHERE Clause",
        description: "`WHERE` filters rows based on one or more conditions. You can use `=`, `!=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `LIKE`, `IN`, `IS NULL`, and logical operators `AND`, `OR`, `NOT`. For best performance, ensure columns used in `WHERE` are indexed. Conditions are evaluated row by row; only rows that satisfy all conditions are returned.",
        code: "SELECT * FROM orders WHERE total > 1000 AND status = 'paid';",
        lineByLine: ["Condition on total", "AND connects multiple conditions"],
        simpleMeaning: "Filter results based on conditions.",
        output: "Filtered rows.",
        note: "Use indexes on WHERE columns for speed.",
        use_case: "Show only paid orders above $1000 for a finance report."
      },
      {
        name: "8. UPDATE Statement",
        description: "`UPDATE` modifies existing rows in a table. You must use a `WHERE` clause to specify which rows to update; otherwise, all rows are updated. You can update multiple columns at once by separating `column = value` pairs with commas. Always test your `UPDATE` with a `SELECT` first to ensure you are targeting the correct rows.",
        code: "UPDATE users SET email = 'new@example.com' WHERE user_id = 1;",
        lineByLine: ["SET new value for column", "WHERE targets specific rows"],
        simpleMeaning: "Change existing data.",
        output: "Rows matched: 1; Changed: 1",
        note: "Always use WHERE; otherwise updates entire table.",
        use_case: "User updates their email address on a profile page."
      },
      {
        name: "9. DELETE Statement",
        description: "`DELETE` removes rows from a table. Like `UPDATE`, you must use a `WHERE` clause to avoid deleting all rows. Deleting many rows can be slow; consider using `TRUNCATE` to remove all rows quickly. `DELETE` does not reset the AUTO_INCREMENT counter. Use `LIMIT` to restrict the number of deleted rows for safety.",
        code: "DELETE FROM users WHERE user_id = 1;",
        lineByLine: ["DELETE with condition"],
        simpleMeaning: "Remove rows from a table.",
        output: "1 row deleted.",
        note: "Use TRUNCATE to remove all rows faster.",
        use_case: "Delete a canceled order from the order table."
      },
      {
        name: "10. ALTER TABLE (ADD, DROP, MODIFY)",
        description: "`ALTER TABLE` changes the structure of an existing table. You can add new columns (`ADD`), remove columns (`DROP COLUMN`), modify column data types or constraints (`MODIFY`), rename columns (`RENAME COLUMN`), and add or drop indexes. These operations can lock the table for a long time on large tables; plan them during maintenance windows.",
        code: "ALTER TABLE users ADD phone VARCHAR(15);\nALTER TABLE users DROP COLUMN age;\nALTER TABLE users MODIFY username VARCHAR(100);",
        lineByLine: ["Add column", "Remove column", "Change column type"],
        simpleMeaning: "Modify table schema after creation.",
        output: "Table altered.",
        note: "ALTER can be slow on large tables.",
        use_case: "Add a `discount` column to products, remove obsolete `age` column, increase `username` length."
      },
      {
        name: "11. DROP TABLE vs TRUNCATE",
        description: "`TRUNCATE` removes all rows from a table but keeps the table structure (columns, indexes, constraints) and resets auto‑increment counters. It is faster than `DELETE` because it does not log individual row deletions. `DROP TABLE` deletes the table completely (structure + data). `TRUNCATE` cannot be rolled back in MySQL (unless inside a transaction with InnoDB).",
        code: "TRUNCATE logs;\nDROP TABLE old_data;",
        lineByLine: ["Empty table but keep structure", "Delete table completely"],
        simpleMeaning: "Remove all data or whole table.",
        output: "Table truncated / dropped.",
        note: "TRUNCATE cannot be rolled back in MyISAM.",
        use_case: "Clear session logs (TRUNCATE), remove temporary test tables (DROP)."
      },
      {
        name: "12. PRIMARY KEY Constraint",
        description: "A `PRIMARY KEY` uniquely identifies each row in a table. It implies `NOT NULL` and `UNIQUE`. Each table can have only one primary key, which can be a single column or a combination of columns (composite key). Primary keys are automatically indexed, making lookups very fast. Always define a primary key for every table.",
        code: "CREATE TABLE orders (order_id INT PRIMARY KEY, amount DECIMAL(10,2));",
        lineByLine: ["PRIMARY KEY constraint"],
        simpleMeaning: "Unique ID per row.",
        output: "Table created.",
        note: "Every table should have a PRIMARY KEY.",
        use_case: "Order number, product ID, customer ID – used for fast lookups and joining tables."
      },
      {
        name: "13. FOREIGN KEY Constraint",
        description: "A `FOREIGN KEY` links a column (or columns) in one table to the primary key of another table, enforcing referential integrity. It ensures that the value exists in the referenced table. You can specify actions on `DELETE` and `UPDATE` (e.g., `CASCADE`, `SET NULL`, `RESTRICT`). Foreign keys require the InnoDB storage engine.",
        code: "CREATE TABLE orders (\n    id INT PRIMARY KEY,\n    customer_id INT,\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\n);",
        lineByLine: ["FOREIGN KEY references another table's primary key"],
        simpleMeaning: "Enforce parent‑child relationship between tables.",
        output: "Table created.",
        note: "Requires InnoDB engine.",
        use_case: "Orders must belong to an existing customer; prevents orphan records."
      },
      {
        name: "14. UNIQUE Constraint",
        description: "A `UNIQUE` constraint ensures that all values in a column (or a group of columns) are distinct. You can have multiple `UNIQUE` constraints per table, and they can be on columns that allow `NULL` values (multiple `NULL`s are allowed because `NULL` is not equal to itself). `UNIQUE` constraints are automatically indexed.",
        code: "CREATE TABLE users (email VARCHAR(100) UNIQUE);",
        lineByLine: ["UNIQUE constraint"],
        simpleMeaning: "No two rows can have the same value in that column.",
        output: "Table created.",
        note: "NULL values are allowed (multiple NULLs).",
        use_case: "Email addresses, usernames, product SKUs – ensure no duplicates."
      },
      {
        name: "15. NOT NULL Constraint",
        description: "`NOT NULL` forces a column to have a value; it cannot be left empty (`NULL`). This is important for required fields like names, prices, or foreign keys. When you insert a row, you must provide a value for every `NOT NULL` column. You cannot add a `NOT NULL` column to a table that already contains rows unless you provide a default value.",
        code: "CREATE TABLE products (name VARCHAR(100) NOT NULL);",
        lineByLine: ["NOT NULL constraint"],
        simpleMeaning: "Column must contain data.",
        output: "Table created.",
        note: "Use for required fields.",
        use_case: "Product name cannot be empty; order amount must be specified."
      },
      {
        name: "16. DEFAULT Constraint",
        description: "A `DEFAULT` constraint provides a default value for a column when no value is supplied in an `INSERT` statement. It is often used for timestamps (`CURRENT_TIMESTAMP`), statuses (`'pending'`), or audit fields (`created_by`). You can change the default later with `ALTER TABLE`.",
        code: "CREATE TABLE logs (created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
        lineByLine: ["DEFAULT clause"],
        simpleMeaning: "Auto‑fill if omitted.",
        output: "Table created.",
        note: "Common for timestamps.",
        use_case: "Automatically set `created_at` to current time; set `status` default to 'pending'."
      },
      {
        name: "17. CHECK Constraint",
        description: "`CHECK` validates data before insertion or update. It enforces a condition on the column(s). MySQL 8.0.15+ fully supports `CHECK` constraints; earlier versions parsed but ignored them. You can use `CHECK` to ensure age > 0, price >= 0, or status in a list. If the condition fails, the statement is rejected.",
        code: "CREATE TABLE employees (age INT CHECK (age >= 18));",
        lineByLine: ["CHECK constraint"],
        simpleMeaning: "Prevent invalid data from being saved.",
        output: "Table created.",
        note: "Fully supported in MySQL 8.0.15+.",
        use_case: "HR system: age must be ≥18; product price > 0; status in ('active','inactive')."
      },
      {
        name: "18. INDEX (CREATE, DROP)",
        description: "Indexes dramatically speed up data retrieval but slow down `INSERT`, `UPDATE`, and `DELETE`. Use `CREATE INDEX` on columns used in `WHERE`, `JOIN`, and `ORDER BY`. Unique indexes also enforce uniqueness. Composite indexes (multiple columns) are efficient when the query uses the leftmost columns in the order of the index.",
        code: "CREATE INDEX idx_email ON users(email);\nDROP INDEX idx_email ON users;",
        lineByLine: ["Create index on email", "Drop index"],
        simpleMeaning: "Speed up searches.",
        output: "Index created / dropped.",
        note: "Too many indexes slow writes.",
        use_case: "Index on `customer_id` in orders for faster JOINs; index on `email` for login speed."
      },
      {
        name: "19. AUTO_INCREMENT",
        description: "`AUTO_INCREMENT` generates a unique integer automatically when a new row is inserted. It is typically used with `PRIMARY KEY`. The starting value is 1 by default, and you can change it with `ALTER TABLE ... AUTO_INCREMENT = value`. The value increments even if a row is deleted (no reuse).",
        code: "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));",
        lineByLine: ["AUTO_INCREMENT attribute"],
        simpleMeaning: "Auto‑number IDs.",
        output: "Table created.",
        note: "Often used with PRIMARY KEY.",
        use_case: "Automatically assign order number, product ID, user ID without manual input."
      },
      {
        name: "20. LIMIT Clause",
        description: "`LIMIT` restricts the number of rows returned by a query. It is commonly used for pagination, top‑N reports, and sampling. You can specify offset as `LIMIT offset, count` or `LIMIT count OFFSET offset`. For efficient pagination, always use `ORDER BY` with an index on the column being ordered.",
        code: "SELECT * FROM products LIMIT 10;",
        lineByLine: ["LIMIT 10 returns first 10 rows"],
        simpleMeaning: "Paginate results.",
        output: "10 rows",
        note: "Use with ORDER BY for predictable pagination.",
        use_case: "Show first 10 products on a page, display top N bestsellers."
      },
      {
        name: "21. ORDER BY (ASC, DESC)",
        description: "`ORDER BY` sorts the result set by one or more columns. `ASC` (ascending, default) orders from smallest to largest, `DESC` (descending) from largest to smallest. You can sort by multiple columns; each column can have its own direction. Sorting can be expensive on large datasets, so index the columns used in `ORDER BY` when possible.",
        code: "SELECT name, price FROM products ORDER BY price DESC;",
        lineByLine: ["ORDER BY column direction"],
        simpleMeaning: "Sort rows.",
        output: "Sorted rows",
        note: "Default is ASC.",
        use_case: "Sort products by price (low to high), orders by date (newest first)."
      },
      {
        name: "22. GROUP BY",
        description: "`GROUP BY` groups rows that have the same values in specified columns, allowing aggregate functions (`COUNT`, `SUM`, `AVG`, etc.) to be applied to each group. It is often used with `HAVING` to filter groups. Columns in the `SELECT` list that are not aggregate functions must appear in the `GROUP BY` clause.",
        code: "SELECT department, COUNT(*) FROM employees GROUP BY department;",
        lineByLine: ["GROUP BY aggregates per group"],
        simpleMeaning: "Summarise data by category.",
        output: "Department counts",
        note: "Used with aggregate functions.",
        use_case: "Count orders per customer, average salary per department, total sales per month."
      },
      {
        name: "23. HAVING Clause",
        description: "`HAVING` filters groups created by `GROUP BY` – it is like `WHERE` but for aggregate values. While `WHERE` filters rows before grouping, `HAVING` filters after grouping. It can use aggregate functions (`SUM(amount) > 1000`) or non‑aggregate columns that appear in `GROUP BY`. Always try to place conditions in `WHERE` when possible for better performance.",
        code: "SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;",
        lineByLine: ["HAVING filters after grouping"],
        simpleMeaning: "Filter aggregated results.",
        output: "Departments with avg salary > 50k",
        note: "WHERE filters rows before grouping.",
        use_case: "Show only departments with more than 10 employees, high average salary."
      },
      {
        name: "24. Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)",
        description: "Aggregate functions perform calculations on a set of rows and return a single value. `COUNT(*)` counts all rows, `COUNT(column)` counts non‑NULL values. `SUM`, `AVG` work on numeric columns. `MAX` and `MIN` return the highest/lowest value. They ignore `NULL` values except `COUNT(*)`. Use them with `GROUP BY` for grouped summaries.",
        code: "SELECT COUNT(*), SUM(amount), AVG(amount), MAX(amount), MIN(amount) FROM orders;",
        lineByLine: ["COUNT rows", "SUM of column", "Average", "Maximum", "Minimum"],
        simpleMeaning: "Compute statistics on data.",
        output: "One row with aggregates.",
        note: "NULL values ignored except COUNT(*).",
        use_case: "Total sales, average order value, most expensive product, number of users."
      },
      {
        name: "25. DISTINCT Keyword",
        description: "`DISTINCT` eliminates duplicate rows from the result set. It can be applied to a single column (unique values) or multiple columns (unique combinations). `DISTINCT` works on all selected columns. It is often used to get a list of unique categories, cities, or statuses. Use it only when needed because it can add overhead.",
        code: "SELECT DISTINCT city FROM customers;",
        lineByLine: ["DISTINCT gives unique values"],
        simpleMeaning: "Show unique values only.",
        output: "List of unique cities.",
        note: "Use when you need unique combinations.",
        use_case: "Get list of all product categories, unique customer cities for marketing."
      },
      {
        name: "26. LIKE Operator (Pattern Matching)",
        description: "`LIKE` performs pattern matching on strings. `%` matches any number of characters (including zero), and `_` matches exactly one character. For case‑insensitive search, use `LIKE` on a column with case‑insensitive collation or use `LOWER()` function. Leading `%` prevents index usage, so avoid it when possible.",
        code: "SELECT * FROM products WHERE name LIKE 'Apple%';",
        lineByLine: ["% matches any characters", "_ matches exactly one"],
        simpleMeaning: "Search for patterns.",
        output: "Matching rows.",
        note: "Leading % prevents index use.",
        use_case: "Find products whose name starts with 'Apple'; search emails ending with '@gmail.com'."
      },
      {
        name: "27. IN and NOT IN",
        description: "`IN` checks if a value matches any value in a list (or subquery). It is a shorthand for multiple `OR` conditions. `NOT IN` excludes values in the list. Be careful with subqueries that return `NULL` – `NOT IN (SELECT ...)` will return no rows if the subquery contains `NULL`. Use `EXISTS` instead in such cases.",
        code: "SELECT * FROM products WHERE category IN ('Electronics', 'Books');",
        lineByLine: ["IN checks against list"],
        simpleMeaning: "Equal to any value in list.",
        output: "Rows with selected categories.",
        note: "Alternative to multiple OR conditions.",
        use_case: "Filter orders for specific statuses ('paid','shipped'), exclude discontinued products."
      },
      {
        name: "28. BETWEEN Operator",
        description: "`BETWEEN` selects values within a given range (inclusive of the boundaries). It works with numbers, dates, and strings. `BETWEEN` is equivalent to `column >= lower AND column <= upper`. It can use indexes on the column. For date ranges, prefer `BETWEEN` for readability.",
        code: "SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';",
        lineByLine: ["BETWEEN inclusive range"],
        simpleMeaning: "Value between two endpoints.",
        output: "Orders in 2024.",
        note: "Works with numbers, dates, strings.",
        use_case: "Show sales for a date range, products priced between $10 and $50."
      },
      {
        name: "29. IS NULL / IS NOT NULL",
        description: "`IS NULL` and `IS NOT NULL` test for `NULL` values. `NULL` is not a value; it represents missing or unknown data. Comparisons with `NULL` using `=`, `!=`, `<`, etc. always return `NULL` (neither true nor false). Therefore, always use `IS NULL` or `IS NOT NULL` to check for `NULL`.",
        code: "SELECT * FROM users WHERE email IS NULL;",
        lineByLine: ["IS NULL condition"],
        simpleMeaning: "Find missing data.",
        output: "Rows with NULL email.",
        note: "Use IS NULL, not = NULL.",
        use_case: "Find customers without phone number, orders without shipping address."
      },
      {
        name: "30. AND, OR, NOT Operators",
        description: "Logical operators combine conditions. `AND` returns true only if all conditions are true. `OR` returns true if any condition is true. `NOT` reverses a condition. Use parentheses to group conditions because `AND` has higher precedence than `OR`. Proper use of these operators is essential for complex filters.",
        code: "SELECT * FROM employees WHERE salary > 50000 AND department = 'Sales';",
        lineByLine: ["AND requires all conditions true"],
        simpleMeaning: "Complex filtering.",
        output: "Filtered rows.",
        note: "Use parentheses to group.",
        use_case: "Find high‑paid sales employees, products that are in stock AND on sale."
      },
      {
        name: "31. JOINs (INNER JOIN)",
        description: "`INNER JOIN` returns only rows where there is a match in both tables. It is the most common join type. The join condition is specified in the `ON` clause. If you omit the condition, you get a cross join (Cartesian product). Always use table aliases to make queries readable.",
        code: "SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;",
        lineByLine: ["INNER JOIN only matching rows"],
        simpleMeaning: "Combine related data from two tables.",
        output: "Order details with customer names.",
        note: "Default JOIN is INNER JOIN.",
        use_case: "List all orders with customer name, products with category name."
      },
      {
        name: "32. LEFT JOIN",
        description: "`LEFT JOIN` returns all rows from the left table, and matching rows from the right table. If no match exists, right table columns are `NULL`. It is useful when you want to keep all records from the left table regardless of matches. For example, customers who have not placed any orders will still appear with `NULL` order columns.",
        code: "SELECT customers.name, orders.id FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;",
        lineByLine: ["LEFT JOIN preserves left table rows"],
        simpleMeaning: "Keep all rows from left table.",
        output: "Customers with order IDs (NULL if no orders).",
        note: "Useful for finding missing relations.",
        use_case: "Show all customers even those without orders (e.g., for marketing campaigns)."
      },
      {
        name: "33. RIGHT JOIN",
        description: "`RIGHT JOIN` is the opposite of `LEFT JOIN`: it keeps all rows from the right table and matches from the left. It is rarely used because you can simply swap the table order and use `LEFT JOIN`. Some databases do not optimise `RIGHT JOIN` as well, so avoid it.",
        code: "SELECT customers.name, orders.id FROM orders RIGHT JOIN customers ON orders.customer_id = customers.id;",
        lineByLine: ["RIGHT JOIN preserves right table rows"],
        simpleMeaning: "All rows from right table.",
        output: "Same as LEFT JOIN with tables swapped.",
        note: "Rarely used; LEFT JOIN is more common.",
        use_case: "Rarely used; same as LEFT JOIN after swapping tables."
      },
      {
        name: "34. FULL OUTER JOIN Simulation",
        description: "MySQL does not have `FULL OUTER JOIN`. Simulate it by combining `LEFT JOIN` and `RIGHT JOIN` with `UNION`. Use `LEFT JOIN` to get all rows from the left table, then `RIGHT JOIN` with a `WHERE` clause to exclude rows already included (to avoid duplicates). `UNION` removes duplicates automatically.",
        code: "SELECT * FROM customers c LEFT JOIN orders o ON c.id = o.customer_id UNION SELECT * FROM customers c RIGHT JOIN orders o ON c.id = o.customer_id WHERE c.id IS NULL;",
        lineByLine: ["LEFT JOIN + RIGHT JOIN + UNION"],
        simpleMeaning: "All rows from both tables, matching where possible.",
        output: "Full outer result set.",
        note: "UNION removes duplicates.",
        use_case: "Full reconciliation: list all customers and all orders, combining where they match."
      },
      {
        name: "35. CROSS JOIN",
        description: "`CROSS JOIN` returns the Cartesian product of two tables: every row from the first table is combined with every row from the second table. This is rarely useful in production but can be used to generate test data or to create all combinations (e.g., sizes × colors). Be extremely careful – it can produce huge result sets.",
        code: "SELECT * FROM colors CROSS JOIN sizes;",
        lineByLine: ["CROSS JOIN creates all combinations"],
        simpleMeaning: "Combine each row with each row.",
        output: "Number of rows = rows1 * rows2",
        note: "Use carefully; can produce huge results.",
        use_case: "Generate possible product variants (size × color), test data generation."
      },
      {
        name: "36. SELF JOIN",
        description: "A `SELF JOIN` joins a table with itself. It requires table aliases to distinguish the two copies. It is useful for hierarchical data (e.g., employee – manager), finding duplicate rows, or comparing rows within the same table. Use `INNER JOIN` or `LEFT JOIN` as needed.",
        code: "SELECT e1.name AS employee, e2.name AS manager FROM employees e1 INNER JOIN employees e2 ON e1.manager_id = e2.id;",
        lineByLine: ["Self join with aliases"],
        simpleMeaning: "Compare rows within same table.",
        output: "Employee–manager pairs.",
        note: "Useful for hierarchical data.",
        use_case: "Organisation chart, find duplicate rows, compare employees in same department."
      },
      {
        name: "37. UNION and UNION ALL",
        description: "`UNION` combines the results of two or more queries and removes duplicate rows. `UNION ALL` keeps all rows, including duplicates, and is faster because it does not perform duplicate elimination. The number and data types of columns in each query must match. Use `UNION ALL` when you are sure there are no duplicates or duplicates are acceptable.",
        code: "SELECT name FROM customers UNION SELECT name FROM suppliers;",
        lineByLine: ["UNION removes duplicates", "UNION ALL keeps duplicates"],
        simpleMeaning: "Stack results vertically.",
        output: "Combined list.",
        note: "Number and types of columns must match.",
        use_case: "Combine lists of contacts from multiple tables, unify sales data from different regions."
      },
      {
        name: "38. Subquery (nested SELECT)",
        description: "A subquery is a `SELECT` query nested inside another SQL statement. It can be used in `WHERE`, `FROM`, `SELECT`, or `HAVING`. Subqueries can return a single value (scalar), a list, or a table. Use them to compute values dynamically. However, they can be less efficient than joins in some cases; always test performance.",
        code: "SELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);",
        lineByLine: ["Subquery returns average price"],
        simpleMeaning: "Use result of one query in another.",
        output: "Products above average price.",
        note: "Can be in WHERE, SELECT, FROM.",
        use_case: "Find employees earning above department average, products sold more than average."
      },
      {
        name: "39. EXISTS / NOT EXISTS",
        description: "`EXISTS` tests whether a subquery returns any rows. It is often more efficient than `IN` when the subquery result is large because it stops processing as soon as a match is found. `NOT EXISTS` returns true if the subquery returns no rows. Use it to check existence without retrieving the actual data.",
        code: "SELECT * FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
        lineByLine: ["EXISTS checks for any rows"],
        simpleMeaning: "Filter based on existence.",
        output: "Customers who have placed orders.",
        note: "Often faster than IN for large datasets.",
        use_case: "Find customers who have at least one order, products never ordered (NOT EXISTS)."
      },
      {
        name: "40. Views (CREATE, DROP VIEW)",
        description: "A view is a virtual table defined by a `SELECT` query. It does not store data itself but shows data from the underlying tables. Views simplify complex queries, provide security by hiding columns, and offer a level of abstraction. Simple views (single table, no aggregation) may be updatable. Use `CREATE OR REPLACE VIEW` to modify an existing view.",
        code: "CREATE VIEW active_users AS SELECT id, name FROM users WHERE status = 'active';\nDROP VIEW active_users;",
        lineByLine: ["CREATE VIEW stores the query", "DROP VIEW removes it"],
        simpleMeaning: "Save a query as a virtual table.",
        output: "View created.",
        note: "Use to simplify complex queries.",
        use_case: "Create a view of recent orders, hide sensitive columns (like salary), pre‑join tables for reporting."
      },
      {
        name: "41. Stored Procedures",
        description: "A stored procedure is a set of SQL statements stored on the server. It can accept input parameters (`IN`), return output parameters (`OUT`), and contain control flow (IF, LOOP). Procedures reduce network traffic, enforce business logic, and improve security because users can execute procedures without direct table access. Use `DELIMITER` to change the statement delimiter when creating procedures.",
        code: "DELIMITER // CREATE PROCEDURE GetUser(IN uid INT) BEGIN SELECT * FROM users WHERE id = uid; END // DELIMITER ;\nCALL GetUser(1);",
        lineByLine: ["Procedure with IN parameter", "CALL executes procedure"],
        simpleMeaning: "Store logic on the server.",
        output: "User data.",
        note: "Reduces network round trips.",
        use_case: "Transfer money between accounts (business logic), generate reports, batch updates."
      },
      {
        name: "42. User-Defined Functions",
        description: "A user‑defined function (`UDF`) returns a single value and can be used inside SQL expressions (like `SELECT`, `WHERE`, `ORDER BY`). Functions are deterministic (`DETERMINISTIC`) or not. They cannot modify data (no `INSERT`, `UPDATE`, `DELETE`). Use functions to encapsulate calculations that are reused often.",
        code: "CREATE FUNCTION fullName(fn VARCHAR(50), ln VARCHAR(50)) RETURNS VARCHAR(101) DETERMINISTIC RETURN CONCAT(fn, ' ', ln);",
        lineByLine: ["RETURNS type", "DETERMINISTIC", "RETURN expression"],
        simpleMeaning: "Custom function like built‑in.",
        output: "Function created.",
        note: "Cannot modify data.",
        use_case: "Calculate age from birthdate, format phone numbers, compute tax."
      },
      {
        name: "43. Triggers",
        description: "A trigger automatically executes a block of SQL before or after an `INSERT`, `UPDATE`, or `DELETE` on a table. `BEFORE` triggers can modify the `NEW` row; `AFTER` triggers cannot. Triggers are useful for auditing, maintaining derived data, enforcing complex business rules, and automatically updating timestamps.",
        code: "CREATE TRIGGER before_user_update BEFORE UPDATE ON users FOR EACH ROW SET NEW.updated_at = NOW();",
        lineByLine: ["BEFORE UPDATE triggers", "NEW.column can be modified"],
        simpleMeaning: "Run code automatically on data changes.",
        output: "Trigger created.",
        note: "Use for auditing, auto‑timestamps.",
        use_case: "Automatically set `last_modified` on row update, log changes to audit table, prevent invalid salary decreases."
      },
      {
        name: "44. Events (Scheduler)",
        description: "Events are SQL statements that run at scheduled times, like a cron job inside the database. They are useful for periodic maintenance (e.g., cleaning old data, generating reports, sending reminders). The event scheduler must be enabled (`SET GLOBAL event_scheduler = ON;`). Events can be one‑time or recurring.",
        code: "CREATE EVENT daily_cleanup ON SCHEDULE EVERY 1 DAY STARTS CURRENT_TIMESTAMP + INTERVAL 1 DAY DO DELETE FROM logs WHERE created < NOW() - INTERVAL 7 DAY;",
        lineByLine: ["ON SCHEDULE defines frequency", "DO action"],
        simpleMeaning: "Database cron job.",
        output: "Event created.",
        note: "Enable event_scheduler.",
        use_case: "Nightly report generation, archive old data, send email reminders."
      },
      {
        name: "45. Transactions (START, COMMIT, ROLLBACK)",
        description: "A transaction groups multiple SQL statements into an atomic unit: either all changes are committed or none are applied. Use `START TRANSACTION`, `COMMIT` to save, and `ROLLBACK` to undo. Transactions ensure data consistency (ACID). They are essential for operations that modify multiple tables (e.g., transferring money).",
        code: "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
        lineByLine: ["START TRANSACTION begins", "COMMIT saves", "ROLLBACK undoes"],
        simpleMeaning: "All or nothing.",
        output: "Transaction committed.",
        note: "Use for related updates.",
        use_case: "Transfer money between bank accounts, place an order (deduct stock + create order)."
      },
      {
        name: "46. Savepoints",
        description: "A savepoint marks a point within a transaction. You can roll back to a savepoint without undoing the entire transaction. This is useful for complex operations where you might want to undo part of the work but keep earlier changes. Savepoints are released when you commit or roll back the transaction.",
        code: "START TRANSACTION;\nINSERT INTO orders ...;\nSAVEPOINT before_items;\nINSERT INTO order_items ...;\n-- if error:\nROLLBACK TO SAVEPOINT before_items;\nCOMMIT;",
        lineByLine: ["SAVEPOINT marks a point", "ROLLBACK TO... reverts to that point"],
        simpleMeaning: "Partial rollback.",
        output: "Partial rollback.",
        note: "Savepoints are released on COMMIT/ROLLBACK.",
        use_case: "Complex operations where you might want to undo part but not all of the transaction (e.g., order header kept but items rolled back)."
      },
      {
        name: "47. Locking (Row‑level, Table‑level)",
        description: "Locks control concurrent access to data. InnoDB supports row‑level locks (more concurrency), while MyISAM uses table locks. Use `SELECT ... FOR UPDATE` to lock rows for update, preventing other transactions from modifying them until commit. `LOCK TABLES` acquires table‑level locks. Unlock with `UNLOCK TABLES`. Proper locking prevents race conditions.",
        code: "SELECT * FROM accounts WHERE id = 1 FOR UPDATE;\nLOCK TABLES accounts WRITE;\nUNLOCK TABLES;",
        lineByLine: ["FOR UPDATE exclusive row lock", "LOCK TABLES table lock", "UNLOCK TABLES"],
        simpleMeaning: "Prevent conflicts.",
        output: "Lock acquired.",
        note: "InnoDB uses row locks; MyISAM uses table locks.",
        use_case: "Prevent double booking of a seat, ensure stock consistency during high load."
      },
      {
        name: "48. User Management (CREATE USER, GRANT, REVOKE)",
        description: "User management controls who can access the database and what they can do. `CREATE USER` creates a new account, `GRANT` assigns privileges (e.g., `SELECT`, `INSERT`, `UPDATE`) on specific databases or tables. `REVOKE` removes privileges. Always follow the principle of least privilege: give only the minimum rights needed. `FLUSH PRIVILEGES` reloads the grant tables.",
        code: "CREATE USER 'app'@'localhost' IDENTIFIED BY 'pass';\nGRANT SELECT, INSERT ON mydb.* TO 'app'@'localhost';\nREVOKE INSERT ON mydb.* FROM 'app'@'localhost';\nDROP USER 'app'@'localhost';\nFLUSH PRIVILEGES;",
        lineByLine: ["CREATE USER", "GRANT privileges", "REVOKE", "DROP USER", "FLUSH"],
        simpleMeaning: "Control access to the database.",
        output: "User created / privileges granted.",
        note: "Always use strong passwords.",
        use_case: "Application‑specific database user with limited permissions, read‑only user for reporting."
      },
      {
        name: "49. Backup and Restore (mysqldump)",
        description: "`mysqldump` creates logical backups (SQL statements) of databases. It is portable and can be used to migrate data between MySQL servers. For InnoDB, use `--single-transaction` to get a consistent backup without locking tables. Restore with `mysql < backup.sql`. Always test your backups regularly to ensure they can be restored.",
        code: "mysqldump -u root -p --single-transaction mydb > backup.sql;\nmysql -u root -p mydb < backup.sql",
        lineByLine: ["Backup command", "Restore command"],
        simpleMeaning: "Save and restore database data.",
        output: "Backup created / restored.",
        note: "Use --single-transaction for InnoDB consistency.",
        use_case: "Daily database backup, migrate database to another server, copy production data to staging."
      },
      {
        name: "50. Performance Tuning (EXPLAIN, Slow Query Log)",
        description: "Performance tuning identifies and fixes slow queries. `EXPLAIN` shows the execution plan of a query, indicating whether it uses indexes, performs full table scans (`ALL`), or uses filesort. Enable the slow query log to capture queries that exceed a threshold (e.g., 2 seconds). Then analyse the log and optimise by adding indexes, rewriting queries, or adjusting server variables.",
        code: "EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';\nSET GLOBAL slow_query_log = ON;\nSET GLOBAL long_query_time = 2;",
        lineByLine: ["EXPLAIN shows plan", "Enable slow log", "Set threshold"],
        simpleMeaning: "Find slow queries and fix them.",
        output: "Query execution plan.",
        note: "Use indexes to optimize.",
        use_case: "Investigate slow product search, optimise report generation, find missing indexes."
      }
    ]
  },
 advanced: {
  title: "🚀 MYSQL ADVANCED: 60 EXPERT TOPICS",
  description: "Master MySQL with 60 advanced techniques: window functions, CTEs, transactions, isolation levels, stored procedures, triggers, indexing strategies, query optimization, partitioning, replication, security, and more – each with real‑world use cases.",
  topics: [
    {
      name: "1. Window Functions: ROW_NUMBER()",
      description: "ROW_NUMBER() assigns a unique sequential integer to each row within a partition. It restarts numbering for each partition. Unlike RANK, it never gives tied rows the same number. Commonly used to keep only the first row in each group (deduplication) or to create row numbers for pagination. Available from MySQL 8.0.",
      code: "SELECT name, dept, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) as rn FROM emp;",
      lineByLine: ["PARTITION BY dept groups rows by department", "ORDER BY salary DESC defines order within group"],
      simpleMeaning: "Assign consecutive numbers to rows per department.",
      output: "1,2,3... within each department",
      note: "MySQL 8.0+ required.",
      use_case: "Leaderboards (top 3 sales per region), removing duplicates (keep row with rn = 1)."
    },
    {
      name: "2. RANK() vs DENSE_RANK()",
      description: "RANK() leaves gaps when there are ties (e.g., 1,2,2,4), while DENSE_RANK() does not (1,2,2,3). Both are window functions used for ranking. Choose RANK for competition where gaps are acceptable; choose DENSE_RANK for consecutive prize distribution.",
      code: "SELECT salary, RANK() OVER w as rank_w_gaps, DENSE_RANK() OVER w as rank_no_gaps FROM sales WINDOW w AS (ORDER BY salary DESC);",
      lineByLine: ["RANK: 1,2,2,4", "DENSE_RANK: 1,2,2,3"],
      simpleMeaning: "Rank with or without gaps.",
      output: "Ranks with/without gaps",
      note: "Use RANK for competition, DENSE_RANK for prizes.",
      use_case: "Scholarship ranking (RANK), prize distribution (DENSE_RANK)."
    },
    {
      name: "3. LEAD() and LAG()",
      description: "LEAD() accesses data from a subsequent row within the same result set; LAG() accesses data from a previous row. They are useful for comparing current row with next/previous values, e.g., calculating differences, finding trends, or detecting changes.",
      code: "SELECT date, amount, LAG(amount) OVER w as prev, LEAD(amount) OVER w as next FROM sales WINDOW w AS (ORDER BY date);",
      lineByLine: ["LAG gets previous row's value", "LEAD gets next row's value"],
      simpleMeaning: "Compare with neighboring rows.",
      output: "Previous and next amounts.",
      note: "Useful for trend analysis.",
      use_case: "Stock price change analysis, website session duration comparison."
    },
    {
      name: "4. Running Totals with SUM() OVER",
      description: "SUM(...) OVER (ORDER BY ...) creates a cumulative (running) total. The default frame is `RANGE UNBOUNDED PRECEDING AND CURRENT ROW`, meaning all rows from the start of the partition up to the current row. This is perfect for year‑to‑date reports, inventory accumulation, or any progressive aggregation.",
      code: "SELECT date, amount, SUM(amount) OVER (ORDER BY date) as running_total FROM sales;",
      lineByLine: ["ORDER BY defines accumulation order", "SUM accumulates from start to current row"],
      simpleMeaning: "Cumulative sum over time.",
      output: "Increasing sum per row.",
      note: "Default frame ROWS UNBOUNDED PRECEDING.",
      use_case: "Financial year‑to‑date revenue, inventory accumulation."
    },
    {
      name: "5. Moving Averages (ROWS BETWEEN)",
      description: "Moving averages smooth out short‑term fluctuations. Use `ROWS BETWEEN N PRECEDING AND CURRENT ROW` to average the last N rows. This is common in financial charts, sensor data smoothing, and performance monitoring. Adjust the frame size to change the smoothing effect.",
      code: "SELECT date, amount, AVG(amount) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as ma3 FROM sales;",
      lineByLine: ["ROWS BETWEEN defines window frame", "AVG calculates average over that frame"],
      simpleMeaning: "3‑period moving average.",
      output: "Smoothed values.",
      note: "Use ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW for running total.",
      use_case: "Stock 20‑day simple moving average, website traffic smoothing."
    },
    {
      name: "6. NTILE() – Bucketing",
      description: "NTILE(N) divides rows into N approximately equal buckets (quartiles, deciles). It assigns a bucket number from 1 to N. If rows cannot be divided evenly, the first buckets get one extra row. This is ideal for percentile analysis, customer segmentation (top 25% spenders), or any ranking that requires equal‑sized groups.",
      code: "SELECT score, NTILE(4) OVER (ORDER BY score) as quartile FROM students;",
      lineByLine: ["NTILE(4) creates quartiles", "ORDER BY defines value order"],
      simpleMeaning: "Divide rows into quartiles.",
      output: "1,2,3,4 quartiles.",
      note: "Rows per bucket differ by at most 1.",
      use_case: "Customer segmentation (top 25% spenders), employee performance deciles."
    },
    {
      name: "7. FIRST_VALUE() and LAST_VALUE()",
      description: "FIRST_VALUE() returns the first value in the ordered window, LAST_VALUE() returns the last value (respecting the frame). By default, the frame is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, so LAST_VALUE() returns the current row’s value. To get the true last value of the partition, use `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`.",
      code: "SELECT dept, salary, FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary) as lowest, LAST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as highest FROM emp;",
      lineByLine: ["FIRST_VALUE = min", "LAST_VALUE = max with correct frame"],
      simpleMeaning: "Find first and last values per group.",
      output: "Lowest and highest salary in department.",
      note: "Default frame affects LAST_VALUE.",
      use_case: "First login date per user, last purchase per customer."
    },
    {
      name: "8. Recursive CTE – Hierarchy Traversal",
      description: "A recursive Common Table Expression (CTE) calls itself to traverse hierarchical data such as org charts, bill of materials, or category trees. It consists of an anchor member (starting point) and a recursive member (joins the CTE back to the table). Recursion depth is limited by `cte_max_recursion_depth` (default 1000).",
      code: "WITH RECURSIVE emp_tree AS (SELECT id, name, 1 level FROM emp WHERE mgr IS NULL UNION ALL SELECT e.id, e.name, level+1 FROM emp e JOIN emp_tree ON e.mgr = emp_tree.id) SELECT * FROM emp_tree;",
      lineByLine: ["Anchor: top‑level employees", "Recursive: join to find direct reports", "level increments each step"],
      simpleMeaning: "Walk the organisation tree.",
      output: "All employees with depth level.",
      note: "Watch for cycles – use cycle detection if needed.",
      use_case: "Organisation chart, product bill of materials, category tree with descendants."
    },
    {
      name: "9. Recursive CTE – Generate Date Range",
      description: "A recursive CTE can generate a series of dates between two points. This is useful for filling gaps in reports (e.g., days with no sales) or creating date dimensions. The anchor starts at the start date, and the recursive member adds one day until the end date is reached.",
      code: "WITH RECURSIVE dates AS (SELECT CURDATE() as dt UNION ALL SELECT dt + INTERVAL 1 DAY FROM dates WHERE dt < CURDATE() + INTERVAL 30 DAY) SELECT * FROM dates;",
      lineByLine: ["Start today", "Add one day repeatedly", "Stop after 30 days"],
      simpleMeaning: "Generate a calendar table on the fly.",
      output: "30 consecutive dates.",
      note: "Useful for missing data filling.",
      use_case: "Fill gaps in sales report (show zero for days without sales)."
    },
    {
      name: "10. Multiple CTEs (Chained)",
      description: "You can define multiple CTEs in a single `WITH` clause separated by commas. Each CTE can reference previous ones. This makes complex queries much more readable – each step is named and can be reused. The final `SELECT` uses the CTEs like ordinary tables.",
      code: "WITH sales_total AS (SELECT region, SUM(amount) as total FROM sales GROUP BY region), sales_avg AS (SELECT AVG(total) as avg_total FROM sales_total) SELECT * FROM sales_total CROSS JOIN sales_avg;",
      lineByLine: ["First CTE computes regional totals", "Second CTE uses first CTE", "Main query joins both"],
      simpleMeaning: "Break down complex logic into steps.",
      output: "Regional totals and overall average.",
      note: "CTEs are materialized once per query.",
      use_case: "Financial ratio calculations, multi‑stage reporting."
    },
    {
      name: "11. Transaction Isolation – READ UNCOMMITTED",
      description: "Lowest isolation level; allows dirty reads (reading uncommitted changes from other transactions). It gives the highest concurrency but no consistency. Use only for reporting where approximate data is acceptable, never for transactions that require accuracy.",
      code: "SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; START TRANSACTION; SELECT * FROM accounts; COMMIT;",
      lineByLine: ["Set low isolation", "Read may see uncommitted data"],
      simpleMeaning: "Fast but inconsistent.",
      output: "May see uncommitted changes.",
      note: "Only for reporting where dirty reads are acceptable.",
      use_case: "Approximate dashboards, large analytics queries that don't need strict accuracy."
    },
    {
      name: "12. Isolation – REPEATABLE READ",
      description: "Default isolation level for InnoDB. It prevents dirty reads and non‑repeatable reads but allows phantom rows (new rows inserted by other transactions that match the query condition). It uses snapshot read, meaning a transaction sees a consistent snapshot of the data at the start.",
      code: "START TRANSACTION; SELECT balance FROM accounts WHERE id=1; -- another transaction updates balance to 900; SELECT balance FROM accounts WHERE id=1; -- still 1000 (snapshot)",
      lineByLine: ["First read", "Second read sees snapshot, not new value"],
      simpleMeaning: "Consistent snapshot per transaction.",
      output: "Same value both times.",
      note: "May cause phantom rows.",
      use_case: "Banking transfers, order processing where you read the same data multiple times."
    },
    {
      name: "13. SERIALIZABLE Isolation",
      description: "Highest isolation level. It locks the range of rows, preventing phantom reads. This ensures full consistency but reduces concurrency. It is the safest but slowest level. Only use when absolute consistency is required, e.g., year‑end accounting.",
      code: "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE; START TRANSACTION; SELECT COUNT(*) FROM accounts; -- another transaction's INSERT will wait until commit",
      lineByLine: ["SERIALIZABLE", "Locks the gap to prevent new rows"],
      simpleMeaning: "Full consistency, but slow.",
      output: "No phantom rows.",
      note: "Use only when absolutely needed.",
      use_case: "Year‑end accounting closing, regulatory reports that require no phantom rows."
    },
    {
      name: "14. Deadlock Detection & Resolution",
      description: "A deadlock occurs when two or more transactions each hold locks that the others need, creating a cycle. MySQL automatically detects deadlocks and rolls back one transaction (the victim). Applications should retry the rolled‑back transaction. Use `SHOW ENGINE INNODB STATUS` to see deadlock information.",
      code: "-- Transaction A: UPDATE a; UPDATE b; -- Transaction B: UPDATE b; UPDATE a; -- One will get 'Deadlock found'",
      lineByLine: ["Cross update order leads to deadlock", "MySQL rolls back one"],
      simpleMeaning: "Cycle in lock acquisition.",
      output: "ERROR 1213: Deadlock found.",
      note: "Retry transaction after deadlock.",
      use_case: "High‑concurrency systems (airline booking, stock trading) – handle deadlock by retrying."
    },
    {
      name: "15. Explicit Row Lock – FOR UPDATE",
      description: "SELECT ... FOR UPDATE locks the selected rows exclusively, preventing other transactions from updating or deleting them until the transaction ends. It also blocks `SELECT ... FOR UPDATE` from other transactions. Use it to implement pessimistic locking, e.g., when you need to read a row and then update it based on the read value.",
      code: "START TRANSACTION; SELECT * FROM inventory WHERE product_id=1 FOR UPDATE; UPDATE inventory SET stock=stock-1 WHERE product_id=1; COMMIT;",
      lineByLine: ["FOR UPDATE acquires exclusive row lock", "Update releases lock on commit"],
      simpleMeaning: "Lock rows for update, prevent others.",
      output: "Row locked until commit.",
      note: "Use to avoid race conditions in critical updates.",
      use_case: "Prevent overselling inventory, booking the last seat, processing payment where balance must not change."
    },
    {
      name: "16. Gap Locks & Next‑Key Locks",
      description: "In REPEATABLE READ, InnoDB uses gap locks to prevent phantom rows. A gap lock locks the space between index values. A next‑key lock is a combination of a row lock and a gap lock. They ensure that a query executed multiple times within a transaction sees the same set of rows.",
      code: "SELECT * FROM products WHERE price BETWEEN 10 AND 20 FOR UPDATE; -- Locks the gap, no insert can occur in that range",
      lineByLine: ["Range lock on price between 10 and 20", "Gap lock prevents inserts into the gap"],
      simpleMeaning: "Lock range of values.",
      output: "Gap locked.",
      note: "Occurs in REPEATABLE READ.",
      use_case: "Prevent insertion of new products into a price range while running a report, ensuring consistency."
    },
    {
      name: "17. Stored Procedure with Cursor",
      description: "A cursor allows row‑by‑row processing of a result set inside a stored procedure. It is slow and should be avoided when set‑based operations are possible. However, cursors are useful for complex business rules that must be applied individually, such as sending emails or generating serial numbers.",
      code: "DECLARE cur CURSOR FOR SELECT id FROM users; DECLARE CONTINUE HANDLER FOR NOT FOUND SET done=1; OPEN cur; FETCH cur INTO uid; CLOSE cur;",
      lineByLine: ["Declare cursor", "Handler for end of data", "Open, fetch, close"],
      simpleMeaning: "Process rows one by one.",
      output: "Processed each row.",
      note: "Cursors are slow; favor set‑based operations.",
      use_case: "Sending personalised emails, generating invoices one by one."
    },
    {
      name: "18. Dynamic SQL in Stored Procedures",
      description: "Dynamic SQL allows building and executing SQL queries as strings. Use `PREPARE`, `EXECUTE`, and `DEALLOCATE PREPARE`. It is powerful for flexible queries (e.g., table name as parameter) but risky for SQL injection. Always validate input and avoid concatenating user‑supplied values directly.",
      code: "SET @sql = CONCAT('SELECT * FROM ', table_name); PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;",
      lineByLine: ["Build SQL string", "Prepare statement", "Execute", "Release"],
      simpleMeaning: "Execute constructed query.",
      output: "Dynamic result.",
      note: "Risk of SQL injection; use with caution.",
      use_case: "Admin panel where user can choose table name, dynamic pivot table generation."
    },
    {
      name: "19. Event Scheduler – Scheduled Jobs",
      description: "MySQL events run SQL statements at scheduled times, like a cron job. Enable the scheduler with `SET GLOBAL event_scheduler = ON;`. Events can be one‑time or recurring. They are ideal for maintenance tasks (e.g., deleting old logs), report generation, or data archiving.",
      code: "CREATE EVENT daily_cleanup ON SCHEDULE EVERY 1 DAY DO DELETE FROM logs WHERE created < NOW() - INTERVAL 7 DAY;",
      lineByLine: ["ON SCHEDULE defines frequency", "DO action"],
      simpleMeaning: "Database cron job.",
      output: "Event created.",
      note: "Enable event_scheduler first.",
      use_case: "Nightly report generation, archive old data, session cleanup."
    },
    {
      name: "20. Triggers with Multiple Events",
      description: "A single trigger can only be defined for one event type (INSERT, UPDATE, or DELETE). To handle multiple events, create separate triggers. You can specify the order in which multiple triggers on the same event run using `FOLLOWS` or `PRECEDES`.",
      code: "CREATE TRIGGER audit_ins AFTER INSERT ON users ...; CREATE TRIGGER audit_upd AFTER UPDATE ON users ...;",
      lineByLine: ["Separate triggers for INSERT and UPDATE"],
      simpleMeaning: "One trigger per event type.",
      output: "Multiple triggers.",
      note: "Use FOLLOWS/PRECEDES to control order.",
      use_case: "Audit log that captures old and new values across all DML operations."
    },
    {
      name: "21. Partial Index (WHERE clause)",
      description: "A partial index indexes only a subset of rows, defined by a `WHERE` condition. It saves space and improves performance for queries that target only that subset. Useful for indexing only active users, high‑value orders, or rows that are frequently queried.",
      code: "CREATE INDEX idx_active ON users(email) WHERE status = 'active';",
      lineByLine: ["WHERE clause limits indexed rows"],
      simpleMeaning: "Index only active users.",
      output: "Index created.",
      note: "Conditional indexing saves space.",
      use_case: "Index only active users (they log in often), index high‑value orders for faster reporting."
    },
    {
      name: "22. Functional Index (Expression)",
      description: "A functional index indexes the result of an expression or function. It is useful for case‑insensitive searches (`LOWER(column)`), extracting parts of a date (`YEAR(date)`), or any other transformation. Available from MySQL 8.0.13.",
      code: "CREATE INDEX idx_lower_email ON users((LOWER(email)));",
      lineByLine: ["Expression inside parentheses", "Index stores LOWER(email)"],
      simpleMeaning: "Speed up case‑insensitive searches.",
      output: "Index created.",
      note: "MySQL 8.0.13+.",
      use_case: "Case‑insensitive login (users type email in any case), indexed date parts."
    },
    {
      name: "23. Invisible Index",
      description: "An invisible index is maintained by MySQL but ignored by the query optimizer. It allows you to test the effect of removing an index without actually dropping it. If performance does not degrade, you can safely drop it. Useful for rolling out changes in production.",
      code: "CREATE INDEX idx_test ON users(age) INVISIBLE; ALTER TABLE users ALTER INDEX idx_test VISIBLE;",
      lineByLine: ["INVISIBLE makes optimizer ignore it", "VISIBLE re‑enables"],
      simpleMeaning: "Test index removal without dropping.",
      output: "Index created but ignored.",
      note: "Great for evaluating impact.",
      use_case: "Test whether dropping an index affects query performance without actually removing it."
    },
    {
      name: "24. Descending Index",
      description: "A descending index stores keys in descending order. It optimises queries with `ORDER BY column DESC` and can also speed up `ORDER BY column ASC` by scanning backwards. Without a descending index, MySQL may need to use filesort.",
      code: "CREATE INDEX idx_date_desc ON orders(order_date DESC);",
      lineByLine: ["DESC index"],
      simpleMeaning: "Optimize descending order queries.",
      output: "Index created.",
      note: "Useful for recent orders.",
      use_case: "Show newest orders first (order by date descending), latest user registrations."
    },
    {
      name: "25. Covering Index (Include Extra Columns)",
      description: "A covering index contains all columns needed for a query, so MySQL can answer the query entirely from the index without reading the table rows. This is extremely fast. Include both the filter columns and the selected columns in the index. The `EXPLAIN` output will show `Using index`.",
      code: "CREATE INDEX idx_covering ON products(category, price, name); SELECT name, price FROM products WHERE category = 'books';",
      lineByLine: ["Index includes category, price, name", "Query uses only those columns"],
      simpleMeaning: "Query answered directly from index.",
      output: "Using index (covering).",
      note: "Can be 10x faster.",
      use_case: "Large product catalogue queries that only need category, price, name – no table access."
    },
    {
      name: "26. Index Merge (Multiple Indexes)",
      description: "Index merge allows MySQL to use multiple indexes for a single query and combine the results (union, intersection). This can happen with `OR` conditions or certain `AND` conditions. Use `EXPLAIN` to see if index merge is used. It is an optimisation alternative to composite indexes.",
      code: "SELECT * FROM users WHERE last_name = 'Smith' OR city = 'Boston';",
      lineByLine: ["Index on last_name and city", "OR condition may trigger index merge union"],
      simpleMeaning: "Combine two indexes.",
      output: "Index merge union.",
      note: "Check EXPLAIN to verify.",
      use_case: "Search with optional filters where each filter has its own index."
    },
    {
      name: "27. Partitioning – RANGE",
      description: "Range partitioning splits a table into partitions based on a column value falling within a given range. It is ideal for time‑series data (e.g., by date). Queries that filter by the partition key can skip scanning irrelevant partitions (partition pruning). Dropping a partition is much faster than deleting rows.",
      code: "CREATE TABLE sales (id INT, sale_date DATE) PARTITION BY RANGE (YEAR(sale_date)) (PARTITION p2023 VALUES LESS THAN (2024), PARTITION p2024 VALUES LESS THAN (2025));",
      lineByLine: ["RANGE on year", "Boundaries define partitions"],
      simpleMeaning: "Split table by year.",
      output: "Table partitioned.",
      note: "DROP PARTITION is much faster than DELETE.",
      use_case: "Large log tables where old data is dropped by partition; sensor data."
    },
    {
      name: "28. Partitioning – LIST",
      description: "List partitioning assigns rows to partitions based on a column value matching one of a set of values. It is useful for categorical data, such as region or product category. Each partition contains rows where the column value is in a specified list.",
      code: "CREATE TABLE customers (id INT, region VARCHAR(10)) PARTITION BY LIST COLUMNS(region) (PARTITION pNA VALUES IN ('US','CA'), PARTITION pEU VALUES IN ('UK','FR'));",
      lineByLine: ["LIST COLUMNS with explicit values"],
      simpleMeaning: "Group by region.",
      output: "Partitions created.",
      note: "Use for region‑based sharding.",
      use_case: "Customer data partitioned by country for geo‑specific processing."
    },
    {
      name: "29. Partitioning – HASH",
      description: "Hash partitioning distributes rows evenly across a specified number of partitions based on a hash of the partition key. It is useful when you want to spread data evenly without any logical grouping. `HASH` partitioning works well for keys with many distinct values.",
      code: "CREATE TABLE users (id INT) PARTITION BY HASH(id) PARTITIONS 4;",
      lineByLine: ["HASH(id)", "4 partitions"],
      simpleMeaning: "Evenly distribute rows.",
      output: "Table partitioned.",
      note: "No partition pruning on non‑partition key.",
      use_case: "Evenly distribute large user table across disks, load balancing for high ingestion."
    },
    {
      name: "30. Partition Management – ADD/DROP/REORGANIZE",
      description: "You can manage partitions online: add new partitions (`ADD PARTITION`), drop old partitions (`DROP PARTITION`), reorganise partitions (`REORGANIZE PARTITION`). Dropping a partition is extremely fast because it removes the data files. Use `REORGANIZE` to split or merge partitions.",
      code: "ALTER TABLE sales ADD PARTITION (PARTITION p2025 VALUES LESS THAN (2026)); ALTER TABLE sales DROP PARTITION p2023;",
      lineByLine: ["Add partition for new year", "Drop old partition"],
      simpleMeaning: "Online partition management.",
      output: "Partition altered.",
      note: "REORGANIZE for splitting/merging.",
      use_case: "Rolling window of data (keep last 12 months, drop older partitions), add future partition."
    },
    {
      name: "31. EXPLAIN Format = JSON",
      description: "`EXPLAIN FORMAT=JSON` returns the execution plan as structured JSON data, which is easier to parse programmatically. It includes detailed cost estimates and access information. Useful for automated performance analysis and comparing plans across different versions.",
      code: "EXPLAIN FORMAT=JSON SELECT * FROM users WHERE email = 'john@example.com';",
      lineByLine: ["JSON output"],
      simpleMeaning: "Detailed plan in JSON.",
      output: "Cost, table access, etc.",
      note: "Use scripts to parse.",
      use_case: "Automated performance analysis, comparing query plans across versions."
    },
    {
      name: "32. Optimizer Hints",
      description: "Optimizer hints give instructions to the query optimizer, such as which index to use (`INDEX`), join order (`JOIN_ORDER`), or whether to use a full table scan (`NO_INDEX`). Use them sparingly, as they may become outdated when data distribution changes.",
      code: "SELECT /*+ INDEX(users idx_email) */ * FROM users WHERE email = 'john@example.com';",
      lineByLine: ["/*+ INDEX(...) */ hint"],
      simpleMeaning: "Force specific index.",
      output: "Uses specified index.",
      note: "Use sparingly; may become obsolete.",
      use_case: "When the optimizer chooses a suboptimal plan due to skewed data distribution."
    },
    {
      name: "33. Query Cache (Legacy) vs Buffer Pool",
      description: "InnoDB buffer pool caches data and indexes in memory, speeding up reads. It is the primary mechanism for performance. The query cache (removed in MySQL 8.0) cached whole result sets – it often caused more overhead than benefit. Focus on tuning buffer pool size (70‑80% of RAM) and using covering indexes.",
      code: "SHOW VARIABLES LIKE 'innodb_buffer_pool_size'; SET GLOBAL innodb_buffer_pool_size = 2*1024*1024*1024;",
      lineByLine: ["Current size", "Set to 2GB"],
      simpleMeaning: "Cache data in memory.",
      output: "Buffer pool resized.",
      note: "70–80% of RAM recommended.",
      use_case: "Speed up read‑heavy workloads, e‑commerce product listing, high‑traffic dashboards."
    },
    {
      name: "34. Slow Query Log Tuning",
      description: "The slow query log captures queries that take longer than `long_query_time`. It is the first tool for identifying problematic queries. After enabling it, use `mysqldumpslow` or `pt‑query‑digest` to analyse the log. Also enable `log_queries_not_using_indexes` to catch queries that miss indexes.",
      code: "SET GLOBAL slow_query_log = ON; SET GLOBAL long_query_time = 2; SET GLOBAL log_queries_not_using_indexes = ON;",
      lineByLine: ["Enable slow log", "Threshold 2 seconds", "Also log no‑index queries"],
      simpleMeaning: "Identify slow queries.",
      output: "Slow queries recorded.",
      note: "Use mysqldumpslow for analysis.",
      use_case: "Production performance monitoring, finding queries that need optimisation."
    },
    {
      name: "35. Performance Schema (Detailed Metrics)",
      description: "Performance Schema provides low‑level metrics about server execution: statements, stages, waits, transactions, and table I/O. It is critical for deep performance analysis. Use `setup_consumers` and `setup_instruments` to enable specific instrumentation. The `sys` schema provides user‑friendly views on top of Performance Schema.",
      code: "SELECT * FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 5;",
      lineByLine: ["Top consumers by total wait time"],
      simpleMeaning: "Find most expensive queries.",
      output: "Normalized queries with total time.",
      note: "Enabled by default in MySQL 8.",
      use_case: "Deep performance analysis, historical trend of slow queries, identifying regressions."
    },
    {
      name: "36. Multi‑Source Replication",
      description: "Multi‑source replication allows a slave to replicate from multiple masters simultaneously. Each master has its own replication channel. It is useful for aggregating data from several shards or branches into a central reporting database. Available from MySQL 5.7.",
      code: "CHANGE MASTER TO MASTER_HOST='master1' FOR CHANNEL 'channel1'; CHANGE MASTER TO MASTER_HOST='master2' FOR CHANNEL 'channel2'; START SLAVE;",
      lineByLine: ["Separate channels for each master", "Start all"],
      simpleMeaning: "Replicate from multiple masters.",
      output: "Replication started.",
      note: "MySQL 5.7+.",
      use_case: "Central reporting database that combines data from multiple regional databases."
    },
    {
      name: "37. Group Replication (InnoDB Cluster)",
      description: "Group replication provides high availability and automatic failover. It is a multi‑master (or single‑primary) replication plugin that uses a consensus algorithm. InnoDB Cluster builds on it, offering a complete high‑availability solution with MySQL Router. Use for critical systems requiring 99.99% uptime.",
      code: "INSTALL PLUGIN group_replication SONAME 'group_replication.so'; SET GLOBAL group_replication_bootstrap_group=ON; START GROUP_REPLICATION;",
      lineByLine: ["Install plugin", "Bootstrap first node", "Start replication"],
      simpleMeaning: "High availability with automatic failover.",
      output: "Group formed.",
      note: "Supports conflict detection.",
      use_case: "Mission‑critical applications (banking, e‑commerce) requiring continuous availability."
    },
    {
      name: "38. Clone Plugin (Fast Provisioning)",
      description: "The clone plugin creates a physical snapshot (clone) of a remote MySQL instance. It is faster than mysqldump and restores data in a consistent state without stopping the source. Useful for quickly provisioning replicas or test environments. Available from MySQL 8.0.17.",
      code: "INSTALL PLUGIN clone SONAME 'mysql_clone.so'; CLONE INSTANCE FROM 'user'@'host':port IDENTIFIED BY 'password';",
      lineByLine: ["Install plugin", "Clone remote instance"],
      simpleMeaning: "Rapid provisioning.",
      output: "Clone completed.",
      note: "MySQL 8.0.17+.",
      use_case: "Quickly create replica or test environment from production without copying files."
    },
    {
      name: "39. Backup – mysqldump with --where",
      description: "The `--where` option in `mysqldump` allows you to dump only rows that satisfy a condition. This is useful for archiving old data or exporting subsets (e.g., last year's orders) without writing custom scripts.",
      code: "mysqldump --where=\"created > '2024-01-01'\" mydb users > recent_users.sql",
      lineByLine: ["--where filters rows", "Output SQL file"],
      simpleMeaning: "Partial backup by condition.",
      output: "SQL file with filtered rows.",
      note: "Useful for archival.",
      use_case: "Archive only last year's orders, export users from a specific region."
    },
    {
      name: "40. Point‑in‑Time Recovery (PITR)",
      description: "Point‑in‑Time Recovery uses full backup plus binary logs to restore data to any moment in time. First restore the full backup, then apply binary logs up to the desired time using `mysqlbinlog --start‑datetime` / `--stop‑datetime`. This is the primary method to recover from accidental data deletion or corruption.",
      code: "mysqlbinlog --start-datetime=\"2024-12-31 23:55:00\" --stop-datetime=\"2025-01-01 00:05:00\" binlog.000001 | mysql",
      lineByLine: ["--start‑datetime and --stop‑datetime", "Apply to restored backup"],
      simpleMeaning: "Undo mistakes up to exact time.",
      output: "Data replayed to specified time.",
      note: "Require full backup + binary logs.",
      use_case: "Undo accidental data deletion, recover from user error up to exact minute."
    },
    {
      name: "41. Role‑Based Access Control",
      description: "Roles are named collections of privileges. You can create a role, grant privileges to it, and then grant the role to multiple users. This simplifies privilege management, especially when many users share the same permissions. Available from MySQL 8.0.",
      code: "CREATE ROLE 'app_read'; GRANT SELECT ON mydb.* TO 'app_read'; GRANT 'app_read' TO 'user1'@'localhost'; SET DEFAULT ROLE 'app_read' FOR 'user1'@'localhost';",
      lineByLine: ["Create role", "Grant privileges to role", "Assign role to user", "Set as default"],
      simpleMeaning: "Manage privileges via roles.",
      output: "Role assigned.",
      note: "MySQL 8.0+.",
      use_case: "Simplify privilege management for many users (e.g., read‑only role for analysts)."
    },
    {
      name: "42. Password Expiration & Lock",
      description: "MySQL can enforce password expiration and account locking. Use `PASSWORD EXPIRE INTERVAL` to set a maximum lifetime for a password. Use `ACCOUNT LOCK` / `UNLOCK` to temporarily disable an account. These features improve security compliance.",
      code: "CREATE USER 'temp'@'localhost' IDENTIFIED BY 'pass' PASSWORD EXPIRE INTERVAL 90 DAY; ALTER USER 'temp'@'localhost' ACCOUNT LOCK;",
      lineByLine: ["Password expires after 90 days", "Lock account"],
      simpleMeaning: "Enforce security policies.",
      output: "User created/updated.",
      note: "UNLOCK after verification.",
      use_case: "Compliance with security policies (PCI‑DSS), temporary accounts."
    },
    {
      name: "43. Audit Log Plugin",
      description: "The audit log plugin (MySQL Enterprise) logs all database activity. For community edition, you can enable the `general_log` (but it logs everything and hurts performance). Use general_log only temporarily for debugging. For production, consider third‑party solutions or Enterprise edition.",
      code: "SET GLOBAL general_log = ON; SET GLOBAL log_output = 'TABLE'; SELECT * FROM mysql.general_log;",
      lineByLine: ["Enable general log", "Log to table", "View logs"],
      simpleMeaning: "Capture all SQL activity.",
      output: "Queries logged.",
      note: "Performance heavy; use temporarily.",
      use_case: "Investigate suspicious activity, debug application queries temporarily."
    },
    {
      name: "44. Connection Pooling (Using ProxySQL)",
      description: "ProxySQL is a high‑performance proxy that pools database connections, distributes read/write traffic, and provides query caching. It can dramatically reduce connection overhead in applications with many short‑lived connections. It also helps with load balancing and failover.",
      code: "-- Install ProxySQL, configure MySQL servers, point application to ProxySQL",
      lineByLine: ["ProxySQL manages connection pool", "Routes queries to backend"],
      simpleMeaning: "Scale to thousands of connections.",
      output: "Pooled connections.",
      note: "ProxySQL recommended.",
      use_case: "SaaS applications with many customers, reduce connection overhead, load balancing."
    },
    {
      name: "45. MySQL Router (InnoDB Cluster)",
      description: "MySQL Router is a lightweight middleware that routes client connections to the appropriate server in an InnoDB Cluster. It hides the cluster topology and automatically redirects traffic when the primary fails. It supports read/write splitting to offload reads to secondaries.",
      code: "mysqlrouter --bootstrap root@localhost:3306 --user=mysqlrouter",
      lineByLine: ["Bootstrap router from cluster", "Creates configuration"],
      simpleMeaning: "Application‑side routing for high availability.",
      output: "Router configured.",
      note: "Integrates with group replication.",
      use_case: "Seamless failover for applications that do not support connection retry logic."
    },
    {
      name: "46. InnoDB Data Compression",
      description: "InnoDB table compression reduces storage footprint by compressing data pages. It can lower I/O but increases CPU usage. Use `ROW_FORMAT=COMPRESSED` and specify `KEY_BLOCK_SIZE` (e.g., 8 for 8KB pages). Compression works well for text‑heavy tables with large fields.",
      code: "CREATE TABLE comp (id INT, text LONGTEXT) ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=8;",
      lineByLine: ["ROW_FORMAT=COMPRESSED", "KEY_BLOCK_SIZE sets page size"],
      simpleMeaning: "Reduce storage footprint.",
      output: "Table compressed.",
      note: "CPU overhead for compression.",
      use_case: "Large historical tables with old data, reducing storage costs in cloud environments."
    },
    {
      name: "47. Partitioning – Subpartitioning",
      description: "Subpartitioning (composite partitioning) partitions a partition further. For example, you can partition by `RANGE` on year and then subpartition by `HASH` on month. This allows very fine‑grained data management but increases complexity. Test performance before using.",
      code: "CREATE TABLE logs (ts DATETIME) PARTITION BY RANGE (YEAR(ts)) SUBPARTITION BY HASH(MONTH(ts)) SUBPARTITIONS 12;",
      lineByLine: ["RANGE main partition by year", "Each subpartition by month hash"],
      simpleMeaning: "Two‑level partitioning.",
      output: "Table with subpartitions.",
      note: "Complex; test performance.",
      use_case: "Very large tables where you need to prune by both year and month efficiently."
    },
    {
      name: "48. InnoDB Full‑Text Search",
      description: "InnoDB supports full‑text indexes, enabling natural language search on text columns. Use `MATCH(column) AGAINST('words')` to get relevance‑based results. It is much more powerful than `LIKE` with wildcards. Create a `FULLTEXT` index on the column(s).",
      code: "CREATE TABLE articles (body TEXT, FULLTEXT(body)); SELECT * FROM articles WHERE MATCH(body) AGAINST('database' IN NATURAL LANGUAGE MODE);",
      lineByLine: ["Full‑text index", "MATCH...AGAINST for search"],
      simpleMeaning: "Relevance‑based search.",
      output: "Sorted by relevance.",
      note: "Better than LIKE %word%.",
      use_case: "Blog search, product description search, document management system."
    },
    {
      name: "49. Performance Schema Wait Events",
      description: "Wait events represent the time a thread spends waiting for a resource (disk I/O, lock, network, etc.). The `events_waits_summary_global_by_event_name` table shows aggregated data. Use it to identify I/O bottlenecks, lock contention, or network latency.",
      code: "SELECT EVENT_NAME, COUNT_STAR, SUM_TIMER_WAIT FROM performance_schema.events_waits_summary_global_by_event_name ORDER BY SUM_TIMER_WAIT DESC LIMIT 5;",
      lineByLine: ["Event name", "Number of waits", "Total wait time"],
      simpleMeaning: "Find top wait events.",
      output: "Top wait events (io/file, lock).",
      note: "Enable wait instrumentation.",
      use_case: "Identify disk I/O bottlenecks, lock contention, network latency issues."
    },
    {
      name: "50. Using sys Schema for Monitoring",
      description: "The `sys` schema provides user‑friendly views on Performance Schema data. For example, `sys.statement_analysis` shows the most expensive queries, `sys.schema_table_statistics` shows table I/O, and `sys.session` shows current connections. It is included by default in MySQL 5.7+.",
      code: "SELECT * FROM sys.statement_analysis ORDER BY total_latency DESC LIMIT 5; SELECT * FROM sys.schema_table_statistics ORDER BY rows_fetched DESC LIMIT 5;",
      lineByLine: ["statement_analysis: top queries", "schema_table_statistics: active tables"],
      simpleMeaning: "Simplified performance views.",
      output: "Normalized statements with latency.",
      note: "sys schema provided by default.",
      use_case: "Daily performance monitoring, finding slow queries quickly, identifying hot tables."
    },
    {
      name: "51. Change Data Capture with Binlog",
      description: "Binary logs can be used for change data capture (CDC). Tools like Debezium or Maxwell read the binlog and send row changes to Kafka, RabbitMQ, etc. This enables real‑time data pipelines without impacting the source database heavily.",
      code: "SHOW MASTER STATUS; SHOW BINLOG EVENTS IN 'mysql-bin.000001' LIMIT 10;",
      lineByLine: ["Show current binlog position", "View events"],
      simpleMeaning: "Capture data changes in real time.",
      output: "Binlog events.",
      note: "Require binlog_format = ROW.",
      use_case: "Real‑time replication to data lake, cache invalidation, search index updates."
    },
    {
      name: "52. Statement Digest & Query Normalization",
      description: "Performance Schema normalizes similar queries (e.g., same structure with different literals) into a digest. The `events_statements_summary_by_digest` table groups them together, making it easy to identify hotspots regardless of parameter values. This is essential for query tuning.",
      code: "SELECT DIGEST_TEXT, COUNT_STAR, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 5;",
      lineByLine: ["Normalized query text", "Execution count", "Total time"],
      simpleMeaning: "Find most time‑consuming query patterns.",
      output: "Digest statistics.",
      note: "Enabled by default.",
      use_case: "Identify which query pattern is causing load, ignoring parameter differences."
    },
    {
      name: "53. Data Masking / De‑identification",
      description: "MySQL Enterprise provides data masking functions. For community edition, you can create custom functions to anonymise data (e.g., partial email, last‑4 digits). Use views or stored procedures to present masked data to non‑privileged users while keeping original data intact.",
      code: "CREATE FUNCTION mask_email(email VARCHAR(100)) RETURNS VARCHAR(100) DETERMINISTIC RETURN CONCAT(LEFT(email, 2), '****', RIGHT(email, 4));",
      lineByLine: ["Custom masking function", "Returns partially hidden email"],
      simpleMeaning: "Hide sensitive information.",
      output: "Masked data.",
      note: "Not for encryption, only for presentation.",
      use_case: "GDPR compliance: show only partial email to support staff."
    },
    {
      name: "54. Encryption at Rest (TDE)",
      description: "Transparent Data Encryption (TDE) encrypts database files on disk. MySQL Enterprise supports tablespace encryption. Data is encrypted before writing and decrypted when read, without application changes. Use the `keyring` plugin to manage encryption keys.",
      code: "INSTALL PLUGIN keyring_file SONAME 'keyring_file.so'; ALTER TABLE users ENCRYPTION='Y';",
      lineByLine: ["Install keyring plugin", "Encrypt table"],
      simpleMeaning: "Encrypt data at rest.",
      output: "Table encrypted.",
      note: "Enterprise edition.",
      use_case: "Compliance with data protection regulations (e.g., GDPR, HIPAA)."
    },
    {
      name: "55. Optimizer Statistics (Histograms)",
      description: "MySQL 8.0 introduced histograms, which store data distribution information for columns. They help the optimizer choose better plans, especially for columns with skewed data. Use `ANALYZE TABLE ... UPDATE HISTOGRAM` to create histograms.",
      code: "ANALYZE TABLE users UPDATE HISTOGRAM ON age WITH 100 BUCKETS;",
      lineByLine: ["Create histogram on age column", "100 buckets"],
      simpleMeaning: "Improved cardinality estimates.",
      output: "Histogram created.",
      note: "Use for columns with non‑uniform distribution.",
      use_case: "Queries that filter on columns with skewed data (e.g., status, country)."
    },
    {
      name: "56. Resource Groups",
      description: "Resource groups allow you to assign threads (connections) to specific groups with different CPU priorities. This is useful for isolating heavy reporting queries from OLTP traffic. You can set the thread priority and which CPUs the group can use.",
      code: "CREATE RESOURCE GROUP reporting TYPE = USER VCPU = 2-3 THREAD_PRIORITY = 10; SET RESOURCE GROUP reporting FOR 'connection_id';",
      lineByLine: ["Create resource group", "Assign connection to group"],
      simpleMeaning: "Isolate workloads.",
      output: "Resource group assigned.",
      note: "Linux only, requires affinity support.",
      use_case: "Dedicate few CPU cores for reporting, prevent them from starving OLTP queries."
    },
    {
      name: "57. Invisible Columns",
      description: "Invisible columns are hidden from `SELECT *` and `INSERT` without explicit column list. They are useful for adding metadata columns without breaking existing applications. You can make a column visible again via `ALTER TABLE ... MODIFY ... VISIBLE`.",
      code: "ALTER TABLE users ADD COLUMN updated_at TIMESTAMP INVISIBLE;",
      lineByLine: ["INVISIBLE column"],
      simpleMeaning: "Hidden from `*` queries.",
      output: "Table altered.",
      note: "Useful for versioning.",
      use_case: "Add `last_modified` column without changing application SELECT * statements."
    },
    {
      name: "58. Secondary Engine (HeatWave)",
      description: "MySQL HeatWave is an in‑memory query accelerator for MySQL Database Service on OCI. It transparently offloads analytic queries to a secondary engine, dramatically speeding up complex scans and joins. It does not require code changes.",
      code: "ALTER TABLE orders SECONDARY_ENGINE = RAPID; SELECT /*+ SET_VAR(use_secondary_engine=FORCED) */ COUNT(*) FROM orders WHERE region = 'EU';",
      lineByLine: ["Set secondary engine", "Hint to use secondary engine"],
      simpleMeaning: "Accelerate analytics.",
      output: "Query processed by HeatWave.",
      note: "OCI only.",
      use_case: "Real‑time analytics on transactional data without separate ETL."
    },
    {
      name: "59. Multi‑Factor Authentication (MFA)",
      description: "MySQL Enterprise supports multi‑factor authentication, allowing users to authenticate using two or more methods (e.g., password + FIDO device). This enhances security for privileged accounts.",
      code: "CREATE USER 'secure'@'localhost' IDENTIFIED WITH authentication_fido; ALTER USER 'secure'@'localhost' ADD '2factor' IDENTIFIED WITH mysql_native_password BY 'pass';",
      lineByLine: ["Create user with FIDO first factor", "Add password second factor"],
      simpleMeaning: "Two‑factor authentication.",
      output: "User created.",
      note: "Enterprise edition.",
      use_case: "Protect admin accounts with hardware security keys."
    },
    {
      name: "60. JavaScript Stored Programs (MySQL 8.0.34+)",
      description: "MySQL 8.0.34 introduced support for JavaScript stored programs (experimental). You can write stored procedures and functions in JavaScript, which run inside the MySQL server using the GraalVM engine. This allows using JavaScript libraries and logic directly in the database.",
      code: "CREATE FUNCTION js_hello() RETURNS VARCHAR(10) LANGUAGE JAVASCRIPT AS $$ return 'Hello'; $$;",
      lineByLine: ["JS function", "Return string"],
      simpleMeaning: "Write stored functions in JavaScript.",
      output: "Function created.",
      note: "Experimental, require GraalVM.",
      use_case: "Reuse existing JavaScript business logic inside the database."
    }
  ]
  }
};

export default learning;