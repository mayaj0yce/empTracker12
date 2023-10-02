DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE
    department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    role (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES department(id) 
    );

CREATE TABLE
    employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        FOREIGN KEY (role_id) REFERENCES role(id),
        manager_id INT,
        FOREIGN KEY (manager_id) REFERENCES employee(id)
    );