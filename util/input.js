const readline = require('readline-sync');

function getChoice() {
  const choices = ['Name zeigen', 'Name ändern'];
  const index = readline.keyInSelect(choices, 'Was möchtest Du tun? ', {cancel: 'Beenden'});
  return index;
}

function readName() {
  const name = readline.question('Wie heißt du? ');
  return name;
}

exports.getChoice = getChoice;
exports.readName = readName;