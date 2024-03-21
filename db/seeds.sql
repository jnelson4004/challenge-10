INSERT INTO department (id, dept_name)
VALUES  (1, "Mill"),
        (2, "Build"),
        (3, "Finish"),
        (4, "Buffing"),
        (5, "Set Up"),
        (6, "Social Media Team");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "CNC Op", "67,000", 1),
        (2, "Neck Set", "45,000", 2),
        (3, "Body Carve", "42,000", 2),
        (4, "Binding", "37,000", 2),
        (5, "Finish Sand", "42,000", 2),
        (6, "Stain and Seal", "41,000", 3),
        (7, "Intermediate Sand", "73", 3),
        (8, "Lacquer Spray", "52,000", 3),
        (9, "Buffer", "-12", 4),
        (10, "Wiring", "55,000", 5),
        (11, "Set Up", "83,000", 5),
        (12, "Photographer", "973,000");

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES  (1, "Travis", "Stanford", 1),
        (2, "Tweaker", "Dabney", 2),
        (3, "Little", "Jerome", 3),
        (4, "Rain Man", "", 4),
        (5, "Big", "Jeff", 5),
        (6, "Matt", "Rogers", 6),
        (7, "Jack", "Nelson", 7),
        (8, "Drew", "Bear", 8),
        (9, "Spools", "", 9),
        (10, "Justin", "Moore", 10),
        (11, "Aaron", "Huff", 11),
        (12, "Joey", "Garbage", 12);