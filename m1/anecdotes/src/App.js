import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]


const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Display = ({index}) => anecdotes[index]

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const TriggerNew=({setIndex})=>{

  const NewIndexPicker = () => {
    const randomIndex = (max) => Math.floor(Math.random()*max) 
    const i = randomIndex(anecdotes.length)
      setIndex(i)
  }

  return (
      <div id='buttonDiv'>
        <Button onClick={NewIndexPicker} text="next anecdote" />
      </div>
  )
}

const App = () => {   
  const [index, setIndex] = useState(0)
  return (
    <div id='mainDiv'>
      <Display index={index} />
      <TriggerNew setIndex={setIndex} />
    </div>
  )
}

export default App