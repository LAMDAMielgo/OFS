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




// ------------------------------------------------------------------
// server

const PORT = 3001

app.listen(PORT)

console.log(`Server running on port ${PORT}`)