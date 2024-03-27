const { Pool } = require('pg');
const inquirer = require('inquirer');
const figlet = require('figlet');

require('dotenv').config(); // Load environment variables from a .env file

// Display terminal art
figlet('Employee Payroll Tracker', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

// Database connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your_database',
  password: process.env.DB_PASSWORD, // Access DB_PASSWORD from environment variable
  port: 5432,
});

// SQL query functions
async function getAllDepartments() {
  try {
    const query = 'SELECT * FROM department';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
}

async function addDepartment(name) {
  try {
    const query = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
    const values = [name];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error adding department:', error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
}

// Command-line interface logic
async function main() {
  try {
    // Display main menu
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        // Add other options...
      ],
    });

    // Handle user choice
    switch (choice) {
      case 'Add a department':
        const { departmentName } = await inquirer.prompt({
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the new department:',
        });
        await addDepartment(departmentName);
        console.log('Department added successfully!');
        break;
      // Add cases for other options...
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    // Close the database connection
    await pool.end();
  }
}

main();
