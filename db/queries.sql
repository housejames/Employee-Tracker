-- queries.sql
SELECT * FROM department;

INSERT INTO department (name) VALUES ($1) RETURNING *;

-- Add similar queries for roles and employees
