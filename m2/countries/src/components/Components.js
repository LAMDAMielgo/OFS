import { useState } from 'react'


const Subheader = ({text}) => { 
    return <h2 className='h2'>{text}</h2>
}

const ShowCountriesList = ({countries}) => {
    return countries.map(
        (country, id) => <li key={id}>{country.name.common}</li>
    )
}

const Content = ({country}) => {

    console.log("content country", country)

    return (
        <div>
            <table>
                <tr><th>capital</th><th>{country.capital[0]}</th></tr>
                <tr><th>area</th><th>{country.area}</th></tr>
            </table>
            <p>languages : </p>
            <ul>{
                Object.values(country.languages).map(
                    (l,i) => <li key={i}>{l}</li>
                )
            }</ul>
        </div>
    )
}

const ShowCountryContent = ({country}) => {

    return (
        <div>
            <Subheader text = {country.name.common} />
            <Content country = {country} />
        </div>
    )
}


export {
    Subheader,
    ShowCountriesList,
    ShowCountryContent
}