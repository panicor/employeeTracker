DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department(
 id INT NOT NULL PRIMARY KEY,
 department_name VARCHAR(30)
);

-- CREATE TABLE role 
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);


-- CREATE TABLE employee 
CREATE TABLE employee(
     id INT NOT NULL PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT,
     manager_id INT
);

