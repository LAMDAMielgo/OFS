import { 
    useEffect, 
    useState,
    useMemo,
    useCallback
} from 'react'

import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'
import { FilterForm } from './components/FilterForm'

import personService from './services/Persons'


const App = () => {

    const [persons, setPersons] = useState([]) 
    const [newP, setP] = useState({name: '', number: ''})
    const [newFilter, setFilter] = useState(" ")


    // Get data from server
    useEffect(
        () => {

            personService
                .getAll()
                .then(initPersons => setPersons(initPersons))
        }
    )

    // Filtering phonebook
    const handleFilterFormOnChange = (event) => {
        const filterContent = event.target.value
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
            // add note to the server
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson)) 
                })
            
            setP({name: '', number: ''})
                           
        }
    }

    // Delete contact in line
    const handlePersonDelete = (event) => {

        const toDelContact = event.target
        const warning_msg = `Do you really want to delete ${ toDelContact.name }`
        
        if (window.confirm(warning_msg) === true) {
            personService
                .destroy(toDelContact.id)
                .then(
                    delContact => {
                        setPersons(persons.filter(p => p.id != delContact.id))
                    }
                )
                .catch(error => {
                    console.log("${ toDelContact.name } was already deleted")
                    setPersons(persons.filter(p => p.id != toDelContact.id))
                })
        } else {}

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
                <Content 
                    lines={filteredPersons}
                    onClick={handlePersonDelete}
                />
            </tbody></table>
        </div>
    )
}

export default App