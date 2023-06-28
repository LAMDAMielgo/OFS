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

const Display = ({counter, total}) => {
  // Conditional rendering
  if (counter == 0) {
    return (
      <p>
        The app is used by pressing the buttons
      </p>
    )
  } else {
    return [
      <p>Total Clicks   {total}</p>,
      <p>History Clicks {counter}</p>
    ]
  }
}

const Button = (props) => {
  // Used inside ClicksButtons
  // Never nesting components -> React doesn't optimize
  // performance and treats them as new elements when
  // re-rendering
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const ClicksButtons = ({states}) => {
  // Complex state rendering
  // Each time handle.. is called, the App and Display
  // components are re-rendered
  const [l, setL] = states[0]
  const [r, setR] = states[1]
  const [all, setAll] = states[2]

  const handleLeftClick=() => {
    setAll(all.concat('L'))
    setL(l+1)
  }
  const handleRightClick=() => {
    setAll(all.concat('R'))
    setR(r+1)
  }
  
  return (
    <div id="buttonContainer">
      <Button onClick={handleLeftClick}  text="LEFT" />
      <Button onClick={handleRightClick} text="RIGHT"/>
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

    // Instantiate states for buttons
    const [l, setL] = useState(0)
    const [r, setR] = useState(0)
    const [all, setAll] = useState([])
       
    return (
      <div id="outer">
        <ClicksButtons states={[[l, setL], [r, setR],[all, setAll]]}/>
        <Header name = {renderData['course']} />
        <Content lines = {renderData['parts']} />
        <Total lines = {renderData['parts']} />
        <Display counter={all.join(" ")} total={all.length} />
      </div>
    )
    }

    export default App;
