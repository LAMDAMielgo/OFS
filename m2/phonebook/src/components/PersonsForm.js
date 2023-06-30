import { useState } from 'react'
import { Button, FormEntry } from './Components'





const PersonsForm = ({onSubmit, newPerson, onChange}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <FormEntry  
                name="name"
                value={newPerson.name}                     
                onChange={onChange}
            />
            <FormEntry  
                name="number"
                value={newPerson.number}                 
                onChange={onChange}
            />
            <Button type="submit" name="add" />      
        </form>
    )
}


export { PersonsForm }