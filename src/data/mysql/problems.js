// /data/sql/problems.js

export const problems = {
  fresher: [
    {
      title: "SELECT Basics - Retrieve All Columns",
      description: "Write a query to select all columns from a table named 'employees'.",
      answer: "Use SELECT * to retrieve all columns from a table. The asterisk (*) is a wildcard that represents all columns.",
      example: "SELECT * FROM employees;",
      output: "Returns all rows and columns from the employees table",
      note: "💡 In production, specify only needed columns to improve performance."
    },
    {
      title: "SELECT Specific Columns",
      description: "Write a query to select only the 'name', 'email', and 'salary' columns from the employees table.",
      answer: "List column names separated by commas after SELECT. This is more efficient than SELECT * because it reduces data transfer.",
      example: "SELECT name, email, salary FROM employees;",
      output: "Returns only name, email, and salary columns for all rows",
      note: "💡 Always specify column names in production queries."
    },
    {
      title: "WHERE Clause - Filter Rows",
      description: "Write a query to find all employees with salary greater than 50000.",
      answer: "Use WHERE clause with condition. Comparison operators: =, <>, >, <, >=, <=. Combine conditions with AND, OR, NOT.",
      example: "SELECT name, salary FROM employees WHERE salary > 50000;",
      output: "Returns employees with salary > 50000",
      note: "💡 WHERE filters rows before aggregation, GROUP BY, and HAVING."
    },
    {
      title: "ORDER BY - Sort Results",
      description: "Write a query to sort employees by salary in descending order.",
      answer: "Use ORDER BY clause with ASC (ascending, default) or DESC (descending). Can sort by multiple columns.",
      example: "SELECT name, salary FROM employees ORDER BY salary DESC;",
      output: "Employees sorted from highest to lowest salary",
      note: "💡 Use indexes on ORDER BY columns for better performance."
    },
    {
      title: "LIMIT - Restrict Number of Rows",
      description: "Write a query to get the top 5 highest paid employees.",
      answer: "Use LIMIT clause with ORDER BY. LIMIT restricts number of rows returned. Often used with ORDER BY for top-N queries.",
      example: "SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 5;",
      output: "Returns only the 5 highest paid employees",
      note: "💡 LIMIT is usually the last clause executed in a query."
    },
    {
      title: "DISTINCT - Remove Duplicates",
      description: "Write a query to get unique department names from the employees table.",
      answer: "Use DISTINCT keyword to remove duplicate rows. DISTINCT applies to all selected columns together.",
      example: "SELECT DISTINCT department FROM employees;",
      output: "Returns list of unique department names",
      note: "💡 DISTINCT eliminates duplicates; GROUP BY is for aggregation."
    },
    {
      title: "COUNT() - Count Rows",
      description: "Write a query to count the total number of employees.",
      answer: "Use COUNT(*) to count all rows, COUNT(column) counts non-NULL values, COUNT(DISTINCT column) counts unique non-NULL values.",
      example: "SELECT COUNT(*) AS total_employees FROM employees;",
      output: "Returns total number of employees",
      note: "💡 COUNT(*) counts rows, COUNT(column) counts non-NULL values."
    },
    {
      title: "SUM() - Calculate Total",
      description: "Write a query to calculate the total salary expense for all employees.",
      answer: "Use SUM() aggregate function to add up values in a column. SUM ignores NULL values.",
      example: "SELECT SUM(salary) AS total_salary_expense FROM employees;",
      output: "Returns sum of all salaries",
      note: "💡 SUM ignores NULL values automatically."
    },
    {
      title: "AVG() - Calculate Average",
      description: "Write a query to find the average salary of all employees.",
      answer: "Use AVG() aggregate function which returns the average of values in a column. AVG ignores NULL values.",
      example: "SELECT AVG(salary) AS average_salary FROM employees;",
      output: "Returns average salary of all employees",
      note: "💡 AVG only includes non-NULL values in calculation."
    },
    {
      title: "MIN() and MAX() - Find Extremes",
      description: "Write a query to find the highest and lowest salary in the company.",
      answer: "Use MIN() and MAX() aggregate functions. These find minimum and maximum values in a column.",
      example: "SELECT MIN(salary) AS lowest_salary, MAX(salary) AS highest_salary FROM employees;",
      output: "Returns minimum and maximum salary values",
      note: "💡 MIN and MAX work with numeric, date, and string columns."
    },
    {
      title: "GROUP BY - Group Rows",
      description: "Write a query to count number of employees in each department.",
      answer: "Use GROUP BY clause with aggregate functions. GROUP BY groups rows that have same values in specified columns.",
      example: "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department;",
      output: "Returns number of employees per department",
      note: "💡 GROUP BY columns should be indexed for better performance."
    },
    {
      title: "HAVING - Filter Groups",
      description: "Write a query to find departments with more than 5 employees.",
      answer: "Use HAVING clause to filter groups after GROUP BY. HAVING is like WHERE but for aggregate functions.",
      example: "SELECT department, COUNT(*) AS count FROM employees GROUP BY department HAVING COUNT(*) > 5;",
      output: "Returns departments with more than 5 employees",
      note: "💡 HAVING is for aggregates, WHERE is for individual rows."
    },
    {
      title: "IN Operator",
      description: "Write a query to find employees in 'Sales', 'IT', or 'Marketing' departments.",
      answer: "Use IN operator to check if value matches any in a list. IN is more readable than multiple OR conditions.",
      example: "SELECT name, department FROM employees WHERE department IN ('Sales', 'IT', 'Marketing');",
      output: "Returns employees from specified departments",
      note: "💡 IN with subquery can be slower; consider EXISTS for large datasets."
    },
    {
      title: "BETWEEN Operator",
      description: "Write a query to find employees with salary between 40000 and 60000.",
      answer: "Use BETWEEN operator for inclusive range checks. BETWEEN is equivalent to column >= lower AND column <= upper.",
      example: "SELECT name, salary FROM employees WHERE salary BETWEEN 40000 AND 60000;",
      output: "Returns employees with salary in range 40000-60000 inclusive",
      note: "💡 BETWEEN is inclusive of both boundaries."
    },
    {
      title: "LIKE Operator - Pattern Matching",
      description: "Write a query to find employees whose names start with 'J'.",
      answer: "Use LIKE with wildcards: % (any number of characters), _ (single character).",
      example: "SELECT name FROM employees WHERE name LIKE 'J%';",
      output: "Returns employees with names starting with 'J'",
      note: "💡 LIKE with leading % cannot use indexes efficiently."
    },
    {
      title: "IS NULL Operator",
      description: "Write a query to find employees who don't have an email address recorded.",
      answer: "Use IS NULL to check for NULL values. NULL is not equal to anything, not even itself, so = NULL won't work.",
      example: "SELECT name FROM employees WHERE email IS NULL;",
      output: "Returns employees with missing email addresses",
      note: "💡 Use IS NULL or IS NOT NULL; never use = NULL."
    },
    {
      title: "NOT Operator",
      description: "Write a query to find employees who are not in the 'Sales' department.",
      answer: "Use NOT operator to negate a condition. Can be used with IN, LIKE, BETWEEN, EXISTS, etc.",
      example: "SELECT name, department FROM employees WHERE NOT department = 'Sales';",
      output: "Returns employees from all departments except Sales",
      note: "💡 NOT IN with subquery containing NULL returns no rows."
    },
    {
      title: "AND/OR Operators",
      description: "Write a query to find employees in Sales department with salary greater than 50000.",
      answer: "Use AND to combine multiple conditions. All conditions must be true. Use OR when any condition can be true.",
      example: "SELECT name, department, salary FROM employees WHERE department = 'Sales' AND salary > 50000;",
      output: "Returns Sales employees earning more than 50000",
      note: "💡 AND has higher precedence than OR; use parentheses to group."
    },
    {
      title: "Column Aliases",
      description: "Write a query to display employee names as 'Full Name' and salaries as 'Monthly Salary'.",
      answer: "Use AS keyword to give temporary names to columns in result set. Aliases make output more readable.",
      example: "SELECT name AS 'Full Name', salary AS 'Monthly Salary' FROM employees;",
      output: "Columns display with aliased names",
      note: "💡 Aliases can be used in ORDER BY but not in WHERE clause."
    },
    {
      title: "Table Aliases",
      description: "Write a query using table aliases to simplify a query joining employees and departments.",
      answer: "Use short aliases after table names in FROM clause. Aliases make queries shorter and more readable.",
      example: "SELECT e.name, d.name FROM employees e INNER JOIN departments d ON e.dept_id = d.id;",
      output: "Returns employees with department names using aliases",
      note: "💡 Table aliases are required in self-joins."
    },
    {
      title: "CONCAT() - Combine Strings",
      description: "Write a query to display employee full name by combining first_name and last_name.",
      answer: "Use CONCAT() to join multiple strings. Handle NULL values with COALESCE or IFNULL.",
      example: "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;",
      output: "Returns concatenated first and last names",
      note: "💡 CONCAT returns NULL if any argument is NULL."
    },
    {
      title: "UPPER() and LOWER()",
      description: "Write a query to display employee names in uppercase.",
      answer: "Use UPPER() to convert text to uppercase, LOWER() to lowercase. Useful for case-insensitive comparisons.",
      example: "SELECT UPPER(name) AS name_upper FROM employees;",
      output: "Returns employee names in uppercase",
      note: "💡 Use UPPER() on both sides for case-insensitive comparison."
    },
    {
      title: "LENGTH() - String Length",
      description: "Write a query to find employees whose names are longer than 10 characters.",
      answer: "Use LENGTH() to get string length in bytes, CHAR_LENGTH() for character count.",
      example: "SELECT name FROM employees WHERE LENGTH(name) > 10;",
      output: "Returns employees with names longer than 10 characters",
      note: "💡 LENGTH() counts bytes; CHAR_LENGTH() counts characters."
    },
    {
      title: "SUBSTRING() - Extract Part",
      description: "Write a query to extract the first 3 characters of employee names.",
      answer: "Use SUBSTRING() or SUBSTR() to extract part of a string. Specify starting position and length.",
      example: "SELECT name, SUBSTRING(name, 1, 3) AS name_prefix FROM employees;",
      output: "Returns first 3 characters of each employee name",
      note: "💡 Positions start at 1, not 0 in SQL."
    },
    {
      title: "ROUND() - Round Numbers",
      description: "Write a query to round average salary to 2 decimal places.",
      answer: "Use ROUND() to round numeric values. Second parameter specifies decimal places.",
      example: "SELECT ROUND(AVG(salary), 2) AS avg_salary FROM employees;",
      output: "Returns average salary rounded to 2 decimals",
      note: "💡 ROUND(column, 0) rounds to nearest integer."
    },
    {
      title: "CURRENT_DATE and NOW()",
      description: "Write a query to get current date and time.",
      answer: "Use CURRENT_DATE for date, NOW() for timestamp, CURDATE() and CURTIME() for specific parts.",
      example: "SELECT CURRENT_DATE AS today, NOW() AS current_datetime;",
      output: "Returns current date and current timestamp",
      note: "💡 Date functions vary by database; check documentation."
    },
    {
      title: "DATE Functions - YEAR(), MONTH()",
      description: "Write a query to find employees hired in 2023.",
      answer: "Use YEAR() to extract year from date, MONTH() for month, DAY() for day.",
      example: "SELECT name, hire_date FROM employees WHERE YEAR(hire_date) = 2023;",
      output: "Returns employees hired in 2023",
      note: "💡 Use BETWEEN for date ranges for better performance."
    },
    {
      title: "DATE_ADD() and DATE_SUB()",
      description: "Write a query to find the date 30 days from today.",
      answer: "Use DATE_ADD() to add interval, DATE_SUB() to subtract interval. INTERVAL keyword specifies unit.",
      example: "SELECT DATE_ADD(CURRENT_DATE, INTERVAL 30 DAY) AS future_date;",
      output: "Returns date 30 days from today",
      note: "💡 INTERVAL can use DAY, MONTH, YEAR, HOUR, MINUTE, etc."
    },
    {
      title: "DATEDIFF() - Calculate Difference",
      description: "Write a query to calculate how many days employees have been working.",
      answer: "Use DATEDIFF() to find difference between two dates in days.",
      example: "SELECT name, DATEDIFF(CURRENT_DATE, hire_date) AS days_worked FROM employees;",
      output: "Returns number of days each employee has worked",
      note: "💡 DATEDIFF(date1, date2) returns date1 - date2 in days."
    },
    {
      title: "COALESCE() - Handle NULL",
      description: "Write a query to display 'No Email' for employees without email.",
      answer: "Use COALESCE() to return first non-NULL value. Also works with multiple arguments.",
      example: "SELECT name, COALESCE(email, 'No Email') AS email FROM employees;",
      output: "Shows 'No Email' for employees with NULL email",
      note: "💡 COALESCE is standard SQL; IFNULL is MySQL-specific."
    },
    {
      title: "CAST() - Convert Data Types",
      description: "Write a query to convert salary from decimal to integer.",
      answer: "Use CAST() to convert between data types. Also use CONVERT() in some databases.",
      example: "SELECT name, CAST(salary AS UNSIGNED) AS salary_int FROM employees;",
      output: "Returns salary as integer (truncated)",
      note: "💡 CAST can convert between numeric, string, and date types."
    },
    {
      title: "CASE Statement - Conditional Logic",
      description: "Write a query to categorize employees by salary range.",
      answer: "Use CASE for if-then-else logic. Can have multiple WHEN conditions and an ELSE fallback.",
      example: "SELECT name, salary,\n  CASE \n    WHEN salary < 30000 THEN 'Low'\n    WHEN salary < 70000 THEN 'Medium'\n    ELSE 'High'\n  END AS salary_category\nFROM employees;",
      output: "Returns salary category for each employee",
      note: "💡 CASE is evaluated in order; first matching WHEN wins."
    },
    {
      title: "UNION - Combine Results",
      description: "Write a query to combine employee names from two different tables.",
      answer: "Use UNION to combine results from multiple queries. UNION removes duplicates; UNION ALL keeps all rows.",
      example: "SELECT name FROM employees_full_time UNION SELECT name FROM employees_part_time;",
      output: "Returns unique names from both tables",
      note: "💡 All queries in UNION must have same number and type of columns."
    },
    {
      title: "INTERSECT - Find Common Rows",
      description: "Write a query to find employees who are both managers and team leads.",
      answer: "Use INTERSECT to return rows common to both queries. Not all databases support INTERSECT.",
      example: "SELECT employee_id FROM managers INTERSECT SELECT employee_id FROM team_leads;",
      output: "Returns employees who are both managers and team leads",
      note: "💡 In MySQL, use INNER JOIN or EXISTS instead of INTERSECT."
    },
    {
      title: "EXCEPT (MINUS) - Find Differences",
      description: "Write a query to find employees who are managers but not team leads.",
      answer: "Use EXCEPT (MINUS in Oracle) to return rows from first query not in second.",
      example: "SELECT employee_id FROM managers EXCEPT SELECT employee_id FROM team_leads;",
      output: "Returns managers who are not team leads",
      note: "💡 In MySQL, use NOT EXISTS or LEFT JOIN with NULL check."
    },
    {
      title: "EXISTS vs IN",
      description: "Write a query using EXISTS to find departments with employees.",
      answer: "EXISTS checks for existence and stops at first match; often faster than IN for large datasets.",
      example: "SELECT * FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);",
      output: "Returns departments that have at least one employee",
      note: "💡 Use EXISTS when checking existence; IN when matching a small list."
    },
    {
      title: "ANY and ALL Operators",
      description: "Write a query to find employees who earn more than ANY employee in Sales.",
      answer: "ANY returns true if any subquery value meets condition; ALL requires all values to meet condition.",
      example: "SELECT name, salary FROM employees WHERE salary > ANY (SELECT salary FROM employees WHERE department = 'Sales');",
      output: "Returns employees earning more than the lowest-paid Sales employee",
      note: "💡 > ANY means greater than minimum; > ALL means greater than maximum."
    },
    {
      title: "EXISTS vs IN Performance",
      description: "Compare EXISTS and IN for finding employees with orders.",
      answer: "EXISTS stops processing after first match; IN builds full result set. EXISTS is usually faster for correlated subqueries.",
      example: "-- EXISTS (faster for correlated)\nSELECT * FROM employees e WHERE EXISTS (SELECT 1 FROM orders o WHERE o.emp_id = e.id);\n-- IN (slower for large datasets)\nSELECT * FROM employees WHERE id IN (SELECT emp_id FROM orders);",
      output: "Both return employees with orders; EXISTS often performs better",
      note: "💡 Modern optimizers may make them equivalent; test with your data."
    },
    {
      title: "Scalar Subquery in SELECT",
      description: "Write a query that includes each employee's salary compared to department average.",
      answer: "Scalar subquery in SELECT returns single value for each row. Must ensure subquery returns exactly one value.",
      example: "SELECT name, salary, (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department) AS dept_avg FROM employees e1;",
      output: "Shows each employee's salary and their department's average",
      note: "💡 Scalar subqueries can be slow on large tables; consider window functions."
    },
    {
      title: "Row Number without Window Functions",
      description: "Write a query to assign sequential numbers to employees using variables (MySQL).",
      answer: "Use user-defined variables to simulate ROW_NUMBER() in databases without window function support.",
      example: "SET @row_number = 0; SELECT @row_number := @row_number + 1 AS row_num, name FROM employees ORDER BY hire_date;",
      output: "Assigns sequential row numbers to employees",
      note: "💡 For production, upgrade to database version supporting window functions."
    },
    {
      title: "Pivot Table with CASE",
      description: "Write a query to pivot employee counts by department and job title.",
      answer: "Use CASE statements inside aggregate functions to create pivot table. Each column becomes conditional aggregation.",
      example: "SELECT department,\n  SUM(CASE WHEN job_title = 'Manager' THEN 1 ELSE 0 END) AS managers,\n  SUM(CASE WHEN job_title = 'Developer' THEN 1 ELSE 0 END) AS developers,\n  COUNT(*) AS total\nFROM employees GROUP BY department;",
      output: "Creates pivot table of employee counts by department and role",
      note: "💡 PIVOT is cleaner in databases that support it natively."
    },
    {
      title: "Dynamic SQL",
      description: "Write a dynamic query to count rows in any table passed as parameter.",
      answer: "Use PREPARE and EXECUTE for dynamic SQL. Concatenate query string at runtime. Useful for dynamic table/column names.",
      example: "SET @table_name = 'employees'; SET @sql = CONCAT('SELECT COUNT(*) FROM ', @table_name); PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;",
      output: "Returns row count for specified table name",
      note: "💡 Dynamic SQL is powerful but can be vulnerable to SQL injection."
    },
    {
      title: "Temporary Tables",
      description: "Create a temporary table to store intermediate results for complex query.",
      answer: "Use CREATE TEMPORARY TABLE to create session-specific table that auto-drops on connection close. Useful for multi-step processing.",
      example: "CREATE TEMPORARY TABLE high_earners AS SELECT * FROM employees WHERE salary > 70000; SELECT AVG(salary) FROM high_earners;",
      output: "Creates temporary table and calculates average of high earners",
      note: "💡 Temporary tables are only visible to current connection."
    },
    {
      title: "INSERT IGNORE and ON DUPLICATE",
      description: "Write a query to insert employees while ignoring duplicate emails.",
      answer: "INSERT IGNORE skips rows that would cause duplicate key errors. Useful for bulk inserts where duplicates are acceptable.",
      example: "INSERT IGNORE INTO employees (email, name) VALUES ('john@email.com', 'John'), ('john@email.com', 'John Duplicate');",
      output: "Inserts only first row; second is silently ignored",
      note: "💡 INSERT IGNORE also ignores other errors like data truncation."
    },
    {
      title: "EXISTS vs IN vs JOIN",
      description: "Write three equivalent queries to find departments with employees using IN, EXISTS, and JOIN.",
      answer: "Different syntaxes achieve same result; performance may vary based on data distribution and indexes.",
      example: "-- IN\nSELECT * FROM departments WHERE id IN (SELECT dept_id FROM employees);\n-- EXISTS\nSELECT * FROM departments WHERE EXISTS (SELECT 1 FROM employees WHERE dept_id = departments.id);\n-- JOIN\nSELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.dept_id;",
      output: "All three return departments with employees",
      note: "💡 Test all three on your data; optimizer may choose same plan."
    },
    {
      title: "Cross Join - Cartesian Product",
      description: "Write a query to generate all possible combinations of employees and projects.",
      answer: "CROSS JOIN produces Cartesian product. Use with caution as result size = rows1 × rows2.",
      example: "SELECT e.name, p.project_name FROM employees e CROSS JOIN projects p;",
      output: "Returns every employee paired with every project",
      note: "💡 CROSS JOIN is rarely intentional; usually indicates missing JOIN condition."
    },
    {
      title: "Natural Join",
      description: "Write a query using NATURAL JOIN to combine employees and departments.",
      answer: "NATURAL JOIN automatically joins on columns with same name. Often produces unexpected results; avoid in production.",
      example: "SELECT * FROM employees NATURAL JOIN departments;",
      output: "Joins on all columns with identical names (e.g., dept_id, department_id)",
      note: "💡 Avoid NATURAL JOIN; explicit JOIN with ON is safer and clearer."
    },
    {
      title: "Self Join to Find Duplicates",
      description: "Write a query to find duplicate email addresses in employees table.",
      answer: "Use self join with different aliases, join on email, exclude same id. GROUP BY can also find duplicates.",
      example: "SELECT e1.id, e1.email FROM employees e1 INNER JOIN employees e2 ON e1.email = e2.email AND e1.id != e2.id;",
      output: "Returns employees with duplicate emails (each duplicate appears twice)",
      note: "💡 Use GROUP BY email HAVING COUNT(*) > 1 to list duplicate emails once."
    },
    {
      title: "Comments in SQL",
      description: "Write a complex query with single-line and multi-line comments.",
      answer: "Use -- for single-line comments, /* */ for multi-line comments. Comments document query logic.",
      example: "-- This query finds top earners\n/* Multi-line comment\n   explaining complex logic */\nSELECT name, salary FROM employees WHERE salary > 70000 ORDER BY salary DESC;",
      output: "Query executes; comments are ignored",
      note: "💡 Always comment complex logic and magic numbers in queries."
    },
    {
      title: "Query Execution Order",
      description: "Explain and demonstrate the order of execution for a SELECT query with multiple clauses.",
      answer: "Execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Understanding this helps optimize queries.",
      example: "SELECT department, AVG(salary) AS avg_salary\nFROM employees\nWHERE hire_date > '2020-01-01'\nGROUP BY department\nHAVING AVG(salary) > 50000\nORDER BY avg_salary DESC\nLIMIT 5;",
      output: "Returns top 5 departments meeting criteria",
      note: "💡 WHERE filters before grouping; HAVING filters after grouping."
    }
  ],

  experienced: [
    {
      title: "INNER JOIN - Combine Tables",
      description: "Write a query to get employee names and their department names from employees and departments tables.",
      answer: "Use INNER JOIN to combine rows from two tables where join condition matches. INNER JOIN returns only matching rows from both tables. If no match, row is excluded. Join condition typically uses foreign key = primary key. Use table aliases for better readability.",
      example: "SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.dept_id = d.id;",
      output: "Returns employees with their department names",
      note: "💡 Use table aliases for better readability in joins."
    },
    {
      title: "LEFT JOIN - Include Unmatched",
      description: "Write a query to list all employees and their department names, including employees without departments.",
      answer: "Use LEFT JOIN (or LEFT OUTER JOIN) to return all rows from left table even if no match in right table. Non-matching right table columns will be NULL. Use when you want to preserve all rows from primary table.",
      example: "SELECT e.name, d.department_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id;",
      output: "Returns all employees, showing NULL for those without department",
      note: "💡 LEFT JOIN keeps all rows from left table; RIGHT JOIN keeps all from right."
    },
    {
      title: "RIGHT JOIN",
      description: "Write a query to list all departments and employees in them, including departments with no employees.",
      answer: "Use RIGHT JOIN to return all rows from right table. RIGHT JOIN is less common; can be rewritten as LEFT JOIN by swapping table order. Useful when you want all rows from referenced table.",
      example: "SELECT e.name, d.department_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id;",
      output: "Returns all departments, showing NULL for those without employees",
      note: "💡 RIGHT JOIN is equivalent to LEFT JOIN with tables swapped."
    },
    {
      title: "FULL OUTER JOIN",
      description: "Write a query to list all employees and all departments, showing matches where they exist.",
      answer: "Use FULL OUTER JOIN to return all rows from both tables, matching where possible. Non-matched rows show NULL on missing side. Not all databases support FULL OUTER JOIN (MySQL workaround uses UNION of LEFT and RIGHT joins).",
      example: "SELECT e.name, d.department_name FROM employees e FULL OUTER JOIN departments d ON e.dept_id = d.id;",
      output: "Returns all employees and all departments",
      note: "💡 MySQL: emulate FULL JOIN with UNION of LEFT and RIGHT JOIN."
    },
    {
      title: "Self Join",
      description: "Write a query to find employees who earn more than their manager.",
      answer: "Use self join - joining a table to itself. Use different aliases to distinguish the two instances. Common for hierarchical data like employee-manager relationships.",
      example: "SELECT e.name AS employee, m.name AS manager FROM employees e INNER JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary;",
      output: "Returns employees earning more than their managers",
      note: "💡 Always use aliases for self joins to avoid ambiguity."
    },
    {
      title: "Multiple Joins",
      description: "Write a query to get employee names, department names, and project names from three tables.",
      answer: "Chain multiple JOIN clauses. Order of joins affects performance but not result (for inner joins). Use appropriate join types for each relationship. Each JOIN has its own ON condition.",
      example: "SELECT e.name, d.department_name, p.project_name FROM employees e INNER JOIN departments d ON e.dept_id = d.id INNER JOIN projects p ON e.id = p.employee_id;",
      output: "Returns employees with their departments and assigned projects",
      note: "💡 Join order matters for performance optimization."
    },
    {
      title: "Subquery in WHERE",
      description: "Write a query to find employees who earn more than the company average.",
      answer: "Use subquery (nested query) in WHERE clause. Subquery executes first, returns value(s) for outer query. Can use with comparison operators (=, >, <) for single-value subqueries, IN for multiple values.",
      example: "SELECT name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      output: "Returns employees with salary above company average",
      note: "💡 Subquery executes once; correlated subquery executes per row."
    },
    {
      title: "Subquery with IN",
      description: "Write a query to find employees who work in departments located in 'New York'.",
      answer: "Use subquery with IN operator. Subquery returns list of department IDs, outer query uses IN to match. IN is efficient for small result sets. Alternative: use JOIN for better performance with large datasets.",
      example: "SELECT name FROM employees WHERE dept_id IN (SELECT id FROM departments WHERE location = 'New York');",
      output: "Returns employees in New York departments",
      note: "💡 For large lists, EXISTS often performs better than IN."
    },
    {
      title: "EXISTS Operator",
      description: "Write a query to find departments that have at least one employee.",
      answer: "Use EXISTS with correlated subquery. EXISTS returns TRUE if subquery returns at least one row. EXISTS often faster than IN for large datasets because it stops processing after first match.",
      example: "SELECT name FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);",
      output: "Returns departments with at least one employee",
      note: "💡 EXISTS is semi-join; more efficient than COUNT(*) > 0."
    },
    {
      title: "Correlated Subquery",
      description: "Write a query to find employees who earn more than the average salary of their department.",
      answer: "Use correlated subquery where inner query references outer query. Correlated subquery executes once for each row of outer query. More expensive but powerful for row-by-row comparisons.",
      example: "SELECT name, salary FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept_id = e1.dept_id);",
      output: "Returns employees earning above their department average",
      note: "💡 Correlated subqueries can be slow; test performance."
    },
    {
      title: "Derived Table (Subquery in FROM)",
      description: "Write a query to find the average salary of the top 5 highest paid employees.",
      answer: "Use subquery in FROM clause (derived table). Subquery creates temporary result set that outer query can use. Must have alias. Useful for complex aggregations and multi-step calculations.",
      example: "SELECT AVG(salary) FROM (SELECT salary FROM employees ORDER BY salary DESC LIMIT 5) AS top_earners;",
      output: "Returns average salary of top 5 earners",
      note: "💡 Derived tables must have an alias in most databases."
    },
    {
      title: "Common Table Expression (CTE)",
      description: "Write a CTE to find employees with salary above average, then count them.",
      answer: "Use WITH clause to define CTE (Common Table Expression). CTEs make complex queries more readable, can be referenced multiple times, and can be recursive. CTE exists only during query execution.",
      example: "WITH high_earners AS (SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)) SELECT COUNT(*) FROM high_earners;",
      output: "Returns count of employees earning above average",
      note: "💡 CTEs improve readability; recursive CTEs handle hierarchical data."
    },
    {
      title: "CREATE TABLE with Constraints",
      description: "Create a table 'employees' with columns: id (PRIMARY KEY), name (NOT NULL), email (UNIQUE), salary (DEFAULT 0), dept_id (FOREIGN KEY).",
      answer: "Use CREATE TABLE statement. Specify column names, data types, and constraints. PRIMARY KEY ensures uniqueness and indexes column. UNIQUE prevents duplicates. NOT NULL requires value. DEFAULT provides default value. FOREIGN KEY ensures referential integrity.",
      example: "CREATE TABLE employees (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    salary DECIMAL(10,2) DEFAULT 0,\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES departments(id)\n);",
      output: "Creates employees table with all constraints",
      note: "💡 Use appropriate data types to save storage and improve performance."
    },
    {
      title: "ALTER TABLE - Multiple Operations",
      description: "Write queries to add, modify, and drop columns from an existing table.",
      answer: "Use ALTER TABLE with ADD COLUMN, MODIFY COLUMN, DROP COLUMN. Can add multiple columns in one statement in some databases. Changing data types may require data conversion.",
      example: "-- Add column\nALTER TABLE employees ADD COLUMN phone_number VARCHAR(15);\n-- Modify column\nALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);\n-- Drop column\nALTER TABLE employees DROP COLUMN phone_number;",
      output: "Performs multiple ALTER operations on employees table",
      note: "💡 Adding columns with defaults may rewrite entire table in some databases."
    },
    {
      title: "CREATE INDEX - Performance Optimization",
      description: "Create indexes on frequently queried columns to improve SELECT performance.",
      answer: "Use CREATE INDEX statement. Indexes speed up SELECT queries but slow down INSERT/UPDATE/DELETE. Choose columns used in WHERE, JOIN, ORDER BY. Composite indexes use multiple columns in order.",
      example: "-- Single column index\nCREATE INDEX idx_email ON employees(email);\n-- Composite index (order matters!)\nCREATE INDEX idx_dept_salary ON employees(dept_id, salary);\n-- Unique index\nCREATE UNIQUE INDEX idx_unique_email ON employees(email);",
      output: "Creates indexes for better query performance",
      note: "💡 Index columns in WHERE =, then range, then ORDER BY/GROUP BY."
    },
    {
      title: "DROP INDEX",
      description: "Write a query to remove an unused index from a table.",
      answer: "Use DROP INDEX statement. Removing unused indexes improves write performance and saves storage. Monitor index usage before dropping. In MySQL: DROP INDEX index_name ON table_name.",
      example: "DROP INDEX idx_email ON employees;",
      output: "Removes the idx_email index from employees table",
      note: "💡 Regularly review and remove unused indexes to reduce overhead."
    },
    {
      title: "INSERT Multiple Rows",
      description: "Write a query to insert multiple employees at once.",
      answer: "Use INSERT with multiple value lists separated by commas. Reduces round trips to database. Most databases support this syntax. Check max rows per insert limit.",
      example: "INSERT INTO employees (name, email, salary) VALUES ('Alice', 'alice@email.com', 60000), ('Bob', 'bob@email.com', 55000);",
      output: "Inserts two rows in single statement",
      note: "💡 Batch inserts are much faster than individual inserts."
    },
    {
      title: "INSERT with SELECT",
      description: "Write a query to insert data from one table into another.",
      answer: "Use INSERT INTO ... SELECT statement. Copies data from source table to destination table. Useful for backups, archiving, and ETL operations. Column counts and data types must match.",
      example: "INSERT INTO employees_backup SELECT * FROM employees WHERE hire_date < '2023-01-01';",
      output: "Inserts old employees into backup table",
      note: "💡 INSERT SELECT is atomic; use transactions for large operations."
    },
    {
      title: "UPDATE with JOIN",
      description: "Write a query to update employee salaries based on department performance rating.",
      answer: "Use UPDATE with JOIN to update rows based on values from another table. Multi-table UPDATE syntax varies by database. Always test with SELECT first to verify affected rows.",
      example: "UPDATE employees e JOIN departments d ON e.dept_id = d.id SET e.salary = e.salary * 1.10 WHERE d.performance_rating = 'A';",
      output: "Increases salaries by 10% for employees in A-rated departments",
      note: "💡 Always use SELECT to verify which rows will be updated before running UPDATE."
    },
    {
      title: "DELETE with JOIN",
      description: "Write a query to delete employees who don't have any sales records.",
      answer: "Use DELETE with JOIN or subquery to delete rows based on another table. Multi-table DELETE syntax varies. Use LEFT JOIN with IS NULL check for 'not exists' conditions.",
      example: "DELETE e FROM employees e LEFT JOIN sales s ON e.id = s.employee_id WHERE s.id IS NULL;",
      output: "Deletes employees with no sales records",
      note: "💡 Use transactions and test with SELECT before DELETE."
    },
    {
      title: "Upsert (INSERT ON DUPLICATE KEY UPDATE)",
      description: "Write a query to insert a new employee, but update if email already exists.",
      answer: "Use INSERT ... ON DUPLICATE KEY UPDATE (MySQL) or MERGE (SQL Server) or INSERT ... ON CONFLICT (PostgreSQL). Handles upsert operation atomically. Requires unique constraint on conflict column.",
      example: "INSERT INTO employees (id, name, email, salary) VALUES (1, 'John', 'john@email.com', 50000) ON DUPLICATE KEY UPDATE name = VALUES(name), salary = VALUES(salary);",
      output: "Inserts new row or updates existing on duplicate email",
      note: "💡 Upsert requires unique constraint on conflict column."
    },
    {
      title: "REPLACE INTO",
      description: "Write a query to replace an employee record if it exists, otherwise insert.",
      answer: "Use REPLACE INTO (MySQL) which deletes old row and inserts new. Requires PRIMARY KEY or UNIQUE constraint. Similar to INSERT ON DUPLICATE KEY UPDATE but DELETE + INSERT instead of UPDATE.",
      example: "REPLACE INTO employees (id, name, email, salary) VALUES (1, 'John Updated', 'john@email.com', 55000);",
      output: "Replaces existing employee with id 1 or inserts new",
      note: "💡 REPLACE deletes and inserts; ON DUPLICATE UPDATE is more efficient."
    },
    {
      title: "TRUNCATE vs DELETE",
      description: "Write a query to quickly delete all rows from a temporary table and explain the difference.",
      answer: "TRUNCATE removes all rows quickly, resets auto-increment, cannot be rolled back in many databases. DELETE removes rows one by one, logs each row, can use WHERE clause, can be rolled back. TRUNCATE is DDL, DELETE is DML.",
      example: "-- TRUNCATE (faster, cannot rollback)\nTRUNCATE TABLE temp_data;\n-- DELETE (slower, can rollback)\nDELETE FROM temp_data;",
      output: "Both remove all rows but behave differently",
      note: "💡 TRUNCATE is DDL, not DML; use with caution in production."
    },
    {
      title: "DROP TABLE with IF EXISTS",
      description: "Write a query to safely remove a table if it exists.",
      answer: "Use DROP TABLE IF EXISTS to avoid errors if table doesn't exist. Checks for table existence before dropping. Useful in scripts and migrations.",
      example: "DROP TABLE IF EXISTS old_backup;",
      output: "Permanently removes old_backup table if it exists",
      note: "💡 DROP TABLE cannot be rolled back in most databases."
    },
    {
      title: "CREATE VIEW for Security",
      description: "Create a view that shows employee names and departments but hides salary information.",
      answer: "Use CREATE VIEW to create virtual table with restricted columns. Views provide security by hiding sensitive columns. Can also filter rows. Views are updated when underlying tables change.",
      example: "CREATE VIEW public_employee_info AS SELECT e.name, d.department_name FROM employees e JOIN departments d ON e.dept_id = d.id;",
      output: "Creates view without salary information",
      note: "💡 Views add security layer; some views are updatable."
    },
    {
      title: "Stored Procedure with Parameters",
      description: "Create a stored procedure that returns employees by department name.",
      answer: "Use CREATE PROCEDURE with IN parameter. Stored procedures encapsulate business logic, reduce network traffic, and improve security. Can include multiple statements and flow control.",
      example: "CREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(100))\nBEGIN\n    SELECT * FROM employees WHERE department = dept_name;\nEND;",
      output: "Creates procedure to fetch employees by department",
      note: "💡 Stored procedures execute on server, reducing data transfer."
    },
    {
      title: "Stored Procedure with OUTPUT Parameter",
      description: "Create a stored procedure that returns the average salary for a given department as OUTPUT.",
      answer: "Use OUT parameter to return value. IN for input, OUT for output, INOUT for both. CALL procedure to execute. Handle NULL returns appropriately.",
      example: "CREATE PROCEDURE GetAvgSalary(IN dept_name VARCHAR(100), OUT avg_salary DECIMAL(10,2))\nBEGIN\n    SELECT AVG(salary) INTO avg_salary FROM employees WHERE department = dept_name;\nEND;",
      output: "Procedure calculates average salary for department",
      note: "💡 OUT parameters allow returning multiple values from procedure."
    },
    {
      title: "Function in SQL - Scalar",
      description: "Create a function that calculates annual bonus (10% of salary).",
      answer: "Use CREATE FUNCTION (returns scalar value). Deterministic functions always return same result for same input. Functions can be used in SELECT queries. Materialized functions can be indexed for performance.",
      example: "CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2)) RETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n    RETURN salary * 0.10;\nEND;",
      output: "Creates function to calculate 10% bonus",
      note: "💡 Functions can be used in SELECT, WHERE, and ORDER BY clauses."
    },
    {
      title: "Aggregate Functions with GROUP BY",
      description: "Write a query to get count, average salary, min salary, max salary for each department.",
      answer: "Combine multiple aggregate functions in SELECT with GROUP BY. Each aggregate processes values within each group. Use COUNT(*), AVG(), MIN(), MAX(), SUM() together.",
      example: "SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary, MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees GROUP BY department;",
      output: "Returns department statistics",
      note: "💡 Multiple aggregates in one query are more efficient than separate queries."
    },
    {
      title: "Window Functions - ROW_NUMBER()",
      description: "Write a query to assign a rank to each employee by salary within their department.",
      answer: "Use ROW_NUMBER() window function with PARTITION BY and ORDER BY. Window functions perform calculations across set of rows related to current row without collapsing them. ROW_NUMBER() assigns unique number to each row within partition.",
      example: "SELECT name, department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept FROM employees;",
      output: "Assigns unique rank to each employee within department by salary",
      note: "💡 Window functions are evaluated after WHERE but before ORDER BY."
    },
    {
      title: "RANK() vs DENSE_RANK()",
      description: "Write a query to rank employees by salary, handling ties differently.",
      answer: "RANK() leaves gaps after ties (1,2,2,4). DENSE_RANK() has no gaps (1,2,2,3). ROW_NUMBER() never ties (1,2,3,4). Choose based on business requirements for ranking.",
      example: "SELECT name, salary,\n    RANK() OVER (ORDER BY salary DESC) AS rank_with_gaps,\n    DENSE_RANK() OVER (ORDER BY salary DESC) AS rank_no_gaps\nFROM employees;",
      output: "Shows different ranking methods",
      note: "💡 DENSE_RANK() is often preferred for leaderboards."
    },
    {
      title: "LEAD() and LAG()",
      description: "Write a query to show each employee's salary and the salary of the next higher paid employee.",
      answer: "Use LEAD() to access next row, LAG() for previous row. Specify offset (default 1) and default value. Useful for comparing with adjacent rows, calculating differences, detecting changes.",
      example: "SELECT name, salary, LEAD(salary) OVER (ORDER BY salary) AS next_higher_salary FROM employees;",
      output: "Shows next higher salary for each employee",
      note: "💡 LEAD/LAG without PARTITION BY considers entire result set as single partition."
    },
    {
      title: "Running Total with SUM() OVER()",
      description: "Write a query to calculate cumulative salary sum ordered by hire date.",
      answer: "Use SUM() as window function with ORDER BY. Specify ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW for running total. Window frame defines which rows are included.",
      example: "SELECT name, hire_date, salary, SUM(salary) OVER (ORDER BY hire_date) AS running_total FROM employees;",
      output: "Calculates cumulative salary sum",
      note: "💡 Default window frame is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW."
    },
    {
      title: "Moving Average",
      description: "Write a query to calculate 3-month moving average of sales.",
      answer: "Use AVG() with window frame ROWS BETWEEN 2 PRECEDING AND CURRENT ROW. Specify number of rows for moving window. Useful for smoothing time series data.",
      example: "SELECT sale_date, amount, AVG(amount) OVER (ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3months FROM sales;",
      output: "Calculates 3-month moving average of sales",
      note: "💡 Adjust window size based on business requirements."
    },
    {
      title: "NTILE - Percentile Buckets",
      description: "Write a query to divide employees into 4 salary quartiles.",
      answer: "Use NTILE(4) to distribute rows into 4 roughly equal buckets. Number of buckets specified as parameter. Useful for percentile analysis, grading, and data segmentation.",
      example: "SELECT name, salary, NTILE(4) OVER (ORDER BY salary) AS salary_quartile FROM employees;",
      output: "Divides employees into 4 salary quartiles",
      note: "💡 NTILE may create uneven bucket sizes if rows not divisible by parameter."
    },
    {
      title: "FIRST_VALUE() and LAST_VALUE()",
      description: "Write a query to show each employee's salary and the lowest salary in their department.",
      answer: "Use FIRST_VALUE() to get first value in window frame. With ORDER BY salary, FIRST_VALUE returns lowest salary. Use ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING for true window.",
      example: "SELECT name, department, salary, FIRST_VALUE(salary) OVER (PARTITION BY department ORDER BY salary) AS lowest_dept_salary FROM employees;",
      output: "Shows lowest salary in each department",
      note: "💡 Default window frame affects FIRST_VALUE; specify full window for consistent results."
    },
    {
      title: "CUME_DIST() and PERCENT_RANK()",
      description: "Write a query to find relative rank of each employee's salary within department.",
      answer: "CUME_DIST gives cumulative distribution (<= current), PERCENT_RANK gives relative rank (excluding first). Useful for percentile analysis.",
      example: "SELECT name, salary, CUME_DIST() OVER (PARTITION BY department ORDER BY salary) AS percentile FROM employees;",
      output: "Shows salary percentile within each department",
      note: "💡 CUME_DIST returns value between 0 and 1; multiply by 100 for percentage."
    },
    {
      title: "Recursive CTE - Employee Hierarchy",
      description: "Write a recursive CTE to find all subordinates under a given manager.",
      answer: "Use recursive CTE with UNION ALL. Anchor member gets initial rows, recursive member references CTE name. Use termination condition to avoid infinite loops. Useful for hierarchical data (org charts, bill of materials).",
      example: "WITH RECURSIVE emp_hierarchy AS (\n    SELECT id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.name, e.manager_id, h.level + 1\n    FROM employees e INNER JOIN emp_hierarchy h ON e.manager_id = h.id\n) SELECT * FROM emp_hierarchy;",
      output: "Returns complete employee hierarchy with levels",
      note: "💡 Recursive CTEs require termination condition to avoid infinite loops."
    },
    {
      title: "Recursive CTE - Generate Number Series",
      description: "Write a recursive CTE to generate numbers from 1 to 100.",
      answer: "Use recursive CTE with anchor and recursive member adding 1 each iteration. Useful for generating sequences without tables.",
      example: "WITH RECURSIVE numbers AS (\n    SELECT 1 AS n\n    UNION ALL\n    SELECT n + 1 FROM numbers WHERE n < 100\n) SELECT * FROM numbers;",
      output: "Returns numbers 1 through 100",
      note: "💡 Set MAX_RECURSION_DEPTH if needed for large sequences."
    },
    {
      title: "Pivot Table with CASE",
      description: "Write a query to pivot employee counts by department and job title.",
      answer: "Use CASE statements inside aggregate functions to create pivot table. Each column becomes conditional aggregation. Alternative: use PIVOT operator in SQL Server, crosstab in PostgreSQL.",
      example: "SELECT department,\n    SUM(CASE WHEN job_title = 'Manager' THEN 1 ELSE 0 END) AS managers,\n    SUM(CASE WHEN job_title = 'Developer' THEN 1 ELSE 0 END) AS developers,\n    COUNT(*) AS total\nFROM employees GROUP BY department;",
      output: "Creates pivot table of employee counts by department and role",
      note: "💡 PIVOT is cleaner in databases that support it natively."
    },
    {
      title: "JSON Data in SQL",
      description: "Write a query to extract value from JSON column in modern databases.",
      answer: "Use JSON functions: JSON_EXTRACT() (MySQL), JSON_VALUE() (SQL Server), -> (PostgreSQL). Store semi-structured data in JSON columns for flexibility while maintaining query capability.",
      example: "SELECT name, JSON_EXTRACT(metadata, '$.department') AS department FROM employees WHERE JSON_EXTRACT(metadata, '$.years_experience') > 5;",
      output: "Extracts department and filters by experience from JSON",
      note: "💡 JSON columns can be indexed using generated columns or expression indexes."
    },
    {
      title: "Query Optimization with EXPLAIN",
      description: "Use EXPLAIN to analyze a slow query and identify performance bottlenecks.",
      answer: "Prefix query with EXPLAIN (or EXPLAIN ANALYZE for execution stats). Analyze output: possible_keys (usable indexes), key (chosen index), rows (estimated rows scanned), type (join type: ALL bad, index/ref good).",
      example: "EXPLAIN SELECT * FROM employees WHERE department = 'Sales' AND salary > 50000;",
      output: "Shows query execution plan: table scan or index usage",
      note: "💡 Use EXPLAIN ANALYZE for actual vs estimated row counts."
    },
    {
      title: "Index Optimization - Composite Index",
      description: "Create appropriate indexes to optimize a slow query on large employees table.",
      answer: "Analyze query WHERE and JOIN columns. Create composite indexes for multiple columns (order matters: most selective first). Use covering indexes (include all SELECT columns) to avoid table access.",
      example: "CREATE INDEX idx_dept_salary ON employees(department, salary);",
      output: "Creates composite index for department and salary queries",
      note: "💡 Index columns in WHERE =, then range, then ORDER BY/GROUP BY."
    },
    {
      title: "Full-Text Search Implementation",
      description: "Implement full-text search on a posts table for content searching.",
      answer: "Create FULLTEXT index on text columns. Use MATCH() AGAINST() for searching. Full-text is optimized for natural language queries, handles stemming and stop words, ranks results by relevance.",
      example: "CREATE FULLTEXT INDEX idx_content ON posts(title, content);\nSELECT title, MATCH(title, content) AGAINST('database optimization') AS relevance \nFROM posts WHERE MATCH(title, content) AGAINST('database optimization');",
      output: "Returns posts ranked by relevance to search term",
      note: "💡 Full-text search requires minimum word length (usually 3-4 chars)."
    },
    {
      title: "Partitioning Large Tables by Year",
      description: "Partition a large sales table by year for better query performance.",
      answer: "Use table partitioning by RANGE, LIST, or HASH. Partition pruning allows queries to scan only relevant partitions. Improves maintenance (archiving old partitions is fast). Requires careful partition key selection.",
      example: "CREATE TABLE sales (id INT, sale_date DATE, amount DECIMAL(10,2))\nPARTITION BY RANGE (YEAR(sale_date)) (\n    PARTITION p2022 VALUES LESS THAN (2023),\n    PARTITION p2023 VALUES LESS THAN (2024),\n    PARTITION p2024 VALUES LESS THAN (2025)\n);",
      output: "Creates partitioned sales table by year",
      note: "💡 Partition keys should match common query filters for pruning benefit."
    },
    {
      title: "Materialized Views",
      description: "Create a materialized view for frequently accessed aggregated sales data.",
      answer: "Materialized views store query results physically, updated periodically. Use for expensive aggregations on slowly changing data. Can be indexed for additional performance. REFRESH MATERIALIZED VIEW updates data.",
      example: "CREATE MATERIALIZED VIEW daily_sales_summary AS\nSELECT sale_date, SUM(amount) AS total_sales, COUNT(*) AS transaction_count\nFROM sales GROUP BY sale_date;",
      output: "Creates materialized view with pre-aggregated daily sales",
      note: "💡 Use REFRESH CONCURRENTLY in PostgreSQL for non-blocking refresh."
    },
    {
      title: "Database Normalization to 3NF",
      description: "Normalize a denormalized orders table to Third Normal Form (3NF).",
      answer: "1NF: atomic values, no repeating groups. 2NF: no partial dependencies on composite keys. 3NF: no transitive dependencies (non-key depends on another non-key). Normalization reduces redundancy and anomalies.",
      example: "-- Denormalized: orders(customer_name, customer_address, product, price)\n-- After normalization:\n-- customers(id, name, address)\n-- products(id, name, price)\n-- orders(id, customer_id, product_id, quantity)",
      output: "Normalized schema eliminates data redundancy",
      note: "💡 Normalization vs denormalization trade-off: read vs write performance."
    },
    {
      title: "Transaction Management",
      description: "Write a transaction to transfer money between two bank accounts with rollback on error.",
      answer: "Use BEGIN TRANSACTION, COMMIT, ROLLBACK. Transactions ensure ACID properties: Atomicity (all or nothing), Consistency (rules maintained), Isolation (transactions don't interfere), Durability (committed changes persist).",
      example: "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\n-- Check for errors\nCOMMIT;\n-- ROLLBACK if error occurred",
      output: "Transfers 100 between accounts atomically",
      note: "💡 Set appropriate isolation level: READ COMMITTED, REPEATABLE READ, SERIALIZABLE."
    },
    {
      title: "Deadlock Detection and Resolution",
      description: "Identify and resolve deadlock in concurrent database operations.",
      answer: "Deadlock occurs when transactions wait for each other's locks. Detection: monitor deadlock graphs, use SHOW ENGINE INNODB STATUS. Prevention: consistent lock order, shorter transactions, lower isolation levels.",
      example: "-- Transaction 1 (order: table A then B)\nBEGIN; UPDATE A SET col=1 WHERE id=1; UPDATE B SET col=2 WHERE id=2; COMMIT;\n-- Transaction 2 (order: table B then A)\nBEGIN; UPDATE B SET col=3 WHERE id=2; UPDATE A SET col=4 WHERE id=1; COMMIT;",
      output: "Demonstrates deadlock scenario",
      note: "💡 Always access tables in same order across transactions to prevent deadlocks."
    },
    {
      title: "Performance Tuning Slow Query",
      description: "Optimize a slow query that joins 4 large tables and filters on date range.",
      answer: "Use EXPLAIN to identify full table scans. Create covering indexes on JOIN and WHERE columns. Consider denormalizing frequently used columns. Use PARTITION BY date for pruning. Analyze statistics.",
      example: "-- Optimized indexes\nCREATE INDEX idx_order_date ON orders(order_date);\nCREATE INDEX idx_customer_id ON customers(id);\nCREATE INDEX idx_product_id ON products(id);\nCREATE INDEX idx_status_id ON status(id);",
      output: "Creates indexes to optimize the slow query",
      note: "💡 Aim for index-only scans (covering indexes) for best performance."
    }
  ]
};

export default problems;