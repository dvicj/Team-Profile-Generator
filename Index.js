const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let finalTeam = [];

function promptStart(){
    inquirer 
    .prompt([
        {
            message: "*****Welcome to Your Team Generator - please enter your team name!*****",
            name: "teamname"
        }
    ]).then(function(data){
        const teamName = data.teamname; 
        finalTeam.push(teamName);
        promptManager(); 
    })
}; 

function promptManager() {
    inquirer.prompt([
        {
           type:'input',
           name: 'managerName',
           message: 'Please enter the name of your team manager.',
           validate:  managerName => {
               if(managerName) {
                   return true; 
               } else {
                   console.log("Please enter an answer!"); 
                   return false; 
               }
           }
        }, 
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the manager's email.",
            validate: managerEmail => {
                if(managerEmail) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'managerNumber',
            message: "Please enter the manager's office number.",
            validate: managerNumber => {
                if(managerNumber) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }
        },
    ]).then(function(data) {
        const name = data.managerName;
        const id = 1;
        const email = data.managerEmail;
        const number = data.managerNumber;
        const teamMember = new Manager(name, id, email, number);
        finalteam.push(teamMember);
        addTeamMembers(); 
    })
}; 

function addTeamMembers() {
    inquirer.prompt ([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ]).then(function(data){
        switch(data.addMemberData) {
            case "Yes, add an engineer":
                promptEngineer(); 
                break;
            case "Yes, add an intern":
                promptIntern(); 
                break; 
            case "No, my team is complete":
                compileTeam(); 
                break; 
        }
    });
}; 

function promptEngineer() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the name of your engineer?",
            validate: engineerName => {
                if(engineerName) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: 'input', 
            name: 'engineerEmail', 
            message: "Please enter the engineer's email.",
            validate: engineerEmail => {
                if(engineerEmail) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }

        }, 
        {
            type: 'input',
            name: 'engineerGit',
            message: "Please enter your engineer's GitHub username.",
            validate: engineerGit => {
                if(engineerGit) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }

        }
    ]).then(function(data) {
        const name = data.engineerName; 
        const id = finalTeam.length + 1; 
        const email = data.engineerEmail; 
        const github = data.engineerGit; 
        const teamMember = new Engineer(name, id, email, github);
        finalTeam.push(teamMember);
        addTeamMembers(); 
    }); 
};

function promptIntern() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the name of your intern?",
            validate: internName => {
                if(internName) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: 'input', 
            name: 'internEmail', 
            message: "Please enter the interns's email.",
            validate: internEmail => {
                if(internEmail) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }

        }, 
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the name of your intern's school.",
            validate: internSchool => {
                if(internSchool) {
                    return true; 
                } else {
                    console.log("Please enter an answer!");
                    return false; 
                }
            }
        }
    ]).then(function(data) {
        const name = data.internName;
        const id = finalTeam.length + 1; 
        const email = data.internEmail; 
        const school = data.internSchool; 
        const teamMember = new Intern(name, id, email, school);
        finalTeam.push(teamMember); 
        addTeamMembers(); 
    })
};

function compileTeam() {
    console.log("*****We're compiling your team now!*****");

    const htmlArray = []; 
    const htmlBeginning = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar sticky-top navbar-light" style="background-color:chartreuse;">
            <h1>
                ${finalTeam[0]}
            </h1>
        </nav>
    `
    htmlArray.push(htmlBeginning);

    for (let i=1; i<finalTeam.length; i++) {
        let object = `
        <div class = "card">
            <img class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${finalTeam[i].name}, ${finalTeam[i].title}</h2>
                <p class="card-text">Employee ID: ${finalTeam[i].id}</p>
                <p class="card-text">Email: <a href="mailto:${finalTeam[i].email}">${finalTeam[i].email}</a></p>       
        `
        if (finalTeam[i].managerNumber) {
            object += `
            <p>Number: ${finalTeam[i].managerNumber}</p>
            `
        }
        if (finalTeam[i].engineerGit) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeam[i].engineerGit}"> ${finalTeam[i].engineerGit}</a></p>
            `
        }
        if (finalTeam[i].internSchool) {
            object += `
            <p>School: ${finalTeam[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object); 
    }
    const htmlEnd = `
        <footer>
        <span> Made with love in ${new Date().getFullYear()} for ${finalTeam[0]}</span>
        </body>
        </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/index.html`, htmlArray.join(""), function (err) {

    })
}

promptStart(); 