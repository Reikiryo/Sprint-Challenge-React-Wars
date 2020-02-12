import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 20%;
    height: 10%;
    background: white;
    border: 1px solid black;
    margin: 2%;
`

export default function Cards(props){
    const char = props.data
    return (
        <Card>
            <h3>Name: {char.name}</h3>
            <p>Height: {char.height}</p>
            <p>Mass: {char.mass}</p>
            <p>Vehicles: {char.vehicles.length}</p>
            <p>Starships: {char.starships.length}</p>

        </Card>
    )
}