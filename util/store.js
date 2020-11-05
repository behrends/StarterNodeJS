const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./storage');

function getName() {
  const name = localStorage.getItem('NAME');
  return name;
}

function saveName(name) {
  localStorage.setItem('NAME', name);
}

exports.getName = getName;
exports.saveName = saveName;
