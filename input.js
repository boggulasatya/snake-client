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
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  } 
  if (key === 'm') {
    connection.write("Say: Hey Snake!");
  }  
  if (key === 'g') {
    connection.write('Say: Have Good game!');
  }
  if (key === 'h') {
    connection.write('Say: Have fun!'); 
  }
};

module.exports = { setupInput };