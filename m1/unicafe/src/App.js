import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const StatisticLine = ({text, value})=>{
  return (<li>{text} : {value}</li>)
}

const Stats = ({values}) => {
  
  let stats_value = {
    "g" : 1, "n" : 0, "b": -1
  }
  let _eval = 0;
  let total = 0

  'use strict';
  for (const [key, value] of Object.entries(values)) {
    total += value;
    _eval += value*stats_value[key]
  }
  
  const getPercentage=(v,t)=> (v*100/t).toFixed(2) +" "+"%"
  const getMean=(v,t)=> (v/t).toFixed(2)

  if(total == 0){
    return (
      <li>No feedback given</li>
    )
  } else {
    return [
      <StatisticLine text="Good"     value={values['g']} />,
      <StatisticLine text="Neutral"  value={values['n']} />,
      <StatisticLine text="Bad"      value={values['b']} />,
      <StatisticLine text="All"      value={total} />,
      <StatisticLine text="Average"  value={getMean(_eval, total)} />,
      <StatisticLine text="Positive" value={getPercentage(values["g"], total)} />
    ]
  }
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const FeedBackButtons=({g, n, b})=>{
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
      <Header text='Statistics' />
      <Stats values={{"g": good, "n": neutral, "b": bad}}
      />
    </div>
  )
}

export default App;