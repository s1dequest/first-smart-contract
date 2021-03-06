const path = require('path'); // cross-platform compatibility between windows and unix.
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // dirname = current working directory
const source = fs.readFileSync(inboxPath, 'utf8');

// Here could specify the actual file with FILENAME:Inbox. Since we are doing the source code as a whole, we didnt need to.
module.exports = solc.compile(source, 1).contracts[':Inbox'];

// compile with 'node compile.js'
// console.log(solc.compile(source, 1)); 