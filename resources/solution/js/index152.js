const user = {
  username: null,
  password: null,
  greet: function() {
    if (this.username) {
      console.log(`Hello, I'm user ${username}`);
    } else {
      console.log("Please assign a username value");
    }
  },
  updatePassword: function(value) {
    this.password = value;
  },
  updaterUsername: function(value) {
    this.username = value;
  }
};

user.greet();
user.updaterUsername("Paulo");
user.updatePassword("1234");
user.greet();
