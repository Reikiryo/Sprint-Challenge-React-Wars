import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import Cards from './Cards'
import axios from 'axios'

const ContainerDiv = styled.div`
	width: 90%
	display: flex;
	flex-direction: row;
`

export default function Container(props) {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get('https://swapi.co/api/people/')
			.then(res => {
				console.log(res.data.results)
				setData(res.data.results)
			})
			.catch(err => {
				console.log('Sorry bro no data this time', err)
			})
	}, [])
	return (
		<ContainerDiv>
			{data.map(x => (
				<Cards key={x.url} data={x} />
			))}
		</ContainerDiv>
	)
}