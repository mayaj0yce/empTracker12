INSERT INTO
    department (department_name)
VALUES ('Meat'), ('Fruit'), ('Dairy'), ('Bakery'), ('Grocer');


INSERT INTO Roles (
    title, 
    salary, 
    department ) 
    VALUES 
    ('Meat_Packer', 26.69, 1), 
    ('Price_Tagger', 22.23, 2),
    ('Shelf_stocker', 17.20, 3),
    ('Baker', 19.28, 4),
    ('Bag_Boy', 12.17, 5); 

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager )
VALUES 
('Ronald', 'Firbank', 1, 1), 
('Max', 'Mods', 3, 1), 
('Sherman', 'Saus', 4, NULL), 
('Sarah', 'Winder', 2, 3), 
('Rob', 'Kebab', 1, 3), 
('Kaddy', 'Brair', 2, NULL);