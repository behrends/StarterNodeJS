const { getChoice, readName } = require('./util/input');
const { displayEntries } = require('./util/output');
const { getName, saveName } = require('./util/store');

while(true) {
  let choice = getChoice();
  switch(choice) {
    case 0:   
      let name = getName();       
      console.log('Name: ' + name);
      break;
    case 1:
      let newName = readName();
      saveName(newName);
      break;
    case -1:
      console.log('Auf Wiedersehen!');
      process.exit();
  }
}