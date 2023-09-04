DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE 
department ( 
  id INT PRIMARY KEY, 
  name VARCHAR(30) 
  );

CREATE TABLE
    role (
        id INT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT
    );

CREATE TABLE
    employee (
        id INT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name DECIMAL,
        manager_id INT
    );
