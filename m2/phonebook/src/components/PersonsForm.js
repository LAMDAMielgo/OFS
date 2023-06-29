import { useState } from 'react'
import { Button } from './Components'


const FormEntry = ({name, value, onChange}) => {
    return (
        <div>
            {name}: 
            <input 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}


const PersonsForm = ({onSubmit, onChange, name}) => {

    return (
        <form onSubmit={onSubmit}>
            <FormEntry  
                name="name"
                value={name}                     
                onChange={onChange}
            />
            <Button type="submit" name="add" />      
        </form>
    )
}


export { PersonsForm }