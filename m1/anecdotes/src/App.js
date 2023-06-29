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


const DisplayMaxVoted = () => {

  const getMaxVotedIndex = () => {
    const currentVotes = new Array()
    anecdotes.forEach(o => {currentVotes.push(o['vote'])})

    console.log(currentVotes)
    console.log(Math.max(currentVotes))
    
    if (currentVotes.reduce((x,y) => {return x+y}) == 0) {
        return 0
    } else {
      return anecdotes.indexOf(Math.max(...currentVotes))
    }
  }

  const maxIndex = getMaxVotedIndex()
  
  console.log(maxIndex)
  return (
        <Display index={maxIndex} text="vote" />
  )

}


// app
const App = () => {   

  const [index, setIndex] = useState(0)
  const [_, setVote] = useState({...anecdotes})


  return (
    <div id='mainDiv'>
      <Header text="Anecdote of the day" />
      <Display index={index}/>
      <ActionTrigger 
          index={index} 
          setIndex={setIndex} 
          setVote={setVote} 
      />
      <Header text="Anecdote with most votes" />
      <DisplayMaxVoted />

    </div>
  )
}


export default App

// end