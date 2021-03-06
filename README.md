# UoT Coding Challenge 18: Social Media API
This API is a social network web applicaiton where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Installation
Clone the repository from GitHub. Ensure your local device has MongoDB installed and then run `npm install i` to insall the dependencies. Dependencies in this project are: express, moment, and mongoose. Once that's done, run `npm start` to connect to the server. 
___

## Links
### Video Walkthroughs
* [User Routes Walkthrough](https://drive.google.com/file/d/17q868ckvLe1GOnfjKW3ZT1HNg4zxwmPv/view)
* [Thought Routes Walkthrough](https://drive.google.com/file/d/108mpegQk5t6I-C2dOsXjZIqDLyPrEmRA/view)
* [Friend Routes Walkthrough](https://drive.google.com/file/d/1DUyZYIjqc7j1lk3FPv-cPcAXPErbl44H/view)
* [Reaction Routes Walkthrough](https://drive.google.com/file/d/1wVjOsNJavGz-pZVM5jp8XG-gqEZH1Oxt/view)
### Other Links
* [Email Match Regex](https://emailregex.com/)

___

## Usage
This application is the database for a social networking application. API routes tested through Insomnia Core.

![screenshotHere](/assets/img/ch18-ss.png)
___


## Tools
* JavaScript
* Express.js
* MongoDB
* Mongoose
* Moment
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
### Criteria: 
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user???s friend list
```
