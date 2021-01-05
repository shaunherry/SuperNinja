class Ninja {
    constructor (name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`${this.constructor.name} stats: 
        Name: ${this.name} 
        Health:${this.health} 
        Strength: ${this.strength}
        Speed: ${this.speed} `)
    }
    drinkSake(){
        this.health += 10;
        console.log(`I love good sake!, My health is now ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log(`You can learn to be a Sensei in my new Master Class online`)
    }
}

const ninja1 = new Ninja("Shaun");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
const ninja2 = new Ninja("Kat");
ninja2.showStats();

const superRat = new Sensei("Master Splinter");
superRat.speakWisdom();
superRat.drinkSake();
superRat.showStats();
