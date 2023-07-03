import { useState } from 'react'


const Subheader = ({text}) => { 
    return <h2 className='h2'>{text}</h2>
}

const ShowCountriesList = ({countries, onClick}) => {
    return (
        <table><tbody> {
            countries.map(
                (line, id) => (
                    <tr key={id}>
                        <th>{line.name.common}</th>
                        <th><button
                            id={id}
                            name={line.name.common}
                            onClick={onClick}>
                            add
                        </button></th>
                    </tr>
                )
        )} 
    </tbody></table>
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
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}


const ShowCountryContent = ({country}) => {

    console.log("show content country", country)

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