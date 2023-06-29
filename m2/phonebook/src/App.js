import { useState } from 'react'
import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'


const App = () => {

    const [persons, setPersons] = useState([{name: 'Arto Hellas', phone: '+64967842678'}]) 
    const [newP, setP] = useState({name: '', phone: ''})

    const handleFormOnChange = (event) => {
        console.log(event)
        const { name, value } = event.target
        setP({ ...newP, [name]: value })
    }

    const handleFormOnSubmit = (event) =>  {
        event.preventDefault()
        const newPerson = {name: newP.name, phone : newP.phone}

        const invalidPhone = 12 >= newPerson.phone.length >= 9 
        const nameAlreadyExists = persons.filter(
            p => p.name.toLowerCase() == newPerson.name.toLowerCase()
        ).length !== 0
        

        if (nameAlreadyExists) {
            alert(`${newPerson.name} is already added to phonebook`)
        } else if (invalidPhone) {
            alert(`${newPerson.phone} is invalid`)          
        }else {
            setPersons(persons.concat(newPerson))
            setP("")
        }
    }

    return (
        <div>
            <Subheader text={'Phonebook'} />
            <PersonsForm 
                onSubmit={handleFormOnSubmit}
                newPerson={newP}
                onChange={handleFormOnChange}
            />
            <Subheader text={'Numbers'} />
            <Content lines={persons} />
        </div>
    )
}

export default App