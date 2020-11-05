const readline = require('readline-sync');

function readName() {
  const name = readline.question('Wie heißt du? ');
  return name;
}

exports.readName = readName;