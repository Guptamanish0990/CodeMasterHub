export const learning = {
  basic: {
    title: "🐬 MYSQL: COMPLETE DATABASE DOCUMENTATION",
    description: "Comprehensive MySQL database guide covering everything from fundamentals to enterprise-level database management. MySQL is the world's most popular open-source relational database management system (RDBMS), powering millions of applications worldwide including Facebook, Twitter, YouTube, and WordPress. This documentation includes 35+ topics with real-world examples, line-by-line explanations, and practical use cases. Perfect for beginners and experienced developers building production applications.",
    
    topics: [
      {
        name: "1. INTRODUCTION TO MYSQL & DATABASE CONCEPTS",
        description: "MySQL is an open-source RDBMS that stores data in structured tables with rows and columns. A database organizes information for easy access, management, and updating. Key concepts include tables (data storage), rows (records), columns (fields), primary keys (unique identifiers), and foreign keys (table relationships). MySQL architecture includes connection management, SQL parser, optimizer, storage engines (InnoDB, MyISAM), and cache buffers.",
        code: `-- Check MySQL version
SELECT VERSION();

-- Show all databases
SHOW DATABASES;

-- Create new database
CREATE DATABASE company_db;
USE company_db;

-- Create first table
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2),
    hire_date DATE,
    department VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert sample data
INSERT INTO employees (first_name, last_name, email, salary, hire_date, department)
VALUES 
('John', 'Doe', 'john.doe@company.com', 75000.00, '2023-01-15', 'Engineering'),
('Jane', 'Smith', 'jane.smith@company.com', 85000.00, '2023-02-20', 'Marketing'),
('Bob', 'Johnson', 'bob.johnson@company.com', 65000.00, '2023-03-10', 'Sales');

-- Query the table
SELECT * FROM employees;

-- Basic queries with conditions
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary > 70000;

-- Count records
SELECT COUNT(*) as total_employees FROM employees;`,
        lineByLine: [
          "Line 1: SELECT VERSION() - Returns MySQL server version information",
          "Line 2: SHOW DATABASES - Lists all databases on the server",
          "Line 3: CREATE DATABASE - Creates new database",
          "Line 4: USE - Switches to specified database",
          "Line 7-16: CREATE TABLE - Defines table structure",
          "Line 8: id - Primary key, auto-increments",
          "Line 9-10: first_name, last_name - Required text columns",
          "Line 11: email - Must be unique across all rows",
          "Line 12: salary - Decimal with 2 decimal places",
          "Line 15: is_active - Boolean default TRUE",
          "Line 19-28: INSERT INTO - Adds sample records",
          "Line 31: SELECT * - Retrieves all columns",
          "Line 34-36: SELECT with WHERE - Filters rows"
        ],
        simpleMeaning: "MySQL is like a digital filing cabinet storing organized information. Tables are like folders, rows are individual files, and columns are file details. The database helps you save, find, and organize data quickly, like a super-powered Excel that millions can use at once.",
        output: `+----------------+
| VERSION()      |
+----------------+
| 8.0.35         |
+----------------+

+----+------------+-----------+-------------------------+----------+------------+-------------+
| id | first_name | last_name | email                   | salary   | hire_date  | department  |
+----+------------+-----------+-------------------------+----------+------------+-------------+
| 1  | John       | Doe       | john.doe@company.com    | 75000.00 | 2023-01-15 | Engineering |
| 2  | Jane       | Smith     | jane.smith@company.com  | 85000.00 | 2023-02-20 | Marketing   |
| 3  | Bob        | Johnson   | bob.johnson@company.com | 65000.00 | 2023-03-10 | Sales       |
+----+------------+-----------+-------------------------+----------+------------+-------------+`,
        note: "MySQL 8.0+ recommended. Always use InnoDB engine for production. Primary keys are mandatory for good database design. Use meaningful table/column names in snake_case."
      },
      
      {
        name: "2. MYSQL DATA TYPES - COMPLETE REFERENCE",
        description: "MySQL data types define what kind of data each column can store. Numeric types include TINYINT (very small numbers), INT (regular integers), BIGINT (large numbers), DECIMAL (exact money values), FLOAT/DOUBLE (approximate decimals). String types include CHAR (fixed-length), VARCHAR (variable-length), TEXT (long text), BLOB (binary data), ENUM (predefined options), and JSON (flexible schema). Date/Time types include DATE (just date), TIME (just time), DATETIME (date and time), TIMESTAMP (auto-updating), and YEAR.",
        code: `-- Numeric Types Examples
CREATE TABLE numeric_examples (
    tiny_val TINYINT,              -- -128 to 127
    tiny_unsigned TINYINT UNSIGNED, -- 0 to 255
    int_val INT,                    -- -2.1B to 2.1B
    big_val BIGINT,                 -- -9.2Q to 9.2Q
    exact_price DECIMAL(10,2),      -- 8 digits before, 2 after decimal
    float_approx FLOAT,             -- Approximate, 4 bytes
    id INT PRIMARY KEY AUTO_INCREMENT
);

-- String Types Examples
CREATE TABLE string_examples (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fixed_code CHAR(10),             -- Always 10 characters
    variable_name VARCHAR(100),       -- Up to 100 characters
    short_text TEXT,                  -- Up to 65,535 characters
    status ENUM('active', 'inactive', 'pending'),
    tags SET('sale','new','featured','hot')
);

-- Date/Time Types Examples
CREATE TABLE date_examples (
    id INT PRIMARY KEY AUTO_INCREMENT,
    birth_date DATE,                  -- YYYY-MM-DD
    meeting_time TIME,                -- HH:MM:SS
    created_at DATETIME,              -- YYYY-MM-DD HH:MM:SS
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- JSON Type Example
CREATE TABLE product_examples (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    attributes JSON
);

-- Insert and query JSON data
INSERT INTO product_examples VALUES 
(1, 'Laptop', '{"color": "silver", "ram": "16GB"}');

SELECT name, attributes->>'$.color' as color FROM product_examples;`,
        lineByLine: [
          "Line 1-10: Numeric types - Different sizes for different number needs",
          "Line 2: TINYINT - Smallest integer, saves space",
          "Line 3: TINYINT UNSIGNED - Only positive numbers",
          "Line 4: INT - Most common for IDs and counters",
          "Line 5: BIGINT - For very large numbers like timestamps",
          "Line 6: DECIMAL(10,2) - Perfect for money (exact, no rounding)",
          "Line 12-19: String types - For text and character data",
          "Line 14: CHAR(10) - Fixed length, faster but wastes space",
          "Line 15: VARCHAR(100) - Variable length, space efficient",
          "Line 16: TEXT - For paragraphs and longer content",
          "Line 17: ENUM - Limited to specific values",
          "Line 18: SET - Can store multiple predefined values",
          "Line 22-29: Date/Time types - For temporal data",
          "Line 24: DATE - Just calendar date",
          "Line 25: TIME - Just clock time",
          "Line 26: DATETIME - Both date and time",
          "Line 27: TIMESTAMP - Auto-updates on row change",
          "Line 32-35: JSON - Flexible semi-structured data",
          "Line 38: Extract JSON value using ->> operator"
        ],
        simpleMeaning: "Data types are like different containers: INT is a small box for whole numbers, DECIMAL is a precise scale for money, VARCHAR is a stretchy bag for names (varies in length), TEXT is a large box for paragraphs, DATE is a calendar, and JSON is a flexible drawer that can hold different things. Choose the smallest container that fits your data.",
        output: `+------+----------+---------------+---------+-------------+
| id   | tiny_val | tiny_unsigned | int_val | exact_price |
+------+----------+---------------+---------+-------------+
| 1    | 100      | 200           | 1000000 | 1234.56     |
+------+----------+---------------+---------+-------------+

+----+------------+----------------+-------------+----------+
| id | fixed_code | variable_name  | short_text  | status   |
+----+------------+----------------+-------------+----------+
| 1  | ABC123     | John Doe       | Hello World | active   |
+----+------------+----------------+-------------+----------+

+----+------------+--------------+---------------------+---------------------+
| id | birth_date | meeting_time | created_at          | updated_at          |
+----+------------+--------------+---------------------+---------------------+
| 1  | 1990-05-15 | 14:30:00     | 2024-01-15 10:30:00 | 2024-01-15 10:30:00 |
+----+------------+--------------+---------------------+---------------------+

+------+--------+----------------+
| name | color  | ram            |
+------+--------+----------------+
| Laptop| silver | 16GB           |
+------+--------+----------------+`,
        note: "Use smallest data type that fits your data (TINYINT vs INT saves 75% storage). Use DECIMAL for money (FLOAT causes rounding errors). VARCHAR(255) is common for short strings. TEXT types cannot have default values. TIMESTAMP converts to UTC, DATETIME does not."
      },
      
      {
        name: "3. MYSQL CONSTRAINTS - DATA INTEGRITY RULES",
        description: "Constraints enforce rules on data to ensure accuracy and reliability. PRIMARY KEY uniquely identifies each row (must be unique and never NULL). FOREIGN KEY links tables together maintaining referential integrity. UNIQUE prevents duplicate values in a column. NOT NULL requires a value (cannot be empty). CHECK validates data against conditions (age >= 18). DEFAULT provides automatic values when none specified.",
        code: `-- Parent table with PRIMARY KEY
CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_code VARCHAR(10) UNIQUE NOT NULL,
    dept_name VARCHAR(100) NOT NULL,
    budget DECIMAL(15,2) DEFAULT 0.00
);

-- Child table with FOREIGN KEY and CHECK constraints
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_code VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10,2) CHECK (salary > 0),
    hire_date DATE NOT NULL,
    dept_id INT,
    
    CONSTRAINT fk_employee_department 
        FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Composite Primary Key (two columns together as unique identifier)
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (order_id, product_id)
);

-- Insert valid data
INSERT INTO departments (dept_code, dept_name, budget) VALUES
('ENG', 'Engineering', 500000.00),
('MKT', 'Marketing', 300000.00);

INSERT INTO employees (emp_code, first_name, email, age, salary, hire_date, dept_id) 
VALUES ('E001', 'John', 'john@company.com', 25, 75000, '2024-01-15', 1);

-- This would fail (age 16 violates CHECK constraint)
-- INSERT INTO employees VALUES ('E002', 'Young', 'young@company.com', 16, 50000, '2024-03-01', 1);`,
        lineByLine: [
          "Line 1-7: Parent table departments with PRIMARY KEY",
          "Line 3: dept_id INT PRIMARY KEY - Unique identifier for each department",
          "Line 4: dept_code UNIQUE NOT NULL - Must be unique and never empty",
          "Line 6: budget DEFAULT 0.00 - Default value if not specified",
          "Line 10-23: Child table employees with multiple constraints",
          "Line 12: emp_id PRIMARY KEY - Each employee has unique ID",
          "Line 13: emp_code UNIQUE NOT NULL - Must be unique",
          "Line 15: email UNIQUE NOT NULL - No duplicate emails",
          "Line 16: age CHECK - Must be between 18-65",
          "Line 17: salary CHECK - Must be positive",
          "Line 18: hire_date NOT NULL - Cannot be empty",
          "Line 20-23: FOREIGN KEY - Links to departments table",
          "Line 22: REFERENCES departments(dept_id)",
          "Line 23: ON DELETE SET NULL - Sets dept_id to NULL if department deleted",
          "Line 24: ON UPDATE CASCADE - Updates dept_id if department ID changes",
          "Line 27-32: Composite Primary Key - Two columns together as unique identifier",
          "Line 31: PRIMARY KEY (order_id, product_id) - Pair must be unique",
          "Line 35-38: Insert valid data - Works within constraints",
          "Line 41-42: Invalid insert - Would violate CHECK constraint"
        ],
        simpleMeaning: "Constraints are like rules protecting your data. PRIMARY KEY is a unique ID card for each row. FOREIGN KEY says 'this must belong to an existing department'. UNIQUE means no two people can share an email. NOT NULL means you can't leave required fields blank. CHECK ensures valid ages (like 25, not 150). DEFAULT fills in values automatically. These rules keep your database clean and trustworthy.",
        output: `Query OK, 2 rows affected

+---------+-----------+-------------+-----------+
| dept_id | dept_code | dept_name   | budget    |
+---------+-----------+-------------+-----------+
| 1       | ENG       | Engineering | 500000.00 |
| 2       | MKT       | Marketing   | 300000.00 |
+---------+-----------+-------------+-----------+

Query OK, 1 row affected

+--------+----------+------------+---------------------+------+----------+------------+----------+
| emp_id | emp_code | first_name | email               | age  | salary   | hire_date  | dept_id |
+--------+----------+------------+---------------------+------+----------+------------+----------+
| 1      | E001     | John       | john@company.com    | 25   | 75000.00 | 2024-01-15 | 1        |
+--------+----------+------------+---------------------+------+----------+------------+----------+

-- Error when inserting invalid age:
ERROR 3819 (HY000): Check constraint 'employees_chk_1' is violated.`,
        note: "Always define PRIMARY KEY for every table. FOREIGN KEY columns must have matching data types. ON DELETE CASCADE removes child records when parent deleted (use carefully!). CHECK constraints fully supported in MySQL 8.0.15+. Foreign keys require InnoDB storage engine."
      },
      
      {
        name: "4. MYSQL JOINS - COMBINING DATA FROM TABLES",
        description: "JOINs combine rows from multiple tables based on related columns. INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from left table plus matches from right (NULL if no match). RIGHT JOIN is opposite of LEFT JOIN. SELF JOIN joins a table with itself. Multiple JOINs can chain several tables together. JOINs are essential for normalized database design where data is spread across related tables.",
        code: `-- Create sample tables
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    total_amount DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO customers VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Carol');
INSERT INTO orders VALUES (101, 1, 250.00), (102, 1, 150.00), (103, 2, 500.00);

-- INNER JOIN (only matching records)
SELECT c.name, o.order_id, o.total_amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- LEFT JOIN (all customers, matching orders)
SELECT c.name, COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

-- Multiple JOINs (three tables)
CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT,
    product_name VARCHAR(100)
);

INSERT INTO order_items VALUES (1, 101, 'Laptop'), (2, 102, 'Mouse');

SELECT c.name, o.order_id, oi.product_name
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id;`,
        lineByLine: [
          "Line 1-8: Create customers and orders tables with relationship",
          "Line 4: customer_id INT PRIMARY KEY - Unique customer identifier",
          "Line 8: customer_id INT - Foreign key referencing customers",
          "Line 11-13: Insert sample customer and order data",
          "Line 16-19: INNER JOIN - Returns only customers who have orders",
          "Line 18: ON c.customer_id = o.customer_id - Join condition",
          "Line 22-27: LEFT JOIN - Returns all customers, even without orders",
          "Line 25: LEFT JOIN - Includes customers with zero orders",
          "Line 26: GROUP BY - Groups by customer for COUNT",
          "Line 30-42: Multiple JOINs - Chain three tables together",
          "Line 38-42: Two INNER JOINs - Connect customers to orders to items"
        ],
        simpleMeaning: "JOINs connect information from different tables, like merging two spreadsheets. INNER JOIN gives you only what exists in both (like overlapping circles). LEFT JOIN gives everything from the left table plus matches from the right (or empty if none). SELF JOIN compares a table to itself (finding pairs). With JOINs, you can answer 'Which customer bought which product?'",
        output: `-- INNER JOIN results (customers with orders)
+-------+----------+--------------+
| name  | order_id | total_amount |
+-------+----------+--------------+
| Alice | 101      | 250.00       |
| Alice | 102      | 150.00       |
| Bob   | 103      | 500.00       |
+-------+----------+--------------+

-- LEFT JOIN results (all customers)
+-------+-------------+
| name  | order_count |
+-------+-------------+
| Alice | 2           |
| Bob   | 1           |
| Carol | 0           |
+-------+-------------+

-- Multiple JOINs results
+-------+----------+--------------+
| name  | order_id | product_name |
+-------+----------+--------------+
| Alice | 101      | Laptop       |
| Alice | 102      | Mouse        |
+-------+----------+--------------+`,
        note: "Always index foreign key columns used in JOINs. INNER JOIN is default (JOIN means INNER JOIN). LEFT JOIN is more common than RIGHT JOIN. Use table aliases (c, o) for readability. Test JOINs with EXPLAIN before production use."
      },
      
      {
        name: "5. MYSQL INDEXES - PERFORMANCE OPTIMIZATION",
        description: "Indexes dramatically speed up data retrieval, like a book's table of contents. CREATE INDEX on columns used in WHERE, JOIN, and ORDER BY clauses. UNIQUE INDEX prevents duplicate values. Composite indexes cover multiple columns. Too many indexes slow down INSERT/UPDATE/DELETE. Use EXPLAIN to see if queries use indexes. Invisible indexes let you test without removing them.",
        code: `-- Create table for indexing examples
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    city VARCHAR(50),
    created_at DATETIME
);

-- Single column index (most common)
CREATE INDEX idx_email ON users(email);

-- Unique index (prevents duplicates)
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- Composite index (multiple columns)
CREATE INDEX idx_name_age ON users(name, age);

-- Full-text index (for searching text)
CREATE FULLTEXT INDEX idx_name_fulltext ON users(name);

-- Descending index (for reverse order queries)
CREATE INDEX idx_created_desc ON users(created_at DESC);

-- Invisible index (test without removing)
CREATE INDEX idx_test ON users(city) INVISIBLE;

-- View indexes on table
SHOW INDEX FROM users;

-- Drop index when no longer needed
DROP INDEX idx_email ON users;

-- See if query uses index
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';

-- Index for JOIN performance
CREATE INDEX idx_user_id ON orders(user_id);

-- Index for WHERE with multiple conditions
CREATE INDEX idx_age_city ON users(age, city);

-- Partial index (MySQL 8.0+ - using generated columns)
ALTER TABLE users ADD COLUMN first_name VARCHAR(50) 
GENERATED ALWAYS AS (SUBSTRING_INDEX(name, ' ', 1)) STORED;
CREATE INDEX idx_first_name ON users(first_name);`,
        lineByLine: [
          "Line 1-9: Create users table for indexing examples",
          "Line 11: CREATE INDEX - Basic single column index on email",
          "Line 14: UNIQUE INDEX - Prevents duplicate email addresses",
          "Line 17: Composite index - Covers name and age together",
          "Line 20: FULLTEXT INDEX - For text searching (LIKE with wildcards)",
          "Line 23: Descending index - Optimizes ORDER BY created_at DESC",
          "Line 26: INVISIBLE index - Index exists but optimizer ignores it",
          "Line 29: SHOW INDEX - Lists all indexes on table",
          "Line 32: DROP INDEX - Removes index",
          "Line 35: EXPLAIN - Shows if query uses index",
          "Line 38: Index for JOIN - Speeds up JOIN operations",
          "Line 41: Composite index - For multiple WHERE conditions",
          "Line 44-46: Generated column - Creates partial index on first word"
        ],
        simpleMeaning: "Indexes are like a book's index - they help MySQL find data fast without reading every row. Index on email means finding 'john@email.com' is instant. Too many indexes slow down saving data (like updating every index in a book). Use indexes on columns you search for often. Composite indexes cover multiple columns at once, like looking up by last name then first name.",
        output: `-- EXPLAIN output showing index usage
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+
| id | select_type | table | type | possible_keys | key      | key_len | ref   | rows | Extra       |
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+
| 1  | SIMPLE      | users | ref  | idx_email     | idx_email| 403     | const | 1    | Using where |
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+

-- SHOW INDEX output (sample)
+-------+------------+---------------+--------------+-------------+-----------+
| Table | Non_unique | Key_name      | Seq_in_index | Column_name | Collation |
+-------+------------+---------------+--------------+-------------+-----------+
| users | 0          | PRIMARY       | 1            | user_id     | A         |
| users | 0          | idx_email_unique | 1         | email       | A         |
| users | 1          | idx_name_age  | 1            | name        | A         |
| users | 1          | idx_name_age  | 2            | age         | A         |
+-------+------------+---------------+--------------+-------------+-----------+`,
        note: "Indexes speed up SELECT but slow down INSERT/UPDATE/DELETE. Composite index order matters (most selective column first). Use UNIQUE indexes for natural keys (email, username). FULLTEXT indexes better than LIKE '%text%' for searching. Invisible indexes perfect for testing removal impact."
      },
      
      {
        name: "6. MYSQL SUBQUERIES - QUERIES INSIDE QUERIES",
        description: "Subqueries are SELECT statements nested inside other queries. They can be in WHERE clause (filtering), SELECT clause (calculations), FROM clause (temporary tables), or HAVING clause (group filtering). Correlated subqueries reference outer query and run row-by-row (slower). Scalar subqueries return single value. EXISTS checks if subquery returns any rows. Subqueries can often be rewritten as JOINs for better performance.",
        code: `-- Setup sample tables
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT
);

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    location VARCHAR(50)
);

INSERT INTO departments VALUES (1, 'Engineering', 'NYC'), (2, 'Sales', 'LA');
INSERT INTO employees VALUES 
(1, 'Alice', 75000, 1), (2, 'Bob', 85000, 1), (3, 'Carol', 65000, 2);

-- Subquery in WHERE (find employees earning more than average)
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN (employees in specific departments)
SELECT name, dept_id
FROM employees
WHERE dept_id IN (SELECT dept_id FROM departments WHERE location = 'NYC');

-- Correlated subquery (runs per row - slower)
SELECT e1.name, e1.salary
FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept_id = e1.dept_id);

-- Subquery in SELECT (scalar subquery)
SELECT name, salary,
    (SELECT AVG(salary) FROM employees) as company_avg
FROM employees;

-- Subquery in FROM (derived table)
SELECT dept_id, avg_salary
FROM (SELECT dept_id, AVG(salary) as avg_salary 
      FROM employees 
      GROUP BY dept_id) as dept_avg
WHERE avg_salary > 70000;

-- EXISTS subquery (efficient for existence checks)
SELECT d.dept_name
FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id);

-- NOT EXISTS (departments with no employees)
SELECT d.dept_name
FROM departments d
WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id);`,
        lineByLine: [
          "Line 1-11: Create employees and departments tables",
          "Line 14-16: Insert sample data",
          "Line 19-21: Subquery in WHERE - Compare each salary to company average",
          "Line 20: (SELECT AVG(salary) FROM employees) - Runs once, returns single value",
          "Line 24-26: Subquery with IN - Returns multiple values for IN clause",
          "Line 25: Selects department IDs in NYC, then finds employees in those depts",
          "Line 29-32: Correlated subquery - References outer query (e1.dept_id)",
          "Line 31: Runs once per employee, slower but useful for per-group comparisons",
          "Line 35-38: Subquery in SELECT - Adds calculated value to each row",
          "Line 36: Shows each employee's salary and company average side by side",
          "Line 41-47: Subquery in FROM - Derived table (temporary result set)",
          "Line 42-45: Inner query calculates average per department",
          "Line 46-47: Outer query filters results",
          "Line 50-53: EXISTS - Checks if any employee exists in department",
          "Line 51: SELECT 1 (doesn't matter what you select, just checks existence)",
          "Line 56-59: NOT EXISTS - Finds departments with no employees"
        ],
        simpleMeaning: "Subqueries are questions within questions. Like asking 'Show employees who earn more than average' - first you find average, then compare everyone. IN subquery is like 'Show employees in departments that are in NYC' - find NYC departments first, then their employees. EXISTS just checks 'Does this department have any employees?' without caring how many.",
        output: `-- Salaries above company average (75,000)
+-------+--------+
| name  | salary |
+-------+--------+
| Bob   | 85000  |
+-------+--------+

-- Employees in NYC departments
+-------+---------+
| name  | dept_id |
+-------+---------+
| Alice | 1       |
| Bob   | 1       |
+-------+---------+

-- With department average (correlated)
+-------+--------+------------------+
| name  | salary | company_avg      |
+-------+--------+------------------+
| Alice | 75000  | 75000.0000       |
| Bob   | 85000  | 75000.0000       |
| Carol | 65000  | 75000.0000       |
+-------+--------+------------------+

-- Departments with average > 70,000
+---------+-----------+
| dept_id | avg_salary|
+---------+-----------+
| 1       | 80000.00  |
+---------+-----------+

-- Departments with employees (EXISTS)
+-------------+
| dept_name   |
+-------------+
| Engineering |
| Sales       |
+-------------+`,
        note: "Correlated subqueries run row-by-row (slow on large tables). EXISTS often faster than IN for large datasets. Subqueries in FROM create temporary tables. Scalar subqueries must return exactly one value. Many subqueries can be rewritten as JOINs for better performance."
      },
      
      {
        name: "7. MYSQL STORED PROCEDURES - REUSABLE SQL CODE",
        description: "Stored procedures are precompiled SQL code blocks stored in the database, like functions but can have multiple statements. They accept input parameters (IN), output parameters (OUT), and INOUT (both). Procedures reduce network traffic by executing multiple statements on server. They encapsulate business logic, improve security (no direct table access), and ensure consistent operations. Use DELIMITER to handle semicolons inside procedure body.",
        code: `DELIMITER //

-- Simple procedure with IN parameter
CREATE PROCEDURE GetEmployee(IN emp_id_param INT)
BEGIN
    SELECT * FROM employees WHERE emp_id = emp_id_param;
END //

-- Procedure with OUT parameter (returns value)
CREATE PROCEDURE GetEmployeeCount(OUT total_count INT)
BEGIN
    SELECT COUNT(*) INTO total_count FROM employees;
END //

-- Procedure with INOUT parameter (both input and output)
CREATE PROCEDURE IncreaseSalary(INOUT current_salary DECIMAL(10,2), 
                                 IN percentage DECIMAL(5,2))
BEGIN
    SET current_salary = current_salary * (1 + percentage / 100);
END //

-- Procedure with multiple statements and variables
CREATE PROCEDURE UpdateEmployeeDepartment(
    IN emp_id_param INT,
    IN new_dept_id INT,
    OUT old_dept_id INT,
    OUT status_message VARCHAR(100)
)
BEGIN
    DECLARE dept_exists INT;
    
    -- Get current department
    SELECT dept_id INTO old_dept_id FROM employees WHERE emp_id = emp_id_param;
    
    -- Check if new department exists
    SELECT COUNT(*) INTO dept_exists FROM departments WHERE dept_id = new_dept_id;
    
    IF dept_exists > 0 THEN
        UPDATE employees SET dept_id = new_dept_id WHERE emp_id = emp_id_param;
        SET status_message = 'Department updated successfully';
    ELSE
        SET status_message = 'Department not found';
    END IF;
END //

-- Procedure with transaction and error handling
CREATE PROCEDURE TransferEmployee(
    IN emp_id_param INT,
    IN from_dept INT,
    IN to_dept INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'Transaction failed' AS message;
    END;
    
    START TRANSACTION;
    
    UPDATE employees SET dept_id = to_dept WHERE emp_id = emp_id_param;
    INSERT INTO department_log(emp_id, from_dept, to_dept, change_date)
    VALUES (emp_id_param, from_dept, to_dept, NOW());
    
    COMMIT;
    SELECT 'Employee transferred successfully' AS message;
END //

DELIMITER ;

-- Call procedures
CALL GetEmployee(1);
CALL GetEmployeeCount(@total);
SELECT @total as total_employees;

SET @salary = 50000;
CALL IncreaseSalary(@salary, 10);
SELECT @salary as increased_salary;  -- 55000

CALL UpdateEmployeeDepartment(1, 2, @old_dept, @status);
SELECT @old_dept, @status;

-- Drop procedure
DROP PROCEDURE IF EXISTS GetEmployee;`,
        lineByLine: [
          "Line 1: DELIMITER // - Changes statement separator to //",
          "Line 4-7: Simple procedure - SELECTs employee by ID",
          "Line 5: IN parameter receives input value",
          "Line 10-13: Procedure with OUT parameter - Returns count",
          "Line 11: SELECT INTO - Stores result in OUT variable",
          "Line 16-20: INOUT parameter - Modifies and returns value",
          "Line 18: SET current_salary - Calculates new salary",
          "Line 23-40: Complex procedure with variables and conditionals",
          "Line 25: DECLARE - Declares local variable",
          "Line 28: Gets current department before update",
          "Line 31: Checks if new department exists",
          "Line 33-38: IF/ELSE conditional logic",
          "Line 37: Sets output parameter",
          "Line 43-57: Procedure with transaction and error handling",
          "Line 45: EXIT HANDLER - Catches any SQL exception",
          "Line 46-48: ROLLBACK on error and returns error message",
          "Line 50: START TRANSACTION - Begins transaction",
          "Line 52: UPDATE - Changes department",
          "Line 53-54: INSERT - Logs the change",
          "Line 56: COMMIT - Saves changes if no error",
          "Line 61: CALL GetEmployee(1) - Execute procedure",
          "Line 62-63: GetEmployeeCount - Uses user variable @total",
          "Line 65-67: IncreaseSalary - INOUT parameter example",
          "Line 69-70: UpdateEmployeeDepartment - Multiple OUT parameters"
        ],
        simpleMeaning: "Stored procedures are like saved recipes in your database. Instead of sending multiple instructions from your app, you send one command: 'CALL TransferEmployee(1,2,3)'. The database does all the work - checking, updating, logging - in one go. This is faster (less network travel) and safer (consistent logic). You can even undo everything if something goes wrong using transactions.",
        output: `-- CALL GetEmployee(1)
+--------+-------+--------+---------+
| emp_id | name  | salary | dept_id |
+--------+-------+--------+---------+
| 1      | Alice | 75000  | 1       |
+--------+-------+--------+---------+

-- GetEmployeeCount
+------------------+
| total_employees  |
+------------------+
| 3                |
+------------------+

-- IncreaseSalary
+------------------+
| increased_salary |
+------------------+
| 55000.00         |
+------------------+

-- UpdateEmployeeDepartment
+--------+----------------------------------+
| @old_dept | @status                       |
+-----------+-------------------------------+
| 1         | Department updated successfully |
+-----------+-------------------------------+

-- TransferEmployee
+-----------------------------------+
| message                           |
+-----------------------------------+
| Employee transferred successfully |
+-----------------------------------+`,
        note: "DELIMITER changes statement separator (use //, $$, or other). IN parameters are input only, OUT returns values, INOUT does both. Variables declared with DECLARE at start of BEGIN block. Always include error handling for transactions. Procedures improve security by preventing direct table access."
      },
      
      {
        name: "8. MYSQL FUNCTIONS - REUSABLE VALUE RETURNERS",
        description: "Functions differ from procedures by always returning a single value. Use RETURNS clause to specify return type. DETERMINISTIC means same input gives same output (for replication safety). Functions can be used in SELECT, WHERE, and ORDER BY clauses. Built-in functions include string (CONCAT, SUBSTRING), numeric (ROUND, ABS), date (NOW, DATE_FORMAT), and aggregate (SUM, AVG, COUNT). User-defined functions must be deterministic for replication.",
        code: `DELIMITER //

-- Simple function with single calculation
CREATE FUNCTION GetFullName(first_name VARCHAR(50), last_name VARCHAR(50))
RETURNS VARCHAR(101)
DETERMINISTIC
BEGIN
    RETURN CONCAT(first_name, ' ', last_name);
END //

-- Function with conditional logic
CREATE FUNCTION GetSalaryGrade(salary DECIMAL(10,2))
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE grade VARCHAR(20);
    
    IF salary >= 80000 THEN
        SET grade = 'Grade A (Executive)';
    ELSEIF salary >= 60000 THEN
        SET grade = 'Grade B (Senior)';
    ELSEIF salary >= 40000 THEN
        SET grade = 'Grade C (Mid-Level)';
    ELSE
        SET grade = 'Grade D (Junior)';
    END IF;
    
    RETURN grade;
END //

-- Function calculating age from birthdate
CREATE FUNCTION CalculateAge(birth_date DATE)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE age INT;
    SET age = YEAR(CURDATE()) - YEAR(birth_date);
    
    IF DATE_FORMAT(birth_date, '%m%d') > DATE_FORMAT(CURDATE(), '%m%d') THEN
        SET age = age - 1;
    END IF;
    
    RETURN age;
END //

-- Function returning JSON data
CREATE FUNCTION GetEmployeeSummary(emp_id_param INT)
RETURNS JSON
READS SQL DATA
BEGIN
    DECLARE result JSON;
    
    SELECT JSON_OBJECT(
        'id', emp_id,
        'name', name,
        'salary', salary,
        'grade', GetSalaryGrade(salary)
    ) INTO result
    FROM employees
    WHERE emp_id = emp_id_param;
    
    RETURN result;
END //

-- Function using aggregation
CREATE FUNCTION GetDepartmentAvgSalary(dept_id_param INT)
RETURNS DECIMAL(10,2)
READS SQL DATA
BEGIN
    DECLARE avg_salary DECIMAL(10,2);
    
    SELECT AVG(salary) INTO avg_salary
    FROM employees
    WHERE dept_id = dept_id_param;
    
    RETURN COALESCE(avg_salary, 0);
END //

DELIMITER ;

-- Using functions in queries
SELECT GetFullName(first_name, last_name) as full_name FROM employees;

SELECT name, salary, GetSalaryGrade(salary) as grade FROM employees;

SELECT CalculateAge('1990-05-15') as age;

SELECT GetEmployeeSummary(1) as employee_json;

SELECT GetDepartmentAvgSalary(1) as dept_avg_salary;

-- Drop function
DROP FUNCTION IF EXISTS GetFullName;`,
        lineByLine: [
          "Line 4-10: Simple function - Concatenates first and last name",
          "Line 6: RETURNS VARCHAR(101) - Return type declaration",
          "Line 7: DETERMINISTIC - Same input = same output (important for replication)",
          "Line 8: RETURN - Returns the calculated value",
          "Line 13-28: Function with IF/ELSEIF logic",
          "Line 15: DECLARE grade - Local variable",
          "Line 17-26: Conditional logic to determine grade",
          "Line 28: RETURN grade - Returns the computed grade",
          "Line 31-45: Age calculation with date logic",
          "Line 38-40: Adjusts age if birthday hasn't occurred this year",
          "Line 48-64: JSON function - Returns structured data",
          "Line 50: READS SQL DATA - Indicates function reads but doesn't modify data",
          "Line 53: JSON_OBJECT - Creates JSON from key-value pairs",
          "Line 54: Uses GetSalaryGrade function inside JSON",
          "Line 67-80: Aggregate function - Returns average salary",
          "Line 75: SELECT AVG(salary) INTO avg_salary",
          "Line 78: COALESCE - Returns 0 if avg_salary is NULL",
          "Line 84: Using function in SELECT",
          "Line 86: Using function in SELECT with other columns",
          "Line 88: Standalone function call",
          "Line 90: Function returning JSON data",
          "Line 92: Aggregate function call"
        ],
        simpleMeaning: "Functions are like calculators - give them inputs, get a single output. GetSalaryGrade(75000) returns 'Grade B (Senior)'. You can use them anywhere: SELECT GetFullName(first_name, last_name) FROM users. Unlike procedures, functions don't change data - they just compute and return. This makes them perfect for formatting names, calculating ages, or grading salaries on the fly.",
        output: `-- GetFullName
+-------------------+
| full_name         |
+-------------------+
| John Doe          |
| Jane Smith        |
+-------------------+

-- GetSalaryGrade
+-------+--------+------------------+
| name  | salary | grade            |
+-------+--------+------------------+
| Alice | 85000  | Grade A (Executive)|
| Bob   | 75000  | Grade B (Senior)  |
| Carol | 65000  | Grade B (Senior)  |
+-------+--------+------------------+

-- CalculateAge
+------+
| age  |
+------+
| 34   |
+------+

-- GetEmployeeSummary (returns JSON)
+------------------------------------------------------------------+
| employee_json                                                    |
+------------------------------------------------------------------+
| {"id": 1, "name": "Alice", "salary": 85000, "grade": "Grade A"}  |
+------------------------------------------------------------------+

-- GetDepartmentAvgSalary
+------------------+
| dept_avg_salary  |
+------------------+
| 80000.00         |
+------------------+`,
        note: "DETERMINISTIC required for replication safety (function must return same value for same inputs). READ SQL DATA indicates function reads data (SELECT) but doesn't modify. Functions cannot perform INSERT, UPDATE, or DELETE. Built-in functions are faster than user-defined. Use COALESCE to handle NULL returns."
      },
      
      {
        name: "9. MYSQL TRIGGERS - AUTOMATIC ACTIONS ON DATA CHANGES",
        description: "Triggers automatically execute SQL code when specified events occur: BEFORE/AFTER INSERT, UPDATE, DELETE. Use OLD.column to access previous value, NEW.column for new value. Triggers are useful for audit logging, data validation, automatic updates (updated_at timestamps), cascading changes, and enforcing complex business rules. Multiple triggers can exist per event type with specified order.",
        code: `-- Create audit log table
CREATE TABLE employee_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    action_type VARCHAR(20),
    old_data JSON,
    new_data JSON,
    changed_by VARCHAR(50),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- BEFORE INSERT trigger (auto-set values)
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    SET NEW.created_at = NOW();
    SET NEW.email = LOWER(NEW.email);
    SET NEW.updated_at = NOW();
END //

-- AFTER INSERT trigger (audit logging)
CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_audit(emp_id, action_type, new_data, changed_by)
    VALUES (NEW.emp_id, 'INSERT', JSON_OBJECT('name', NEW.name, 'salary', NEW.salary), 
            USER());
END //

-- BEFORE UPDATE trigger (validate and log changes)
CREATE TRIGGER before_employee_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary * 0.9 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Salary cannot decrease by more than 10%';
    END IF;
    
    SET NEW.updated_at = NOW();
END //

-- AFTER UPDATE trigger (audit changes)
CREATE TRIGGER after_employee_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_audit(emp_id, action_type, old_data, new_data, changed_by)
    VALUES (NEW.emp_id, 'UPDATE', 
            JSON_OBJECT('name', OLD.name, 'salary', OLD.salary),
            JSON_OBJECT('name', NEW.name, 'salary', NEW.salary),
            USER());
END //

-- BEFORE DELETE trigger (prevent deletion under conditions)
CREATE TRIGGER before_employee_delete
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
    IF OLD.status = 'active' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Cannot delete active employees. Deactivate first.';
    END IF;
    
    -- Archive before deletion
    INSERT INTO deleted_employees SELECT OLD.*;
END //

-- AFTER DELETE trigger (cleanup)
CREATE TRIGGER after_employee_delete
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    DELETE FROM employee_sessions WHERE emp_id = OLD.emp_id;
    UPDATE department_stats SET employee_count = employee_count - 1 
    WHERE dept_id = OLD.dept_id;
END //

DELIMITER ;

-- View all triggers
SHOW TRIGGERS;

-- Drop trigger
DROP TRIGGER IF EXISTS before_employee_insert;`,
        lineByLine: [
          "Line 1-10: Audit table stores all changes for tracking",
          "Line 5-6: OLD and NEW data stored as JSON",
          "Line 13-19: BEFORE INSERT - Automatically sets values",
          "Line 16: SET NEW.created_at = NOW() - Sets creation timestamp",
          "Line 17: SET NEW.email = LOWER(NEW.email) - Normalizes email",
          "Line 22-28: AFTER INSERT - Logs new record creation",
          "Line 24: NEW.column - Accesses newly inserted values",
          "Line 26: USER() - Gets current database user",
          "Line 31-40: BEFORE UPDATE - Validates changes before saving",
          "Line 33-35: SIGNAL - Throws error if salary drops too much",
          "Line 38: SET NEW.updated_at = NOW() - Updates timestamp",
          "Line 43-50: AFTER UPDATE - Logs both old and new values",
          "Line 46-49: OLD.column - Previous values before update",
          "Line 47: NEW.column - New values after update",
          "Line 53-63: BEFORE DELETE - Prevents deletion of active employees",
          "Line 56: SIGNAL - Throws error with custom message",
          "Line 60: Archives employee data before deletion",
          "Line 66-72: AFTER DELETE - Performs cleanup operations",
          "Line 68: Clean up related records",
          "Line 69: Update aggregated statistics"
        ],
        simpleMeaning: "Triggers are automatic actions that run when you INSERT, UPDATE, or DELETE data. Like setting 'last_updated' automatically when someone edits a record, or logging who changed what. BEFORE triggers can modify or reject changes (like preventing salary cuts over 10%). AFTER triggers run after the change (like sending email notifications). Think of triggers as 'if this happens, automatically do that' rules.",
        output: `-- BEFORE INSERT trigger adds timestamps
INSERT INTO employees (emp_id, name, email, salary) 
VALUES (4, 'David', 'DAVID@COMPANY.COM', 70000);

-- Result: email becomes 'david@company.com', created_at and updated_at set automatically

-- BEFORE UPDATE trigger prevents large salary decrease
UPDATE employees SET salary = 60000 WHERE emp_id = 1;
-- Error: Salary cannot decrease by more than 10% (75000 -> 60000 is 20% decrease)

-- Valid update works
UPDATE employees SET salary = 70000, name = 'David Smith' WHERE emp_id = 4;

-- AFTER UPDATE trigger logs changes in audit table
SELECT * FROM employee_audit WHERE emp_id = 4;
+----------+--------+-------------+------------------------------------------+------------------------------------------+
| audit_id | emp_id | action_type | old_data                                 | new_data                                 |
+----------+--------+-------------+------------------------------------------+------------------------------------------+
| 1        | 4      | INSERT      | NULL                                     | {"name": "David", "salary": 70000}       |
| 2        | 4      | UPDATE      | {"name": "David", "salary": 70000}       | {"name": "David Smith", "salary": 70000} |
+----------+--------+-------------+------------------------------------------+------------------------------------------+

-- BEFORE DELETE prevents deletion
DELETE FROM employees WHERE emp_id = 4;
-- Error: Cannot delete active employees. Deactivate first.

-- Show all triggers on database
SHOW TRIGGERS;
+------------------------+--------+-----------+------------------------------------------------+
| Trigger                | Event  | Table     | Statement                                      |
+------------------------+--------+-----------+------------------------------------------------+
| before_employee_insert | INSERT | employees | BEGIN SET NEW.created_at = NOW(); ... END     |
| after_employee_insert  | INSERT | employees | BEGIN INSERT INTO employee_audit ... END      |
+------------------------+--------+-----------+------------------------------------------------+`,
        note: "Triggers run automatically - no explicit call needed. BEFORE triggers can modify NEW values, AFTER triggers cannot. OLD not available in INSERT triggers, NEW not available in DELETE triggers. Multiple triggers per event possible with FOLLOWS/PRECEDES clause. Triggers can call stored procedures but not other triggers (to avoid loops)."
      },
      
      {
        name: "10. MYSQL VIEWS - VIRTUAL TABLES FOR SIMPLIFIED QUERIES",
        description: "Views are virtual tables based on SELECT query results. They simplify complex queries, restrict data access (hide sensitive columns), and provide data abstraction. Regular views are dynamic (reflect underlying table changes). Updatable views can modify base tables (under certain conditions). WITH CHECK OPTION prevents updates that would exclude row from view. Views can be indexed for performance (materialized views in MySQL 8.0).",
        code: `-- Create base tables
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    ssn VARCHAR(11),
    hire_date DATE
);

-- Simple view (hide sensitive data)
CREATE VIEW public_employees AS
SELECT emp_id, name, dept_id, hire_date
FROM employees;

-- Complex view with JOIN and computed columns
CREATE VIEW employee_details AS
SELECT e.emp_id, e.name, e.salary, d.dept_name, d.location,
       YEAR(CURDATE()) - YEAR(e.hire_date) as years_employed,
       CASE 
           WHEN e.salary >= 80000 THEN 'Executive'
           WHEN e.salary >= 60000 THEN 'Senior'
           ELSE 'Junior'
       END as salary_grade
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- View with aggregation (read-only)
CREATE VIEW department_summary AS
SELECT d.dept_id, d.dept_name,
       COUNT(e.emp_id) as employee_count,
       AVG(e.salary) as avg_salary,
       MAX(e.salary) as max_salary,
       MIN(e.salary) as min_salary
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;

-- Updatable view (must map directly to single table)
CREATE VIEW active_employees AS
SELECT emp_id, name, salary, dept_id
FROM employees
WHERE status = 'active'
WITH CHECK OPTION;  -- Prevents updates that would remove from view

-- View with JOIN (read-only - cannot update)
CREATE VIEW employee_with_dept AS
SELECT e.name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

-- Using views in queries
SELECT * FROM employee_details WHERE salary_grade = 'Senior';
SELECT * FROM department_summary WHERE employee_count > 5;

-- Update through view (updatable view)
UPDATE active_employees SET salary = 75000 WHERE emp_id = 1;
-- This works because it's still active

UPDATE active_employees SET status = 'inactive' WHERE emp_id = 1;
-- This would fail with CHECK OPTION (row would disappear from view)

-- View metadata
SHOW CREATE VIEW employee_details;
SELECT * FROM information_schema.views WHERE table_name = 'employee_details';

-- Drop view
DROP VIEW IF EXISTS employee_details;

-- Replace view (create or replace)
CREATE OR REPLACE VIEW employee_details AS
SELECT e.emp_id, e.name, e.salary, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;`,
        lineByLine: [
          "Line 1-10: Create base tables",
          "Line 13-17: Simple view - Hides salary and SSN columns",
          "Line 15: Only selects non-sensitive columns",
          "Line 20-31: Complex view with computed columns",
          "Line 24: Computes years employed",
          "Line 25-29: CASE statement adds salary grade",
          "Line 34-43: Aggregate view - Grouped data (read-only)",
          "Line 37-41: Aggregation functions",
          "Line 38: COUNT - Number of employees",
          "Line 39: AVG - Average salary",
          "Line 46-51: Updatable view with CHECK OPTION",
          "Line 48: WHERE clause filters rows",
          "Line 50: WITH CHECK OPTION - Prevents updates that exclude row",
          "Line 54-58: JOIN view - Read-only (cannot update)",
          "Line 61: Query view like regular table",
          "Line 62: Another view query",
          "Line 65: Update through updatable view",
          "Line 68-70: Update that would violate CHECK OPTION",
          "Line 73: SHOW CREATE VIEW - Shows view definition",
          "Line 74: Query view metadata",
          "Line 77: DROP VIEW - Removes view",
          "Line 80: CREATE OR REPLACE - Updates view definition"
        ],
        simpleMeaning: "Views are like saved queries that act as virtual tables. Instead of writing complex JOIN queries every time, create a view and just SELECT * FROM it. Views hide complexity (JOINs, calculations) and sensitive data (like SSN). Some views can even update the original tables. Think of views as custom lenses - different people see different data from the same table, perfect for security and simplicity.",
        output: `-- Simple view (public_employees)
+--------+-------+---------+------------+
| emp_id | name  | dept_id | hire_date  |
+--------+-------+---------+------------+
| 1      | Alice | 1       | 2020-01-15 |
| 2      | Bob   | 1       | 2021-03-20 |
+--------+-------+---------+------------+

-- Complex view (employee_details)
+--------+-------+--------+-------------+----------+-----------------+---------------+
| emp_id | name  | salary | dept_name   | location | years_employed  | salary_grade  |
+--------+-------+--------+-------------+----------+-----------------+---------------+
| 1      | Alice | 85000  | Engineering | NYC      | 4               | Executive     |
| 2      | Bob   | 75000  | Engineering | NYC      | 3               | Senior        |
+--------+-------+--------+-------------+----------+-----------------+---------------+

-- Aggregate view (department_summary)
+---------+-------------+----------------+-----------+-----------+-----------+
| dept_id | dept_name   | employee_count | avg_salary| max_salary| min_salary|
+---------+-------------+----------------+-----------+-----------+-----------+
| 1       | Engineering | 2              | 80000.00  | 85000.00  | 75000.00  |
| 2       | Sales       | 0              | NULL      | NULL      | NULL      |
+---------+-------------+----------------+-----------+-----------+-----------+

-- Query views like tables
SELECT * FROM employee_details WHERE salary_grade = 'Senior';
+--------+------+--------+-------------+----------+-----------------+---------------+
| emp_id | name | salary | dept_name   | location | years_employed  | salary_grade  |
+--------+------+--------+-------------+----------+-----------------+---------------+
| 2      | Bob  | 75000  | Engineering | NYC      | 3               | Senior        |
+--------+------+--------+-------------+----------+-----------------+---------------+`,
        note: "Views simplify complex queries but can impact performance (run underlying query each time). Updatable views require: no DISTINCT, GROUP BY, HAVING, UNION, subqueries in FROM. WITH CHECK OPTION ensures data consistency. Indexed views (materialized) available in MySQL 8.0+ can boost performance. Views provide security by hiding columns/rows."
      }
    ]
  },
  
  advanced: {
    title: "🚀 MYSQL ADVANCED: MASTERING COMPLEX DATABASE OPERATIONS",
    description: "Advanced MySQL documentation covering sophisticated database techniques including transactions, window functions, CTEs, indexes, optimization, security, and performance tuning. Master these concepts to handle millions of transactions, terabytes of data, and achieve 99.999% availability. MySQL 8.0 features include window functions (ranking, running totals), CTEs (recursive queries), JSON functions, and invisible indexes.",
    
    topics: [
      {
        name: "11. MYSQL TRANSACTIONS & ACID PROPERTIES",
        description: "Transactions group multiple SQL operations into atomic units - all succeed or all fail (rollback). ACID properties: Atomicity (all or nothing), Consistency (data remains valid), Isolation (concurrent transactions don't interfere), Durability (committed data persists after crash). Use START TRANSACTION, COMMIT, and ROLLBACK. SAVEPOINTS allow partial rollbacks. Transaction isolation levels control concurrency: READ UNCOMMITTED (dirty reads), READ COMMITTED (non-repeatable reads), REPEATABLE READ (default, phantom reads possible), SERIALIZABLE (highest isolation).",
        code: `-- Bank transfer example (classic transaction)
START TRANSACTION;

-- Deduct from sender
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;

-- Add to receiver
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;

-- Check if both updates succeeded
SELECT * FROM accounts WHERE account_id IN (1, 2);

-- If everything is correct
COMMIT;

-- If something went wrong
ROLLBACK;  -- Undoes both updates

-- Transaction with savepoints
START TRANSACTION;

INSERT INTO orders (customer_id, total) VALUES (1, 100);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product, quantity) VALUES (LAST_INSERT_ID(), 'Laptop', 1);

-- Oops, product out of stock
ROLLBACK TO SAVEPOINT order_created;  -- Keeps order, removes items

-- Complete order
COMMIT;

-- Different isolation levels
-- READ UNCOMMITTED (dirty reads possible)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- READ COMMITTED (no dirty reads, but non-repeatable reads)
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- REPEATABLE READ (default, prevents non-repeatable reads)
SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- SERIALIZABLE (highest isolation, slowest)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Check current isolation level
SELECT @@transaction_isolation;

-- Deadlock example and handling
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
-- MySQL automatically detects deadlocks and rolls back one transaction

-- Autocommit setting (default is 1)
SET autocommit = 0;  -- Manual commits required
UPDATE users SET last_login = NOW() WHERE user_id = 1;
COMMIT;
SET autocommit = 1;  -- Back to auto-commit`,
        lineByLine: [
          "Line 1-12: Basic transaction - Transfer money between accounts",
          "Line 2: START TRANSACTION - Begins transaction block",
          "Line 4-7: Multiple UPDATE statements",
          "Line 9: Check intermediate results",
          "Line 12: COMMIT - Permanently saves changes",
          "Line 15: ROLLBACK - Undoes all changes in transaction",
          "Line 18-28: SAVEPOINT - Partial rollback",
          "Line 20: SAVEPOINT order_created - Marks point to rollback to",
          "Line 26: ROLLBACK TO SAVEPOINT - Undoes statements after savepoint",
          "Line 31-38: Isolation levels at different scopes",
          "Line 32: READ UNCOMMITTED - Lowest isolation (dirty reads possible)",
          "Line 35: READ COMMITTED - No dirty reads, but phantom reads possible",
          "Line 38: REPEATABLE READ - MySQL default",
          "Line 41: SERIALIZABLE - Highest isolation, table-level locking",
          "Line 44: Check current isolation level",
          "Line 47-53: Deadlock example (MySQL auto-resolves)",
          "Line 56-60: Autocommit control"
        ],
        simpleMeaning: "Transactions make multiple database changes happen together or not at all. Like transferring money: deduct from one account AND add to another. If the computer crashes after deducting but before adding, ROLLBACK undoes the deduction. SAVEPOINT lets you rollback partway, like a game save point. ACID ensures your data stays correct even with crashes or multiple users.",
        output: `-- Before transaction
+------------+---------+
| account_id | balance |
+------------+---------+
| 1          | 1000    |
| 2          | 500     |
+------------+---------+

-- After COMMIT
+------------+---------+
| account_id | balance |
+------------+---------+
| 1          | 500     |
| 2          | 1000    |
+------------+---------+

-- Isolation level check
+--------------------+
| @@transaction_isolation |
+--------------------+
| REPEATABLE-READ    |
+--------------------+

-- Deadlock error
ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction

-- Savepoint partial rollback example
-- After ROLLBACK TO SAVEPOINT order_created
+----------+------------+-------+
| order_id | customer_id| total |
+----------+------------+-------+
| 101      | 1          | 100   |
+----------+------------+-------+
-- (order_items table has no records for order 101)`,
        note: "Always use transactions for operations that modify multiple related tables. MySQL default isolation: REPEATABLE READ (prevents dirty reads, non-repeatable reads). Longer transactions increase lock contention. Autocommit (default) means each statement is its own transaction. Use SAVEPOINT for complex multi-step operations requiring partial rollbacks."
      },
      
      {
        name: "12. MYSQL WINDOW FUNCTIONS - ADVANCED ANALYTICS",
        description: "Window functions perform calculations across rows without collapsing them (unlike GROUP BY). They operate on a 'window' of rows defined by OVER() clause. Functions include ROW_NUMBER (sequential numbering), RANK (ranking with gaps), DENSE_RANK (ranking without gaps), LEAD/LAG (access next/previous rows), SUM/AVG over window (running totals), NTILE (divide into buckets). PARTITION BY divides rows into groups, ORDER BY defines sequence. Window functions are powerful for analytics and reporting.",
        code: `-- Sample sales data
CREATE TABLE sales (
    sale_id INT PRIMARY KEY,
    employee_id INT,
    sale_date DATE,
    amount DECIMAL(10,2),
    region VARCHAR(20)
);

INSERT INTO sales VALUES
(1, 1, '2024-01-15', 5000, 'North'),
(2, 1, '2024-01-20', 3000, 'North'),
(3, 2, '2024-01-10', 8000, 'South'),
(4, 2, '2024-01-25', 4000, 'South'),
(5, 1, '2024-02-05', 6000, 'North'),
(6, 2, '2024-02-15', 7000, 'South');

-- ROW_NUMBER (sequential numbering per partition)
SELECT employee_id, amount,
    ROW_NUMBER() OVER (PARTITION BY employee_id ORDER BY amount DESC) as sale_rank
FROM sales;

-- RANK vs DENSE_RANK (handling ties differently)
SELECT amount,
    RANK() OVER (ORDER BY amount DESC) as rank_with_gaps,
    DENSE_RANK() OVER (ORDER BY amount DESC) as rank_no_gaps
FROM sales;

-- Running total (cumulative sum)
SELECT sale_date, employee_id, amount,
    SUM(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as running_total,
    AVG(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as moving_avg
FROM sales;

-- LEAD and LAG (access previous/next rows)
SELECT employee_id, sale_date, amount,
    LAG(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as previous_amount,
    LEAD(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as next_amount,
    amount - LAG(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as difference
FROM sales;

-- NTILE (divide into buckets)
SELECT employee_id, amount,
    NTILE(4) OVER (ORDER BY amount) as quartile,
    NTILE(100) OVER (ORDER BY amount) as percentile
FROM sales;

-- FIRST_VALUE and LAST_VALUE
SELECT employee_id, sale_date, amount,
    FIRST_VALUE(amount) OVER (PARTITION BY employee_id ORDER BY sale_date) as first_sale,
    LAST_VALUE(amount) OVER (PARTITION BY employee_id ORDER BY sale_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_sale
FROM sales;

-- Percentage of total (percent of overall)
SELECT employee_id, amount,
    amount * 100.0 / SUM(amount) OVER () as pct_of_total
FROM sales;

-- Moving average (last 3 rows)
SELECT sale_date, amount,
    AVG(amount) OVER (ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3
FROM sales;`,
        lineByLine: [
          "Line 1-9: Create sales table with transaction data",
          "Line 12-19: Insert sample data across employees and dates",
          "Line 22-25: ROW_NUMBER - Numbers rows per employee by amount",
          "Line 23: PARTITION BY employee_id - Reset numbering per employee",
          "Line 23: ORDER BY amount DESC - Numbers highest amount first",
          "Line 28-32: RANK vs DENSE_RANK - Different handling of ties",
          "Line 29: RANK - Leaves gaps (1,2,2,4)",
          "Line 30: DENSE_RANK - No gaps (1,2,2,3)",
          "Line 35-39: Running total with window frame",
          "Line 36: SUM(...) OVER (ORDER BY sale_date) - Cumulative sum",
          "Line 37: AVG(...) OVER - Moving average",
          "Line 42-48: LEAD/LAG - Compare to adjacent rows",
          "Line 43: LAG - Previous row value",
          "Line 44: LEAD - Next row value",
          "Line 45: Calculates difference from previous sale",
          "Line 51-54: NTILE - Divides into buckets",
          "Line 52: NTILE(4) - Quartiles",
          "Line 53: NTILE(100) - Percentiles",
          "Line 57-62: FIRST_VALUE/LAST_VALUE - First and last in partition",
          "Line 60: ROWS BETWEEN - Defines window frame for LAST_VALUE",
          "Line 65-68: Percentage of total",
          "Line 66: Calculates percent of overall sales",
          "Line 71-73: Moving average over specific number of rows"
        ],
        simpleMeaning: "Window functions let you see each row PLUS overall calculations. Like showing each employee's sale AND their rank, running total, or how it compares to previous sale. ROW_NUMBER gives 1,2,3,4. RANK gives 1,2,2,4 (skips if ties). LEAD looks forward at next row, LAG looks backward. Running total: each row shows sum of all previous rows. Perfect for leaderboards, trend analysis, and performance tracking.",
        output: `-- ROW_NUMBER (ranking per employee)
+-------------+--------+-----------+
| employee_id | amount | sale_rank |
+-------------+--------+-----------+
| 1           | 6000   | 1         |
| 1           | 5000   | 2         |
| 1           | 3000   | 3         |
| 2           | 8000   | 1         |
| 2           | 7000   | 2         |
| 2           | 4000   | 3         |
+-------------+--------+-----------+

-- RANK vs DENSE_RANK (with ties if amounts equal)
+--------+----------------+---------------+
| amount | rank_with_gaps | rank_no_gaps  |
+--------+----------------+---------------+
| 8000   | 1              | 1             |
| 7000   | 2              | 2             |
| 6000   | 3              | 3             |
| 5000   | 4              | 4             |
| 4000   | 5              | 5             |
| 3000   | 6              | 6             |
+--------+----------------+---------------+

-- Running total per employee
+------------+-------------+--------+---------------+------------+
| sale_date  | employee_id | amount | running_total | moving_avg |
+------------+-------------+--------+---------------+------------+
| 2024-01-15 | 1           | 5000   | 5000          | 5000.0000  |
| 2024-01-20 | 1           | 3000   | 8000          | 4000.0000  |
| 2024-02-05 | 1           | 6000   | 14000         | 4666.6667  |
| 2024-01-10 | 2           | 8000   | 8000          | 8000.0000  |
| 2024-01-25 | 2           | 4000   | 12000         | 6000.0000  |
| 2024-02-15 | 2           | 7000   | 19000         | 6333.3333  |
+------------+-------------+--------+---------------+------------+

-- LEAD/LAG (compare to previous and next)
+-------------+------------+--------+-----------------+-------------+------------+
| employee_id | sale_date  | amount | previous_amount | next_amount | difference |
+-------------+------------+--------+-----------------+-------------+------------+
| 1           | 2024-01-15 | 5000   | NULL            | 3000        | NULL       |
| 1           | 2024-01-20 | 3000   | 5000            | 6000        | -2000      |
| 1           | 2024-02-05 | 6000   | 3000            | NULL        | 3000       |
+-------------+------------+--------+-----------------+-------------+------------+`,
        note: "Window functions available in MySQL 8.0+. PARTITION BY divides data into groups (like GROUP BY without collapsing). ORDER BY within OVER defines sequence. ROWS BETWEEN defines sliding window (e.g., last 3 rows). Window functions are computed after WHERE but before ORDER BY. Great for analytics, reporting, and data analysis."
      },
      
      {
        name: "13. MYSQL COMMON TABLE EXPRESSIONS (CTEs)",
        description: "CTEs create temporary named result sets within a query, improving readability and enabling recursion. Non-recursive CTEs simplify complex queries (aliases for subqueries). Recursive CTEs reference themselves for hierarchical data (org charts, tree structures). Syntax: WITH cte_name AS (query) SELECT * FROM cte_name. Multiple CTEs can be comma-separated. CTEs are processed once and can be referenced multiple times, unlike subqueries that run each time.",
        code: `-- Sample hierarchical data (employees with managers)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    manager_id INT,
    salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
(1, 'Alice', NULL, 100000),   -- CEO
(2, 'Bob', 1, 80000),         -- Reports to Alice
(3, 'Carol', 1, 75000),       -- Reports to Alice
(4, 'David', 2, 60000),       -- Reports to Bob
(5, 'Eve', 2, 55000),         -- Reports to Bob
(6, 'Frank', 3, 50000);       -- Reports to Carol

-- Simple CTE (non-recursive) - improves readability
WITH high_earners AS (
    SELECT name, salary
    FROM employees
    WHERE salary > 70000
)
SELECT * FROM high_earners ORDER BY salary DESC;

-- CTE with multiple references (subquery alternative)
WITH dept_stats AS (
    SELECT 
        manager_id,
        AVG(salary) as avg_salary,
        COUNT(*) as emp_count
    FROM employees
    WHERE manager_id IS NOT NULL
    GROUP BY manager_id
)
SELECT e.name, e.salary, ds.avg_salary, ds.emp_count
FROM employees e
LEFT JOIN dept_stats ds ON e.emp_id = ds.manager_id
WHERE e.manager_id IS NULL;  -- Show managers with team stats

-- Multiple CTEs in one query
WITH 
high_paid AS (
    SELECT emp_id, name, salary
    FROM employees
    WHERE salary > 70000
),
low_paid AS (
    SELECT emp_id, name, salary
    FROM employees
    WHERE salary <= 70000
)
SELECT 'High Paid' as category, COUNT(*) as count, AVG(salary) as avg_sal FROM high_paid
UNION ALL
SELECT 'Low Paid', COUNT(*), AVG(salary) FROM low_paid;

-- RECURSIVE CTE (hierarchy traversal)
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor member (starting point - top level)
    SELECT emp_id, name, manager_id, 1 as level, 
           CAST(name AS CHAR(500)) as path
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive member (joins CTE back to table)
    SELECT e.emp_id, e.name, e.manager_id, eh.level + 1,
           CONCAT(eh.path, ' -> ', e.name)
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT 
    CONCAT(REPEAT('  ', level - 1), name) as org_chart,
    level,
    path
FROM employee_hierarchy
ORDER BY path;

-- Recursive CTE for number generation (1 to 10)
WITH RECURSIVE numbers AS (
    SELECT 1 as n
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT * FROM numbers;

-- Recursive CTE for date range
WITH RECURSIVE dates AS (
    SELECT CURDATE() as date
    UNION ALL
    SELECT DATE_ADD(date, INTERVAL 1 DAY)
    FROM dates
    WHERE date < CURDATE() + INTERVAL 30 DAY
)
SELECT * FROM dates;

-- Find all subordinates under a manager (entire org tree)
WITH RECURSIVE org_tree AS (
    SELECT emp_id, name, manager_id, 1 as depth
    FROM employees
    WHERE emp_id = 1  -- Starting from Alice
    
    UNION ALL
    
    SELECT e.emp_id, e.name, e.manager_id, ot.depth + 1
    FROM employees e
    INNER JOIN org_tree ot ON e.manager_id = ot.emp_id
)
SELECT depth, name FROM org_tree ORDER BY depth, name;`,
        lineByLine: [
          "Line 1-7: Create employees table with self-referential hierarchy",
          "Line 10-16: Insert hierarchical data (CEO down to individual contributors)",
          "Line 19-23: Simple CTE - Replaces subquery",
          "Line 20: WITH high_earners AS - Names the CTE",
          "Line 21-22: Query definition",
          "Line 23: Main query references CTE",
          "Line 26-35: CTE with JOIN to main query",
          "Line 27: dept_stats CTE - Calculates department statistics",
          "Line 37-39: Main query uses CTE with LEFT JOIN",
          "Line 42-52: Multiple CTEs - Separated by commas",
          "Line 43: high_paid CTE - First CTE",
          "Line 47: low_paid CTE - Second CTE",
          "Line 51-52: Main query UNIONs results from both CTEs",
          "Line 55-72: RECURSIVE CTE - References itself",
          "Line 56: WITH RECURSIVE - Required for recursive CTEs",
          "Line 58-63: Anchor member - Initial result set (top-level)",
          "Line 61: level counter starts at 1",
          "Line 62: path - Tracks hierarchy as string",
          "Line 65-71: Recursive member - Joins CTE back to table",
          "Line 68: eh.level + 1 - Increments depth",
          "Line 69: CONCAT - Builds path string",
          "Line 75-80: Formatting org chart with indentation",
          "Line 76: REPEAT('  ', level - 1) - Creates indentation",
          "Line 83-92: Simple recursive CTE - Generates numbers 1-10",
          "Line 95-102: Date generator - Creates date range",
          "Line 105-116: Find all subordinates under specific manager"
        ],
        simpleMeaning: "CTEs are like creating temporary named tables mid-query for better readability. Instead of messy nested subqueries, you write WITH high_earners AS (...) then SELECT FROM high_earners. Recursive CTEs are mind-blowing - they can follow hierarchies like 'show me Alice, then everyone who reports to Alice, then everyone who reports to them' to build complete org charts. Perfect for tree structures, bill of materials, or generating sequences.",
        output: `-- Simple CTE (high earners)
+-------+--------+
| name  | salary |
+-------+--------+
| Alice | 100000 |
| Bob   | 80000  |
| Carol | 75000  |
+-------+--------+

-- Managers with team stats
+-------+--------+------------+-----------+
| name  | salary | avg_salary | emp_count |
+-------+--------+------------+-----------+
| Alice | 100000 | 68333.3333 | 5         |
+-------+--------+------------+-----------+

-- Multiple CTEs (salary categories)
+------------+-------+------------+
| category   | count | avg_sal    |
+------------+-------+------------+
| High Paid  | 3     | 85000.0000 |
| Low Paid   | 3     | 55000.0000 |
+------------+-------+------------+

-- Recursive CTE (org chart with indentation)
+-------------------+-------+---------------------------------+
| org_chart         | level | path                            |
+-------------------+-------+---------------------------------+
| Alice             | 1     | Alice                           |
|   Bob             | 2     | Alice -> Bob                    |
|     David         | 3     | Alice -> Bob -> David           |
|     Eve           | 3     | Alice -> Bob -> Eve             |
|   Carol           | 2     | Alice -> Carol                  |
|     Frank         | 3     | Alice -> Carol -> Frank         |
+-------------------+-------+---------------------------------+

-- Number generator
+------+
| n    |
+------+
| 1    |
| 2    |
| 3    |
| 4    |
| 5    |
| 6    |
| 7    |
| 8    |
| 9    |
| 10   |
+------+`,
        note: "CTEs available in MySQL 8.0+. Recursive CTEs require UNION ALL and termination condition (WHERE clause). Maximum recursion depth defaults to 1000 (can be changed). CTEs are read-only (cannot UPDATE/DELETE). Multiple CTEs separated by commas. Recursive CTEs great for org charts, category trees, and graph traversal."
      },
      
      {
  name: "15. MYSQL INDEXING STRATEGIES & PERFORMANCE",
  description: "Indexes dramatically speed up data retrieval but slow down writes. B-Tree indexes are default for most queries. Hash indexes optimize equality comparisons. Prefix indexes index only first N characters of strings. Composite indexes cover multiple columns (order matters - most selective first). Covering indexes include all needed columns (extraordinary speed). Use EXPLAIN to analyze query execution and index usage. Invisible indexes allow testing removal without actually deleting. Functional indexes index expression results (MySQL 8.0+).",
  code: `-- Create table for indexing examples
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    age INT,
    city VARCHAR(50),
    created_at DATETIME,
    last_login DATETIME
);

-- Single column index (most common)
CREATE INDEX idx_email ON users(email);

-- Unique index (prevents duplicates + fast lookups)
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- Composite index (covers multiple columns in WHERE)
CREATE INDEX idx_name ON users(last_name, first_name);

-- Prefix index (index first 10 chars only - saves space)
CREATE INDEX idx_city_prefix ON users(city(10));

-- Covering index (includes all columns needed for query)
CREATE INDEX idx_covering ON users(last_name, first_name, age, city);

-- Descending index (for ORDER BY DESC queries)
CREATE INDEX idx_created_desc ON users(created_at DESC);

-- Functional index (index expression result)
CREATE INDEX idx_lower_email ON users((LOWER(email)));

-- Invisible index (test removal impact)
CREATE INDEX idx_test ON users(city) INVISIBLE;

-- View index usage
SHOW INDEX FROM users;

-- Analyze query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';

-- Force index usage (hint optimizer)
SELECT * FROM users FORCE INDEX (idx_email) WHERE email = 'john@example.com';

-- Drop index when no longer needed
DROP INDEX idx_email ON users;

-- Index for JOIN performance
CREATE INDEX idx_user_id ON orders(user_id);

-- Index for WHERE with range condition
CREATE INDEX idx_age_range ON users(age) WHERE age > 18;  -- Partial index

-- Monitoring index usage
SELECT * FROM sys.schema_index_statistics WHERE table_name = 'users';

-- Find unused indexes
SELECT * FROM sys.schema_unused_indexes WHERE object_schema = 'mydb';`,
  lineByLine: [
    "Line 1-12: Create users table for indexing demonstrations",
    "Line 15: CREATE INDEX - Basic single column index",
    "Line 18: UNIQUE INDEX - Prevents duplicate values",
    "Line 21: Composite index - Order matters (last_name then first_name)",
    "Line 24: Prefix index - Saves space on long strings",
    "Line 27: Covering index - Includes all query columns",
    "Line 30: Descending index - Optimizes reverse order",
    "Line 33: Functional index - Indexes expression result",
    "Line 36: INVISIBLE index - Optimizer ignores but maintains",
    "Line 39: SHOW INDEX - Lists all indexes with details",
    "Line 42: EXPLAIN - Shows if query uses index",
    "Line 45: FORCE INDEX - Overrides optimizer choice",
    "Line 48: DROP INDEX - Removes index permanently",
    "Line 51: Index for foreign key - Speeds up JOINs",
    "Line 57: Monitor index usage statistics",
    "Line 60: Find indexes never used"
  ],
  simpleMeaning: "Indexes are like a book's index - they help MySQL find data fast without reading every page. Index on email means finding 'john@email.com' is instant. Composite indexes are like phone book (last name then first name) - order matters. Too many indexes slow down saving data (like updating every index in a book). Use EXPLAIN to see if your queries use indexes properly.",
  output: `-- EXPLAIN output showing index usage
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+
| id | select_type | table | type | possible_keys | key      | key_len | ref   | rows | Extra       |
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+
| 1  | SIMPLE      | users | ref  | idx_email     | idx_email| 403     | const | 1    | Using where |
+----+-------------+-------+------+---------------+----------+---------+-------+------+-------------+

-- SHOW INDEX output
+-------+------------+---------------+--------------+-------------+-----------+-------------+
| Table | Non_unique | Key_name      | Seq_in_index | Column_name | Collation | Cardinality |
+-------+------------+---------------+--------------+-------------+-----------+-------------+
| users | 0          | PRIMARY       | 1            | user_id     | A         | 10000       |
| users | 0          | idx_email_uniq| 1            | email       | A         | 10000       |
| users | 1          | idx_name      | 1            | last_name   | A         | 5000        |
| users | 1          | idx_name      | 2            | first_name  | A         | 10000       |
+-------+------------+---------------+--------------+-------------+-----------+-------------+`,
  note: "Indexes speed SELECT but slow INSERT/UPDATE/DELETE. Composite index order matters (most selective column first). Use EXPLAIN before optimizing queries. Covering indexes can be 10x faster. Don't index low-cardinality columns (e.g., gender). Invisible indexes perfect for testing removal impact."
},

{
  name: "16. MYSQL STORED PROCEDURES WITH PARAMETERS",
  description: "Stored procedures accept IN (input only), OUT (return value), and INOUT (both) parameters. Variables declared with DECLARE at procedure start. Conditional logic with IF/ELSE, CASE. Loops: LOOP, WHILE, REPEAT. Cursors iterate through result sets. Error handling with DECLARE HANDLER. Procedures reduce network traffic and encapsulate business logic.",
  code: `DELIMITER //

-- IN parameter (input only)
CREATE PROCEDURE GetUserById(IN user_id_param INT)
BEGIN
    SELECT * FROM users WHERE user_id = user_id_param;
END //

-- OUT parameter (returns value)
CREATE PROCEDURE GetUserCount(OUT total_count INT)
BEGIN
    SELECT COUNT(*) INTO total_count FROM users;
END //

-- INOUT parameter (input and output)
CREATE PROCEDURE DoubleNumber(INOUT num INT)
BEGIN
    SET num = num * 2;
END //

-- Multiple parameters with IF logic
CREATE PROCEDURE GetUsersByCity(
    IN city_name VARCHAR(50),
    IN min_age INT,
    OUT user_count INT
)
BEGIN
    SELECT * FROM users WHERE city = city_name AND age >= min_age;
    SELECT COUNT(*) INTO user_count FROM users WHERE city = city_name AND age >= min_age;
END //

-- Procedure with local variables
CREATE PROCEDURE GetEmployeeBonus(IN emp_id INT, OUT bonus DECIMAL(10,2))
BEGIN
    DECLARE emp_salary DECIMAL(10,2);
    DECLARE emp_years INT;
    
    SELECT salary, YEAR(CURDATE()) - YEAR(hire_date) 
    INTO emp_salary, emp_years
    FROM employees WHERE emp_id = emp_id;
    
    IF emp_years >= 5 THEN
        SET bonus = emp_salary * 0.20;
    ELSEIF emp_years >= 3 THEN
        SET bonus = emp_salary * 0.10;
    ELSE
        SET bonus = emp_salary * 0.05;
    END IF;
END //

-- Procedure with loop
CREATE PROCEDURE GenerateNumbers(IN max_num INT)
BEGIN
    DECLARE counter INT DEFAULT 1;
    DECLARE result VARCHAR(1000) DEFAULT '';
    
    WHILE counter <= max_num DO
        SET result = CONCAT(result, counter, ',');
        SET counter = counter + 1;
    END WHILE;
    
    SELECT result as numbers;
END //

-- Procedure with cursor (looping through rows)
CREATE PROCEDURE ProcessUsers()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE user_name VARCHAR(100);
    DECLARE user_email VARCHAR(100);
    DECLARE user_cursor CURSOR FOR SELECT name, email FROM users;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN user_cursor;
    
    read_loop: LOOP
        FETCH user_cursor INTO user_name, user_email;
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        -- Process each user
        INSERT INTO user_log (name, email, processed_at) 
        VALUES (user_name, user_email, NOW());
    END LOOP;
    
    CLOSE user_cursor;
END //

-- Procedure with transaction and error handling
CREATE PROCEDURE TransferMoney(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2),
    OUT status_message VARCHAR(100)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET status_message = 'Transaction failed - rolled back';
    END;
    
    START TRANSACTION;
    
    UPDATE accounts SET balance = balance - amount WHERE account_id = from_account;
    UPDATE accounts SET balance = balance + amount WHERE account_id = to_account;
    
    COMMIT;
    SET status_message = 'Transaction successful';
END //

DELIMITER ;

-- Call procedures
CALL GetUserById(1);
CALL GetUserCount(@total);
SELECT @total;

CALL DoubleNumber(@num);
SET @num = 10;
CALL DoubleNumber(@num);
SELECT @num;  -- Returns 20

CALL GetUsersByCity('New York', 25, @count);
SELECT @count;

CALL GetEmployeeBonus(101, @bonus);
SELECT @bonus;`,
  lineByLine: [
    "Line 1: DELIMITER // - Changes separator for procedure body",
    "Line 4-7: IN parameter - Receives input value only",
    "Line 5: IN user_id_param INT - Input parameter",
    "Line 10-13: OUT parameter - Returns output value",
    "Line 11: SELECT COUNT(*) INTO total_count - Stores result in OUT param",
    "Line 16-19: INOUT parameter - Both input and output",
    "Line 17: SET num = num * 2 - Modifies parameter",
    "Line 22-31: Multiple parameters with conditional logic",
    "Line 29-30: Two operations - SELECT and COUNT",
    "Line 34-49: Local variables and IF/ELSEIF logic",
    "Line 35-36: DECLARE - Local variables",
    "Line 38-40: SELECT INTO - Assigns values to variables",
    "Line 42-48: IF/ELSEIF/ELSE - Conditional logic",
    "Line 52-63: WHILE loop example",
    "Line 55: WHILE counter <= max_num DO - Loop condition",
    "Line 66-85: Cursor example - Row-by-row processing",
    "Line 68-71: Cursor declaration and handler",
    "Line 73: OPEN cursor - Begin iteration",
    "Line 77: FETCH - Gets next row",
    "Line 78: LEAVE read_loop - Exit when done",
    "Line 88-106: Transaction with error handling",
    "Line 89: EXIT HANDLER FOR SQLEXCEPTION - Catches errors",
    "Line 90-93: ROLLBACK on error",
    "Line 97: START TRANSACTION - Begin transaction",
    "Line 99-100: UPDATE statements",
    "Line 102: COMMIT - Save if no error"
  ],
  simpleMeaning: "Stored procedures are like saved scripts in your database. IN parameters are inputs (like giving ingredients to a recipe). OUT parameters are outputs (like getting the cooked dish back). INOUT does both. You can use IF/ELSE for decisions, WHILE loops for repetition, and CURSORS to process one row at a time. They reduce network traffic since you send one CALL instead of many SQL statements.",
  output: `-- CALL GetUserById(1)
+---------+------+-----------------+
| user_id | name | email           |
+---------+------+-----------------+
| 1       | John | john@example.com|
+---------+------+-----------------+

-- CALL DoubleNumber(@num)
+------+
| @num |
+------+
| 20   |
+------+

-- CALL GetEmployeeBonus
+-------+
| bonus |
+-------+
| 15000 |
+-------+

-- CALL TransferMoney
+---------------------------+
| status_message            |
+---------------------------+
| Transaction successful    |
+---------------------------+`,
  note: "IN parameters are input only (cannot be modified). OUT parameters return values (must specify variable). INOUT parameters do both. DECLARE statements must be at start of BEGIN block. Cursors are slow - use SET-based operations when possible. Always add error handling for transactions."
},

{
  name: "17. MYSQL TRIGGERS - BEFORE, AFTER, INSTEAD OF",
  description: "Triggers automatically execute on INSERT, UPDATE, DELETE. BEFORE triggers can modify NEW values and validate data. AFTER triggers log changes and perform cascading actions. INSTEAD OF triggers (for views) intercept operations. OLD contains previous values, NEW contains new values. Multiple triggers per event can specify order. Triggers cannot CALL another trigger (avoid loops). Useful for auditing, validation, auto-timestamping, and maintaining derived data.",
  code: `-- Create audit table for logging
CREATE TABLE audit_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    table_name VARCHAR(50),
    action_type VARCHAR(20),
    record_id INT,
    old_data JSON,
    new_data JSON,
    changed_by VARCHAR(100),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- BEFORE INSERT (auto-set fields, validate)
DELIMITER //
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.created_at = NOW();
    SET NEW.updated_at = NOW();
    SET NEW.email = LOWER(TRIM(NEW.email));
    
    IF NEW.age < 18 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'User must be 18 or older';
    END IF;
END //

-- AFTER INSERT (audit logging)
CREATE TRIGGER after_user_insert
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO audit_log(table_name, action_type, record_id, new_data, changed_by)
    VALUES ('users', 'INSERT', NEW.user_id, 
            JSON_OBJECT('name', NEW.name, 'email', NEW.email, 'age', NEW.age),
            USER());
END //

-- BEFORE UPDATE (validate and track changes)
CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
    
    -- Prevent salary decrease more than 10%
    IF NEW.salary < OLD.salary * 0.9 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Salary cannot decrease by more than 10%';
    END IF;
    
    -- Log specific field changes
    IF NEW.email != OLD.email THEN
        SET NEW.email_verified = FALSE;
    END IF;
END //

-- AFTER UPDATE (detailed audit)
CREATE TRIGGER after_user_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO audit_log(table_name, action_type, record_id, old_data, new_data, changed_by)
    VALUES ('users', 'UPDATE', NEW.user_id,
            JSON_OBJECT('name', OLD.name, 'email', OLD.email, 'salary', OLD.salary),
            JSON_OBJECT('name', NEW.name, 'email', NEW.email, 'salary', NEW.salary),
            USER());
END //

-- BEFORE DELETE (prevent deletion under conditions)
CREATE TRIGGER before_user_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
    IF OLD.status = 'active' AND OLD.is_admin = TRUE THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Cannot delete active admin users';
    END IF;
    
    -- Archive before deletion
    INSERT INTO deleted_users SELECT OLD.*;
END //

-- AFTER DELETE (cleanup related data)
CREATE TRIGGER after_user_delete
AFTER DELETE ON users
FOR EACH ROW
BEGIN
    DELETE FROM user_sessions WHERE user_id = OLD.user_id;
    DELETE FROM user_permissions WHERE user_id = OLD.user_id;
    UPDATE statistics SET total_users = total_users - 1;
END //

-- Maintain derived data (e.g., total in orders table)
CREATE TRIGGER update_order_total
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE orders 
    SET total_amount = total_amount + (NEW.quantity * NEW.price)
    WHERE order_id = NEW.order_id;
END //

-- View all triggers
SHOW TRIGGERS;

-- Drop trigger
DROP TRIGGER IF EXISTS before_user_insert;

-- Enable/disable trigger (MySQL 8.0+)
ALTER TABLE users DISABLE TRIGGER before_user_insert;
ALTER TABLE users ENABLE TRIGGER before_user_insert;

DELIMITER ;`,
  lineByLine: [
    "Line 1-11: Audit log table - Stores all changes",
    "Line 15-25: BEFORE INSERT - Runs before new row inserted",
    "Line 17-19: SET NEW - Modifies values before saving",
    "Line 21-24: SIGNAL - Throws error if validation fails",
    "Line 28-34: AFTER INSERT - Logs after successful insert",
    "Line 30: NEW.column - Accesses newly inserted values",
    "Line 37-50: BEFORE UPDATE - Validates changes",
    "Line 39: SET NEW.updated_at - Updates timestamp automatically",
    "Line 42-44: SIGNAL - Prevents large salary decrease",
    "Line 47-50: Conditionally set other fields",
    "Line 53-61: AFTER UPDATE - Logs both old and new values",
    "Line 55: OLD.column - Previous values",
    "Line 56: NEW.column - New values",
    "Line 64-73: BEFORE DELETE - Prevents deletion",
    "Line 66-68: SIGNAL - Blocks admin user deletion",
    "Line 71: Archives data before deletion",
    "Line 76-80: AFTER DELETE - Cleanup operations",
    "Line 83-88: Maintain derived data automatically"
  ],
  simpleMeaning: "Triggers are automatic actions when data changes. BEFORE triggers can modify or reject data (like setting timestamps or validating age). AFTER triggers log what happened (who changed what). Useful for: 'automatically update last_modified date', 'prevent deleting active users', 'log all changes to audit table', 'update totals when adding items'. Think of triggers as 'if this happens, automatically do that' rules.",
  output: `-- BEFORE INSERT prevents underage user
INSERT INTO users (name, email, age) VALUES ('Young', 'young@test.com', 16);
ERROR 45000: User must be 18 or older

-- Valid insert works
INSERT INTO users (name, email, age) VALUES ('John', 'JOHN@TEST.COM', 25);
-- Email becomes 'john@test.com', created_at and updated_at set automatically

-- Audit log after insert
SELECT * FROM audit_log WHERE action_type = 'INSERT';
+--------+------------+-------------+-----------+-------------------------------------+
| log_id | table_name | action_type | record_id | new_data                            |
+--------+------------+-------------+-----------+-------------------------------------+
| 1      | users      | INSERT      | 101       | {"name": "John", "email": "john..."}|
+--------+------------+-------------+-----------+-------------------------------------+

-- BEFORE UPDATE prevents large salary cut
UPDATE employees SET salary = 50000 WHERE emp_id = 1 AND salary = 100000;
ERROR 45000: Salary cannot decrease by more than 10%

-- Show all triggers
SHOW TRIGGERS;
+------------------------+--------+-----------+------------------------------------------------+
| Trigger                | Event  | Table     | Statement                                      |
+------------------------+--------+-----------+------------------------------------------------+
| before_user_insert     | INSERT | users     | BEGIN SET NEW.created_at = NOW(); ... END     |
| after_user_insert      | INSERT | users     | BEGIN INSERT INTO audit_log ... END           |
| before_user_update     | UPDATE | users     | BEGIN SET NEW.updated_at = NOW(); ... END     |
| after_user_update      | UPDATE | users     | BEGIN INSERT INTO audit_log ... END           |
+------------------------+--------+-----------+------------------------------------------------+`,
  note: "BEFORE triggers can modify NEW values, AFTER triggers cannot. OLD not available in INSERT, NEW not available in DELETE. SIGNAL statement throws errors (MySQL 5.5+). Triggers can cause cascading effects - be careful with performance. Multiple triggers per event possible with FOLLOWS/PRECEDES. Audit triggers should be minimal to avoid slowing operations."
},

{
  name: "18. MYSQL VIEWS - UPDATABLE, MATERIALIZED, WITH CHECK OPTION",
  description: "Views are virtual tables based on SELECT queries. Simple views (single table, no aggregation) are updatable. WITH CHECK OPTION prevents updates that would exclude row from view. Views provide security (hide sensitive columns), simplify complex queries, and offer data abstraction. MERGE algorithm combines view query with outer query. TEMPTABLE algorithm materializes view first. MySQL 8.0+ supports materialized views via derived tables.",
  code: `-- Base tables
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    ssn VARCHAR(11),
    dept_id INT,
    status VARCHAR(20),
    hire_date DATE
);

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    budget DECIMAL(15,2)
);

-- Simple view (hide sensitive data)
CREATE VIEW public_employees AS
SELECT emp_id, name, dept_id, hire_date
FROM employees
WHERE status = 'active';

-- View with computed columns
CREATE VIEW employee_details AS
SELECT 
    e.emp_id,
    e.name,
    e.salary,
    d.dept_name,
    YEAR(CURDATE()) - YEAR(e.hire_date) as years_employed,
    CASE 
        WHEN e.salary >= 80000 THEN 'Executive'
        WHEN e.salary >= 60000 THEN 'Senior'
        ELSE 'Junior'
    END as salary_grade
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

-- Updatable view with CHECK OPTION
CREATE VIEW active_employees AS
SELECT emp_id, name, salary, dept_id, status
FROM employees
WHERE status = 'active'
WITH CHECK OPTION;  -- Prevents updates that would remove row from view

-- View with aggregation (read-only)
CREATE VIEW department_stats AS
SELECT 
    d.dept_id,
    d.dept_name,
    COUNT(e.emp_id) as employee_count,
    AVG(e.salary) as avg_salary,
    SUM(e.salary) as total_salary,
    MAX(e.salary) as highest_salary
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;

-- View with algorithm specification
CREATE ALGORITHM = MERGE VIEW simple_users AS
SELECT user_id, name, email FROM users;

CREATE ALGORITHM = TEMPTABLE VIEW complex_stats AS
SELECT dept_id, AVG(salary) as avg_salary, COUNT(*) as cnt
FROM employees
GROUP BY dept_id
HAVING cnt > 5;

-- Check view creation details
SHOW CREATE VIEW employee_details;

-- View metadata
SELECT * FROM information_schema.views WHERE table_name = 'employee_details';

-- Update through updatable view (works)
UPDATE active_employees SET salary = 75000 WHERE emp_id = 1;

-- Update that would violate CHECK OPTION (fails)
UPDATE active_employees SET status = 'inactive' WHERE emp_id = 1;
-- Error: CHECK OPTION failed 'mydb.active_employees'

-- Insert through view (must satisfy WHERE clause)
INSERT INTO active_employees (emp_id, name, salary, dept_id, status)
VALUES (100, 'New User', 50000, 1, 'active');  -- Works

INSERT INTO active_employees (emp_id, name, salary, dept_id, status)
VALUES (101, 'Inactive User', 50000, 1, 'inactive');  -- Fails (CHECK OPTION)

-- Replace view (update definition)
CREATE OR REPLACE VIEW employee_details AS
SELECT emp_id, name, salary, dept_id
FROM employees
WHERE salary > 0;

-- Drop view
DROP VIEW IF EXISTS public_employees;

-- Materialized view simulation using table + triggers
CREATE TABLE mv_department_stats (
    dept_id INT PRIMARY KEY,
    employee_count INT,
    avg_salary DECIMAL(10,2),
    last_refresh TIMESTAMP
);

-- Create trigger to maintain materialized view
CREATE TRIGGER update_mv_stats
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    UPDATE mv_department_stats 
    SET employee_count = employee_count + 1,
        avg_salary = (SELECT AVG(salary) FROM employees WHERE dept_id = NEW.dept_id),
        last_refresh = NOW()
    WHERE dept_id = NEW.dept_id;
END;`,
  lineByLine: [
    "Line 1-16: Base tables for view examples",
    "Line 19-23: Simple view - Hides salary and SSN columns",
    "Line 26-39: View with computed columns (years_employed, salary_grade)",
    "Line 28-30: SELECT with JOIN",
    "Line 31: Calculated column",
    "Line 32-38: CASE statement",
    "Line 42-47: Updatable view with CHECK OPTION",
    "Line 45: WHERE status = 'active' - Filter",
    "Line 46: WITH CHECK OPTION - Prevents violating filter",
    "Line 50-61: Aggregate view - Read-only (cannot update)",
    "Line 54-59: Aggregation functions",
    "Line 64-66: MERGE algorithm - Combines view with outer query",
    "Line 68-73: TEMPTABLE algorithm - Materializes view first",
    "Line 84-86: Updating through updatable view",
    "Line 89-92: Update that violates CHECK OPTION",
    "Line 95-98: Insert that satisfies view condition",
    "Line 100-101: Insert that fails CHECK OPTION",
    "Line 104-106: CREATE OR REPLACE - Update view definition",
    "Line 112-126: Materialized view simulation"
  ],
  simpleMeaning: "Views are like saved queries that act as virtual tables. Instead of writing complex JOINs every time, create a view and SELECT FROM it. Some views can be updated (simple ones). WITH CHECK OPTION ensures you don't update a row out of the view (like making active employee inactive). Aggregate views (with GROUP BY) are read-only. Perfect for security (hide salary column) and simplicity (encapsulate complex logic).",
  output: `-- Simple view (public_employees)
+--------+----------+---------+------------+
| emp_id | name     | dept_id | hire_date  |
+--------+----------+---------+------------+
| 1      | Alice    | 1       | 2020-01-15 |
| 2      | Bob      | 1       | 2021-03-20 |
+--------+----------+---------+------------+

-- View with computed columns
+--------+-------+--------+-------------+-----------------+---------------+
| emp_id | name  | salary | dept_name   | years_employed  | salary_grade  |
+--------+-------+--------+-------------+-----------------+---------------+
| 1      | Alice | 85000  | Engineering | 4               | Executive     |
| 2      | Bob   | 75000  | Engineering | 3               | Senior        |
+--------+-------+--------+-------------+-----------------+---------------+

-- Aggregate view (department_stats)
+---------+-------------+----------------+------------+--------------+
| dept_id | dept_name   | employee_count | avg_salary | highest_salary|
+---------+-------------+----------------+------------+--------------+
| 1       | Engineering | 2              | 80000.00   | 85000.00     |
| 2       | Sales       | 0              | NULL       | NULL         |
+---------+-------------+----------------+------------+--------------+

-- SHOW CREATE VIEW
+-------------------+------------------------------------------------------------------+
| View              | Create View                                                      |
+-------------------+------------------------------------------------------------------+
| employee_details  | CREATE ALGORITHM=UNDEFINED DEFINER=\`root\`@\`localhost\` ...    |
+-------------------+------------------------------------------------------------------+`,
  note: "Simple views (single table, no aggregation) are updatable. WITH CHECK OPTION prevents rows from being updated out of the view. Aggregate views (GROUP BY, DISTINCT, UNION) are read-only. MERGE algorithm is faster but has restrictions. TEMPTABLE algorithm works for all views but may be slower. Views provide security by hiding columns. MATERIALIZED views require manual implementation in MySQL."
},

{
  name: "19. MYSQL TRANSACTION ISOLATION LEVELS & LOCKING",
  description: "Isolation levels control transaction concurrency effects. READ UNCOMMITTED allows dirty reads (see uncommitted changes). READ COMMITTED prevents dirty reads but allows non-repeatable reads. REPEATABLE READ (MySQL default) prevents dirty and non-repeatable reads but allows phantom reads. SERIALIZABLE highest isolation (table locking). Lock types: Shared (read) locks, Exclusive (write) locks, Gap locks (prevent phantom reads), Next-key locks (combination). InnoDB uses row-level locking.",
  code: `-- Check current isolation level
SELECT @@transaction_isolation;
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- READ UNCOMMITTED (lowest - dirty reads possible)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;
SELECT * FROM accounts WHERE account_id = 1;  -- Can see uncommitted changes
COMMIT;

-- READ COMMITTED (no dirty reads)
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 1000
-- Another transaction updates balance to 900 and commits
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 900 (non-repeatable)
COMMIT;

-- REPEATABLE READ (default - prevents non-repeatable reads)
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 1000
-- Another transaction updates balance to 900 and commits
SELECT balance FROM accounts WHERE account_id = 1;  -- Still returns 1000 (repeatable)
COMMIT;

-- Phantom reads demonstration
START TRANSACTION;
SELECT COUNT(*) FROM accounts WHERE balance > 500;  -- Returns 5 rows
-- Another transaction inserts new account with balance 600
SELECT COUNT(*) FROM accounts WHERE balance > 500;  -- Returns 6 (phantom)
COMMIT;

-- SERIALIZABLE (highest - prevents phantoms with locks)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
SELECT * FROM accounts WHERE balance > 500;  -- Acquires shared lock
-- Another transaction trying to insert will wait or timeout
COMMIT;

-- Explicit locking
START TRANSACTION;

-- Shared lock (read lock - allows other reads)
SELECT * FROM accounts WHERE account_id = 1 LOCK IN SHARE MODE;

-- Exclusive lock (write lock - prevents others from reading/writing)
SELECT * FROM accounts WHERE account_id = 1 FOR UPDATE;

-- Update with lock
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
COMMIT;

-- Gap lock prevention (prevents phantom reads)
START TRANSACTION;
SELECT * FROM accounts WHERE id BETWEEN 10 AND 20 FOR UPDATE;
-- Locks gap between 10-20, prevents inserts in that range
COMMIT;

-- Deadlock example (MySQL auto-detects and resolves)
-- Transaction 1
START TRANSACTION;
UPDATE accounts SET balance = 100 WHERE account_id = 1;
UPDATE accounts SET balance = 200 WHERE account_id = 2;
COMMIT;

-- Transaction 2 (simultaneous)
START TRANSACTION;
UPDATE accounts SET balance = 300 WHERE account_id = 2;
UPDATE accounts SET balance = 400 WHERE account_id = 1;
COMMIT;
-- One transaction will be chosen as deadlock victim and rolled back

-- View current locks
SELECT * FROM information_schema.INNODB_LOCKS;
SELECT * FROM performance_schema.data_locks;

-- View current transactions
SELECT * FROM information_schema.INNODB_TRX;

-- Kill a transaction
KILL QUERY 123;  -- Kills specific query
KILL 123;  -- Kills connection

-- Set lock wait timeout
SET GLOBAL innodb_lock_wait_timeout = 50;  -- 50 seconds

-- Enable deadlock logging
SET GLOBAL innodb_print_all_deadlocks = ON;`,
  lineByLine: [
    "Line 1-4: Check and set isolation levels at different scopes",
    "Line 7-11: READ UNCOMMITTED - Can see uncommitted changes (dirty reads)",
    "Line 14-21: READ COMMITTED - Prevents dirty reads, allows non-repeatable",
    "Line 24-31: REPEATABLE READ - Default, prevents non-repeatable reads",
    "Line 27: First read returns 1000",
    "Line 30: Second read still returns 1000 (repeatable)",
    "Line 34-40: Phantom reads - New rows appear in result set",
    "Line 43-49: SERIALIZABLE - Table-level locking, prevents phantoms",
    "Line 52-62: Explicit locking with FOR UPDATE and LOCK IN SHARE MODE",
    "Line 53: LOCK IN SHARE MODE - Shared lock (other reads allowed)",
    "Line 56: FOR UPDATE - Exclusive lock (prevents others)",
    "Line 65-69: Gap lock - Prevents phantom reads",
    "Line 72-86: Deadlock example - MySQL automatically detects",
    "Line 89-94: Monitor locks and transactions"
  ],
  simpleMeaning: "Isolation levels determine how transactions see each other's changes. READ UNCOMMITTED is like looking at someone's draft before they save (dangerous). READ COMMITTED only sees saved changes. REPEATABLE READ ensures you see the same data throughout your transaction. SERIALIZABLE makes transactions run one after another (slowest). Locks prevent conflicts: shared locks for reading, exclusive locks for writing. Deadlocks happen when two transactions wait for each other - MySQL picks one to cancel.",
  output: `-- Isolation level check
+-----------------------+------------------+
| @@transaction_isolation | isolation_level |
+-----------------------+------------------+
| REPEATABLE-READ       | Default          |
+-----------------------+------------------+

-- Setting isolation level
Query OK, 0 rows affected (0.00 sec)

-- Explicit lock example
+------------+---------+
| account_id | balance |
+------------+---------+
| 1          | 900     |
+------------+---------+

-- Deadlock error
ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction

-- View current transactions
+--------+-----------+------------------+------------------+
| trx_id | trx_state | trx_started      | trx_mysql_thread_id |
+--------+-----------+------------------+------------------+
| 12345  | RUNNING   | 2024-01-15 10:30 | 123               |
+--------+-----------+------------------+------------------+

-- View locks
+--------+-----------+----------+-----------+
| lock_id| lock_mode | lock_type | lock_table |
+--------+-----------+----------+-----------+
| 123    | X         | RECORD    | accounts  |
+--------+-----------+----------+-----------+`,
  note: "REPEATABLE READ is MySQL default (prevents dirty and non-repeatable reads). READ COMMITTED is common in other databases (PostgreSQL, Oracle). SERIALIZABLE uses table locks (avoid in high-concurrency). FOR UPDATE locks rows for update. LOCK IN SHARE MODE allows other reads but prevents writes. Deadlocks are normal - always retry transactions. Gap locks prevent phantom reads in REPEATABLE READ."
},

{
        name: "20. MYSQL PERFORMANCE TUNING & QUERY OPTIMIZATION",
        description: "Query optimization dramatically improves database performance. Use EXPLAIN to analyze query execution plans. Index strategies: cover indexes (include all columns), composite index order (most selective first), avoid functions in WHERE clauses. Query rewriting: replace OR with UNION, avoid SELECT *, use EXISTS instead of IN for large datasets. Server tuning: adjust buffer pool size (70-80% of RAM), query cache (MySQL 5.7), log file size, connection limits. Monitor slow queries with slow query log.",
        code: `-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';

-- Analyze query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';

-- Optimize query: avoid SELECT *
-- Bad
SELECT * FROM users WHERE age > 25;

-- Good - only needed columns
SELECT user_id, name, email FROM users WHERE age > 25;

-- Optimize: avoid functions in WHERE
-- Bad (index on hire_date not used)
SELECT * FROM employees WHERE YEAR(hire_date) = 2024;

-- Good (uses index)
SELECT * FROM employees WHERE hire_date BETWEEN '2024-01-01' AND '2024-12-31';

-- Optimize: use EXISTS instead of IN for large datasets
-- Bad
SELECT * FROM users WHERE user_id IN (SELECT user_id FROM orders WHERE amount > 1000);

-- Good
SELECT * FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.user_id AND o.amount > 1000);

-- Batch operations instead of row-by-row
-- Bad
UPDATE users SET status = 'active' WHERE user_id = 1;
UPDATE users SET status = 'active' WHERE user_id = 2;

-- Good (single batch)
UPDATE users SET status = 'active' WHERE user_id IN (1, 2, 3);

-- Bulk insert optimization
-- Bad
INSERT INTO logs (message) VALUES ('msg1');
INSERT INTO logs (message) VALUES ('msg2');

-- Good
INSERT INTO logs (message) VALUES ('msg1'), ('msg2'), ('msg3');

-- Analyze table for optimizer statistics
ANALYZE TABLE users;
OPTIMIZE TABLE users;

-- View server status variables
SHOW STATUS LIKE 'Slow_queries';
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';`,
        lineByLine: [
          "Line 1-4: Enable slow query log for monitoring",
          "Line 7: EXPLAIN - Shows query execution plan",
          "Line 10-13: Avoid SELECT * - Only fetch needed columns",
          "Line 16-22: Avoid functions in WHERE - Prevents index use",
          "Line 25-31: Use EXISTS instead of IN for large datasets",
          "Line 34-40: Batch updates instead of row-by-row",
          "Line 43-48: Bulk insert optimization",
          "Line 51-52: ANALYZE and OPTIMIZE tables",
          "Line 55-56: Monitor server status"
        ],
        simpleMeaning: "Query optimization makes MySQL faster. EXPLAIN shows how MySQL runs your query. Avoid SELECT * (fetch only needed columns). Don't use functions in WHERE - it breaks indexes. Use EXISTS instead of IN for large lists. Batch operations are much faster than individual updates. Increase buffer pool size to 70-80% of RAM.",
        output: `EXPLAIN result shows index usage (type: ref, key: idx_email)
Slow query log enabled
Buffer pool size configured to 1GB
ANALYZE TABLE completed successfully`,
        note: "EXPLAIN is your best friend for optimization. innodb_buffer_pool_size should be 70-80% of RAM. Slow query log is essential for finding problem queries. Batch operations are much faster than row-by-row."
      },

      {
        name: "21. MYSQL BACKUP AND RECOVERY STRATEGIES",
        description: "Regular backups are critical for disaster recovery. mysqldump creates logical backups (SQL statements) - portable but slower for large databases. Physical backups (copying data files) are faster but server-specific. Percona XtraBackup hot backups without downtime. Binary logs enable point-in-time recovery. Backup strategies: full backup weekly, incremental daily. Test recovery regularly.",
        code: `-- Logical backup with mysqldump
# Full database backup
mysqldump -u root -p --single-transaction mydb > mydb_backup.sql

# Backup with compression
mysqldump -u root -p mydb | gzip > mydb_backup.sql.gz

# Backup specific tables
mysqldump -u root -p mydb users orders > users_orders_backup.sql

# Restore from backup
mysql -u root -p mydb < mydb_backup.sql

# Restore compressed backup
gunzip < mydb_backup.sql.gz | mysql -u root -p mydb

-- Enable binary logging
# In my.cnf
[mysqld]
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7

-- View binary log status
SHOW MASTER STATUS;
SHOW BINARY LOGS;

-- Point-in-time recovery
# Restore full backup first
mysql -u root -p mydb < full_backup.sql

# Apply binary logs from specific time
mysqlbinlog --start-datetime="2024-01-15 10:00:00" \\
  mysql-bin.000001 | mysql -u root -p mydb

-- Export to CSV
SELECT * FROM users 
INTO OUTFILE '/tmp/users.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\\n';

-- Import from CSV
LOAD DATA INFILE '/tmp/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\\n'
IGNORE 1 ROWS;

-- Check backup integrity
mysqlcheck -u root -p --check --all-databases

-- Automate backup with cron
# Daily backup at 2 AM
0 2 * * * /usr/bin/mysqldump -u root -p mydb | gzip > /backups/mydb_$(date +\\%Y\\%m\\%d).sql.gz`,
        lineByLine: [
          "Line 1-4: Basic mysqldump full database backup",
          "Line 6-7: Compressed backup with gzip",
          "Line 9-10: Backup specific tables only",
          "Line 12-13: Restore backup to database",
          "Line 15-16: Restore compressed backup",
          "Line 19-23: Enable binary logging in config",
          "Line 26-27: SHOW MASTER STATUS - Current binary log position",
          "Line 30-33: Point-in-time recovery steps",
          "Line 36-42: CSV export for data exchange",
          "Line 45-51: CSV import",
          "Line 54: Check backup integrity",
          "Line 57-58: Schedule automatic backups"
        ],
        simpleMeaning: "Backups save your data from disasters. mysqldump creates SQL files you can restore anytime. Binary logs record every change - with full backup + binary logs, you can restore to any point in time. Test your backups regularly - a backup you can't restore is useless. Schedule automatic backups with cron.",
        output: `Backup completed successfully
SHOW MASTER STATUS: mysql-bin.000001 at position 123456
CSV export: 1000 rows exported
LOAD DATA INFILE: 999 rows imported
Backup integrity check passed`,
        note: "Always test restore process. Use --single-transaction for InnoDB consistent backups. Binary logs essential for point-in-time recovery. Store backups off-site. Monitor backup success/failure with alerts."
      }
    ]
  }
};

export default learning;
