const MAX_NUMBER_OF_GRID = 1600;
let numberOfGrid = 1600

// UIs
function addElement(tagName, tagContent) {
    let element = document.createElement(tagName);
    let content = document.createTextNode(tagContent);
    element.appendChild(content);
    return element;
}

let button = addElement("button", "Change Grid")
document.body.appendChild(button)
let container = addElement("div", "");
container.classList.add("container");
document.body.appendChild(container);

function makeGrids(){
    for(let i = 0; i<numberOfGrid; i++) {
        container.appendChild(addElement("div", ""));
    }
    
}



// Events

container.addEventListener("mouseenter", function(e){
    if(e.target.className != "container"){
        e.target.classList.add("black-box");
    }
    
},true)

container.addEventListener("mouseleave", function(e){
    if(e.target.className != "container"){
        e.target.classList.add("pixaleted");
    }
},true)

button.addEventListener("click", function(){
    numberOfGrid = prompt("Please enter between 1-1600 grid", 1600)
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    makeGrids()
})