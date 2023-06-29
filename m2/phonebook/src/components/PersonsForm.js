import { useState } from 'react'
import { Button } from './Components'


const FormEntry = ({name, value, onChange}) => {
    return (
        <div>
            {name}:{" "}
            <input 
                name = {name}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}


const PersonsForm = ({onSubmit, newPerson, onChange}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <FormEntry  
                name="name"
                value={newPerson.name}                     
                onChange={onChange}
            />
            <FormEntry  
                name="phone"
                value={newPerson.phone}                 
                onChange={onChange}
            />
            <Button type="submit" name="add" />      
        </form>
    )
}


export { PersonsForm }