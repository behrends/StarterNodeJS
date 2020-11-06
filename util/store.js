const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./storage');

function getName() {
  const name = localStorage.getItem('NAME');
  return name;
}

function getNames() {
  const names = localStorage.getItem('NAMES');  
  return JSON.parse(names);
}

function saveName(name) {
  localStorage.setItem('NAME', name);
}

function addName(name) {
  // speichere Liste als JSON-string
  const namesList = getNames();
  if(namesList===null) {
    namesList = [];
  }
  namesList.push(name);
  const jsonString = JSON.stringify(namesList);
  localStorage.setItem('NAMES', jsonString);
}

exports.getName = getName;
exports.getNames = getNames;
exports.saveName = saveName;
exports.addName = addName;
