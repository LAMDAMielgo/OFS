import { 
    useEffect, 
    useState,
    useMemo,
    useCallback
} from 'react'

import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'
import { FilterForm } from './components/FilterForm'
import { Notification } from './components/Notification'

import personService from './services/Persons'


const App = () => {

    const [persons, setPersons] = useState([]) 
    const [newP, setP] = useState({name: '', number: ''})
    const [newFilter, setFilter] = useState("")
    const [notice, setNotice] = useState(null)

    // Get data from server
    useEffect(
        () => {
            personService
                .getAll()
                .then(initPersons => setPersons(initPersons))
        }, [persons, filteredPersons]
    )

    // Filtering phonebook
    const handleFilterFormOnChange = (event) => {
        const filterContent = event.target.value
        setFilter(filterContent)
    }

    console.log("front app", persons)
    console.log("filter", newFilter)

    const filteredPersons = useMemo(
        () => persons.filter(
            person => person.name
                .toLowerCase()
                .includes(newFilter.toLowerCase())
        ), [newFilter]
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
            let _msg = `${newPerson.name} is already added to phonebook,`+
                        `\n do you want to update the phone number?`
            
            let existingPerson = persons.filter(p => p.name === newPerson.name)[0]
                    
            if (window.confirm(_msg) === true) {

                personService
                    .update(existingPerson.id, newPerson)
                    .then(newP => {
                        setNotice({content:`Updated ${ newPerson.name }`})
                        setPersons(persons.filter(p => p != newP.id ? p : newP))
                    })               
                
            } else { }

        } else if (invalidPhone) {
            alert(`${newPerson.number} is an invalid phone number`) 

        }else {
            // add note to the server
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setNotice({content: `Added ${newPerson.name}`})
                    setPersons(persons.concat(returnedPerson))
                })                           
        }

        setP({name: '', number: ''})
        setTimeout(() => setNotice(null), 2000)
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
                        setNotice({content:`${ toDelContact.name } deleted`, type:"error"})
                        setPersons(persons.filter(p => p.id != delContact.id))
                    }
                )
                .catch(error => {
                    setNotice({content:`${ toDelContact.name } was already deleted : ${error}`, type:"error"})
                    setPersons(persons.filter(p => p.id != toDelContact.id))
                })
        } else {}

        setP({name: '', number: ''})
        setTimeout(() => setNotice(null), 2000)
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
            { notice !== null ? 
                <Notification msg={notice} /> : null 
            }
        </div>
    )
}

export default App