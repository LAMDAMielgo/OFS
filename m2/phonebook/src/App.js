import { useState } from 'react'
import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'


const App = () => {

    const [persons, setPersons] = useState([{name: 'Arto Hellas'}]) 
    const [newName, setNewName] = useState('')

    const handleFormOnChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleFormOnSubmit = (event) =>  {
        event.preventDefault()
        const newPerson = {name : newName}

        const alreadyExists = persons.filter(
            p => p.name == newPerson.name
        ).length !== 0
        

        if (alreadyExists) {
            // issue an Alert
            alert(`${newPerson.name} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName("")
        }
    }



    return (
        <div>
            <Subheader text={'Phonebook'} />
            <PersonsForm 
                onSubmit={handleFormOnSubmit}
                onChange={handleFormOnChange}
                name={newName}
            />
            <Subheader text={'Numbers'} />
            <Content lines = {persons} />
        </div>
    )
}

export default App