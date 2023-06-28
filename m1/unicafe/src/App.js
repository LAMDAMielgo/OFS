import { useState } from 'react'


const Header = (text) => {
  return (
    <h1>{text}</h1>
  )
}

const Stats =(g, b, n)=>{

  const _eval =(values)=>{
    let stat_value = {
      "g" : 1, "n" : 0, "b": -1
    }
    
    return Object.entries(values).forEach(
      ([k, v]) => v * stat_value[k]
    )
  }

  const total = g+b+n

  return [
    <li>Good    : {g}</li>,
    <li>Neutral : {n}</li>,
    <li>Bad     : {b}</li>,
    <li>Average : { _eval({"g":g, "n":n, "b": b}) / total}</li>,
    <li>Positive: {g / total}</li>
  ]
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const FeedBackButtons=(g, b, n)=>{
  /* Grouping of good - neutral - bad buttons and
  the state handling for all of them
  */
  const handleGoodClicks =()=>{g.setGood(g.good+1)}
  const handleNeutralClicks =()=>{n.setNeutral(n.neutral+1)}
  const handleBadClicks =()=>{b.setBad(b.bad+1)}

  return (
    <div id="FeedBackButtonContainer">
      <Button onClick={handleGoodClicks}    text="GOOD" />
      <Button onClick={handleNeutralClicks} text="NEUTRAL" />
      <Button onClick={handleBadClicks}     text="BAD"/>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='Give FeedBack' />
      <FeedBackButtons 
        g={{"good": good,       "setGood": setGood}}
        n={{"neutral": neutral, "setNeutral": setNeutral}}
        b={{"bad": bad,         "setBad": setBad}}
      />
      <Header text='Statistics' 
        g={good}  n={neutral}  v={bad}
      />
    </div>
  )
}

export default App;