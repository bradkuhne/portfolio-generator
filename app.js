const fs = require("fs");
const generatePage = require('./src/page-template.js');

//Code from Module 1 below
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
//End of Module 9.1 Code
// Start of Lesson 9.2 below
const profileDataArgs = process.argv.slice(2);
const [uname, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(uname, github), err => {
    if (err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
});
