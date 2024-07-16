function vanillaRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.heading
    domElement.setAttribute('href', reactElement.attributes.type)
    domElement.setAttribute('target', reactElement.attributes.target)
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.heading
    for(const attribute in reactElement.attributes){
        if (attribute === 'heading') continue
        domElement.setAttribute(attribute, reactElement.attributes[attribute])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    attributes: {
        href: "https://www.goodreads.com/",
        target: '_blank'
    },
    heading: 'Go to my Goodreads Profile'
}

// to get the reference of the root either use document.getElementById()  ordocument.querySelector()
const mainContainer = document.getElementById('root')

// parameter as where do you want to inject and what do you want to inject
vanillaRender(reactElement, mainContainer)