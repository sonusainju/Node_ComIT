const grade = 0;

if (grade >= 9 && grade <= 10) {
  console.log('Great work!!')
} else if (grade < 9 && grade >= 6) {
  console.log('You\'ve done it!')
} else if (grade >= 0 && grade < 6) {
  console.log("You need to do all the exercises again, please try again!")
} else {
  console.log('Grade cannot be negative or more than 10')
}