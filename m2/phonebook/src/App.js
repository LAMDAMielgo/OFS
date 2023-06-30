import { 
    useEffect, 
    useState,
    useMemo,
    useCallback
} from 'react'
import axios from 'axios'

import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'
import { FilterForm } from './components/FilterForm'


const App = () => {

    const [persons, setPersons] = useState([]) 
    const [newP, setP] = useState({name: '', number: ''})
    const [newFilter, setFilter] = useState(" ")

    // Get data from server
    useEffect(
        () => {
            axios
                .get('http://localhost:3001/persons')
                .then(response => (setPersons(response.data)))
        }
    )

    // Filtering phonebook
    const handleFilterFormOnChange = (event) => {
        console.log("pii", event.target)

        const filterContent = event.target.value
        console.log('poo', filterContent)
        setFilter(filterContent)
    }

    const filteredPersons = persons.filter(
        person => person.name
            .toLowerCase()
            .includes(newFilter.toLowerCase())
    )
    

    // Adding new rows to phonebook
    const handleFormOnChange = (event) => {
        const { name, value } = event.target
        setP({ ...newP, [name]: value })
    }

    const handleFormOnSubmit = (event) => {
        event.preventDefault()
        const newPerson = {name: newP.name, number : newP.number}

        const invalidPhone = 12 >= newPerson.number.length >= 9 
        const nameAlreadyExists = persons.filter(
            p => p.name.toLowerCase() == newPerson.name.toLowerCase()
        ).length !== 0
        

        if (nameAlreadyExists) {
            alert(`${newPerson.name} is already added to phonebook`)
        } else if (invalidPhone) {
            alert(`${newPerson.number} is an invalid phone number`)          
        }else {
            setPersons(persons.concat(newPerson))
            setP("")
        }
    }

    return (
        <div>
            <Subheader text={'Phonebook'} />
            <FilterForm 
                onChange = {handleFilterFormOnChange}
                filter = {newFilter}
            />
            <Subheader text={'Add New'} />
            <PersonsForm 
                onSubmit={handleFormOnSubmit}
                newPerson={newP}
                onChange={handleFormOnChange}
            />
            <Subheader text={'Numbers'} />
            <table><tbody>
                <Content lines={filteredPersons} />
            </tbody></table>
        </div>
    )
}

export default App