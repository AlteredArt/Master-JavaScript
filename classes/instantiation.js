//instantiation or composition
class Player {
    constructor(name,type){
      // console.log('player', this);
      this.name = name;
      this.type = type;
    }
    introduce () {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
  }
  
  class Wizard extends Player {
    constructor(name, type) {
      super(name, type)
      // console.log("wizard", this)
    }
    Play (){
      console.log(`Hello I'm a ${this.type}`);
    }
  }
  
  const wizard1 = new Wizard("Shelly", "Healer");
  const wizard2 = new Wizard("Shawn", "Dark Mage")
  console.log(wizard1)
  console.log(wizard1.name)
  console.log(wizard2)
  console.log(wizard2.type)
  console.log(wizard1.introduce())
  console.log(wizard2.Play())
  
  
  
  // classical inheritance
  var Worker = function(name, type){
    this.name = name;
    this.type = type;
  }
  Worker.prototype.introduce = function(){
    console.log(`Hi i'm a ${this.type}, and my name is ${this.name}`);
  }
  
  var worker1 = new Worker('Henry', 'elf')
  
  worker1.work = function(){
      console.log(`Hello I'm an ${this.type}`);
  }
  console.log(worker1)
  console.log(worker1.work())
  console.log(worker1.name)
  console.log(worker1.type)
  