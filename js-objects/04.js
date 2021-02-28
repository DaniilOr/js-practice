function Appliance(power) {
	this.power = power;
	this.isTurned = false;
}

Appliance.prototype.turnOn = function () {
	this.isTurned = true;
}

Appliance.prototype.turnOff = function () {
	this.isTurned = false;
}
Appliance.prototype.calculatePowerCost = function () {
	return this.isTurned * this.power;
}

function Mixer(power, coefficient) {
	this.power = power;
	this.coefficient = coefficient;

}

Mixer.prototype = new Appliance();

Mixer.prototype.calculatePowerCost = function () {

	return this.power * this.coefficient * this.isTurned;

}
Mixer.prototype.startMixing = function () {
	console.log("Brrr-brr");
}

function Blender(power, coefficient, rotationsPerSecond = 1000) {
	this.power = power;
	this.coefficient = coefficient;
	this.rotationsPerSecond = rotationsPerSecond;
}
Blender.prototype = new Appliance();
Blender.prototype.blend = function (time) {
	console.log("brrr-bzzz");
	console.log(`The mixture has experienced ${this.rotationsPerSecond * time} rotations`);
}
Blender.prototype.calculatePowerCost = function () {
	return this.isTurned * this.power * this.coefficient;
}
let mixer1 = new Mixer(100, 2);
console.log(mixer1.calculatePowerCost());
mixer1.turnOn();
console.log(mixer1.calculatePowerCost());
mixer1.startMixing();

let blender1 = new Blender(50, 2);
blender1.blend(50);
blender1.turnOn();
console.log(blender1.calculatePowerCost());


