// Prompts using Inquirer
const inquirer = require('inquirer');



inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Manager',
                'Update Employee Role',
                'View all Departments',
                'View all Roles',
                'View all Employees',
            ],
            name: 'table_options'
         },

        {
            type: 'input',
            message: "Please provide the employee's ID number.",
            name: 'employee_id'
         },

         {
           type: 'input',
           message: "What is the employee's first name?",
           name: 'first_name'
        },

        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last_name'
         },

         {
            type: 'input',
            message: "What is the employee's role?",
            name: 'employee_role'
         },

         {
            type: 'input',
            message: "Who is the employee's manager?",
            name: 'manager_id'
         },

         {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'role_title'
 
         },

         {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'role_salary'
 
         },

         {
            type: 'input',
            message: 'What department does the role belong to?',
            name: 'role_dept'
 
         },

         {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'dept_name'
 
         }

    ])
