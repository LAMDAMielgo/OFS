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
  const arr_num = props.lines.reduce((total, obj) =>
      obj.n + total, 0
  )

  return (
    <p>
      Number of exercises {arr_num}
    </p>

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

    return (
      <div>
        <Header name = {renderData['course']} />
        <Content lines = {renderData['parts']} />
        <Total lines = {renderData['parts']} />
      </div>
    )
    }

    export default App;
