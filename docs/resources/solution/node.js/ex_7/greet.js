const greet = (firstname, lastname, callback) => {
  console.log(`Hi ${firstname} ${lastname}`);
  callback();
};

module.exports = greet;
