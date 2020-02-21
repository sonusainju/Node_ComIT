const userAndPassword =  'pepito2017,12345';
let username, password;

// We know the size of the user name
const userNameSize = 10;
username = userAndPassword.substr(0, userNameSize);
password = userAndPassword.substr(userNameSize+1);

console.log(`The user ${username} has ${password} as password`);

// We don't know the size of the user name
const separation = userAndPassword.indexOf(',');
if (separation != -1) {
  username = userAndPassword.slice(0, separation);
  password = userAndPassword.slice(separation+1)
  
  console.log(`The user ${username} has ${password} as password`);

} else {
  console.log("Cannot find username and password")
}

