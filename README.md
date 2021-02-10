# Team-Profile-Generator

Hello, and welcome to my README! This is for my Week 10 Challenge, which was to create a Team Profile Generator using Node.js. I learned a lot while doing this, and I am happy to be able to share my experience with you.

![finished html](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/final%20website.png)

[Link to finished index.html in my repo](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/index.html)

[Video demo of application](https://drive.google.com/file/d/1xO0TgGrJcFqg5AieAtKAZvP3pi62n_ah/view?usp=sharing)

It was my job to ensure my Team Profile Generator had the following features:

- a command-line application that accepts user input

- user is prompted for: 
    - manager: name, id, email address and office number
    - option to add engineers and/or interns
        - ask for name, id, email, school/github

- all user prompts populate an index.html file 

- when user clicks on an email address, then the default email program opens up and populates the "to" field with the email selected 

- when user clicks on the GitHub username thent their GitHub profile will open in a new tab


I was to create this Team Profile Generator, and meet all of the requirements listed above, by using:

- [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming#:~:text=Object%2Doriented%20programming%20(OOP),(often%20known%20as%20methods).)
- [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
- [Node.js](https://nodejs.org/en/)
- NPMs - [Jest](https://www.npmjs.com/package/jest) and [Inquirer](https://www.npmjs.com/package/inquirer)
- the command-line
- JavaScript - ES6
- HTML 
- CSS

I completed this project as a way to further test my JavaScript skills with a focus on DRY and easy to read code. 

I was to write test for all parts of my code to ensure maintainability. The code was to pass all tests: 

![all tests passed](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/test%20pass%201.PNG)

![employee](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/test%20pass%20employee.PNG)

![engineer](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/test%20pass%20engineer.PNG)

![intern](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/test%20pass%20intern.PNG)

![manager](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/test%20pass%20mnager.PNG)

It is important that I am able to showcase what I can do in an interactive and meaningful way.

Features:

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Learning](#learning)
* [License](#license)

## Installation

The user must clone all filed from this repo. It is important that the location of the files is not changed. 

![files](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/file%20breakdown.PNG)

The user must have [Node.js](https://nodejs.org/en/download/) installed on their computer. Once Node is installed, the user must open the command-line (I used [GitBash](https://git-scm.com/downloads)), get to the appropriate file location and enter "npm init".

![npm init image](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/npm%20init.PNG)

This will create a "package.json" file, which must be filled out like below: 

![package json image](https://github.com/dvicj/Team-Profile-Generator/blob/main/dist/images/json%20package.PNG)

Then, the user must download inquirer by entering "npm install "inquirer"". This will allow the user to enter answers to prompts on the command-line.

Then, the user simply then has to enter "node index.js" on the command line and they will be asked a series of questions. Once complete, they will be alerted that their file was created. The index.html document will be saved in the "dist" file and it is ready to use!

## Usage
Here are some user experience highlights from my page:

if the user does not answer one of the required questions, they will be prompted until they answer

## Credits
These are some sources I used to help me along:

- [inquirer NPM](https://www.npmjs.com/package/inquirer)

- [Node.js](https://nodejs.org/en/download/)

- [jest NPM](https://www.npmjs.com/package/jest)

- [Bootstrap](https://getbootstrap.com/)

- [Google Fonts](https://fonts.google.com/)

## Learning
Here are the highlights of what I learned and issues I had while writing this code.

I was able to get my .gitignore working properly this time around, so node_modules and the package-lock.json were not added to GitHub. 

I really enjoyed how clean and simple the code ended up being. I found it much easier to understand and write than JavaScript code in the past. 

I liked using Jest - but I still had a hard time writing the tests and fully understanding what I was trying to figure out. I did like how it forces you to write very simple code. I will have to keep practicing TDD. 

## License
MIT License

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)

Copyright (c) 2021 Devin Jones

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

