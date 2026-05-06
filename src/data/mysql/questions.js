export const questions = [
  { 
    line: "SELECT * FROM employees WHERE salary > 50000;", 
    explanation: "Selects all employees with salary greater than 50,000.", 
    example: "Finds high-paid employees in the company.", 
    output: "Returns rows where salary column value exceeds 50000." 
  },
  { 
    line: "INSERT INTO users (name, email) VALUES ('John', 'john@email.com');", 
    explanation: "Inserts a new row into users table with name and email values.", 
    example: "Adding a new user to the database.", 
    output: "One row added with auto-generated ID if specified." 
  },
  { 
    line: "UPDATE products SET price = price * 1.1 WHERE category = 'Electronics';", 
    explanation: "Updates product prices by increasing 10% for Electronics category.", 
    example: "Price increase for all electronic items.", 
    output: "Affected rows count shows number of products updated." 
  },
  { 
    line: "DELETE FROM logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);", 
    explanation: "Deletes log records older than 30 days.", 
    example: "Cleaning up old log entries.", 
    output: "Removes rows with created date before 30 days ago." 
  },
  { 
    line: "SELECT COUNT(*) FROM orders WHERE status = 'completed';", 
    explanation: "Counts total number of completed orders.", 
    example: "How many orders have been successfully fulfilled?", 
    output: "Returns single number representing count of completed orders." 
  },
  { 
    line: "SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;", 
    explanation: "Calculates average salary per department.", 
    example: "Comparing salary averages across different departments.", 
    output: "Each department with its average salary value." 
  },
  { 
    line: "SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 5;", 
    explanation: "Returns top 5 highest paid employees.", 
    example: "Finding the highest earners in the company.", 
    output: "5 employees with highest salaries in descending order." 
  },
  { 
    line: "SELECT DISTINCT city FROM customers;", 
    explanation: "Returns unique city names from customers table.", 
    example: "Finding all cities where customers are located.", 
    output: "List of cities without duplicates." 
  },
  { 
    line: "SELECT name FROM users WHERE email LIKE '%@gmail.com';", 
    explanation: "Finds users with Gmail email addresses.", 
    example: "Identifying all Gmail users.", 
    output: "Names of users whose email ends with '@gmail.com'." 
  },
  { 
    line: "ALTER TABLE employees ADD COLUMN phone VARCHAR(15);", 
    explanation: "Adds new phone column to employees table.", 
    example: "Extending employee table to store contact numbers.", 
    output: "Table structure updated with new column." 
  },
  { 
    line: "CREATE INDEX idx_lastname ON users(last_name);", 
    explanation: "Creates index on last_name column to speed up searches.", 
    example: "Optimizing queries that filter by last name.", 
    output: "Index created, improving SELECT performance." 
  },
  { 
    line: "DROP TABLE IF EXISTS temp_data;", 
    explanation: "Deletes temp_data table if it exists (no error if missing).", 
    example: "Cleaning up temporary tables.", 
    output: "Table removed from database schema." 
  },
  { 
    line: "TRUNCATE TABLE session_logs;", 
    explanation: "Removes all rows from session_logs table (faster than DELETE).", 
    example: "Clearing all session data at once.", 
    output: "All rows removed, table structure remains, auto-increment reset." 
  },
  { 
    line: "SELECT NOW(), CURDATE(), CURTIME();", 
    explanation: "Returns current date and time in different formats.", 
    example: "Getting timestamp for logging or auditing.", 
    output: "Current datetime, date, and time values." 
  },
  { 
    line: "SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';", 
    explanation: "Selects orders from year 2024 using date range.", 
    example: "Filtering orders by calendar year.", 
    output: "All orders placed in 2024." 
  },
  { 
    line: "SELECT name, COALESCE(phone, 'No phone') as contact FROM customers;", 
    explanation: "Replaces NULL phone numbers with 'No phone' text.", 
    example: "Displaying contact info with default for missing numbers.", 
    output: "Phone numbers or default text for NULL values." 
  },
  { 
    line: "SELECT id, name FROM products WHERE name IS NULL;", 
    explanation: "Finds products with missing names (NULL values).", 
    example: "Data quality check for required field.", 
    output: "Products that need name values assigned." 
  },
  { 
    line: "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) as rank FROM employees;", 
    explanation: "Assigns rank to employees based on salary (ties skip numbers).", 
    example: "Creating employee salary leaderboard.", 
    output: "Each employee with their salary rank position." 
  },
  { 
    line: "WITH high_earners AS (SELECT * FROM employees WHERE salary > 70000) SELECT * FROM high_earners;", 
    explanation: "Creates temporary CTE for high earners, then selects from it.", 
    example: "Simplifying complex queries with named subqueries.", 
    output: "All employees earning above 70000." 
  },
  { 
    line: "SELECT name, LAG(salary) OVER (ORDER BY salary) as prev_salary FROM employees;", 
    explanation: "Shows previous salary in ordered list using window function.", 
    example: "Comparing each employee to the next lower paid.", 
    output: "Each row with salary and previous row's salary." 
  },
  { 
    line: "UPDATE accounts SET balance = balance - 500 WHERE id = 1; UPDATE accounts SET balance = balance + 500 WHERE id = 2;", 
    explanation: "Two updates that should run together as a transaction.", 
    example: "Transferring money between accounts.", 
    output: "Both accounts updated if wrapped in transaction." 
  },
  { 
    line: "START TRANSACTION; UPDATE inventory SET stock = stock - 1 WHERE product_id = 101; INSERT INTO orders (product_id, quantity) VALUES (101, 1); COMMIT;", 
    explanation: "Transaction ensuring inventory and order update together.", 
    example: "Processing an order with stock deduction.", 
    output: "Both operations committed together or rolled back." 
  },
  { 
    line: "SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id;", 
    explanation: "Counts orders per user including those with zero orders.", 
    example: "Finding user activity including inactive users.", 
    output: "Each user with their order count (0 for no orders)." 
  },
  { 
    line: "SELECT name FROM employees WHERE department = 'Sales' UNION SELECT name FROM contractors WHERE department = 'Sales';", 
    explanation: "Combines employee and contractor names from Sales department.", 
    example: "Getting all Sales team members from both tables.", 
    output: "Unique names from both tables (duplicates removed)." 
  },
  { 
    line: "SELECT e.name, m.name as manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;", 
    explanation: "Self-join to display each employee with their manager name.", 
    example: "Building organization hierarchy report.", 
    output: "Employee name with their manager's name." 
  },
  { 
    line: "SELECT department, SUM(salary) as total_payroll FROM employees GROUP BY department HAVING SUM(salary) > 100000;", 
    explanation: "Shows departments with total payroll exceeding 100,000.", 
    example: "Identifying expensive departments.", 
    output: "Departments where total salaries exceed 100k." 
  },
  { 
    line: "SELECT * FROM employees WHERE (salary > 50000 AND department = 'Engineering') OR (salary > 60000 AND department = 'Sales');", 
    explanation: "Complex filter with multiple conditions and parentheses.", 
    example: "Finding high-paid employees in specific departments.", 
    output: "Engineers >50k or Sales >60k." 
  },
  { 
    line: "SELECT name, CASE WHEN salary > 80000 THEN 'Executive' WHEN salary > 50000 THEN 'Senior' ELSE 'Junior' END as level FROM employees;", 
    explanation: "Categorizes employees into levels based on salary ranges.", 
    example: "Creating salary bands for reporting.", 
    output: "Each employee with assigned salary level." 
  },
  { 
    line: "SELECT DATE_FORMAT(created_at, '%Y-%m') as month, COUNT(*) as signups FROM users GROUP BY month ORDER BY month;", 
    explanation: "Groups user signups by year-month for trend analysis.", 
    example: "Tracking monthly user growth.", 
    output: "Monthly signup counts in chronological order." 
  },
  { 
    line: "ALTER TABLE orders ADD FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE;", 
    explanation: "Adds foreign key constraint to maintain referential integrity.", 
    example: "Ensuring orders always reference valid customers.", 
    output: "Constraint added, preventing orphan orders." 
  },
  { 
    line: "CREATE TABLE products_archive LIKE products; INSERT INTO products_archive SELECT * FROM products WHERE discontinued = 1; DELETE FROM products WHERE discontinued = 1;", 
    explanation: "Archives discontinued products before deletion.", 
    example: "Moving old products to archive table.", 
    output: "Discontinued products copied and removed from main table." 
  },
  { 
    line: "SELECT CONCAT(first_name, ' ', last_name) as full_name FROM employees;", 
    explanation: "Combines first and last names into single column.", 
    example: "Formatting names for display.", 
    output: "Full names combined from two columns." 
  },
  { 
    line: "SELECT YEAR(hire_date) as hire_year, COUNT(*) FROM employees GROUP BY hire_year;", 
    explanation: "Counts hires per year using YEAR() function.", 
    example: "Analyzing hiring trends over time.", 
    output: "Each year with number of employees hired." 
  },
  { 
    line: "SELECT name, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank FROM employees;", 
    explanation: "Ranks employees within each department by salary.", 
    example: "Finding top earners per department.", 
    output: "Rank 1 for highest paid in each department." 
  },
  { 
    line: "EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';", 
    explanation: "Shows how MySQL will execute the query (index usage, rows examined).", 
    example: "Analyzing query performance.", 
    output: "Execution plan with access type, possible keys, rows." 
  },
  { 
    line: "SET @row_number = 0; SELECT @row_number := @row_number + 1 as row_num, name FROM users;", 
    explanation: "User variable to add sequential row numbers (MySQL pre-8.0).", 
    example: "Adding row numbers before window functions existed.", 
    output: "Each row with sequential number starting at 1." 
  },
  { 
    line: "SELECT JSON_EXTRACT(attributes, '$.color') as color FROM products WHERE JSON_EXTRACT(attributes, '$.brand') = 'Apple';", 
    explanation: "Extracts color from JSON column for Apple products.", 
    example: "Querying JSON data for specific brand.", 
    output: "Color values from products with Apple brand." 
  },
  { 
    line: "CREATE USER 'app_user'@'%' IDENTIFIED BY 'secure_pass'; GRANT SELECT, INSERT ON mydb.* TO 'app_user'@'%';", 
    explanation: "Creates database user with limited permissions.", 
    example: "Setting up application database user.", 
    output: "User created with read/write access to mydb database." 
  },
  { 
    line: "SHOW PROCESSLIST; KILL QUERY 12345;", 
    explanation: "Shows running queries then kills a specific one.", 
    example: "Terminating a long-running query.", 
    output: "Process list displayed, specified query terminated." 
  },
  { 
    line: "SELECT * FROM information_schema.tables WHERE table_schema = 'mydb';", 
    explanation: "Queries metadata to list all tables in mydb database.", 
    example: "Getting database schema information.", 
    output: "Table names, engine, row count estimates." 
  },
  { 
    line: "SET autocommit = 0; UPDATE accounts SET balance = 1000 WHERE id = 1; COMMIT; SET autocommit = 1;", 
    explanation: "Disables autocommit for manual transaction control.", 
    example: "Explicitly controlling when changes persist.", 
    output: "Changes only committed when COMMIT executed." 
  },
  { 
    line: "CREATE VIEW active_customers AS SELECT * FROM customers WHERE status = 'active' WITH CHECK OPTION;", 
    explanation: "Creates view that only shows active customers and prevents updating status.", 
    example: "Ensuring updates don't remove rows from view.", 
    output: "View showing only active customers." 
  },
  { 
    line: "SELECT name, ROUND(salary * 12, 2) as annual_salary FROM employees;", 
    explanation: "Converts monthly salary to annual and rounds to 2 decimals.", 
    example: "Calculating yearly compensation.", 
    output: "Annual salary rounded to cents." 
  },
  { 
    line: "SELECT DATEDIFF(NOW(), hire_date) as days_employed FROM employees;", 
    explanation: "Calculates days since employee was hired.", 
    example: "Employee tenure calculation.", 
    output: "Number of days each employee has worked." 
  },
  { 
    line: "SELECT name, SUBSTRING(email, LOCATE('@', email) + 1) as email_domain FROM users;", 
    explanation: "Extracts domain part from email address using string functions.", 
    example: "Analyzing email provider distribution.", 
    output: "Domain names (gmail.com, yahoo.com, etc.)." 
  },
  { 
    line: "CREATE TABLE logs PARTITION BY RANGE (YEAR(log_date)) (PARTITION p2023 VALUES LESS THAN (2024), PARTITION p2024 VALUES LESS THAN (2025));", 
    explanation: "Creates partitioned table by year for better query performance.", 
    example: "Managing large log tables with date-based partitioning.", 
    output: "Table created with separate storage for each year." 
  },
  { 
    line: "SELECT AVG(salary) FROM employees WHERE department = (SELECT department FROM employees WHERE name = 'John Doe');", 
    explanation: "Subquery finds John's department, outer query gets department average.", 
    example: "Comparing employee salary to department average.", 
    output: "Average salary of John's department." 
  },
  { 
    line: "DELIMITER // CREATE PROCEDURE GetUser(IN uid INT) BEGIN SELECT * FROM users WHERE id = uid; END // DELIMITER ; CALL GetUser(1);", 
    explanation: "Creates stored procedure to get user by ID then calls it.", 
    example: "Encapsulating query logic in procedure.", 
    output: "User record with specified ID returned." 
  },
  { 
    line: "CREATE TRIGGER update_timestamp BEFORE UPDATE ON users FOR EACH ROW SET NEW.updated_at = NOW();", 
    explanation: "Trigger automatically sets updated_at on any row change.", 
    example: "Maintaining last-modified timestamp.", 
    output: "updated_at column always current on UPDATE." 
  },
  { 
    line: "SELECT name, salary, (SELECT AVG(salary) FROM employees) as company_avg FROM employees;", 
    explanation: "Shows each employee salary alongside company average.", 
    example: "Comparing individual to company overall.", 
    output: "Each row with employee salary and company average." 
  },
  { 
    line: "SELECT DISTINCT u.name FROM users u JOIN orders o ON u.id = o.user_id WHERE o.total > 500;", 
    explanation: "Finds unique users who placed orders over 500.", 
    example: "Identifying high-value customers.", 
    output: "Names of users with orders exceeding 500 (no duplicates)." 
  }
];