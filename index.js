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
                }
            ]
        }
    ]).then(answers => {
        switch (options) {
            case 'department':
                addDepartment();
                break;
            case 'role':
                addRole();
                break;
            case 'employee':
                addEmployee();
                break;
            case 'viewDept':
                viewDept();
                break;
            case 'viewRole':
                viewRole();
            case 'viewEmployee':
                viewEmployee();
                break;
            default:
                console.log(`Unknown option: ${answers.options}`);
        }
    });
}

const addDepartment = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:',
            validate: input => input ? true : 'The department name cannot be empty!'
        }
    ]).then(answers => {
        const deptSQL = 'INSERT INTO department VALUES (dept_name)';

        db.promise().query(sql, [answers.departmentName])
        .then(() => {
            console.log(`Added ${answers.departmentName} to departments.`);
        })
        mainPrompt();
    })
    .catch(err => {console.log(error)
    });
}



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
