import { useState } from "react"

const Header = (props) => {
    return (
      <h1>
        {props.name}
      </h1>
    )
}


const Content = (props) => {
  // NOTE on 1.2: insteads static asigning, a for loop
  // for each line renders text and then number, no need
  // to create a Part sub component for the content
  return (
    props.lines.map(line => 
      <p>
        {line.text} {line.number}
      </p>
    )
  )
}


const Total = (props) => {
  // could be a for loop with a let total = 0;
  const arr_num = props.lines.reduce((total, obj) =>
      obj.number + total, 0
  )

  return (
    <p>
      Number of exercises {arr_num}
    </p>

  )
}

const Display = ({counter}) => {
  return (
    <p>
      Counter State {counter}
    </p>
  )
}

const CounterButton = ({counter, setCounter}) => {
  const increaseByOne=() => setCounter(counter +1)
  const setToZero=() => setCounter(0)
  const decreaseByOne=()=>setCounter(counter-1)

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>{props.text}</button>
    )
  }

  return (
    <div id="buttonContainer">
      <Button onClick={increaseByOne} text="Add Counter" />
      <Button onClick={setToZero} text="Reset Counter" />
      <Button onClick={decreaseByOne} text="Substract Counter" />
    </div>
  )
}

const App = () => {
    const renderData = {
      "course":'Half Stack application development',
      "parts": [
        {"text": "Fundamentals of React",    "number": 10},
        {"text": "Using props to pass data", "number": 7},
        {"text": "State of a component",     "number": 14}
      ]
    }

    const [c, setC] = useState(0)
       
    return (
      <div id="outer">
        <CounterButton counter={c} setCounter={setC}/>
        <Header name = {renderData['course']} />
        <Content lines = {renderData['parts']} />
        <Total lines = {renderData['parts']} />
        <Display counter={c} />
      </div>
    )
    }

    export default App;
