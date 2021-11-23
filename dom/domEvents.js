var button = document.getElementById('click');
button.addEventListener('click', function () {
    console.log("CLICK ME SUCCESS");
})

button.addEventListener('mouseenter', function () {
    console.log("Mouse over ME SUCCESS");
})

//add to list
var enter = document.getElementById("enter")
let input = document.getElementById('user-input');
let ul = document.querySelector('ul');

function inputLength() {
    return input.value.length
}

function createListElement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = ''
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}
function addListAfterEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

enter.addEventListener("click", addListAfterClick)



input.addEventListener("keypress", addListAfterEnter)