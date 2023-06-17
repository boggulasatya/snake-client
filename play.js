const { connect } = require("./client");
const { setupInput } = require("./input");
const { IP, PORT, moveKeys, sayMessage } = require("./constants");

console.log("Connecting ...");
//pass the object returned from connect into the setupInput function.
const conn = connect();
setupInput(conn);
