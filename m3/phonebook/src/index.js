const express = require('express')
const app = express()

const Persons = require("../data/Persons.js")

// ------------------------------------------------------------------
// endPoints

app.get('/', 
    (request, response) => {
        response.send('<h1>Hello World!</h1>')
    }
)



app.get('/api/persons', 
    (request, response) => {
        response.json(Persons)
    }
)


app.get("/info",
    (request, response) => {

        let currentDate = new Date()
        let numPersons = Persons.length

        response.send(
            `<p>Phonebook has info for ${numPersons} people <br/> ${currentDate}`
        )
    }
)

// ------------------------------------------------------------------
// server

const PORT = 3001

app.listen(PORT)

console.log(`Server running on port ${PORT}`)