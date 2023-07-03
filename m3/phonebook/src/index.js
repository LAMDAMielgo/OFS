const express = require('express')
const app = express()


let persons = [
    {
        name: "Arto Hellas",
        number: "050-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]



// ------------------------------------------------------------------
// endPoints

app.get('/', 
    (request, response) => {
        response.send(`<h1>Hello World!</h1>`)
    }
)

app.get('/api/persons', 
    (request, response) => {
        if (persons) { response.json(persons) }
        else {response.status(404).end()}
    }
)


app.get("/info",
    (request, response) => {

        let currentDate = new Date()
        let numPersons = persons.length

        response.send(
            `<p>Phonebook has info for ${numPersons} people <br/> ${currentDate}`
        )
    }
)


app.get("/api/persons/:id",
    (request, response) => {

        let id = Number(request.params.id)
        let foundPerson = persons.find(p => p.id === id)
        
        console.log(foundPerson)
        if (foundPerson) {
            response.json(foundPerson)
        } else {
            response.status(204).end()
        }
    }
)


// ------------------------------------------------------------------
// server

const PORT = 3001

app.listen(PORT)
console.log(`Server running on port ${PORT}`)