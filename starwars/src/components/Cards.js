import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 20%;
    height: 20%;
    background: white;
    border: 1px solid black;
`

export default function Cards(props){
    const char = props.data
    return (
        <Card>
            <h3>Name: {char.name}</h3>

        </Card>
    )
}