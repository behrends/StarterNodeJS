const { getChoice, readName } = require('./util/input');
const { displayEntries } = require('./util/output');
const { getName, getNames, saveName, addName } = require('./util/store');

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
    case 2:
      let names = getNames();
      console.log(names);
      break;
    case 3:
      let newName2 = readName();
      addName(newName2);
      break;
    case -1:
      console.log('Auf Wiedersehen!');
      process.exit();
  }
}