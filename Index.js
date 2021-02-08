const fs = require('fs');
const inquirer = require('inquirer');

const promptuser = () => {
    return inquirer 
    .prompt([
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
            type:'input', 
            name: 'managerID', 
            message: "Please enter the manager's employee ID.",
            validate: managerID => {
               if(managerID) {
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
        {
            type: 'list',
            name: 'employeeList',
            message: "Do you need to add an Engineer or Intern to your team?",
            choices: ["Engineer", "Intern", "Neither"]
        }
    ]).then(function(inqResp){
        var employee = inqResp.employeeList; 
        if (employee === "Engineer"){
            promptEngineer(); 
        } else if (employee === "Intern") {
            promptIntern(); 
        } else {
            return false; 
        }
    })
}; 

const promptEngineer = () => {
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
            name: 'engineerID',
            message: "Please enter the engineer's employee ID.",
            validate: engineerID => {
                if(engineerID) {
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
    ])
};

const promptIntern = () => {
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
            name: 'engineerID',
            message: "Please enter the intern's employee ID.",
            validate: internID => {
                if(internID) {
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
    ])
};

promptuser(); 