INSERT INTO departments (department_name)
VALUES ("engineering"),
    ("finance & Accounting"),
    ("sales & marketing"),
    ("Legal");

SELECT * FROM departments;

INSERT INTO roles (title, salary, department_id)
VALUES ("software engineer", 120000, 1),
    ("project manager", 90000, 1),
    ("engineering manager", 225000, 1),
    ("accountant", 70000, 2),
    ("accounting manager", 120000, 2),
    ("product marketing manager", 50000, 3),
    ("marketing lead", 150000, 3),
    ("sales preson", 85000, 3),
    ("CFO",200000,4),
    ("Layer", 100000,4);

SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, NULL),
    ("Tom", "Allen", 3, NULL),
    ("Kevin", "Tupik", 5, NULL),
    ("Sarah", "Singh", 1, 2),
    ("JunJie", "Wu", 4, 5),
    ("Apple","NAT",6,Null),
    ("Vacation","Lazy",7,6),
    ("Amazon","Dom",8,6),
    ("Jason","Ice",9,null),
    ("June","Kat",10,9);

SELECT * FROM employees;