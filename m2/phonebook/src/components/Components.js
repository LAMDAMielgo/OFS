import { useState } from 'react'

const Subheader = ({text}) => { 
    return <h2>{text}</h2>
}
const Button = ({type, name}) => {
    return (
        <div>
            <button type={type}>{name}</button>
        </div>
    )
}

const Content = ({lines, onClick}) => {
    return (
        lines.map((line) => 
            <tr key={line.id}>
                <th><pre className='cell'>{line.name}</pre></th>
                <th><pre className='cell'>{line.number}</pre></th>
                <th><button 
                        name={line.name}
                        id={line.id}
                        onClick={onClick}>
                            Delete contact
                </button></th>
            </tr>
        )
    )
}

const FormEntry = ({name, value, onChange}) => {

    return (
        <div>
            {name}   
            <input
                name = {name}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export {
    Subheader,
    Content,
    Button,
    FormEntry
}