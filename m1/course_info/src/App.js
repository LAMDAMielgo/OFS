const Header = (props) => {
    return (
      <h1>
        {props.name}
      </h1>
    )
}


const Content = (props) => {  
  return (
    props.lines.map((item, i) => 
      <p>
        {item.p} {item.n}
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
        {"p": "Fundamentals of React",    "n": 10},
        {"p": "Using props to pass data", "n": 7},
        {"p": "State of a component",     "n": 14}
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
