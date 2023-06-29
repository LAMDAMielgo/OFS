import { useState } from 'react'
import anecdotes from '../data/anecdotes'

// main components 
const Header = (props) =>  <h1>{props.text}</h1>

const Display = ({index}) => anecdotes[index]['text']

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>



// status trigger 
const ActionTrigger=({index, setIndex, setVote})=>{

  const handleNextAnecdote = () => {
    // min equal to zero (first index == 0)
    const randomIndex = (max) => Math.floor(Math.random()*max) 
    const i = randomIndex(anecdotes.length)

    setIndex(i)
  }

  const handleVote = () => {
    // copy and update vote key at index
    const newAnecdotes = { ...anecdotes }
    newAnecdotes[index]['vote'] += 1  

    setVote(newAnecdotes)
  }


  
  return (
      <div id='buttonDiv'>
        <Button onCLick={handleVote} text="vote" />
        <Button onClick={handleNextAnecdote} text="next anecdote" />
      </div>
  )
}



// app
const App = () => {   

  const [index, setIndex] = useState(0)
  const [_, setVote] = useState({...anecdotes})


  return (
    <div id='mainDiv'>
      <Display index={index}/>
      <ActionTrigger 
          index={index} 
          setIndex={setIndex} 
          setVote={setVote} 
      />
    </div>
  )
}


export default App

// end