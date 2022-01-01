console.log("window:", window);
console.log("document:", document);
//Get Element
console.log("get el by tag name:", document.getElementsByTagName("h1"));
console.log("get el by class name", document.getElementsByClassName("second"));
console.log("get el by id:", document.getElementById("first"));
console.log("get el by ref:", document.getElementsByClassName("second")[0]);
//Query Selector
console.log("query selector:", document.querySelector("li"));
console.log("query all:", document.querySelectorAll("li, h1"));
//get attribute
console.log("get attribute:", document.querySelector("li").getAttribute("random"));
//Set Attribute
console.log("set Attribute:", document.querySelector("li").setAttribute("random", "1000"));
console.log(document.querySelector("li"));
//Changing Style
console.log("change Style:", (document.querySelector("h1").style.background = "yellow"));
//Adding A Class Name
console.log("Add Class:", (document.querySelector("h1").className = "coolTitle"));
console.log("class name changed:", document.querySelector("h1"));
//Adding A Class List
console.log("add class list:", document.querySelector("li").classList);
console.log("add class list:", document.querySelector("li").classList.add("coolTitle"));
console.log("remove class list:", document.querySelector("li").classList.remove("coolTitle"));
console.log("add class list:", document.querySelector("li").classList.add("done"));
console.log("add class list:", document.querySelector("li").classList.toggle("done"));
//Inner HTML
console.log('inner html:', document.querySelector('h1').innerHTML = "<strong>!!!!</strong>");
//Parent Element
console.log('parent:', document.querySelectorAll('li')[2].parentElement);
//Children
console.log("children:", document.querySelectorAll('li')[1].parentElement.parentElement.children);