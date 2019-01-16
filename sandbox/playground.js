// console.log("'__dirname' gives the directory path:\n", __dirname);

// console.log("'process' gives info about the env the app is running in:", process);

// console.log("'global' is like the window object:", global);

// console.log("==================================================================");

// console.log("'Module' gives info of current module:\n", module);

// throw new Error('oops');
console.log(
  "=================================================================="
);

const { sendLog, value, userIDs, action } = require("./lib");

const fs = require("fs");

action(__filename);
sendLog();

console.log(`I required 'value' (${value}) from 'lib.js'.\n`);

console.log(
  "=================================================================="
);

const getLibFile = fs
  .readFileSync("./lib.js", { encoding: "utf-8" })
  .toString();

console.log("The contents of 'lib.js' is: \n\n", getLibFile);

const path = require('path');
console.log(path);