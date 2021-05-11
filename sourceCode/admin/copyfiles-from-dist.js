const copydir = require('copy-dir');
const del = require('del');

var source = "dist/admin";
var destination = "../../admin";

// delete with force for working from outside of CWD
// (async () => {
//     const deletedDirectoryPaths = await del([ destination + '/*/'], {force: true});
//     console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
// })();

console.log('Starting to copy latest package');
console.log('...');
console.log('');

copydir.sync(source, destination);

console.log('Finished copying files');
