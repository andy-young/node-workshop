// console.log("'__dirname' gives the directory path:\n", __dirname);

// console.log("'process' gives info about the env the app is running in:", process);

// console.log("'global' is like the window object:", global);

// console.log("==================================================================");

// console.log("'Module' gives info of current module:\n", module);

console.log("==================================================================");

// throw new Error('oops');

const {
  sendLog,
  value,
  userIDs,
  action
} = require('./lib');

action(__filename);
sendLog();
console.log(`I required 'value' (${value}) from 'lib.js'.`);

