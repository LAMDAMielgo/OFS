const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


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

const generateNewId = () => {
    const maxId = persons.length > 0 ? 
        Math.max(...persons.map(n => n.id)) : 0
    
    return maxId+1
}

morgan.token('body', 
    (request) => request.method === 'POST' ? JSON.stringify(request.body) : null
)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

// ------------------------------------------------------------------
// endPoints

app.get('/', 
    (request, response) => {
        response.send(`<h1>Hello World!</h1>`)
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

// ------------------------------------------------------------------
// Persons

app.get('/api/persons', 
    (request, response) => {
        if (persons) { response.json(persons) }
        else {response.status(404).end()}
    }
)
app.post("/api/persons",
    (request, response) => {

        const body = request.body

        let sameName = persons.filter(p => p.name == body.name)
        let sameNumber = persons.filter(p => p.number == body.number)

        if (!body) {
            return response
                .status(400)
                .json({error: 'content missing'})

        } else if (sameName.length !== 0) {
            // if name already exists 
            return response
                .status(400)
                .json({error: `name ${body.name} already exists in the database`})


        } else if (sameNumber.length !== 0) {
            // if phone already exists
            return response
                .status(400)
                .json({error: `phone-number ${body.number} already exists in the database`})

        } else {

            const newPerson = {
                id: generateNewId(),
                name : body.name,
                number : body.number || null
            }

            persons = persons.concat(newPerson)
            response.json(newPerson)
        }
    }
    
)

// ------------------------------------------------------------------
// ids

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
app.delete("/api/persons/:id",
    (request, response) => {

        let id = Number(request.params.id)
        // update persons
        persons = persons.find(p => p.id !== id)
        
        response.status(204).end()
        
    }
)

// ------------------------------------------------------------------
// server

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

// ------------------------------------------------------------------
// end
