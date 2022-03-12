INSERT INTO department (department_name)
VALUES ("engineering"),
    ("finance & Accounting"),
    ("sales & marketing"),
    ("Legal");

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id)
VALUES ("software engineer", 120000, 1),
    ("project manager", 90000, 1),
    ("engineering manager", 225000, 1),
    ("accountant", 70000, 2),
    ("accounting manager", 120000, 2),
    ("product marketing manager", 50000, 3),
    ("marketing lead", 150000, 3),
    ("sales preson", 85000, 4);

SELECT * FROM roles;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 3, NULL),
    ("Tom", "Allen", 3, 1),
    ("Kevin", "Tupik", 1, 2),
    ("Sarah", "Singh", 4, 2),
    ("JunJie", "Wu", 1, 1);

SELECT * FROM employee;