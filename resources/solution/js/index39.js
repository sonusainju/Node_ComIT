const firstName = "Paulo";
const lastName = "Andrade";
const nameCharacters = firstName.length;
const lastNameCharacters = lastName.length;
charsDiff = nameCharacters - lastNameCharacters;

const log = console.log; // creating a short for the console.log() to use only log()

log(`My first name is ${firstName} and it is ${nameCharacters} characters long`);
log(`My last name is ${lastName} and it is ${lastNameCharacters} characters long`);
log(`The character difference between my first name and last name is ${charsDiff}`);
log(`My first name is longer than my last name: ${charsDiff > 0}`);
