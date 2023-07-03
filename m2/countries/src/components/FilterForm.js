
const FormEntry = ({name, value, onChange}) => {

    return (
        <div>
            {name}   
            <input
                name={name}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

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