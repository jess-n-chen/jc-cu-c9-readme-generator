# Jessica Chen - Professional README Generator

## Columbia University Bootcamp - Node.js Challenge: Professional README Generator

> This repository contains my command line application that generates a professional README file using a series of questions prompted to the end user.
> Link to Application Walkthrough: https://drive.google.com/file/d/1rOTLzWyuP4AvFE94sykG_1ZyIlYxl--j/view

## Table of Contents

- [General Info](#general-information)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Source Code](#source-code)
- [Contact](#contact)

## General Information

This repository contains the code for my command line application that prompts the end user with a series of questions about their application repository to generate a professional README file for the user to add to their repository project.

## Project Requirements

User Story:

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

Acceptance Criteria:

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

1. Clone the repository to your local drive.
2. Run `npm install` in order to install the npm package dependencies as specified in the package.json file.
3. Run `node index.js` in the command line to use the application.

## Screenshots

Below is a video tutorial on how to use the application. You will be prompted with a series of questions about your repository project. A README.md file will be generated in the `dist` directory after all questions are answers.

## Source Code

Source Code Reference: https://github.com/coding-boot-camp/potential-enigma

## Contact

Created by: Jessica Chen | jessicachen28@gmail.com
