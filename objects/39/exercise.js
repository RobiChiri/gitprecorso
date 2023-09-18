let user = {
	name: "Cosimo",
	age: 30,
};

let newUser = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
	newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
