const sendLog = () => {
  console.log("This log originates from the lib.js file.");
};

module.exports = {
  sendLog,
  value: 1,
  userIDs: [1, 2, 3],
  action(dirname) {
    console.log(`I live in 'lib.js' and was called from: ${dirname}.`);
  }
};
