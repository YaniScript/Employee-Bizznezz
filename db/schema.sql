-- Application Databases and Tables

-- Creating the database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Using the employee database
USE employee_db;

-- Creating a 'Department' table in the Employee Database
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

-- Creating a 'Role' table in the Employee Database
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT NOT NULL FOREIGN KEY
);

-- Creating an 'Employee Information' table in the Employee Database
CREATE TABLE employee_information (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL FOREIGN KEY, 
    manager_id VARCHAR(30) FOREIGN KEY
);
