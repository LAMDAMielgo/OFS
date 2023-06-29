import { useState } from 'react'

const Subheader = ({text}) => <h2>{text}</h2>

const Button = ({type, name}) => <div><button type={type}>{name}</button></div>

const Content = ({lines}) => {
    return lines.map((line, i) => <li key={i}>{line.name}</li>)
}

export {
    Subheader,
    Content,
    Button
}