const { readName } = require('./util/input');
const Database = require('@replit/database');

const name = readName();
console.log(`Hallo, ${name}!`);

const db = new Database()
console.log(`NAME ${name} in der Datenbank speichern`);
db.set('NAME', name);

console.log('NAME aus der Datenbank lesen');
db.get('NAME').then(value => {
  console.log(`Der Name aus der Datenbank: ${value}`)
});

// TODO: Namen als Liste speichern