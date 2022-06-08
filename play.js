const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //print out data from server when recevies
  conn.on("data", (data) => {
  console.log("Server says: ", data);
  });
  //send msg to the server when connects
  conn.on("connect", () => {
  conn.write("Hello from client!");
  });

  return conn;
};

console.log("Connecting ...");
connect();

