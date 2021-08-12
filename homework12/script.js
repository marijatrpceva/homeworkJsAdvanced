class Animal {
    constructor(name,type,age,size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    set type(input) {
        if (input !=="carnivore" && input !== "herbivore" && input !== "omnivore") {
            throw new Error("No such type")
        } else {
            this._type = input;
        }
    }

    eat(food) {
        if (food instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is herbivore`);
            } else if (food.size*2 <= this.size) {
                food.isEaten = true;
                console.log(`The animal ${this.name} ate the ${food.name}`)
            }else {
                console.log(`the animal ${this.name} tried to eat ${food.name}but it was too big`);
            }
        }
    }
}

let lion = new Animal("lion","herbivore",10,200);
let mouse = new Animal("mouse","carnivore",1,5);

lion.eat(mouse)













