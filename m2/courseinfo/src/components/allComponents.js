import { useState } from "react"

// basic components 
// --------------------------------------------------
const Header = ({name, id}) => {
    return <h1 id={id}>{name}</h1>
}

const SubHeader =({name, id}) => {
    return <h2 id={id}>{name}</h2>
}

const Content = ({lines}) => {
    return lines.map(
        line => <Part key={line.id} line={line} />
    )
}

const Part = ({line}) => {
    return <li>{line.name} {line.exercises}</li>
}

const Footer = ({line}) => {
    return <p><b>{line.content} {line.exercises}</b></p>
}

// aggregated Information
// --------------------------------------------------
const getTotal = (course) => {

    return ({
        content: "Number of exercises",
        exercises : course['parts'].reduce(
            (total, o) => total+ o.exercises, 0
        )
    })

}

// --------------------------------------------------

export {
    Header, 
    SubHeader,
    Content,
    Footer,
    getTotal
}
