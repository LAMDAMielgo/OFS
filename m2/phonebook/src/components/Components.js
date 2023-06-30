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

const Content = ({lines}) => {
    return (
        lines.map((line, i) => 
            <tr key={i} class = 'cell'>
                <th>{line.name}</th>
                <th><pre class="tab">
                {line.number}
                </pre></th>
            </tr>
        )
    )
}

const FormEntry = ({name, value, onChange}) => {
    return (
        <div>
            <h class='entry-tag'>{name} : {" "}</h>
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