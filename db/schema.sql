-- -- Application Databases and Tables

-- -- Creating the database
-- DROP DATABASE IF EXISTS employee_db;
-- CREATE DATABASE employee_db;

-- -- Using the employee database
-- USE employee_db;

-- -- Creating a 'Department' table in the Employee Database
-- CREATE TABLE department (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   dept_name VARCHAR(30) UNIQUE NOT NULL
-- );

-- -- -- Creating a 'Role' table in the Employee Database
-- CREATE TABLE role (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     role_title VARCHAR(30) NOT NULL,
--     salary DECIMAL NOT NULL,
--     dept_id INT NOT NULL,
--     CONSTRAINT fk_department FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE
-- );

-- -- -- Creating an 'Employee Information' table in the Employee Database
-- CREATE TABLE employee (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     role_id INT NOT NULL,
--     CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
--     manager_id INT, 
--     CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL

-- );
