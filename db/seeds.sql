INSERT INTO department (department_name)
VALUES  ("Mill"),
        ("Build"),
        ("Finish"),
        ("Buffing"),
        ("Set Up"),
        ("Social Media Team");

INSERT INTO role (title, salary, department_id)
VALUES  ("CNC Op", 67000, 1),
        ("Neck Set", 45000, 2),
        ("Body Carve", 42000, 2),
        ("Binding", 37000, 2),
        ("Finish Sand", 42000, 2),
        ("Stain and Seal", 41000, 3),
        ("Intermediate Sand", 73, 3),
        ("Lacquer Spray", 52000, 3),
        ("Buffer", -12, 4),
        ("Wiring", 55000, 5),
        ("Set Up", 83000, 5),
        ("Photographer", 973000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Travis", "Stanford", 1),
        ("Tweaker", "Dabney", 2),
        ("Little", "Jerome", 3),
        ("Rain Man", "", 4),
        ("Big", "Jeff", 5),
        ("Matt", "Rogers", 6),
        ("Jack", "Nelson", 7),
        ("Drew", "Bear", 8),
        ("Spools", "", 9),
        ("Justin", "Moore", 10),
        ("Aaron", "Huff", 11),
        ("Joey", "Garbage", 12);