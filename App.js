import "./App.css";
import Accordian from "./Accordian";

const questions = [
    {
        id: 1,
        que: "What is the speed of light?",
        ans: "The speed of light in a vacuum is approximately 299,792 kilometers per second (or about 186,282 miles per second)."
    },
    {
        id: 2,
        que: "What is the tallest mountain in the world?",
        ans: "Mount Everest is the tallest mountain in the world, with a height of 8,848 meters (29,029 feet) above sea level."
    },
    {
        id: 3,
        que: "How many planets are there in our solar system?",
        ans: "There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
    },
    {
        id: 4,
        que: "What is the chemical symbol for gold?",
        ans: "The chemical symbol for gold is Au."
    }
]

function App(){

    return(
        <div className="App">
            <div className="container">
                <h3>Frequently Asked Questions</h3>
                <div className="qnaBx">
                    {questions.map((question, ind) => {
                        return <Accordian key={ind} question={question.que} answer={question.ans} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default App;