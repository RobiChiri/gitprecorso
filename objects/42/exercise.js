function Smartphone(brand, name, price) {
	if (typeof brand === "string") {
		this.brand = brand;
	}
	if (typeof name === "string") {
		this.name = name;
	}
	if (typeof price === "number") {
		this.price = price;
	}
}
let iphone = new Smartphone("Iphone", "14 Pro", 1400);
console.log(iphone);
