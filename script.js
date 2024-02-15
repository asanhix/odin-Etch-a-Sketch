function addElement(tagName, tagContent) {
    let element = document.createElement(tagName);
    let content = document.createTextNode(tagContent)
    element.appendChild(content);
    return element;
}

let container = addElement("div", "")
container.classList.add("container")
document.body.appendChild(container)


for(let i = 0; i<16; i++) {
    container.appendChild(addElement("div", ""))
}