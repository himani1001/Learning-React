import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    attributes: {
        href: "https://www.goodreads.com/",
        target: '_blank'
    },
    heading: 'Go to my Goodreads Profile'
}

function MyApp(){
    return(
        <div>
            <h1>
                Vanilla React App
            </h1>
        </div>
    )
}

// rendering things by passing as element 
const AnotherElement = (
    <a href="https://www.goodreads.com/" target='_blank'>Visit Goodreads</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://www.goodreads.com/', target: '_blank'},
    'Go to my Goodreads Profile'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // passing like a variable  
    // AnotherElement

    //   though you can't pass reactElement like this because react don't know what type, attributes and heading is. It is s/g I made up so react don't understand my language
    // areactElement

    <App />
)
