INSERT INTO department (id, name)
VALUES (1,"SALES"),
        (2,"ACCOUNTING"),
        (3, "LEGAL");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Manager", "75000", 1),
    (2, "Sales Associate", "55000", 1),
    (3, "Accountant", "90000", 2),
    (4, "Lawyer", "120000", 3);
    (5, "Law Manager", "150000", 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (345, "Raquel", "Gomez", 4, 456),
       (456, "Thomas", "Patel", 5, null),
       (890, "Lauren", "Conrad", 1, null);

