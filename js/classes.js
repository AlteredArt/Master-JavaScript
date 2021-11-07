console.log('classes')

class Glass {
  constructor(name, height){
    this.name = name;
    this.height = height;
  }
  greet(){
    console.log(`Hello I'm ${this.name}, my height is ${this.height}`);
  }
}
let Mary = new Glass("Merry", 4.6)
Mary.greet();