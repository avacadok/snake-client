const net = require("net");

// establishes a connection with the game server
const connect = function() {
  
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
  // conn.on("connect", () => {
  //   conn.write("Name: AVA");
  //   conn.write("Move: up");
  //   console.log("Successfully connected to game server");
  // });

  conn.on("connect", () => {
    conn.write("Name: AVA");
    // let moveArr = ["up", "up", "left", "right", "down"];

    // let delay = 1000;
    // for (let move of moveArr) {
    //   setTimeout(() => {
    //     conn.write(`Move: ${move}`);
    //   }, delay);
    //   delay += 50;
    // }

    // // setInterval(() => {
    // //   for (let move of moveArr) {
    // //     conn.write(`Move: ${move}`)
    // //   }
    // // }, 500);
  });

  return conn;
};


module.exports = {
  connect

};