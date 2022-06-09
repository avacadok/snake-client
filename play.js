//we need to destructure the import same way of the export
const {connect} = require("./client");
const {setupInput} = require("./input");


console.log("Connecting ...\n");

setupInput(connect());