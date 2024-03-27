# Employee Tracker

[![Screen Recording](https://img.youtube.com/vi/VIDEO_ID_HERE/0.jpg)](https://drive.google.com/file/d/1PrlLwP5YH7O6k4b8kV-tpqBMmLREpG6y/view?usp=sharing)


## Description

Employee Tracker is a command-line application that allows users to manage departments, roles, and employees within an organization. It provides functionalities such as viewing all departments, adding new departments, and more.

## Installation

1. **Clone the repository to your local machine:**

    ```bash
    git clone https://github.com/your-username/Employee-Tracker.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Employee-Tracker
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up the database:**

    - Ensure you have PostgreSQL installed and running on your machine.
    - Create a new database named `Employee_Tracker_db`.
    - Execute the SQL queries in `db/schema.sql` to create the necessary tables and seed data.

5. **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add your PostgreSQL database password to the `.env` file:

    ```
    DB_PASSWORD=your_password
    ```

## Usage

Run the application using Node.js:

```bash
node index.js

## Video

![Screen Recording] https://drive.google.com/file/d/1PrlLwP5YH7O6k4b8kV-tpqBMmLREpG6y/view?usp=sharing