import { useState } from 'react'
import { FormEntry } from './Components'



const FilterForm = ({filter, onChange}) => {    
    return (
        <form>
            <FormEntry  
                name="filter name"
                value={filter}                    
                onChange={onChange}
            />   
        </form>
    )
}

export {FilterForm}