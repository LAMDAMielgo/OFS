import { useState } from 'react'
import { Subheader, Content } from './components/Components'
import { PersonsForm } from './components/PersonsForm'
import { FilterForm } from './components/FilterForm'
import { Data } from './components/MockData'


const App = () => {

    const [persons, setPersons] = useState(Data) 
    const [newP, setP] = useState({name: '', phone: ''})
    const [newFilter, setFilter] = useState(" ")


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
            alert(`${newPerson.phone} is an invalid phone number`)          
        }else {
            setPersons(persons.concat(newPerson))
            setP("")
        }
    }

    console.log("pee", newFilter)

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
            <table>
                <Content lines={filteredPersons} />
            </table>
        </div>
    )
}

export default App