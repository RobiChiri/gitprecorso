let car = {
	name: "Audi",
	color: "red",
};
console.log(Object.values(car));

for (const key in car) {
	console.log(key);
}
