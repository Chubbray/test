const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employees = require("./lib/Employees");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const teamMembers = [];
const idArray = [];

function appMenu() {

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Managers Name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Managers ID?",
            },
            {
                type: "input",
                name: "manegerEmail",
                message: "What is the Managers email?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Managers Office Numbr?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.manegerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members!",
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }

        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineer Name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer ID?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer email?",
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the Engineer GitHub?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Intern Name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Intern ID?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the Intern School name?",
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
        
    }

    function buildTeam() {
        return
    }
    createManager()
}

appMenu()

function init() {
    inquirer.prompt([])
        .then(function (data) {
            const filename =
                "README.md"

            console.log(data)
            fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log('Success!');
            });
        });
}

init();

