const createHTMLElement = (type, classNames = [], textContent) => {
    const element = document.createElement(type);

    classNames.forEach(className => {
        element.classList.add(className);
    });

    if (textContent) {
        element.innerHTML = textContent;
    }
    return element;
}

export { createHTMLElement }