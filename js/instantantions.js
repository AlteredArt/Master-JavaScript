class Player {
    constructor(name,type){
      console.log('player', this);
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
      console.log("wizard", this)
    }
    Play (){
      console.log(`Hello I'm a ${this.type}`);
    }
  }
  
  const wizard1 = new Wizard("Shelly", "Healer");
  const wizard2 = new Wizard("Shawn", "Dark Mage")
  
  
  classical inheritance
  var Player = function(name, type){
    this.name = name;
    this.type = type;
  }
  Player.prototype.introduce = function(){
    console.log(`Hi i'm a ${this.type}, and my name is ${this.name}`);
  }
  
  var wizard1 = new Player('Henry', 'elf')
  
  wizard1.play = function(){
      console.log(`Hello I'm a ${this.type}`);
  }