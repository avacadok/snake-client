//we need to destructure the import same way of the export
const {connect} = require("./client");
const {setupInput} = require("./input");


console.log("Connecting ...\n");

setupInput(connect());

/*Perhaps the player's name/initials. That said, one could argue that this should be provided as a command line argument instead
The movement keys (W, A, S, D) could be added to constants like like MOVE_UP_KEY, etc.
What about the key mappings for messages?
Every time a user presses the key 'x', it displays the message 'y'
This seems like a mapping that's perfect for an object ({ x: "y" })
Instead of using if statements to implement this, you can define an object (as a constant) which
defines these message mappings. Your logic would change to simply lookup the appropriate mapping in the object, and if found, send
the value as the message string
*/