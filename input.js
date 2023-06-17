const { moveKeys, sayMessage } = require("./constants");

let connection;
let setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};
//Stores the active TCP connection object.

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();

  }

  // Using keys to move snake which direction
  const move = moveKeys[key];
  if (move) {
    connection.write(move);
  }

  //Sending messages to server and it will display that text on the screen, next to our snake.
  const message = sayMessage[key];
  if (message) {
    connection.write(message);
  }
};

module.exports = { setupInput };