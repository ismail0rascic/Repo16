const person = require('./nameFunctions.js')

function firstName() {
    return firstName = person.firstName

}

function lastName() {
    return lastName = person.lastName

}



console.log(person.firstName("John") + " " + person.lastName("Doe"));

module.exports = { firstName, lastName }