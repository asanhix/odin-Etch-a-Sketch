function addElement(tagName, tagContent) {
    let element = document.createElement(tagName);
    element.appendChild(tagContent);
    return element;
}

let container = addElement("div", null)
container.classList.add("container")
document.body.appendChild(container)


