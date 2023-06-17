const net = require("net");
const { IP, PORT, moveKeys, sayMessage } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  console.log("Successfully connected to the server!");
  conn.write("Name: SVB");
});

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });
  return conn;
};
 module.exports = { connect };