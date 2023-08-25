// Prompts using Inquirer
const inquirer = require('inquirer');
const db = require('./config/connection');

const mainPrompt = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                {
                    name: "Add Department",
                    value: "department"
                },
                {
                    name: "Add Role",
                    value: "role"
                },
                {
                    name: "Add Employee",
                    value: "employee"
                }, 
                {
                    name: "View Departments",
                    value: "viewDept"
                },
                {
                    name: "View Roles",
                    value: "viewRole"
                },
                {
                    name: "View Employees",
                    value: "viewEmployee"
                },
                {
                    name: "Update Employee Manager",
                    value: "manager"
                },
                {
                    name: "Update Employee Role",
                    value: "employeeRole"
                }
            ]
        }
    ])
}

//Is my switch statement set up correctly?

switch (options) {
    case 'department':
        return db.promise().query('INSERT INTO department');
    case 'role':
        return db.promise().query('INSERT INTO role');
    case 'employee':
        return db.promise().query('INSERT INTO employee');
    case 'viewDept':
        return db.promise().query('SELECT * FROM department');
    case 'viewRole':
        return db.promise().query('SELECT * FROM role');
    case 'viewEmployee':
        return db.promise().query('SELECT * FROM employee');
}




//Do I need to create functions for how to add into the tables?




const addDepartment = () => {
    return db.promise().query('INSERT INTO department');
}

const addRole = () => {
    return db.promise().query('INSERT INTO role');
}

const addEmployee = () => {
    return db.promise().query('INSERT INTO employee');
}

const viewDepartment = () => {
    return db.promise().query('SELECT * FROM department');
}

const viewRoles = () => {
    return db.promise().query('SELECT * FROM role');
}

const viewEmployees = () => {
    return db.promise().query('SELECT * FROM employee')
}



//How do I get these prompts working if a user does select Add _____?


// const prompt = () => {
//     inquirer.prompt ([
//         {
//             type: 'list',
//             name: 'option',
//             message: 'What do you want to do?',
//             choices: [
//                 {
//                     name: "View All",
//                     value: "View"
//                 },
//                 {
//                     name: "Create New",
//                     value: "Create"
//                 },
//                 {
//                     name: "Exit App",
//                     value: "Exit"
//                 }
//             ]
//         }
//     ])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(error))
// }


// inquirer
//     .prompt([
//         {
//             type: 'list',
//             message: 'What would you like to do?', 
//             name: 'choice',
//             choices: [
//                 'Add Department',
//                 'Add Role',
//                 'Add Employee',
//                 'Update Employee Manager',
//                 'Update Employee Role',
//                 'View all Departments',
//                 'View all Roles',
//                 'View all Employees',
//             ]
//          },
//         ])
//         .then({choice} => {

//         })






//     //     {
//     //         type: 'input',
//     //         message: "Please provide the employee's ID number.",
//     //         name: 'employee_id'
//     //      },

//     //      {
//     //        type: 'input',
//     //        message: "What is the employee's first name?",
//     //        name: 'first_name'
//     //     },

//     //     {
//     //         type: 'input',
//     //         message: "What is the employee's last name?",
//     //         name: 'last_name'
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: "What is the employee's role?",
//     //         name: 'employee_role'
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: "Who is the employee's manager?",
//     //         name: 'manager_id'
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: 'What is the name of the role?',
//     //         name: 'role_title'
 
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: 'What is the salary of the role?',
//     //         name: 'role_salary'
 
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: 'What department does the role belong to?',
//     //         name: 'role_dept'
 
//     //      },

//     //      {
//     //         type: 'input',
//     //         message: 'What is the name of the department?',
//     //         name: 'dept_name'
 
//     //      }

//     // ])
