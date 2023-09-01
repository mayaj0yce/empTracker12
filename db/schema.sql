DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department ( id INT PRIMARY KEY, name VARCHAR(30) );

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

-- CREATE TABLE
--     courses (
--         id INT NOT NULL,
--         course_title VARCHAR(30) NOT NULL,
--         course_description TEXT NOT NULL,
--         active BOOLEAN NOT NULL,
--         date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
--     );

-- CREATE TABLE
--     students (
--         id INT NOT NULL,
--         first_name VARCHAR(30) NOT NULL,
--         last_name VARCHAR(30) NOT NULL,
--         active BOOLEAN NOT NULL,
--         date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    -- );