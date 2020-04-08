const greet = (firstname, lastname, callback) => {
  console.log(`Hi ${firstname} ${lastname}`);
  callback();
};

function showCodeMessage(){
  console.log("This code gets executed after the greet function call");
}

greet("Paulo", "Andrade", showCodeMessage);
