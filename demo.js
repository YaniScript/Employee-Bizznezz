const inquirer = require('inquirer');

const prompt = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                {
                    name: "View All",
                    value: "View"
                },
                {
                    name: "Create New",
                    value: "Create"
                },
                {
                    name: "Exit App",
                    value: "Exit"
                }
            ]
        }
    ])
    .then((data) => console.log(data))
    .catch((err) => console.log(error))
}

prompt()


//old switch statement
.then(answers => {
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