// creating an array with the constructor function
class MyArray {
    //constructor method, called every new instance
    constructor() {
      this.length = 0;
      this.data = {};
    }
    //get item at certain index
    get(index) {
      return this.data[index]
    }
    //push item to end of array
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
    //remove first element in  array
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    //delete a item in array
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
    }
    //shifting the items to the left by one
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1]
      }
      this.data[this.length - 1]
    }
  }
  //new instance of array class
  const newArray = new MyArray();
  //push method
  newArray.push("hi")
  newArray.push("you")
  //get method at certain index
  console.log(newArray.get(1));
  //push element to end of array method
  newArray.push('!')
  //delete method
  // newArray.delete(0);
  //remove first element in array method
  // newArray.pop();
  //print Array instance
  console.log(newArray)