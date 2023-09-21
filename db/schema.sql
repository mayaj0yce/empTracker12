DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE
    department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    Roles (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department INT,
        FOREIGN KEY (department) REFERENCES department(id) -- REFERENCES department(id)
    );

CREATE TABLE
    employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager INT --       
          -- PRIMARY KEY (employee_id) 
        -- FOREIGN KEY (roles_id) 
        -- REFERENCES roles(id)
    );