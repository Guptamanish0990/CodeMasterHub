export const interview = {
  fresher: [
    {
      question: "What is the difference between CHAR and VARCHAR?",
      answer: "CHAR is fixed-length, VARCHAR is variable-length. CHAR is faster for short fixed-length strings, VARCHAR saves space for variable-length data. CHAR always uses defined length, VARCHAR uses actual length + 1-2 bytes.",
      example: "CREATE TABLE test (\n  fixed CHAR(10),     -- Always uses 10 bytes\n  variable VARCHAR(10) -- Uses actual length + 1 byte\n);\nINSERT INTO test VALUES ('Hi', 'Hi');\nSELECT LENGTH(fixed), LENGTH(variable) FROM test;",
      output: "CHAR uses 10 bytes; VARCHAR uses 2-3 bytes (2 for 'Hi' plus 1 byte length)",
      note: "Trailing spaces are removed from VARCHAR but preserved in CHAR."
    },
    {
      question: "Explain different types of JOINs with examples.",
      answer: "INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from left table, matching from right (NULL if no match). RIGHT JOIN is opposite. FULL JOIN returns all rows from both tables.",
      example: "-- INNER JOIN (only matching)\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\n-- LEFT JOIN (all users)\nSELECT users.name, orders.total\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;",
      output: "INNER JOIN shows only users with orders; LEFT JOIN shows all users (NULL for those without orders)",
      note: "LEFT JOIN is more common than RIGHT JOIN. Use table aliases for readability."
    },
    {
      question: "What is a primary key? A foreign key?",
      answer: "Primary key uniquely identifies each row in a table (must be unique and NOT NULL). Foreign key links to primary key of another table, maintaining referential integrity.",
      example: "CREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  amount DECIMAL(10,2),\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);",
      output: "users.id is primary key; orders.user_id references users.id",
      note: "Foreign keys require InnoDB engine. ON DELETE CASCADE automatically deletes related rows."
    },
    {
      question: "What is the purpose of the GROUP BY clause?",
      answer: "GROUP BY groups rows with same values into summary rows, used with aggregate functions (COUNT, SUM, AVG, MAX, MIN). HAVING filters groups after aggregation.",
      example: "SELECT department, \n       COUNT(*) as employee_count, \n       AVG(salary) as avg_salary,\n       MAX(salary) as highest_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5\nORDER BY avg_salary DESC;",
      output: "Shows each department with employee count, average salary, and highest salary (only departments with >5 employees)",
      note: "HAVING filters groups; WHERE filters rows before grouping. HAVING can use aggregate functions, WHERE cannot."
    },
    {
      question: "What is the difference between DELETE and TRUNCATE?",
      answer: "DELETE removes rows one by one (slower), can use WHERE clause, can be rolled back, triggers fire. TRUNCATE removes all rows instantly (faster), cannot use WHERE, cannot be rolled back, resets AUTO_INCREMENT, triggers don't fire.",
      example: "-- DELETE (can rollback)\nSTART TRANSACTION;\nDELETE FROM users WHERE age < 18;\nSELECT COUNT(*) FROM users; -- Fewer rows\nROLLBACK; -- Restores deleted rows\n\n-- TRUNCATE (cannot rollback in most cases)\nTRUNCATE TABLE users; -- Removes all rows, resets AUTO_INCREMENT",
      output: "DELETE logs each row deletion; TRUNCATE deallocates data pages",
      note: "TRUNCATE is DDL (Data Definition Language), DELETE is DML (Data Manipulation Language)."
    },
    {
      question: "What are indexes and why are they important?",
      answer: "Indexes are data structures (usually B-trees) that speed up data retrieval. They work like book indexes, allowing MySQL to find rows without scanning entire table.",
      example: "-- Create index on frequently searched column\nCREATE INDEX idx_email ON users(email);\n\n-- Composite index for multiple columns\nCREATE INDEX idx_name_age ON users(last_name, first_name, age);\n\n-- Unique index prevents duplicates\nCREATE UNIQUE INDEX idx_email_unique ON users(email);\n\n-- Query becomes much faster\nSELECT * FROM users WHERE email = 'john@example.com';",
      output: "Queries using indexed columns are exponentially faster, especially on large tables",
      note: "Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE. Each index takes storage space."
    },
    {
      question: "What is a stored procedure?",
      answer: "A stored procedure is precompiled SQL code stored in the database, can accept parameters, contain multiple statements, and reduce network traffic.",
      example: "DELIMITER //\nCREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50), OUT emp_count INT)\nBEGIN\n    SELECT * FROM employees WHERE department = dept_name;\n    SELECT COUNT(*) INTO emp_count FROM employees WHERE department = dept_name;\nEND //\nDELIMITER ;\n\nCALL GetEmployeesByDept('Engineering', @count);\nSELECT @count;",
      output: "Returns all employees in department and sets count output parameter",
      note: "Procedures improve security and performance by reducing network round trips."
    },
    {
      question: "What is the difference between WHERE and HAVING?",
      answer: "WHERE filters rows before GROUP BY (can't use aggregate functions). HAVING filters groups after GROUP BY (can use aggregate functions).",
      example: "-- WHERE filters individual rows\nSELECT department, salary\nFROM employees\nWHERE salary > 50000;\n\n-- HAVING filters groups\nSELECT department, AVG(salary) as avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 60000;",
      output: "WHERE: rows with salary > 50000; HAVING: departments with average salary > 60000",
      note: "HAVING without GROUP BY behaves like WHERE. Use WHERE when possible for better performance."
    },
    {
      question: "What are aggregate functions? Name common ones.",
      answer: "Aggregate functions perform calculations on multiple rows and return single value. Common: COUNT (count rows), SUM (total), AVG (average), MAX (maximum), MIN (minimum), GROUP_CONCAT (concatenate values).",
      example: "SELECT \n    COUNT(*) as total_employees,\n    SUM(salary) as payroll_total,\n    AVG(salary) as average_salary,\n    MAX(salary) as highest_paid,\n    MIN(salary) as lowest_paid,\n    GROUP_CONCAT(DISTINCT department ORDER BY department) as departments\nFROM employees\nWHERE active = 1;",
      output: "Returns single row with all calculated values",
      note: "NULL values are ignored by most aggregate functions except COUNT(*)."
    },
    {
      question: "What is a view? When would you use one?",
      answer: "A view is a virtual table based on a SELECT query. It doesn't store data physically but shows data from underlying tables. Used for security (hide columns), simplicity (complex queries), and consistency.",
      example: "-- Create view hiding salary\nCREATE VIEW public_employees AS\nSELECT id, name, department, hire_date\nFROM employees\nWHERE active = 1;\n\n-- Create view with JOIN\nCREATE VIEW employee_details AS\nSELECT e.name, e.department, d.manager_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id;\n\n-- Use view like a table\nSELECT * FROM public_employees;",
      output: "View shows only authorized columns and rows",
      note: "Some views are updatable (simple views). Views can be indexed (materialized views in MySQL 8.0+)."
    },
    {
      question: "What is normalization? What are its benefits?",
      answer: "Normalization organizes database to reduce redundancy and improve integrity. Benefits: less storage, easier updates, prevents anomalies. Normal forms: 1NF (no repeating groups), 2NF (no partial dependencies), 3NF (no transitive dependencies).",
      example: "-- Denormalized (bad)\nCREATE TABLE orders_bad (\n    order_id INT,\n    customer_name VARCHAR(100),\n    customer_address VARCHAR(200),\n    product1 VARCHAR(50),\n    product2 VARCHAR(50)\n);\n\n-- Normalized (good)\nCREATE TABLE customers (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    address VARCHAR(200)\n);\n\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    customer_id INT,\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\n);\n\nCREATE TABLE order_items (\n    order_id INT,\n    product_name VARCHAR(50),\n    FOREIGN KEY (order_id) REFERENCES orders(id)\n);",
      output: "Normalized design eliminates duplication and prevents update anomalies",
      note: "Some denormalization is acceptable for performance reasons (read-heavy applications)."
    },
    {
      question: "What is a transaction? Explain ACID properties.",
      answer: "Transaction groups SQL statements into atomic unit. ACID: Atomicity (all or nothing), Consistency (valid data only), Isolation (concurrent transactions don't interfere), Durability (committed changes survive crashes).",
      example: "START TRANSACTION;\n\n-- Transfer money\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 2;\n\n-- Check if valid\nSELECT * FROM accounts WHERE balance < 0;\n\n-- If all good\nCOMMIT;\n\n-- If problem\nROLLBACK;",
      output: "Both updates succeed together or both are undone",
      note: "InnoDB supports transactions; MyISAM does not. Use ROLLBACK to cancel transaction."
    },
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      answer: "INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns all rows from left table, with NULL for right table when no match exists.",
      example: "-- INNER JOIN (only customers who ordered)\nSELECT c.name, o.order_date\nFROM customers c\nINNER JOIN orders o ON c.id = o.customer_id;\n\n-- LEFT JOIN (all customers, even without orders)\nSELECT c.name, o.order_date\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;",
      output: "INNER JOIN returns 100 rows; LEFT JOIN returns 1000 rows (900 with NULL order_date)",
      note: "LEFT JOIN commonly used to find missing records (WHERE right_table.id IS NULL)."
    },
    {
      question: "What are constraints? List types with examples.",
      answer: "Constraints enforce rules on data. Types: PRIMARY KEY (unique identifier), FOREIGN KEY (referential integrity), UNIQUE (no duplicates), NOT NULL (required), CHECK (condition), DEFAULT (default value).",
      example: "CREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    sku VARCHAR(20) UNIQUE NOT NULL,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10,2) CHECK (price > 0),\n    status ENUM('active','inactive') DEFAULT 'active',\n    category_id INT,\n    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL\n);",
      output: "Table with all constraint types applied",
      note: "CHECK constraints fully supported in MySQL 8.0.15+. Previous versions parsed but didn't enforce."
    },
    {
      question: "What is a subquery? When would you use one?",
      answer: "Subquery is a SELECT query inside another query. Used in WHERE (comparison), FROM (derived table), SELECT (scalar value), EXISTS (existence check).",
      example: "-- Subquery in WHERE\nSELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Subquery in FROM\nSELECT dept_id, avg_salary\nFROM (SELECT dept_id, AVG(salary) as avg_salary \n      FROM employees GROUP BY dept_id) as dept_avg\nWHERE avg_salary > 50000;\n\n-- Correlated subquery\nSELECT name\nFROM employees e1\nWHERE salary > (SELECT AVG(salary) \n                FROM employees e2 \n                WHERE e2.dept_id = e1.dept_id);",
      output: "Subquery returns values used by outer query",
      note: "Correlated subqueries run row-by-row (slower). EXISTS often faster than IN for large datasets."
    },
    {
      question: "What is the purpose of the DISTINCT keyword?",
      answer: "DISTINCT removes duplicate rows from result set, returning only unique combinations of selected columns.",
      example: "-- Single column\nSELECT DISTINCT department FROM employees;\n\n-- Multiple columns\nSELECT DISTINCT department, city FROM employees;\n\n-- With COUNT\nSELECT COUNT(DISTINCT department) FROM employees;\n\n-- Alternative using GROUP BY\nSELECT department, city FROM employees GROUP BY department, city;",
      output: "Returns unique department names only",
      note: "DISTINCT works on entire row, not just first column. Can be slow on large datasets."
    },
    {
      question: "What is the difference between UNION and UNION ALL?",
      answer: "UNION removes duplicate rows, sorts results (slower). UNION ALL keeps all rows, including duplicates (faster).",
      example: "-- UNION (deduplicates, sorts)\nSELECT name FROM customers\nUNION\nSELECT name FROM suppliers;\n\n-- UNION ALL (no deduplication, no sort)\nSELECT name FROM customers\nUNION ALL\nSELECT name FROM suppliers;\n\n-- Must have same number of columns\n(SELECT id, name, 'Customer' as type FROM customers)\nUNION\n(SELECT id, name, 'Supplier' as type FROM suppliers);",
      output: "UNION returns unique names; UNION ALL returns all names including duplicates",
      note: "Use UNION ALL when duplicates are acceptable - it's much faster."
    },
    {
      question: "What are wildcards in LIKE? Provide examples.",
      answer: "Wildcards: % (any number of characters), _ (single character). Used with LIKE for pattern matching.",
      example: "-- % wildcard (any characters)\nSELECT * FROM users WHERE name LIKE 'J%';    -- Starts with J\nSELECT * FROM users WHERE name LIKE '%son';  -- Ends with son\nSELECT * FROM users WHERE name LIKE '%ohn%'; -- Contains ohn\n\n-- _ wildcard (single character)\nSELECT * FROM users WHERE name LIKE 'J___';   -- J followed by 3 chars\nSELECT * FROM users WHERE name LIKE '_o%';    -- Second letter is o\n\n-- Escape special characters\nSELECT * FROM products WHERE name LIKE '100\\%' ESCAPE '\\\\';",
      output: "Returns rows matching pattern (e.g., John, Johnson, Jonathan)",
      note: "Leading % prevents index use, causing full table scans."
    },
    {
      question: "What is AUTO_INCREMENT? How does it work?",
      answer: "AUTO_INCREMENT generates unique integer values automatically for primary keys. Values increase sequentially, can be customized with starting value and increment.",
      example: "-- Basic usage\nCREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100)\n);\n\nINSERT INTO users (name) VALUES ('Alice'), ('Bob');\n-- id values: 1, 2\n\n-- Get last inserted ID\nSELECT LAST_INSERT_ID();\n\n-- Set starting value\nALTER TABLE users AUTO_INCREMENT = 1000;\n\n-- MySQL 8.0+ with custom increment\nCREATE TABLE orders (\n    id INT PRIMARY KEY AUTO_INCREMENT\n) AUTO_INCREMENT = 1000;",
      output: "id values automatically assigned (1,2,3... or custom starting value)",
      note: "TRUNCATE resets AUTO_INCREMENT; DELETE does not. Only one AUTO_INCREMENT column per table."
    },
    {
      question: "What is the purpose of the LIMIT clause?",
      answer: "LIMIT restricts number of rows returned. Can be used with OFFSET for pagination. ORDER BY recommended for predictable results.",
      example: "-- First 10 rows\nSELECT * FROM products LIMIT 10;\n\n-- Pagination: rows 11-20\nSELECT * FROM products LIMIT 10 OFFSET 10;\nSELECT * FROM products LIMIT 10, 10;  -- Alternate syntax\n\n-- With ORDER BY (requires consistent sorting)\nSELECT * FROM products ORDER BY id LIMIT 10;\n\n-- Get top 5 highest paid\nSELECT name, salary FROM employees ORDER BY salary DESC LIMIT 5;\n\n-- Random sample\nSELECT * FROM users ORDER BY RAND() LIMIT 10;",
      output: "Returns limited number of rows (e.g., first 10 products)",
      note: "Large OFFSET values are inefficient - use WHERE with indexed columns instead."
    },
    {
      question: "What is a NULL value? How to handle it?",
      answer: "NULL represents missing/unknown data, not zero or empty string. Use IS NULL/IS NOT NULL for comparison (not =). Functions: COALESCE (first non-NULL), IFNULL (handle NULL), NULLIF (returns NULL if equal).",
      example: "-- Check for NULL\nSELECT * FROM users WHERE email IS NULL;\nSELECT * FROM users WHERE email IS NOT NULL;\n\n-- Handle NULL in output\nSELECT name, COALESCE(phone, 'No phone') as contact FROM users;\nSELECT name, IFNULL(phone, 'No phone') as contact FROM users;\n\n-- NULL in calculations (result is NULL)\nSELECT salary + bonus FROM employees; -- NULL if bonus is NULL\nSELECT salary + COALESCE(bonus, 0) FROM employees; -- Treats NULL as 0\n\n-- NULLIF (returns NULL if equal)\nSELECT NULLIF(status, 'inactive') FROM users; -- Returns NULL for inactive",
      output: "NULL values handled appropriately (e.g., 'No phone' for missing numbers)",
      note: "NULL != NULL. COUNT(column) excludes NULLs, COUNT(*) includes them."
    },
    {
      question: "What are date/time functions? Give examples.",
      answer: "Common functions: NOW() (current datetime), CURDATE() (current date), CURTIME() (current time), DATE_ADD/DATE_SUB (add/subtract intervals), DATEDIFF (difference in days), DATE_FORMAT (format output).",
      example: "-- Current date/time\nSELECT NOW(), CURDATE(), CURTIME();\n\n-- Date arithmetic\nSELECT DATE_ADD(NOW(), INTERVAL 7 DAY);\nSELECT DATE_SUB(NOW(), INTERVAL 1 MONTH);\nSELECT NOW() + INTERVAL 1 YEAR;\n\n-- Date difference\nSELECT DATEDIFF('2024-12-31', '2024-01-01'); -- 365\nSELECT TIMESTAMPDIFF(YEAR, hire_date, NOW()) as years_employed FROM employees;\n\n-- Extract parts\nSELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW()), HOUR(NOW());\nSELECT DAYOFWEEK(NOW()), WEEK(NOW()), QUARTER(NOW());\n\n-- Format dates\nSELECT DATE_FORMAT(NOW(), '%W, %M %d, %Y'); -- 'Monday, January 15, 2024'\nSELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'); -- '2024-01-15 14:30:00'",
      output: "Returns formatted dates, calculated intervals, or extracted date parts",
      note: "DATE type stores only date, DATETIME includes time, TIMESTAMP has timezone conversion."
    },
    {
      question: "What is a trigger? When would you use one?",
      answer: "Trigger is stored SQL that executes automatically on INSERT, UPDATE, DELETE. Used for auditing, validation, automatic updates, maintaining derived data.",
      example: "CREATE TABLE audit_log (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    table_name VARCHAR(50),\n    action VARCHAR(20),\n    old_data JSON,\n    new_data JSON,\n    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nDELIMITER //\nCREATE TRIGGER before_user_update\nBEFORE UPDATE ON users\nFOR EACH ROW\nBEGIN\n    SET NEW.updated_at = NOW();\n    \n    IF NEW.salary < OLD.salary * 0.9 THEN\n        SIGNAL SQLSTATE '45000' \n        SET MESSAGE_TEXT = 'Salary cannot drop more than 10%';\n    END IF;\nEND//\n\nCREATE TRIGGER after_user_update\nAFTER UPDATE ON users\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log(table_name, action, old_data, new_data)\n    VALUES ('users', 'UPDATE', \n            JSON_OBJECT('salary', OLD.salary),\n            JSON_OBJECT('salary', NEW.salary));\nEND//\nDELIMITER ;",
      output: "Trigger fires automatically when specified event occurs",
      note: "Triggers can cause performance issues; use judiciously. BEFORE triggers can modify NEW values."
    },
    {
      question: "What is the difference between MyISAM and InnoDB?",
      answer: "InnoDB: ACID compliant, transactions, foreign keys, row-level locking, crash recovery (default). MyISAM: No transactions, table-level locking, faster for read-heavy, full-text search (legacy).",
      example: "-- InnoDB (recommended)\nCREATE TABLE users_innodb (\n    id INT PRIMARY KEY,\n    name VARCHAR(100)\n) ENGINE=InnoDB;\n\n-- MyISAM (legacy, read-heavy with no writes)\nCREATE TABLE logs_myisam (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    message TEXT,\n    created_at TIMESTAMP\n) ENGINE=MyISAM;\n\n-- Check engine\nSELECT table_name, engine FROM information_schema.tables \nWHERE table_schema = 'mydb';\n\n-- Convert table to InnoDB\nALTER TABLE myisam_table ENGINE=InnoDB;",
      output: "InnoDB supports transactions and foreign keys; MyISAM does not",
      note: "Use InnoDB for most applications. MyISAM only for special cases (read-only, full-text before MySQL 5.6)."
    },
    {
      question: "What are SQL injection attacks? How to prevent them?",
      answer: "SQL injection is inserting malicious SQL into queries. Prevent using prepared statements, parameterized queries, input validation, escaping, and stored procedures.",
      example: "-- Vulnerable (concatenation)\nSET @sql = CONCAT('SELECT * FROM users WHERE name = ''', @user_input, '''');\nPREPARE stmt FROM @sql;\nEXECUTE stmt;\n\n-- Safe (prepared statement with parameter)\nPREPARE stmt FROM 'SELECT * FROM users WHERE name = ?';\nEXECUTE stmt USING @user_input;\n\n-- Safe in application code (PHP PDO example)\n$stmt = $pdo->prepare('SELECT * FROM users WHERE name = ?');\n$stmt->execute([$user_input]);\n\n-- Safe (stored procedure with parameter)\nCREATE PROCEDURE GetUser(IN user_name VARCHAR(100))\nBEGIN\n    SELECT * FROM users WHERE name = user_name;\nEND;\nCALL GetUser(@user_input);",
      output: "User input treated as data, not executable code",
      note: "Never concatenate user input directly into SQL. Always use parameterized queries."
    },
    {
      question: "What is a self-join? Provide an example.",
      answer: "Self-join joins a table to itself using aliases. Used for hierarchical data (employees with managers), finding duplicates, or comparing rows within same table.",
      example: "-- Finding employees and their managers\nSELECT e.name as employee, m.name as manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;\n\n-- Finding duplicate emails\nSELECT a.email, a.id, b.id\nFROM users a\nJOIN users b ON a.email = b.email AND a.id < b.id;\n\n-- Finding pairs of customers in same city\nSELECT c1.name as customer1, c2.name as customer2, c1.city\nFROM customers c1\nJOIN customers c2 ON c1.city = c2.city AND c1.id < c2.id;\n\n-- Finding employees earning more than department average\nSELECT e1.name, e1.salary, e1.department\nFROM employees e1\nWHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department = e1.department);",
      output: "Shows each employee with their manager name from same table",
      note: "Always use table aliases with self-joins (e1, e2). Condition a.id < b.id prevents duplicate pairs."
    },
    {
      question: "What is the difference between UNION and JOIN?",
      answer: "UNION stacks rows vertically (appends result sets). JOIN combines columns horizontally (matches rows based on conditions). UNION requires same number of columns, JOIN requires related columns.",
      example: "-- UNION (vertical stacking)\nSELECT name, email FROM customers\nUNION\nSELECT name, email FROM suppliers;\n\n-- JOIN (horizontal combining)\nSELECT c.name, o.order_date, o.total\nFROM customers c\nJOIN orders o ON c.id = o.customer_id;\n\n-- Combine both (JOIN then UNION)\n(SELECT c.name, 'Customer' as type FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.id HAVING COUNT(o.id) > 5)\nUNION\n(SELECT s.name, 'Supplier' as type FROM suppliers s WHERE s.rating > 4);",
      output: "UNION: more rows; JOIN: more columns",
      note: "UNION removes duplicates; UNION ALL is faster. JOIN increases column count."
    },
    {
      question: "What is a composite index? When would you use one?",
      answer: "Composite index indexes multiple columns together. Order matters: most selective column first. Used for queries filtering on multiple columns.",
      example: "-- Composite index (last_name, first_name, age)\nCREATE INDEX idx_name_age ON users(last_name, first_name, age);\n\n-- Uses index efficiently\nSELECT * FROM users WHERE last_name = 'Smith';  -- Uses first column\nSELECT * FROM users WHERE last_name = 'Smith' AND first_name = 'John';  -- Uses first two\nSELECT * FROM users WHERE last_name = 'Smith' AND age = 30;  -- Uses first column only\n\n-- Cannot use index (skips first column)\nSELECT * FROM users WHERE first_name = 'John';  -- Full scan\n\n-- Partial use (index can still help)\nSELECT * FROM users WHERE last_name LIKE 'S%';  -- Range scan on first column\n\n-- Covering index (includes all needed columns)\nCREATE INDEX idx_covering ON users(last_name, first_name, email);\nSELECT last_name, first_name, email FROM users WHERE last_name = 'Smith';  -- No table access",
      output: "Query uses composite index when filtering on leftmost columns",
      note: "Order columns from most selective to least selective. Composite index can be used as index on leftmost prefix."
    },
    {
      question: "What are database transactions? Explain with example.",
      answer: "Transaction groups multiple SQL operations into single atomic unit. Use START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT for partial rollbacks.",
      example: "START TRANSACTION;\n\n-- Insert order\nINSERT INTO orders (customer_id, order_date, status) \nVALUES (1, NOW(), 'pending');\nSET @order_id = LAST_INSERT_ID();\n\n-- Insert order items\nINSERT INTO order_items (order_id, product_id, quantity, price)\nVALUES (@order_id, 101, 2, 25.00);\n\n-- Update inventory\nUPDATE products SET stock = stock - 2 WHERE product_id = 101;\n\n-- Check if any issues (stock went negative)\nIF (SELECT stock FROM products WHERE product_id = 101) < 0 THEN\n    ROLLBACK;\n    SELECT 'Transaction failed - insufficient stock' as message;\nELSE\n    COMMIT;\n    SELECT 'Order completed successfully' as message;\nEND IF;\n\n-- With savepoint for partial rollback\nSTART TRANSACTION;\nINSERT INTO users (name, email) VALUES ('John', 'john@test.com');\nSAVEPOINT user_created;\nINSERT INTO user_settings (user_id, theme) VALUES (LAST_INSERT_ID(), 'dark');\n-- Something wrong\nROLLBACK TO SAVEPOINT user_created;  -- Keeps user, rolls back setting\nCOMMIT;",
      output: "All changes applied together or none applied at all",
      note: "Transactions ensure data consistency. InnoDB supports row-level locking within transactions."
    },
    {
      question: "How do you optimize a slow query?",
      answer: "Use EXPLAIN to analyze. Add indexes, avoid SELECT *, avoid functions in WHERE, use appropriate JOIN types, limit result sets, avoid correlated subqueries, normalize/denormalize appropriately.",
      example: "-- Step 1: Analyze query\nEXPLAIN SELECT * FROM orders WHERE YEAR(order_date) = 2024;\n\n-- Problem: YEAR() prevents index use. Solution: use range\nEXPLAIN SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';\n\n-- Step 2: Add index if needed\nCREATE INDEX idx_order_date ON orders(order_date);\n\n-- Step 3: Rewrite query\n-- Bad\nSELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 1000);\n\n-- Good (use EXISTS)\nSELECT * FROM users u \nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.amount > 1000);\n\n-- Step 4: Use covering index\nCREATE INDEX idx_covering ON orders(user_id, amount, order_date);\n\n-- Step 5: Limit results\nSELECT * FROM large_table ORDER BY id LIMIT 100;\n\n-- Step 6: Use EXPLAIN ANALYZE (MySQL 8.0.18+)\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@example.com';",
      output: "Query execution improved from seconds to milliseconds",
      note: "Always check EXPLAIN before optimizing. Sometimes rewriting query is better than adding indexes."
    },
    {
      question: "What is the difference between CHAR and VARCHAR?",
      answer: "CHAR is fixed-length, VARCHAR is variable-length. CHAR is faster for short fixed-length strings, VARCHAR saves space for variable-length data. CHAR always uses defined length, VARCHAR uses actual length + 1-2 bytes.",
      example: "CREATE TABLE test (\n  fixed CHAR(10),     -- Always uses 10 bytes\n  variable VARCHAR(10) -- Uses actual length + 1 byte\n);\nINSERT INTO test VALUES ('Hi', 'Hi');\nSELECT LENGTH(fixed), LENGTH(variable) FROM test;",
      output: "CHAR uses 10 bytes; VARCHAR uses 2-3 bytes (2 for 'Hi' plus 1 byte length)",
      note: "Trailing spaces are removed from VARCHAR but preserved in CHAR."
    },
    {
      question: "Explain different types of JOINs with examples.",
      answer: "INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from left table, matching from right (NULL if no match). RIGHT JOIN is opposite. FULL JOIN returns all rows from both tables.",
      example: "-- INNER JOIN (only matching)\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\n-- LEFT JOIN (all users)\nSELECT users.name, orders.total\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;",
      output: "INNER JOIN shows only users with orders; LEFT JOIN shows all users (NULL for those without orders)",
      note: "LEFT JOIN is more common than RIGHT JOIN. Use table aliases for readability."
    },
    {
      question: "What is a primary key? A foreign key?",
      answer: "Primary key uniquely identifies each row in a table (must be unique and NOT NULL). Foreign key links to primary key of another table, maintaining referential integrity.",
      example: "CREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  amount DECIMAL(10,2),\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);",
      output: "users.id is primary key; orders.user_id references users.id",
      note: "Foreign keys require InnoDB engine. ON DELETE CASCADE automatically deletes related rows."
    },
    {
      question: "What is the purpose of the GROUP BY clause?",
      answer: "GROUP BY groups rows with same values into summary rows, used with aggregate functions (COUNT, SUM, AVG, MAX, MIN). HAVING filters groups after aggregation.",
      example: "SELECT department, \n       COUNT(*) as employee_count, \n       AVG(salary) as avg_salary,\n       MAX(salary) as highest_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5\nORDER BY avg_salary DESC;",
      output: "Shows each department with employee count, average salary, and highest salary (only departments with >5 employees)",
      note: "HAVING filters groups; WHERE filters rows before grouping. HAVING can use aggregate functions, WHERE cannot."
    },
    {
      question: "What is the difference between DELETE and TRUNCATE?",
      answer: "DELETE removes rows one by one (slower), can use WHERE clause, can be rolled back, triggers fire. TRUNCATE removes all rows instantly (faster), cannot use WHERE, cannot be rolled back, resets AUTO_INCREMENT, triggers don't fire.",
      example: "-- DELETE (can rollback)\nSTART TRANSACTION;\nDELETE FROM users WHERE age < 18;\nSELECT COUNT(*) FROM users; -- Fewer rows\nROLLBACK; -- Restores deleted rows\n\n-- TRUNCATE (cannot rollback in most cases)\nTRUNCATE TABLE users; -- Removes all rows, resets AUTO_INCREMENT",
      output: "DELETE logs each row deletion; TRUNCATE deallocates data pages",
      note: "TRUNCATE is DDL (Data Definition Language), DELETE is DML (Data Manipulation Language)."
    },
    {
      question: "What are indexes and why are they important?",
      answer: "Indexes are data structures (usually B-trees) that speed up data retrieval. They work like book indexes, allowing MySQL to find rows without scanning entire table.",
      example: "-- Create index on frequently searched column\nCREATE INDEX idx_email ON users(email);\n\n-- Composite index for multiple columns\nCREATE INDEX idx_name_age ON users(last_name, first_name, age);\n\n-- Unique index prevents duplicates\nCREATE UNIQUE INDEX idx_email_unique ON users(email);\n\n-- Query becomes much faster\nSELECT * FROM users WHERE email = 'john@example.com';",
      output: "Queries using indexed columns are exponentially faster, especially on large tables",
      note: "Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE. Each index takes storage space."
    },
    {
      question: "What is a stored procedure?",
      answer: "A stored procedure is precompiled SQL code stored in the database, can accept parameters, contain multiple statements, and reduce network traffic.",
      example: "DELIMITER //\nCREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50), OUT emp_count INT)\nBEGIN\n    SELECT * FROM employees WHERE department = dept_name;\n    SELECT COUNT(*) INTO emp_count FROM employees WHERE department = dept_name;\nEND //\nDELIMITER ;\n\nCALL GetEmployeesByDept('Engineering', @count);\nSELECT @count;",
      output: "Returns all employees in department and sets count output parameter",
      note: "Procedures improve security and performance by reducing network round trips."
    },
    {
      question: "What is the difference between WHERE and HAVING?",
      answer: "WHERE filters rows before GROUP BY (can't use aggregate functions). HAVING filters groups after GROUP BY (can use aggregate functions).",
      example: "-- WHERE filters individual rows\nSELECT department, salary\nFROM employees\nWHERE salary > 50000;\n\n-- HAVING filters groups\nSELECT department, AVG(salary) as avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 60000;",
      output: "WHERE: rows with salary > 50000; HAVING: departments with average salary > 60000",
      note: "HAVING without GROUP BY behaves like WHERE. Use WHERE when possible for better performance."
    },
    {
      question: "What are aggregate functions? Name common ones.",
      answer: "Aggregate functions perform calculations on multiple rows and return single value. Common: COUNT (count rows), SUM (total), AVG (average), MAX (maximum), MIN (minimum), GROUP_CONCAT (concatenate values).",
      example: "SELECT \n    COUNT(*) as total_employees,\n    SUM(salary) as payroll_total,\n    AVG(salary) as average_salary,\n    MAX(salary) as highest_paid,\n    MIN(salary) as lowest_paid,\n    GROUP_CONCAT(DISTINCT department ORDER BY department) as departments\nFROM employees\nWHERE active = 1;",
      output: "Returns single row with all calculated values",
      note: "NULL values are ignored by most aggregate functions except COUNT(*)."
    },
    {
      question: "What is a view? When would you use one?",
      answer: "A view is a virtual table based on a SELECT query. It doesn't store data physically but shows data from underlying tables. Used for security (hide columns), simplicity (complex queries), and consistency.",
      example: "-- Create view hiding salary\nCREATE VIEW public_employees AS\nSELECT id, name, department, hire_date\nFROM employees\nWHERE active = 1;\n\n-- Create view with JOIN\nCREATE VIEW employee_details AS\nSELECT e.name, e.department, d.manager_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id;\n\n-- Use view like a table\nSELECT * FROM public_employees;",
      output: "View shows only authorized columns and rows",
      note: "Some views are updatable (simple views). Views can be indexed (materialized views in MySQL 8.0+)."
    },
    {
      question: "What is normalization? What are its benefits?",
      answer: "Normalization organizes database to reduce redundancy and improve integrity. Benefits: less storage, easier updates, prevents anomalies. Normal forms: 1NF (no repeating groups), 2NF (no partial dependencies), 3NF (no transitive dependencies).",
      example: "-- Denormalized (bad)\nCREATE TABLE orders_bad (\n    order_id INT,\n    customer_name VARCHAR(100),\n    customer_address VARCHAR(200),\n    product1 VARCHAR(50),\n    product2 VARCHAR(50)\n);\n\n-- Normalized (good)\nCREATE TABLE customers (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    address VARCHAR(200)\n);\n\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    customer_id INT,\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\n);\n\nCREATE TABLE order_items (\n    order_id INT,\n    product_name VARCHAR(50),\n    FOREIGN KEY (order_id) REFERENCES orders(id)\n);",
      output: "Normalized design eliminates duplication and prevents update anomalies",
      note: "Some denormalization is acceptable for performance reasons (read-heavy applications)."
    },
    {
      question: "What is a transaction? Explain ACID properties.",
      answer: "Transaction groups SQL statements into atomic unit. ACID: Atomicity (all or nothing), Consistency (valid data only), Isolation (concurrent transactions don't interfere), Durability (committed changes survive crashes).",
      example: "START TRANSACTION;\n\n-- Transfer money\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 2;\n\n-- Check if valid\nSELECT * FROM accounts WHERE balance < 0;\n\n-- If all good\nCOMMIT;\n\n-- If problem\nROLLBACK;",
      output: "Both updates succeed together or both are undone",
      note: "InnoDB supports transactions; MyISAM does not. Use ROLLBACK to cancel transaction."
    },
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      answer: "INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns all rows from left table, with NULL for right table when no match exists.",
      example: "-- INNER JOIN (only customers who ordered)\nSELECT c.name, o.order_date\nFROM customers c\nINNER JOIN orders o ON c.id = o.customer_id;\n\n-- LEFT JOIN (all customers, even without orders)\nSELECT c.name, o.order_date\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;",
      output: "INNER JOIN returns 100 rows; LEFT JOIN returns 1000 rows (900 with NULL order_date)",
      note: "LEFT JOIN commonly used to find missing records (WHERE right_table.id IS NULL)."
    },
    {
      question: "What are constraints? List types with examples.",
      answer: "Constraints enforce rules on data. Types: PRIMARY KEY (unique identifier), FOREIGN KEY (referential integrity), UNIQUE (no duplicates), NOT NULL (required), CHECK (condition), DEFAULT (default value).",
      example: "CREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    sku VARCHAR(20) UNIQUE NOT NULL,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10,2) CHECK (price > 0),\n    status ENUM('active','inactive') DEFAULT 'active',\n    category_id INT,\n    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL\n);",
      output: "Table with all constraint types applied",
      note: "CHECK constraints fully supported in MySQL 8.0.15+. Previous versions parsed but didn't enforce."
    },
    {
      question: "What is a subquery? When would you use one?",
      answer: "Subquery is a SELECT query inside another query. Used in WHERE (comparison), FROM (derived table), SELECT (scalar value), EXISTS (existence check).",
      example: "-- Subquery in WHERE\nSELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Subquery in FROM\nSELECT dept_id, avg_salary\nFROM (SELECT dept_id, AVG(salary) as avg_salary \n      FROM employees GROUP BY dept_id) as dept_avg\nWHERE avg_salary > 50000;\n\n-- Correlated subquery\nSELECT name\nFROM employees e1\nWHERE salary > (SELECT AVG(salary) \n                FROM employees e2 \n                WHERE e2.dept_id = e1.dept_id);",
      output: "Subquery returns values used by outer query",
      note: "Correlated subqueries run row-by-row (slower). EXISTS often faster than IN for large datasets."
    },
    {
      question: "What is the purpose of the DISTINCT keyword?",
      answer: "DISTINCT removes duplicate rows from result set, returning only unique combinations of selected columns.",
      example: "-- Single column\nSELECT DISTINCT department FROM employees;\n\n-- Multiple columns\nSELECT DISTINCT department, city FROM employees;\n\n-- With COUNT\nSELECT COUNT(DISTINCT department) FROM employees;\n\n-- Alternative using GROUP BY\nSELECT department, city FROM employees GROUP BY department, city;",
      output: "Returns unique department names only",
      note: "DISTINCT works on entire row, not just first column. Can be slow on large datasets."
    },
    {
      question: "What is the difference between UNION and UNION ALL?",
      answer: "UNION removes duplicate rows, sorts results (slower). UNION ALL keeps all rows, including duplicates (faster).",
      example: "-- UNION (deduplicates, sorts)\nSELECT name FROM customers\nUNION\nSELECT name FROM suppliers;\n\n-- UNION ALL (no deduplication, no sort)\nSELECT name FROM customers\nUNION ALL\nSELECT name FROM suppliers;\n\n-- Must have same number of columns\n(SELECT id, name, 'Customer' as type FROM customers)\nUNION\n(SELECT id, name, 'Supplier' as type FROM suppliers);",
      output: "UNION returns unique names; UNION ALL returns all names including duplicates",
      note: "Use UNION ALL when duplicates are acceptable - it's much faster."
    },
    {
      question: "What are wildcards in LIKE? Provide examples.",
      answer: "Wildcards: % (any number of characters), _ (single character). Used with LIKE for pattern matching.",
      example: "-- % wildcard (any characters)\nSELECT * FROM users WHERE name LIKE 'J%';    -- Starts with J\nSELECT * FROM users WHERE name LIKE '%son';  -- Ends with son\nSELECT * FROM users WHERE name LIKE '%ohn%'; -- Contains ohn\n\n-- _ wildcard (single character)\nSELECT * FROM users WHERE name LIKE 'J___';   -- J followed by 3 chars\nSELECT * FROM users WHERE name LIKE '_o%';    -- Second letter is o\n\n-- Escape special characters\nSELECT * FROM products WHERE name LIKE '100\\%' ESCAPE '\\\\';",
      output: "Returns rows matching pattern (e.g., John, Johnson, Jonathan)",
      note: "Leading % prevents index use, causing full table scans."
    },
    {
      question: "What is AUTO_INCREMENT? How does it work?",
      answer: "AUTO_INCREMENT generates unique integer values automatically for primary keys. Values increase sequentially, can be customized with starting value and increment.",
      example: "-- Basic usage\nCREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100)\n);\n\nINSERT INTO users (name) VALUES ('Alice'), ('Bob');\n-- id values: 1, 2\n\n-- Get last inserted ID\nSELECT LAST_INSERT_ID();\n\n-- Set starting value\nALTER TABLE users AUTO_INCREMENT = 1000;\n\n-- MySQL 8.0+ with custom increment\nCREATE TABLE orders (\n    id INT PRIMARY KEY AUTO_INCREMENT\n) AUTO_INCREMENT = 1000;",
      output: "id values automatically assigned (1,2,3... or custom starting value)",
      note: "TRUNCATE resets AUTO_INCREMENT; DELETE does not. Only one AUTO_INCREMENT column per table."
    },
    {
      question: "What is the purpose of the LIMIT clause?",
      answer: "LIMIT restricts number of rows returned. Can be used with OFFSET for pagination. ORDER BY recommended for predictable results.",
      example: "-- First 10 rows\nSELECT * FROM products LIMIT 10;\n\n-- Pagination: rows 11-20\nSELECT * FROM products LIMIT 10 OFFSET 10;\nSELECT * FROM products LIMIT 10, 10;  -- Alternate syntax\n\n-- With ORDER BY (requires consistent sorting)\nSELECT * FROM products ORDER BY id LIMIT 10;\n\n-- Get top 5 highest paid\nSELECT name, salary FROM employees ORDER BY salary DESC LIMIT 5;\n\n-- Random sample\nSELECT * FROM users ORDER BY RAND() LIMIT 10;",
      output: "Returns limited number of rows (e.g., first 10 products)",
      note: "Large OFFSET values are inefficient - use WHERE with indexed columns instead."
    }
  ],
  
  experienced: [
    {
      question: "How do indexes improve query performance? What are their downsides?",
      answer: "Indexes are data structures (B-trees) that speed up data retrieval but slow down writes and use extra storage. Each index can improve SELECT queries by 100-1000x but adds overhead to INSERT/UPDATE/DELETE operations.",
      example: "-- Without index - full table scan (slow)\nEXPLAIN SELECT * FROM users WHERE email = 'john@example.com';\n-- type: ALL, rows: 1000000\n\n-- With index - fast lookup\nCREATE INDEX idx_email ON users(email);\nEXPLAIN SELECT * FROM users WHERE email = 'john@example.com';\n-- type: ref, rows: 1\n\n-- Composite index for multiple conditions\nCREATE INDEX idx_last_first ON users(last_name, first_name);\nSELECT * FROM users WHERE last_name = 'Smith' AND first_name = 'John';\n\n-- Covering index (includes all columns needed)\nCREATE INDEX idx_covering ON users(last_name, first_name, email);\nSELECT last_name, first_name, email FROM users WHERE last_name = 'Smith';\n\n-- Downsides: slower writes\nINSERT INTO users (email, name) VALUES ('new@test.com', 'New User');\n-- Updates all indexes (now 4 indexes to update)",
      output: "Index reduces query time from seconds to milliseconds but adds overhead to writes",
      note: "Use EXPLAIN to verify index usage. Monitor index usage with performance_schema. Drop unused indexes."
    },
    {
      question: "Explain ACID properties in detail with examples.",
      answer: "Atomicity: Transactions are all-or-nothing. Consistency: Data follows all rules (constraints, triggers). Isolation: Concurrent transactions don't interfere. Durability: Committed data survives crashes.",
      example: "-- Atomicity (all or nothing)\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n-- Crash here - transaction rolls back automatically\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n\n-- Consistency (constraints enforced)\nINSERT INTO users (age) VALUES (15); -- Fails CHECK(age>=18)\n\n-- Isolation (dirty read prevention - REPEATABLE READ)\n-- Transaction 1\nSTART TRANSACTION;\nSELECT balance FROM accounts WHERE id = 1; -- 1000\n-- Transaction 2 updates to 900 and commits\nSELECT balance FROM accounts WHERE id = 1; -- Still 1000 (repeatable)\nCOMMIT;\n\n-- Durability (survives crash)\nSTART TRANSACTION;\nUPDATE accounts SET balance = 1000 WHERE id = 1;\nCOMMIT;\n-- After crash recovery, balance remains 1000",
      output: "ACID ensures data integrity even with concurrent access and system failures",
      note: "InnoDB implements ACID; MyISAM does not (no transactions, no crash recovery)."
    },
    {
      question: "What are isolation levels? Explain each with use cases.",
      answer: "Isolation levels control transaction concurrency. READ UNCOMMITTED (dirty reads), READ COMMITTED (non-repeatable reads), REPEATABLE READ (phantom reads), SERIALIZABLE (highest isolation).",
      example: "-- READ UNCOMMITTED (dirty reads allowed - risky)\nSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\n-- Can see uncommitted changes from other transactions\n\n-- READ COMMITTED (no dirty reads - Oracle default)\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n-- Only sees committed changes, but can get different values in same transaction\n\n-- REPEATABLE READ (MySQL default - prevents non-repeatable reads)\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n-- Same query returns same results within transaction\n\n-- SERIALIZABLE (table-level locking - slowest)\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n-- Transactions run as if serial, highest isolation\n\n-- Practical example: Banking\n-- For balance checking: REPEATABLE READ\n-- For reporting: READ COMMITTED (faster, consistent enough)\n-- For analytics: READ UNCOMMITTED (performance, no writes need consistency)",
      output: "Higher isolation = more data integrity but slower performance",
      note: "MySQL default is REPEATABLE READ. READ COMMITTED common in other databases. Choose based on concurrency needs."
    },
    {
      question: "How do you handle deadlocks in MySQL?",
      answer: "Deadlocks occur when transactions wait for each other's locks. MySQL automatically detects and rolls back one transaction (victim). Handle by retrying transactions, reducing lock time, consistent lock ordering, using lower isolation levels.",
      example: "-- Deadlock scenario\n-- Transaction 1\nSTART TRANSACTION;\nUPDATE accounts SET balance = 100 WHERE id = 1; -- Locks row 1\nUPDATE accounts SET balance = 200 WHERE id = 2; -- Waits for row 2\n\n-- Transaction 2 (simultaneous)\nSTART TRANSACTION;\nUPDATE accounts SET balance = 300 WHERE id = 2; -- Locks row 2\nUPDATE accounts SET balance = 400 WHERE id = 1; -- Waits for row 1\n-- DEADLOCK - MySQL rolls back one transaction\n\n-- Prevention: consistent lock order\n-- Always update in same order (id ascending)\n-- Transaction 1: update id=1 then id=2\n-- Transaction 2: update id=1 then id=2 (no deadlock)\n\n-- Retry logic in application\nDECLARE retry_count INT DEFAULT 0;\nWHILE retry_count < 3 DO\n    BEGIN\n        START TRANSACTION;\n        -- operations here\n        COMMIT;\n        LEAVE;\n    EXCEPTION\n        WHEN deadlock THEN\n            SET retry_count = retry_count + 1;\n            ROLLBACK;\n    END;\nEND WHILE;\n\n-- View deadlock information\nSHOW ENGINE INNODB STATUS\\G\nSELECT * FROM performance_schema.events_errors_summary_by_account_by_error\nWHERE error_name = 'ER_LOCK_DEADLOCK';",
      output: "MySQL automatically resolves deadlocks; application should retry rolled-back transaction",
      note: "Monitor deadlock frequency. Often indicates design issue or high contention."
    },
    {
      question: "What are window functions? Provide examples.",
      answer: "Window functions perform calculations across rows without collapsing them. Types: ROW_NUMBER (ranking), RANK/DENSE_RANK (ranking with ties), LEAD/LAG (previous/next row), SUM/AVG (running totals), NTILE (percentiles). Available MySQL 8.0+.",
      example: "-- ROW_NUMBER (ranking per department)\nSELECT name, department, salary,\n    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank_in_dept\nFROM employees;\n\n-- Running total\nSELECT order_date, amount,\n    SUM(amount) OVER (ORDER BY order_date) as running_total\nFROM sales;\n\n-- Moving average (last 3 rows)\nSELECT date, sales,\n    AVG(sales) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as ma3\nFROM daily_sales;\n\n-- Compare with previous/next\nSELECT name, salary,\n    LAG(salary) OVER (ORDER BY salary) as prev_salary,\n    LEAD(salary) OVER (ORDER BY salary) as next_salary,\n    salary - LAG(salary) OVER (ORDER BY salary) as difference\nFROM employees;\n\n-- Percentiles\nSELECT name, salary,\n    NTILE(100) OVER (ORDER BY salary) as percentile\nFROM employees;\n\n-- First and last value\nSELECT name, department, hire_date,\n    FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY hire_date) as first_hired,\n    LAST_VALUE(name) OVER (PARTITION BY department ORDER BY hire_date) as last_hired\nFROM employees;",
      output: "Window functions add analytic columns without GROUP BY aggregation",
      note: "Window functions are computed after WHERE but before ORDER BY. Great for analytics and reporting."
    },
    {
      question: "Explain Common Table Expressions (CTEs) with recursive examples.",
      answer: "CTEs create temporary named result sets. Recursive CTEs reference themselves for hierarchical data (org charts, tree structures, graph traversal). Available MySQL 8.0+.",
      example: "-- Non-recursive CTE (simplifies complex query)\nWITH high_earners AS (\n    SELECT name, salary, department\n    FROM employees\n    WHERE salary > 70000\n)\nSELECT department, COUNT(*) as count, AVG(salary) as avg_salary\nFROM high_earners\nGROUP BY department;\n\n-- Multiple CTEs\nWITH \n    dept_stats AS (\n        SELECT department, AVG(salary) as dept_avg\n        FROM employees GROUP BY department\n    ),\n    company_stats AS (\n        SELECT AVG(salary) as company_avg FROM employees\n    )\nSELECT e.name, e.salary, ds.dept_avg, cs.company_avg\nFROM employees e\nCROSS JOIN dept_stats ds\nCROSS JOIN company_stats cs\nWHERE e.department = ds.department;\n\n-- Recursive CTE (org chart)\nWITH RECURSIVE org_tree AS (\n    -- Anchor: top-level employees\n    SELECT id, name, manager_id, 1 as level, \n           CAST(name AS CHAR(500)) as path\n    FROM employees\n    WHERE manager_id IS NULL\n    \n    UNION ALL\n    \n    -- Recursive: subordinates\n    SELECT e.id, e.name, e.manager_id, ot.level + 1,\n           CONCAT(ot.path, ' -> ', e.name)\n    FROM employees e\n    INNER JOIN org_tree ot ON e.manager_id = ot.id\n)\nSELECT CONCAT(REPEAT('  ', level - 1), name) as org_chart, level, path\nFROM org_tree\nORDER BY path;\n\n-- Generate numbers (1 to 10)\nWITH RECURSIVE numbers AS (\n    SELECT 1 as n\n    UNION ALL\n    SELECT n + 1 FROM numbers WHERE n < 10\n)\nSELECT * FROM numbers;\n\n-- Generate date range\nWITH RECURSIVE dates AS (\n    SELECT CURDATE() as date\n    UNION ALL\n    SELECT date + INTERVAL 1 DAY\n    FROM dates\n    WHERE date < CURDATE() + INTERVAL 30 DAY\n)\nSELECT * FROM dates;",
      output: "CTEs make complex queries readable. Recursive CTEs traverse hierarchies",
      note: "Recursive CTEs must have termination condition (WHERE clause). Max recursion depth default 1000."
    },
    {
      question: "How do you optimize MySQL for high concurrency?",
      answer: "Optimize: connection pooling, read replicas, InnoDB buffer pool size (70-80% RAM), query cache (MySQL 5.7), proper indexing, connection limits, thread cache, avoid table locks, use row-level locking, partition large tables.",
      example: "-- Server configuration (my.cnf)\n[mysqld]\n# InnoDB settings\ninnodb_buffer_pool_size = 12G  # 70-80% of RAM\ninnodb_log_file_size = 2G\ninnodb_flush_log_at_trx_commit = 2  # Better performance for non-critical transactions\n\n# Connection settings\nmax_connections = 500\nthread_cache_size = 100\nconnect_timeout = 10\n\n# Query cache (MySQL 5.7, removed in 8.0)\nquery_cache_size = 256M\nquery_cache_type = 1\n\n# Temp table settings\ntmp_table_size = 256M\nmax_heap_table_size = 256M\n\n# Monitor connections\nSHOW STATUS LIKE 'Threads_connected';\nSHOW VARIABLES LIKE 'max_connections';\n\n-- Connection pooling (application side - Python example)\n# from sqlalchemy import create_engine\n# engine = create_engine('mysql://user:pass@host/db', \n#                        pool_size=20, max_overflow=40)\n\n-- Read replicas for scaling SELECT queries\n-- Master: writes\n-- Slave1, Slave2: reads\n-- Application uses master for writes, slaves for reads\n\n-- Partition large tables\nCREATE TABLE orders (\n    id INT,\n    order_date DATE,\n    amount DECIMAL(10,2)\n) PARTITION BY RANGE (YEAR(order_date)) (\n    PARTITION p2022 VALUES LESS THAN (2023),\n    PARTITION p2023 VALUES LESS THAN (2024),\n    PARTITION p2024 VALUES LESS THAN (2025),\n    PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\n-- Monitor slow queries\nSET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 1;  -- Log queries > 1 second\n\n-- Connection management\nSHOW PROCESSLIST;\nKILL CONNECTION 123;  -- Kill problematic connection",
      output: "Optimized server handles thousands of concurrent connections efficiently",
      note: "Monitor with performance_schema. Use connection pooling, not persistent connections. Set innodb_buffer_pool_size correctly."
    },
    {
      question: "What is the difference between InnoDB and MyISAM? When to use each?",
      answer: "InnoDB: ACID, transactions, row-level locking, foreign keys, crash recovery, MVCC (default since MySQL 5.5). MyISAM: no transactions, table-level locking, faster for read-only, full-text search (legacy).",
      example: "-- InnoDB (default, use for most applications)\nCREATE TABLE users (\n    id INT PRIMARY KEY,\n    name VARCHAR(100)\n) ENGINE=InnoDB;\n\n-- Features: transactions, FK, row locks\nSTART TRANSACTION;\nINSERT INTO users VALUES (1, 'John');\nCOMMIT;\n\n-- MyISAM (legacy, read-only, full-text before 5.6)\nCREATE TABLE logs (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    message TEXT,\n    created_at TIMESTAMP\n) ENGINE=MyISAM;\n\n-- Compare characteristics\nSELECT \n    table_name, \n    engine,\n    table_rows,\n    avg_row_length,\n    data_length,\n    index_length\nFROM information_schema.tables\nWHERE table_schema = 'mydb';\n\n-- Convert engine (be careful!)\nALTER TABLE my_table ENGINE=InnoDB;\n\n-- Check engine for all tables\nSELECT table_name, engine \nFROM information_schema.tables \nWHERE table_schema = 'mydb';",
      output: "InnoDB for transactional integrity; MyISAM only for specific legacy use cases",
      note: "MySQL 8.0 makes MyISAM largely obsolete. Use InnoDB for everything new."
    },
    {
      question: "Explain partitioning in MySQL. Types and benefits.",
      answer: "Partitioning splits large tables into smaller physical pieces (same logical table). Types: RANGE (by ranges), LIST (by value list), HASH (by hash function), KEY (by MySQL hash), COLUMNS (by multiple columns). Benefits: faster queries, easier maintenance, data archival.",
      example: "-- RANGE partition (by date)\nCREATE TABLE orders (\n    id INT,\n    order_date DATE,\n    amount DECIMAL(10,2)\n) PARTITION BY RANGE (YEAR(order_date)) (\n    PARTITION p2022 VALUES LESS THAN (2023),\n    PARTITION p2023 VALUES LESS THAN (2024),\n    PARTITION p2024 VALUES LESS THAN (2025),\n    PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\n-- Query uses partition pruning\nSELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';\n-- Only scans p2023 partition\n\n-- LIST partition (by specific values)\nCREATE TABLE users (\n    id INT,\n    name VARCHAR(100),\n    country VARCHAR(50)\n) PARTITION BY LIST COLUMNS(country) (\n    PARTITION p_na VALUES IN ('USA', 'Canada', 'Mexico'),\n    PARTITION p_eu VALUES IN ('UK', 'Germany', 'France'),\n    PARTITION p_asia VALUES IN ('China', 'India', 'Japan'),\n    PARTITION p_other VALUES IN (DEFAULT)\n);\n\n-- HASH partition (distribution by hash)\nCREATE TABLE logs (\n    id INT,\n    message TEXT,\n    created_at TIMESTAMP\n) PARTITION BY HASH(id) PARTITIONS 4;\n\n-- KEY partition (MySQL internal hash)\nCREATE TABLE events (\n    id INT,\n    event_type VARCHAR(50),\n    event_data JSON\n) PARTITION BY KEY(event_type) PARTITIONS 4;\n\n-- Subpartitioning\nCREATE TABLE sales (\n    sale_date DATE,\n    region VARCHAR(20),\n    amount DECIMAL(10,2)\n) PARTITION BY RANGE (YEAR(sale_date))\nSUBPARTITION BY HASH(MONTH(sale_date)) (\n    PARTITION p2023 VALUES LESS THAN (2024) (\n        SUBPARTITION s1, SUBPARTITION s2, SUBPARTITION s3\n    ),\n    PARTITION p2024 VALUES LESS THAN (2025)\n);\n\n-- Manage partitions\nALTER TABLE orders ADD PARTITION (\n    PARTITION p2025 VALUES LESS THAN (2026)\n);\n\nALTER TABLE orders DROP PARTITION p2022;\n\n-- Check partition info\nSELECT * FROM information_schema.partitions WHERE table_name = 'orders';",
      output: "Partitioning improves query performance and maintenance on very large tables (millions+ rows)",
      note: "All partition columns must be in every unique key. Maximum 8192 partitions. Not a performance silver bullet."
    },
    {
      question: "What are generated columns? When to use them?",
      answer: "Generated columns compute values from other columns. VIRTUAL (calculated on read, no storage) and STORED (calculated on write, uses space). Useful for indexing JSON fields, derived values, simplifying queries.",
      example: "-- VIRTUAL generated column (no storage)\nCREATE TABLE products (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    price DECIMAL(10,2),\n    tax_rate DECIMAL(5,2),\n    price_with_tax DECIMAL(10,2) GENERATED ALWAYS AS (price * (1 + tax_rate/100)) VIRTUAL\n);\n\n-- STORED generated column (uses space, can be indexed)\nCREATE TABLE users (\n    id INT PRIMARY KEY,\n    first_name VARCHAR(50),\n    last_name VARCHAR(50),\n    full_name VARCHAR(101) GENERATED ALWAYS AS (CONCAT(first_name, ' ', last_name)) STORED,\n    email VARCHAR(100),\n    email_domain VARCHAR(100) GENERATED ALWAYS AS (SUBSTRING_INDEX(email, '@', -1)) STORED\n);\n\n-- Indexing JSON fields with generated column\nCREATE TABLE products_json (\n    id INT PRIMARY KEY,\n    data JSON,\n    brand VARCHAR(50) GENERATED ALWAYS AS (data->>'$.brand') STORED,\n    price DECIMAL(10,2) GENERATED ALWAYS AS (data->>'$.price') STORED,\n    INDEX idx_brand (brand),\n    INDEX idx_price (price)\n);\n\nINSERT INTO products_json (id, data) VALUES (1, '{\"brand\": \"Apple\", \"price\": 999}');\n-- Query uses index on brand\nSELECT * FROM products_json WHERE brand = 'Apple';\n\n-- CASE expression in generated column\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    total DECIMAL(10,2),\n    order_status VARCHAR(20) GENERATED ALWAYS AS (\n        CASE \n            WHEN total > 1000 THEN 'Large'\n            WHEN total > 500 THEN 'Medium'\n            ELSE 'Small'\n        END\n    ) STORED\n);\n\n-- Multi-column generated column\nCREATE TABLE distances (\n    x1 INT, y1 INT,\n    x2 INT, y2 INT,\n    distance DECIMAL(10,2) GENERATED ALWAYS AS (\n        SQRT(POWER(x2-x1, 2) + POWER(y2-y1, 2))\n    ) STORED\n);",
      output: "Generated columns simplify queries and enable indexing of derived/computed values",
      note: "VIRTUAL columns use no storage but can't be indexed. STORED columns can be indexed but use space."
    },
    {
      question: "What is the difference between OPTIMIZE TABLE and ANALYZE TABLE?",
      answer: "OPTIMIZE TABLE reorganizes table storage, defragments data, and reclaims unused space (for InnoDB, rebuilds table). ANALYZE TABLE updates statistics for query optimizer without reorganizing data.",
      example: "-- ANALYZE TABLE (updates statistics)\nANALYZE TABLE users;\n-- Updates index cardinality in mysql.innodb_index_stats\n\n-- OPTIMIZE TABLE (rebuilds table, reclaims space)\nOPTIMIZE TABLE users;\n-- For InnoDB: ALTER TABLE ... ENGINE=InnoDB\n\n-- Check table fragmentation\nSELECT \n    table_name,\n    data_length,\n    index_length,\n    data_free,\n    (data_free / (data_length + index_length)) * 100 as fragmentation_pct\nFROM information_schema.tables\nWHERE table_schema = 'mydb' AND data_free > 0;\n\n-- Optimize all tables in database\nSELECT CONCAT('OPTIMIZE TABLE ', table_name, ';') \nFROM information_schema.tables \nWHERE table_schema = 'mydb' AND engine = 'InnoDB';",
      output: "ANALYZE updates statistics (fast); OPTIMIZE rebuilds table (slow, reclaims space)",
      note: "OPTIMIZE locks tables. Schedule during maintenance windows. ANALYZE is much faster and less intrusive."
    },
    {
      question: "How do you implement full-text search in MySQL?",
      answer: "Full-text search uses FULLTEXT indexes for natural language searching. Supports Boolean mode (+, -, operators) and query expansion. Better than LIKE for text search. Available for InnoDB (MySQL 5.6+) and MyISAM.",
      example: "-- Create FULLTEXT index\nCREATE TABLE articles (\n    id INT PRIMARY KEY,\n    title VARCHAR(200),\n    content TEXT,\n    FULLTEXT idx_title_content (title, content)\n) ENGINE=InnoDB;\n\nINSERT INTO articles VALUES \n(1, 'MySQL Tutorial', 'Learn MySQL database basics'),\n(2, 'Advanced MySQL', 'MySQL optimization techniques'),\n(3, 'Database Design', 'MySQL schema design best practices');\n\n-- Natural language mode (default)\nSELECT *, MATCH(title, content) AGAINST('MySQL') as relevance\nFROM articles\nWHERE MATCH(title, content) AGAINST('MySQL')\nORDER BY relevance DESC;\n\n-- Boolean mode (operators +, -, *, <, >)\nSELECT * FROM articles \nWHERE MATCH(title, content) AGAINST('+MySQL -Oracle' IN BOOLEAN MODE);\n\n-- Query expansion (find related)\nSELECT * FROM articles \nWHERE MATCH(title, content) AGAINST('database' WITH QUERY EXPANSION);\n\n-- 50% threshold (word appears in >50% rows not matched)\n-- Stopwords (common words like 'the', 'and' ignored)\n-- Minimum word length (innodb_ft_min_token_size=3)\n\n-- Check full-text indexes\nSHOW VARIABLES LIKE 'innodb_ft_min_token_size';\nSHOW VARIABLES LIKE 'innodb_ft_stopword_table';\n\n-- Rebuild FULLTEXT index\nSET GLOBAL innodb_optimize_fulltext_only=ON;\nOPTIMIZE TABLE articles;\nSET GLOBAL innodb_optimize_fulltext_only=OFF;",
      output: "FULLTEXT search returns relevance-ranked results, much faster than LIKE for text search",
      note: "Minimum word length default 3 (InnoDB) or 4 (MyISAM). Stopwords ignored. Boolean mode doesn't use 50% threshold."
    },
    {
      question: "What are MySQL replication types? How do they work?",
      answer: "Replication copies data from master to slaves. Types: Asynchronous (default, master doesn't wait), Semi-synchronous (master waits for at least 1 slave), Group Replication (multi-master). Uses binary logs for change data capture.",
      example: "-- Master configuration (my.cnf)\n[mysqld]\nserver-id = 1\nlog_bin = /var/log/mysql/mysql-bin.log\nbinlog_format = ROW\nbinlog_do_db = mydb\n\n-- Slave configuration (my.cnf)\n[mysqld]\nserver-id = 2\nrelay_log = /var/log/mysql/mysql-relay-bin.log\nread_only = ON\n\n-- Create replication user on master\nCREATE USER 'repl'@'%' IDENTIFIED BY 'password';\nGRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';\n\n-- Get master status\nSHOW MASTER STATUS;\n\n-- Configure slave\nCHANGE MASTER TO\n    MASTER_HOST = 'master-host',\n    MASTER_USER = 'repl',\n    MASTER_PASSWORD = 'password',\n    MASTER_LOG_FILE = 'mysql-bin.000001',\n    MASTER_LOG_POS = 123456;\n\n-- Start slave\nSTART SLAVE;\n\n-- Check replication status\nSHOW SLAVE STATUS\\G\n-- Look for: Slave_IO_Running: Yes, Slave_SQL_Running: Yes\n\n-- Semi-synchronous replication\nINSTALL PLUGIN rpl_semi_sync_master SONAME 'semisync_master.so';\nSET GLOBAL rpl_semi_sync_master_enabled = 1;\n\n-- Monitor replication delay\nSELECT TIMESTAMPDIFF(SECOND, last_update, NOW()) as seconds_behind\nFROM (\n    SELECT MAX(exec_master_log_pos) as last_update \n    FROM replication_status\n) t;",
      output: "Replication provides high availability, read scaling, and disaster recovery",
      note: "Asynchronous replication may have data loss on master failure. Semi-sync reduces risk but adds latency."
    },
    {
      question: "What is the difference between read and write locks?",
      answer: "Read locks (shared locks) allow multiple transactions to read but not write. Write locks (exclusive locks) prevent other reads and writes. InnoDB uses row-level locks; MyISAM uses table-level locks.",
      example: "-- Shared lock (read lock)\nSTART TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 LOCK IN SHARE MODE;\n-- Other transactions can read but not write this row\nCOMMIT;\n\n-- Exclusive lock (write lock)\nSTART TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE;\n-- Other transactions cannot read or write this row\nUPDATE accounts SET balance = 1000 WHERE id = 1;\nCOMMIT;\n\n-- Table-level locks (MyISAM or explicit)\nLOCK TABLES users READ;  -- Read lock\n-- Can read, cannot write\nUNLOCK TABLES;\n\nLOCK TABLES users WRITE;  -- Write lock\n-- Exclusive access\nUNLOCK TABLES;\n\n-- Gap locks (prevent phantom reads)\nSELECT * FROM products WHERE id BETWEEN 10 AND 20 FOR UPDATE;\n-- Locks gap between 10-20, prevents inserts\n\n-- Next-key lock (InnoDB default)\n-- Combination of row lock and gap lock\n\n-- Monitor locks\nSELECT * FROM performance_schema.data_locks;\nSELECT * FROM information_schema.INNODB_LOCKS;\nSELECT * FROM information_schema.INNODB_LOCK_WAITS;",
      output: "Shared locks allow concurrent reads; exclusive locks block both reads and writes",
      note: "InnoDB uses row-level locks; explicit table locks are rarely needed. FOR UPDATE for write locks."
    },
    {
      question: "Explain the EXPLAIN statement and its output columns.",
      answer: "EXPLAIN shows how MySQL executes a query: table order, join types, index usage, row estimates. Key columns: id (query order), select_type (query type), table, type (join type: ALL, index, range, ref, eq_ref, const), possible_keys, key (actual index), key_len, rows (estimate), Extra (additional info).",
      example: "-- Basic EXPLAIN\nEXPLAIN SELECT u.name, o.order_date\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.email = 'john@example.com';\n\n-- EXPLAIN FORMAT=JSON (detailed)\nEXPLAIN FORMAT=JSON \nSELECT * FROM users WHERE email = 'john@example.com';\n\n-- EXPLAIN ANALYZE (MySQL 8.0.18+, actual execution times)\nEXPLAIN ANALYZE \nSELECT * FROM users WHERE email = 'john@example.com';\n\n-- Understanding type column values (best to worst):\n-- system (1 row), const (1 row by primary key), eq_ref (unique index), \n-- ref (non-unique index), range (index range), index (full index scan), ALL (full table scan)\n\n-- Extra column meanings:\n-- Using index (covering index, no table access)\n-- Using where (row filtering after index)\n-- Using temporary (temporary table needed)\n-- Using filesort (external sort, can be slow)\n-- Using index condition (index pushdown)\n\n-- Analyze query performance\nSET SESSION optimizer_trace='enabled=on';\nSELECT * FROM users WHERE email = 'john@example.com';\nSELECT * FROM information_schema.optimizer_trace\\G\nSET SESSION optimizer_trace='enabled=off';",
      output: "EXPLAIN reveals query execution plan, helping identify performance bottlenecks",
      note: "type ALL or Using filesort/Using temporary often indicate optimization opportunities."
    },
    {
      question: "What are covering indexes? Why are they fast?",
      answer: "Covering index includes ALL columns needed by query in the index itself. Prevents table access (no need to read actual rows). Dramatically faster because data comes directly from index (B-tree) without heap lookups.",
      example: "-- Without covering index (needs table access)\nCREATE INDEX idx_email ON users(email);\nEXPLAIN SELECT email, name FROM users WHERE email = 'john@example.com';\n-- Extra: Using where (needs to read row for name)\n\n-- Covering index (includes name column)\nCREATE INDEX idx_covering ON users(email, name);\nEXPLAIN SELECT email, name FROM users WHERE email = 'john@example.com';\n-- Extra: Using index (no table access!)\n\n-- Covering index for multiple columns\nCREATE INDEX idx_covering2 ON users(last_name, first_name, email, age);\nSELECT last_name, first_name, email, age \nFROM users \nWHERE last_name = 'Smith';\n-- Entire query satisfied by index\n\n-- Covering index with WHERE and ORDER BY\nCREATE INDEX idx_where_order ON users(age, name, email);\nSELECT name, email FROM users WHERE age BETWEEN 25 AND 35 ORDER BY name;\n-- Both filtering and sorting from index\n\n-- Measure performance difference\n-- Without covering index: 100ms for 1M rows\n-- With covering index: 1-2ms (50-100x faster)\n\n-- Check if query is covered\nEXPLAIN SELECT /*+ NO_ICP(users) */ * FROM users WHERE email = 'test@test.com';\n-- Extra: Using where (not covered because of SELECT *)\n\n-- Covering index with JSON\nCREATE INDEX idx_covering_json ON products((data->>'$.brand'), (data->>'$.price'));\nSELECT data->>'$.brand', data->>'$.price' FROM products WHERE data->>'$.brand' = 'Apple';",
      output: "Covering indexes eliminate table access, dramatically reducing I/O and improving performance",
      note: "SELECT * prevents covering index. Keep indexes narrow but include needed columns."
    },
    {
      question: "How do you monitor MySQL performance in production?",
      answer: "Monitor using: Performance Schema (detailed metrics), Slow query log (identify slow queries), Status variables (global counters), Information Schema (table stats), MySQL Enterprise Monitor or open source tools (Prometheus, Grafana).",
      example: "-- Enable Performance Schema\n[mysqld]\nperformance_schema = ON\n\n-- Top queries by execution time\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_TIMER_WAIT/1e9 as total_seconds,\n       AVG_TIMER_WAIT/1e9 as avg_seconds,\n       SUM_ROWS_EXAMINED, SUM_ROWS_SENT\nFROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\n-- Monitor lock waits\nSELECT * FROM performance_schema.events_waits_summary_global_by_event_name\nWHERE event_name LIKE '%lock%'\nORDER BY SUM_TIMER_WAIT DESC;\n\n-- Slow query log\nSET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 2;\nSET GLOBAL log_queries_not_using_indexes = 'ON';\n\n-- Check server status\nSHOW STATUS LIKE 'Threads_connected';\nSHOW STATUS LIKE 'Innodb_row_lock_waits';\nSHOW STATUS LIKE 'Slow_queries';\nSHOW STATUS LIKE 'Questions';\n\n-- Monitor buffer pool\nSHOW STATUS LIKE 'Innodb_buffer_pool_%';\n\n-- Check table sizes\nSELECT \n    table_schema,\n    table_name,\n    ROUND(data_length/1024/1024,2) as data_mb,\n    ROUND(index_length/1024/1024,2) as index_mb,\n    ROUND(data_free/1024/1024,2) as free_mb\nFROM information_schema.tables\nORDER BY data_length DESC\nLIMIT 10;\n\n-- Monitor replication delay (from slave)\nSHOW SLAVE STATUS\\G\n-- Look at Seconds_Behind_Master\n\n-- Connection monitoring\nSHOW PROCESSLIST;\nSELECT COUNT(*) FROM information_schema.processlist WHERE command = 'Query';\n\n-- InnoDB metrics\nSHOW ENGINE INNODB STATUS\\G\n\n-- pt-query-digest (Percona Toolkit) for slow log analysis\n# pt-query-digest /var/log/mysql/slow.log",
      output: "Regular monitoring identifies bottlenecks before they cause outages",
      note: "Monitor trending over time, not just absolute values. Set up alerts for thresholds."
    },
    {
      question: "What are the differences between MYSQL 5.7 and 8.0?",
      answer: "MySQL 8.0 major features: Window functions, CTEs (recursive), Invisible indexes, Descending indexes, JSON table functions, Role-based security, Resource groups, Atomic DDL, Improved InnoDB (self-tuning, redo log archiving), Sideways-insensitive cursors, Instant DROP COLUMN.",
      example: "-- Window functions (new in 8.0)\nSELECT ROW_NUMBER() OVER (ORDER BY salary) as rank, name, salary FROM employees;\n\n-- Common Table Expressions (new in 8.0)\nWITH RECURSIVE cte (n) AS (\n    SELECT 1 UNION ALL SELECT n+1 FROM cte WHERE n < 10\n) SELECT * FROM cte;\n\n-- Invisible indexes (new in 8.0)\nCREATE INDEX idx_invisible ON users(email) INVISIBLE;\nALTER TABLE users ALTER INDEX idx_invisible VISIBLE;\n\n-- Descending indexes (new in 8.0)\nCREATE INDEX idx_desc ON users(created_at DESC, name ASC);\n\n-- JSON table functions (new in 8.0)\nSELECT * FROM JSON_TABLE('[\"a\",\"b\",\"c\"]', '$[*]' COLUMNS (value VARCHAR(10) PATH '$')) AS jt;\n\n-- Role-based security (new in 8.0)\nCREATE ROLE app_read;\nGRANT SELECT ON mydb.* TO app_read;\nGRANT app_read TO 'user1'@'localhost';\nSET DEFAULT ROLE app_read TO 'user1'@'localhost';\n\n-- Atomic DDL (new in 8.0)\n-- DDL operations are transactional, can be rolled back\nSTART TRANSACTION;\nCREATE TABLE test (id INT);\nDROP TABLE users; -- Both statements succeed or both fail\nCOMMIT;\n\n-- Instant DROP COLUMN (removes column without rebuild)\nALTER TABLE large_table DROP COLUMN unused_column, ALGORITHM=INSTANT;\n\n-- Remove query cache (removed in 8.0)\n-- Use buffer pool and secondary caches instead",
      output: "MySQL 8.0 offers significantly better SQL capabilities, performance, and manageability",
      note: "Upgrade planning required due to authentication changes (caching_sha2_password) and reserved words."
    },
    {
      question: "How do you handle large database backups with minimal downtime?",
      answer: "Use: Percona XtraBackup (hot backup, no downtime), mysqldump with --single-transaction (InnoDB, consistent), MySQL Enterprise Backup, replication + mysqlbackup, snapshots (LVM, ZFS), binary log-based incremental backups.",
      example: "-- Percona XtraBackup (hot backup)\n# Full backup\nxtrabackup --backup --target-dir=/backups/base\n\n# Prepare backup\nxtrabackup --prepare --target-dir=/backups/base\n\n# Restore (with downtime)\nsystemctl stop mysql\nrm -rf /var/lib/mysql/*\nxtrabackup --copy-back --target-dir=/backups/base\nchown -R mysql:mysql /var/lib/mysql\nsystemctl start mysql\n\n# Incremental backup\nxtrabackup --backup --target-dir=/backups/inc1 \\\n  --incremental-basedir=/backups/base\n\n# mysqldump with consistency\nmysqldump --single-transaction --master-data=2 \\\n  --routines --triggers --all-databases > backup.sql\n\n# Backup with replication (no downtime for restore)\n# Create replica, backup from replica, promote if needed\n\n# LVM snapshot (instant)\nlvcreate -L 50G -s -n backup_snapshot /dev/vg/mysql\n# Mount and backup snapshot\nlvremove backup_snapshot\n\n# Partial backup by tablespace\nALTER TABLE users DISCARD TABLESPACE;\n# Copy .ibd file\nALTER TABLE users IMPORT TABLESPACE;\n\n# Backup compression\nmysqldump mydb | gzip > backup.sql.gz\n\n# Parallel backup (mydumper)\nmydumper -o /backups -t 8 -c\n\n# Verify backup\nmysqlcheck -u root -p mydb_backup",
      output: "Hot backups enable near-zero downtime backups for InnoDB databases",
      note: "Always test restore process. Store backups off-site (cloud storage, different server)."
    },
    {
      question: "What are the differences between WHERE, HAVING, and ON clauses?",
      answer: "ON specifies JOIN conditions (runs before JOIN). WHERE filters rows before GROUP BY (cannot use aggregates). HAVING filters groups after GROUP BY (can use aggregates). Performance: ON/WHERE reduce JOIN size; HAVING filters final results.",
      example: "-- ON clause (JOIN condition)\nSELECT * FROM orders o \nLEFT JOIN users u ON o.user_id = u.id  -- ON filters before join\nWHERE u.status = 'active';  -- WHERE filters after join\n\n-- WHERE vs HAVING\nSELECT department, AVG(salary) as avg_salary\nFROM employees\nWHERE hire_date > '2023-01-01'  -- Filters rows before grouping\nGROUP BY department\nHAVING AVG(salary) > 50000;  -- Filters groups after aggregation\n\n-- Performance implications\n-- Bad (WHERE after JOIN)\nSELECT * FROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE u.status = 'active';  -- Joins all rows first\n\n-- Good (ON filters before JOIN)\nSELECT * FROM orders o\nJOIN users u ON o.user_id = u.id AND u.status = 'active';  -- Filters earlier\n\n-- WHERE with aggregates (invalid)\n-- SELECT department, AVG(salary) \n-- FROM employees \n-- WHERE AVG(salary) > 50000;  -- ERROR\n\n-- HAVING without GROUP BY (treats whole table as one group)\nSELECT COUNT(*), AVG(salary) FROM employees HAVING AVG(salary) > 50000;\n\n-- Multiple conditions\nSELECT * FROM orders o\nLEFT JOIN users u ON o.user_id = u.id AND o.status = 'pending'  -- ON condition\nWHERE u.city = 'New York'  -- WHERE condition\nGROUP BY u.id\nHAVING COUNT(o.id) > 5;  -- HAVING condition",
      output: "Use ON for JOIN relationships, WHERE for row filtering, HAVING for group filtering",
      note: "Push conditions to ON when possible to reduce JOIN size. HAVING without GROUP BY is rare."
    },
    {
      question: "What is the query cache? Why was it removed in MySQL 8.0?",
      answer: "Query cache stored exact SELECT query results with their result sets. Removed in MySQL 8.0 due to scalability issues (global mutex, invalidation overhead, limited benefit on write-heavy workloads). Alternative: Buffer pool, application-level caching (Redis, Memcached), ProxySQL query cache.",
      example: "-- MySQL 5.7 query cache configuration\n[mysqld]\nquery_cache_type = 1\nquery_cache_size = 256M\nquery_cache_limit = 2M\n\n-- Check cache effectiveness\nSHOW STATUS LIKE 'Qcache%';\n-- Qcache_hits, Qcache_inserts, Qcache_lowmem_prunes\n\n-- Cache eligibility (exact match, no non-deterministic functions)\nSELECT * FROM users WHERE id = 1;  -- Cachable (if no changes)\nSELECT NOW(), * FROM users;  -- Non-cachable (NOW())\nSELECT * FROM users WHERE RAND() > 0.5;  -- Non-cachable (RAND())\n\n-- Why removed in 8.0:\n-- 1. Global mutex contention (single bottleneck)\n-- 2. Invalidation on any write (UPDATE/DELETE/INSERT)\n-- 3. Overhead for write-intensive workloads\n-- 4. Buffer pool often more effective\n\n-- Alternatives in MySQL 8.0:\n-- 1. Optimized buffer pool\nSET GLOBAL innodb_buffer_pool_size = 12G;\n\n-- 2. Application-level caching (Redis)\n-- 3. ProxySQL query cache\n-- 4. InnoDB memcached plugin\n-- 5. Result set caching in application\n\n-- Workload recommendations:\n-- Read-heavy (<10% writes): Query cache helped\n-- Write-heavy (>30% writes): Query cache hurt performance\n-- Mixed: Cache thrashing common",
      output: "Query cache removed in MySQL 8.0 due to scalability problems; use other caching strategies",
      note: "For MySQL 5.7, disable query cache if write-heavy. In 8.0, use application caching instead."
    },
    {
      question: "How do you implement auditing in MySQL?",
      answer: "Audit methods: MySQL Enterprise Audit (commercial), Performance Schema (statement digests), Triggers (row-level changes), General log (all queries), Binary logs (DML changes), Third-party (McAfee Audit Plugin, MariaDB Audit Plugin).",
      example: "-- Performance Schema auditing\nSELECT * FROM performance_schema.events_statements_history\nWHERE thread_id = (SELECT thread_id FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID());\n\n-- General log (all queries)\nSET GLOBAL general_log = 'ON';\nSET GLOBAL log_output = 'TABLE';\nSELECT * FROM mysql.general_log;\n\n-- Trigger-based auditing (row-level)\nCREATE TABLE audit_log (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    table_name VARCHAR(50),\n    action VARCHAR(20),\n    user VARCHAR(100),\n    changed_at TIMESTAMP,\n    old_data JSON,\n    new_data JSON\n);\n\nDELIMITER //\nCREATE TRIGGER audit_employee_update\nAFTER UPDATE ON employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log (table_name, action, user, old_data, new_data)\n    VALUES ('employees', 'UPDATE', USER(),\n            JSON_OBJECT('salary', OLD.salary, 'name', OLD.name),\n            JSON_OBJECT('salary', NEW.salary, 'name', NEW.name));\nEND //\nDELIMITER ;\n\n-- Binary log auditing (DML changes)\nSHOW BINARY LOGS;\nmysqlbinlog --base64-output=decode-rows --verbose mysql-bin.000001\n\n-- MySQL Enterprise Audit (commercial)\nINSTALL PLUGIN audit_log SONAME 'audit_log.so';\nSET GLOBAL audit_log_policy = 'ALL';\n\n-- Connection logging\nCREATE TABLE connection_log (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    user VARCHAR(100),\n    host VARCHAR(100),\n    connection_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TRIGGER log_connections\nAFTER CONNECT ON DATABASE\nBEGIN\n    INSERT INTO connection_log (user, host) VALUES (USER(), HOST());\nEND;\n\n-- MySQL Enterprise Firewall\nINSTALL PLUGIN mysql_firewall SONAME 'firewall.so';\nSET GLOBAL mysql_firewall_mode = 'RECORDING';",
      output: "Auditing tracks who did what and when for compliance and security",
      note: "Performance overhead varies; triggers lowest overhead for row-level, general log highest."
    },
    {
      question: "What are MySQL roles and privileges?",
      answer: "Roles are named collections of privileges (MySQL 8.0+). Simplify privilege management by granting roles to users instead of individual privileges. Privileges: Global (*.*), Database (db.*), Table (db.table), Column, Stored routine, Proxy.",
      example: "-- Create roles\nCREATE ROLE app_read, app_write, app_admin;\n\n-- Grant privileges to roles\nGRANT SELECT ON mydb.* TO app_read;\nGRANT INSERT, UPDATE, DELETE ON mydb.* TO app_write;\nGRANT ALL PRIVILEGES ON mydb.* TO app_admin WITH GRANT OPTION;\n\n-- Create users\nCREATE USER 'app_user'@'%' IDENTIFIED BY 'user_pass';\nCREATE USER 'admin_user'@'localhost' IDENTIFIED BY 'admin_pass';\n\n-- Grant roles to users\nGRANT app_read, app_write TO 'app_user'@'%';\nGRANT app_admin TO 'admin_user'@'localhost';\n\n-- Set default roles\nSET DEFAULT ROLE app_read, app_write TO 'app_user'@'%';\nSET DEFAULT ROLE app_admin TO 'admin_user'@'localhost';\n\n-- Activate roles for session\nSET ROLE ALL;  -- Activate all default roles\nSET ROLE app_read;  -- Activate specific role\n\n-- Check roles and privileges\nSELECT * FROM mysql.role_edges;\nSELECT CURRENT_ROLE();\nSHOW GRANTS FOR 'app_user'@'%';\nSHOW GRANTS FOR 'app_user'@'%' USING app_read, app_write;\n\n-- Revoke role\nREVOKE app_write FROM 'app_user'@'%';\n\n-- Drop role\nDROP ROLE app_read;\n\n-- Mandatory roles (all users get these)\nSET GLOBAL mandatory_roles = 'app_read';\n\n-- Column-level privileges\nGRANT SELECT (id, name, email) ON mydb.users TO 'support'@'%';\nGRANT UPDATE (status) ON mydb.users TO 'support'@'%';\n\n-- Stored procedure privileges\nGRANT EXECUTE ON PROCEDURE GetUserData TO 'app_user'@'%';\n\n-- Dynamic privileges (MySQL 8.0+)\nGRANT BINLOG_ADMIN, CONNECTION_ADMIN TO 'dba'@'localhost';",
      output: "Roles simplify privilege management, especially for applications with multiple users",
      note: "Roles available in MySQL 8.0+. Check activation with SELECT CURRENT_ROLE()."
    },
    {
      question: "What is a slave lag? How to reduce it?",
      answer: "Slave lag is delay between master and replica applying changes. Causes: single-threaded SQL thread, long-running queries on replica, write-heavy workload, row-based replication overhead. Solutions: parallel replication, replica tuning, read-only replica, better hardware.",
      example: "-- Check slave lag\nSHOW SLAVE STATUS\\G\n-- Look for: Seconds_Behind_Master\n\n-- Enable parallel replication (MySQL 8.0+)\nSET GLOBAL slave_parallel_workers = 4;\nSET GLOBAL slave_parallel_type = 'LOGICAL_CLOCK';\n\n-- Monitor lag over time\nSELECT \n    TIMESTAMPDIFF(SECOND, MAX(exec_time), NOW()) as lag_seconds\nFROM (\n    SELECT SQL_THREAD_WAIT_TRX, EXECUTE_TIME as exec_time\n    FROM performance_schema.replication_applier_status_by_worker\n) t;\n\n-- Reduce lag strategies\n-- 1. Optimize replica - better IO, more memory\n[mysqld]\ninnodb_buffer_pool_size = 8G  -- On replica too\nread_buffer_size = 2M\ntmp_table_size = 512M\n\n-- 2. Use row-based replication for consistency (default)\nbinlog_format = ROW\n\n-- 3. Avoid long queries on replicas\nSET GLOBAL max_execution_time = 30000;  -- Kill queries > 30 sec\n\n-- 4. Dedicated replica hardware with fast SSDs\n-- 5. Reduce master load (split writes across multiple masters)\n\n-- Check replica threads\nSHOW PROCESSLIST;\n-- Look for 'System lock', 'Executing event'\n\n-- Enable log slave updates (cascading)\n[mysqld]\nlog_slave_updates = ON\n\n-- Multi-source replication (multiple masters)\nCHANGE MASTER TO master_host='master1' FOR CHANNEL 'channel1';\nCHANGE MASTER TO master_host='master2' FOR CHANNEL 'channel2';\nSTART SLAVE FOR CHANNEL 'channel1';\n\n-- Monitor worker threads\nSELECT * FROM performance_schema.replication_applier_status_by_worker;",
      output: "Slave lag monitoring and reduction critical for read-scaling and HA",
      note: "Parallel replication in MySQL 8.0 significantly reduces lag on multi-core replicas."
    },
    {
      question: "Explain the different types of table joins with examples.",
      answer: "INNER JOIN (matches only), LEFT/RIGHT JOIN (all from one side), CROSS JOIN (cartesian product), NATURAL JOIN (join on same column names), SELF JOIN (table joined to itself), EQUI JOIN (using equality), NON-EQUI JOIN (other operators like <, >).",
      example: "-- INNER JOIN (only matches)\nSELECT * FROM orders o INNER JOIN customers c ON o.cust_id = c.id;\n\n-- LEFT JOIN (all customers, orders optional)\nSELECT * FROM customers c LEFT JOIN orders o ON c.id = o.cust_id;\n\n-- RIGHT JOIN (all orders, customers optional)\nSELECT * FROM customers c RIGHT JOIN orders o ON c.id = o.cust_id;\n\n-- CROSS JOIN (every combination)\nSELECT * FROM colors CROSS JOIN sizes;\n-- Returns: red-S, red-M, red-L, blue-S, blue-M, blue-L...\n\n-- NATURAL JOIN (uses same column names)\n-- Tables must have identically named columns\nSELECT * FROM employees NATURAL JOIN departments;\n-- Equivalent to JOIN using all columns with same name\n\n-- SELF JOIN (table to itself)\nSELECT e1.name as employee, e2.name as manager\nFROM employees e1\nLEFT JOIN employees e2 ON e1.manager_id = e2.id;\n\n-- EQUI JOIN (equality condition)\nSELECT * FROM orders JOIN customers ON orders.cust_id = customers.id;\n\n-- NON-EQUI JOIN (range conditions)\nSELECT e1.name, e1.salary, e2.name, e2.salary\nFROM employees e1\nJOIN employees e2 ON e1.salary BETWEEN e2.salary - 5000 AND e2.salary + 5000\nWHERE e1.id != e2.id;\n\n-- JOIN with multiple conditions\nSELECT * FROM orders o\nJOIN customers c ON o.cust_id = c.id AND o.status = 'active' AND c.status = 'active';\n\n-- LEFT JOIN with IS NULL (find missing records)\nSELECT c.* FROM customers c\nLEFT JOIN orders o ON c.id = o.cust_id\nWHERE o.id IS NULL;  -- Customers with no orders\n\n-- JOIN with USING (simplified for same column names)\nSELECT * FROM orders JOIN customers USING (customer_id);\n-- Equivalent to ON orders.customer_id = customers.customer_id\n\n-- JOIN with complex conditions\nSELECT * FROM products p\nJOIN categories c ON p.category_id = c.id\nJOIN inventory i ON p.id = i.product_id AND i.quantity > 0;",
      output: "Different join types serve different data combination needs from simple matches to complex relationships",
      note: "INNER JOIN default (just JOIN). LEFT JOIN most common outer join. CROSS JOIN rarely useful."
    },
    {
      question: "What is the difference between Persistent and Regular (VOLATILE) generated columns?",
      answer: "VIRTUAL (default): computed on read, no storage, cannot be indexed (before MySQL 8.0). STORED: computed on write, uses storage, can be indexed. VIRTUAL is faster for read, STORED for write and indexing.",
      example: "-- VIRTUAL generated column (default)\nCREATE TABLE products (\n    id INT PRIMARY KEY,\n    price DECIMAL(10,2),\n    tax DECIMAL(5,2),\n    total VIRTUAL GENERATED ALWAYS AS (price + (price * tax/100))\n);\n-- No storage, computed on SELECT\n\n-- STORED generated column\nCREATE TABLE products2 (\n    id INT PRIMARY KEY,\n    price DECIMAL(10,2),\n    tax DECIMAL(5,2),\n    total DECIMAL(10,2) GENERATED ALWAYS AS (price + (price * tax/100)) STORED\n);\n-- Uses storage, computed on INSERT/UPDATE\n\n-- Index on STORED column (MySQL 8.0 can index VIRTUAL too)\nCREATE INDEX idx_total ON products2(total);\n\n-- VIRTUAL column does not add to table size\nSELECT * FROM information_schema.tables WHERE table_name = 'products';\n\n-- STORED column adds to data size\nSELECT * FROM information_schema.tables WHERE table_name = 'products2';\n\n-- Performance comparison\n-- VIRTUAL: Zero write overhead, small read overhead per row\n-- STORED: Write overhead (calculated once), no read overhead\n\n-- Use VIRTUAL for:\n-- 1. Derived values not needed for indexing\n-- 2. Expensive calculations that are rarely selected\n-- 3. Columns used only for display\n\n-- Use STORED for:\n-- 1. Indexing derived values\n-- 2. Frequent reads, infrequent writes\n-- 3. Partitioning keys\n\n-- Secondary index on VIRTUAL column (MySQL 8.0+)\nCREATE TABLE users (\n    id INT PRIMARY KEY,\n    first_name VARCHAR(50),\n    last_name VARCHAR(50),\n    full_name VARCHAR(101) AS (CONCAT(first_name, ' ', last_name)) VIRTUAL,\n    INDEX idx_full_name (full_name)  -- Works in MySQL 8.0+\n);",
      output: "VIRTUAL columns save storage; STORED columns enable indexing (pre-8.0)",
      note: "MySQL 8.0 allows indexing both types. Choose based on read/write ratio and indexing needs."
    },
    {
      question: "How do you use JSON functions to query nested data?",
      answer: "JSON functions: JSON_EXTRACT (->) gets values, JSON_UNQUOTE (->>) gets string, JSON_CONTAINS checks existence, JSON_SEARCH finds paths, JSON_OVERLAPS (8.0+) checks array overlap, JSON_TABLE converts to relational rows, JSON_DEPTH gets nesting level.",
      example: "-- Sample JSON document\nINSERT INTO products (id, data) VALUES (1, '{\n    \"name\": \"Laptop\",\n    \"specs\": {\n        \"ram\": \"16GB\",\n        \"storage\": {\"type\": \"SSD\", \"size\": \"512GB\"},\n        \"ports\": [\"USB-C\", \"HDMI\", \"USB-A\"]\n    },\n    \"prices\": [{\"store\": \"Amazon\", \"price\": 999}, {\"store\": \"BestBuy\", \"price\": 1049}],\n    \"tags\": [\"electronics\", \"computer\"]\n}');\n\n-- Extract nested values\nSELECT \n    data->>'$.name' as name,\n    data->'$.specs.ram' as ram,\n    data->>'$.specs.storage.size' as storage_size,\n    data->'$.specs.ports[0]' as first_port\nFROM products;\n\n-- JSON_CONTAINS (check array for value)\nSELECT * FROM products \nWHERE JSON_CONTAINS(data->'$.tags', '\"electronics\"');\n\n-- JSON_OVERLAPS (check array overlap - MySQL 8.0+)\nSELECT * FROM products \nWHERE JSON_OVERLAPS(data->'$.tags', '[\"electronics\", \"gaming\"]');\n\n-- JSON_SEARCH (find path of value)\nSELECT JSON_SEARCH(data, 'one', 'HDMI') as path FROM products;\n\n-- JSON_TABLE (convert JSON array to rows)\nSELECT p.id, store_data.store, store_data.price\nFROM products p,\nJSON_TABLE(\n    p.data,\n    '$.prices[*]' COLUMNS (\n        store VARCHAR(50) PATH '$.store',\n        price DECIMAL(10,2) PATH '$.price'\n    )\n) AS store_data;\n\n-- JSON_KEYS (get object keys)\nSELECT JSON_KEYS(data) FROM products;\n\n-- JSON_LENGTH (array length)\nSELECT JSON_LENGTH(data->'$.specs.ports') as port_count FROM products;\n\n-- Modify JSON\nUPDATE products \nSET data = JSON_SET(data, '$.specs.warranty', '2 years')\nWHERE id = 1;\n\nUPDATE products \nSET data = JSON_REMOVE(data, '$.prices')\nWHERE id = 1;\n\n-- JSON_MERGE_PATCH (merge objects)\nUPDATE products \nSET data = JSON_MERGE_PATCH(data, '{\"discount\": 0.1, \"in_stock\": true}')\nWHERE id = 1;\n\n-- JSON_ARRAYAGG and JSON_OBJECTAGG (aggregate to JSON)\nSELECT JSON_ARRAYAGG(name) as all_names,\n       JSON_OBJECTAGG(id, name) as name_by_id\nFROM products;",
      output: "JSON functions enable powerful querying of semi-structured data within relational tables",
      note: "Use generated columns with indexes for frequently accessed JSON fields for better performance."
    },
    {
      question: "Explain MVCC (Multi-Version Concurrency Control) in MySQL.",
      answer: "MVCC allows concurrent reads and writes without locking. InnoDB maintains multiple versions of each row (undo log). Reads see snapshot at transaction start (REPEATABLE READ) or latest committed (READ COMMITTED). Eliminates read locks, improves concurrency.",
      example: "-- MVCC in action (REPEATABLE READ - MySQL default)\n-- Transaction 1\nSTART TRANSACTION;\nSELECT balance FROM accounts WHERE id = 1;  -- Sees 1000\n\n-- Transaction 2 (simultaneous)\nSTART TRANSACTION;\nUPDATE accounts SET balance = 2000 WHERE id = 1;\nCOMMIT;\n\n-- Transaction 1 (still sees original 1000 - MVCC)\nSELECT balance FROM accounts WHERE id = 1;  -- Still 1000\n\n-- READ COMMITTED (sees latest committed)\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSTART TRANSACTION;\nSELECT balance FROM accounts WHERE id = 1;  -- Sees 1000\n-- Transaction 2 updates to 2000 and commits\nSELECT balance FROM accounts WHERE id = 1;  -- Now sees 2000\n\n-- Snapshot for long-running backups\nSTART TRANSACTION WITH CONSISTENT SNAPSHOT;\nSELECT * FROM large_table;  -- Consistent view at start\n\n-- Check undo logs\nSHOW ENGINE INNODB STATUS\\G\n-- Look for 'History list length'\n\n-- MVCC advantages:\n-- 1. No read locks needed\n-- 2. Write doesn't block reads\n-- 3. High concurrency\n-- 4. Consistent snapshots\n\n-- MVCC overhead:\n-- 1. Undo log space (can grow large)\n-- 2. Long-running transactions can cause performance issues\n\n-- Monitoring MVCC\nSELECT * FROM information_schema.INNODB_TRX;  -- Active transactions\nSELECT * FROM performance_schema.events_transactions_current;",
      output: "MVCC enables non-blocking reads and consistent snapshots without locks",
      note: "Long-running transactions prevent undo log cleanup, causing performance issues. REPEATABLE READ default uses MVCC."
    },
    {
      question: "What are the differences between MySQL Cluster (NDB) and InnoDB Cluster?",
      answer: "NDB Cluster: Shared-nothing, distributed, in-memory, for high availability (99.999%), automatic sharding, synchronous replication. InnoDB Cluster: Based on Group Replication + MySQL Router, asynchronous (semi-sync), persistent storage, used with standard InnoDB tables.",
      example: "-- NDB Cluster (distributed)\n-- Requires special engine: ENGINE=NDB\nCREATE TABLE distributed_table (\n    id INT PRIMARY KEY,\n    name VARCHAR(100)\n) ENGINE=NDB;\n\n-- Data partitioned across nodes\n-- In-memory by default (can use Disk Data tables)\n-- 5-99 nodes\n-- CAP: AP (Available, Partition-tolerant), not CP\n\n-- InnoDB Cluster (standard replication)\n-- Group Replication setup\nINSTALL PLUGIN group_replication SONAME 'group_replication.so';\n\nSET GLOBAL group_replication_bootstrap_group=ON;\nSTART GROUP_REPLICATION;\nSET GLOBAL group_replication_bootstrap_group=OFF;\n\n-- Add instances\n-- Uses standard InnoDB tables\n-- Write to any node (multi-primary or single-primary)\n-- CAP: CP (Consistent, Partition-tolerant)\n\n-- Comparison table\n-- Feature: NDB Cluster vs InnoDB Cluster\n-- Storage: Memory (default) vs Disk\n-- Transactions: READ COMMITTED vs REPEATABLE READ\n-- Latency: Very low vs Low\n-- Data size: Limited by RAM vs Disk-bound\n-- Use cases: Telecom, gaming vs General purpose\n\n-- Use NDB for:\n-- 1. 99.999% uptime requirement\n-- 2. Extreme write throughput\n-- 3. Data fits in memory\n-- 4. Automatic sharding needed\n\n-- Use InnoDB Cluster for:\n-- 1. Standard web applications\n-- 2. Large data volumes\n-- 3. ACID compliance with persistence\n-- 4. Mixed read/write workloads",
      output: "NDB Cluster for in-memory distributed HA; InnoDB Cluster for disk-based standard replication",
      note: "NDB has limitations (JOIN across nodes, foreign keys). InnoDB Cluster more common for general use."
    },
    {
      question: "How do you implement row-level security in MySQL?",
      answer: "Row-level security restricts which rows users can see/modify. Implemented via: Views with WHERE clause (specific to user), Stored procedures with security context, Application logic, Proxy users, MySQL Enterprise Firewall, or Virtual columns with user context.",
      example: "-- Method 1: Views with user context\nCREATE VIEW user_orders AS\nSELECT o.* FROM orders o\nWHERE o.user_id = (SELECT id FROM users WHERE username = USER());\n\n-- Method 2: Stored procedures with invoker rights\nCREATE DEFINER='admin'@'%' PROCEDURE GetUserOrders()\nSQL SECURITY INVOKER\nBEGIN\n    SELECT o.* FROM orders o\n    WHERE o.user_id = (SELECT id FROM users WHERE username = SUBSTRING_INDEX(USER(), '@', 1));\nEND;\n\n-- Method 3: Proxy users\nCREATE USER 'app'@'%' IDENTIFIED BY 'app_pass';\nCREATE USER 'alice'@'%' IDENTIFIED BY 'alice_pass';\nCREATE USER 'bob'@'%' IDENTIFIED BY 'bob_pass';\n\nGRANT SELECT ON mydb.orders TO 'app'@'%';\nSET SESSION proxy_user = 'alice'@'%';\n\n-- Method 4: Application context (MySQL 8.0+)\nSET @user_id = (SELECT id FROM users WHERE username = USER());\nPREPARE stmt FROM 'SELECT * FROM orders WHERE user_id = ?';\nEXECUTE stmt USING @user_id;\n\n-- Method 5: Virtual column with security\nCREATE TABLE secure_orders (\n    id INT,\n    user_id INT,\n    amount DECIMAL(10,2),\n    visible BOOLEAN GENERATED ALWAYS AS (user_id = (SELECT id FROM users WHERE username = USER())) VIRTUAL\n);\n\n-- Grant only through view\nGRANT SELECT ON mydb.user_orders TO 'app_user'@'%';\n\n-- MySQL Enterprise Firewall (row-based)\nINSTALL PLUGIN firewall SONAME 'firewall.so';\nSET GLOBAL firewall_mode = 'RECORDING';\n-- Train firewall with allowed queries\n\n-- Row-level auditing\nCREATE TRIGGER audit_select\nAFTER SELECT ON users\nFOR EACH ROW\nBEGIN\n    INSERT INTO access_log (user, accessed_row, access_time)\n    VALUES (USER(), NEW.id, NOW());\nEND;",
      output: "Row-level security ensures users only see their own data via views or procedures",
      note: "Combine with prepared statements to prevent injection. Test thoroughly as security measure."
    }
  ]
};
export default interview;