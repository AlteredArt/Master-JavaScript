// for each loop, convert all the names to lower case besides thorin
console.log("Use for Each loop to capitalize Thorin")
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];

dwarves.forEach(function(item, index, array){
if(item === "Thorin"){
  item= item.toUpperCase();
}else{
  item= item.toLowerCase();
}
  console.log(index, item);
})







console.log('random colors')

colors = ["red", 'blue', 'green', 'orange']

var timer = window.setInterval(changeColor, 3000);

function changeColor() {
    var n = Math.round(Math.random() * 4);
    document.body.style.backgroundColor = colors[n];
}


answer = prompt("What is 8x8?")
if (answer == 64) {
    alert('Correct!')
}






function solution(A) {
    A.sort((a, b) => a - b);
    return A.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);

}
solution([1, 3, 6, 4, 1, 2])