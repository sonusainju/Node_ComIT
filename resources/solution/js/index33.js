let userCount = 100;

userCount += 5; // increment by 5
console.log(`Users count: ${userCount}`);

userCount -= 3; // Decrement by 3
console.log(`Users count: ${userCount}`);

userCount *= 2; // double
console.log(`Users count: ${userCount}`);

// Lazy way
console.log(`Users count: ${userCount}, man: ${userCount/2}, woman: ${userCount/2}`);

// right way
let menCount, womenCount;
menCount = womenCount = userCount/2;
console.log(`Users count: ${userCount}, man: ${menCount}, woman: ${womenCount}`);
