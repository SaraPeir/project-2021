import React from "react"
import "./App.scss"

function App() {
    return (<div>
        <h1>Welcome to React App</h1>
        <h3>Date : {new Date().toDateString()}</h3>
    </div>)
}

export default App