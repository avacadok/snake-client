//outer-most scope so that it can be used by all functions in this module
let connection;

//changed setupInput() to accept an object that lets you interact with the server
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  //\u0003 unicode for exit
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w") {
    connection.write("Move: up");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "d") {
    connection.write("Move: right");
  }
  //print out msg when click key
  if (data === "l") {
    connection.write("Say: YOLO");
  } else if (data === "k") {
    connection.write("Say: Wassup");
  }
};

module.exports = {
  setupInput
};