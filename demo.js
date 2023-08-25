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