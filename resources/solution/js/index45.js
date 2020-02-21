const playerName = "Darian Durant is lame";
const teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
const message = "Regina is the best Canadian city, Go Riders";

const slice1 = playerName.slice(0, -5);
const slice2 = teams.slice(66, 72);
const slice3 = message.slice(10, 18);
const slice4 = message.slice(-11, -7);

const slice2FirstLetter = slice2.charAt(0).toUpperCase();
const slice2Changed = slice2FirstLetter.concat(slice2.slice(1));

const result = `${slice1.toUpperCase()} ${slice3} ${slice2Changed} player ${slice4} ${slice2Changed}`

console.log(result);