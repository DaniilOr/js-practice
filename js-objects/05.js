class Appliance{
	constructor(power){
		this.power = power;
		this.isTurned = false;
	}
	turnOn(){
		this.isTurned = true;
	}
	turnOff(){
		this.isTurned = false;
	}
	calculatePowerCost(){
		return this.isTurned * this.power;
	}
}

class Mixer extends Appliance{
	constructor(power, coefficient){
		super(power);
		this.coefficient = coefficient;
	}
	startMixing(){
		console.log("Brr-brr");
	}
	calculatePowerCost(){
		return super.calculatePowerCost() * this.coefficient;
	}
}

class Blender extends Appliance{
	constructor(power, coefficient, rotationsPerSecond = 1000){
		super(power);
		this.coefficient = coefficient;
		this.rotationsPerSecond = rotationsPerSecond;
	}
	calculatePowerCost(){
		return super.calculatePowerCost() * this.coefficient;
	}
	blend(time){
		console.log("brrr-bzzz");
		console.log(`The mixture has experienced ${this.rotationsPerSecond * time} rotations`);
	}
	
}

mixer1 = new Mixer(100, 2);
console.log(mixer1.calculatePowerCost());
mixer1.turnOn();
console.log(mixer1.calculatePowerCost());
mixer1.startMixing();
blender1 = new Blender(50, 3);
blender1.turnOn();
console.log(blender1.calculatePowerCost());
blender1.blend(5);
