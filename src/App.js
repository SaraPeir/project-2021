import React, {useState} from "react"
import "./App.scss"
import CurrentTime from './components/CurrentTime'
import Countdown from './components/Countdown'

function App() {
    const [isCountdownDisplayed, setCountdownDisplayed] = useState(false);

    const countdown = () => {
        if(isCountdownDisplayed) {
            return <Countdown />
        }
        return;
    }

    const toggleCountdown = () => setCountdownDisplayed(!isCountdownDisplayed)

    return (
        <React.Fragment>
            <button onClick={toggleCountdown}>See how miss to 2022</button>
            <CurrentTime />
            {countdown()}
        </React.Fragment>
    ) 
}

export default App