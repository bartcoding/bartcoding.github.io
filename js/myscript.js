// this code will be interpreted on the fly
//start of js script
console.log("hello world of javascript!");

//show how you can just execute code with js
var crazyNumber = 3;
crazyNumber++;
console.log(crazyNumber)

//call a function
printStory();

//select element we want to play with
let jsdescriptionel = document.querySelector("h1[id='jsdescription']");

//add event listeners
jsdescriptionel.addEventListener('dblclick',coolIsHot);

//functions
function printStory(){
    console.log("this is an interesting story about a frog named Rory. Rory did not like to swim, funny, right?")
}

function coolIsHot(element){
    element.target.style.backgroundColor = 'rgb(255,50,50)';
    let text = element.target.textContent;
    element.target.textContent = text.replace("cool", "hot");
}