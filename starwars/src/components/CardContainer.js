import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import axios from 'axios'

const ContainerDiv = styled.div`
	width: 90%
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	border: 2px solid white;
`

const ButtonDiv = styled.div`
    width: 50%;
    height: 5vh;
    border: 2px solid white;
    margin: 0 auto;
`
const Button = styled.button`
    width: 40%;
    height: 100%;
`

// const getCharacters = nextOrBack => {
// 	console.log('hi i work');
// }

export default function Container() {
	const [data, setData] = useState([])
	const [page, setPage] = useState('https://swapi.co/api/people/')
	const [next, setNext] = useState('')
	const [back, setBack] = useState('')
	useEffect(() => {
		axios.get(page)
			.then(res => {
				console.log(res)
				setData(res.data.results)
				setNext(res.data.next)
				setBack(res.data.previous)
			})
			.catch(err => {
				console.log('Sorry bro no data this time', err)
			})
	}, [page])

	// const getCharacters = (nextOrBack) => {
	// 	if (nextOrBack === 1 && back !== null) {
	// 		console.log('NUM 1 WORKING')
	// 		axios.get(back)
	// 				.then(res => {
	// 					console.log(res)
	// 					setData(res.data.results)
	// 					setNext(res.data.next)
	// 					setBack(res.data.previous)
	// 				})
	// 				.catch(err => {
	// 					console.log('Sorry bro no data this time', err)
	// 				})
	// 	} else if (nextOrBack === 2 && next !== null) {
	// 		console.log('NUM 2 WORKING')
	// 		axios.get(next)
	// 				.then(res => {
	// 					console.log(res)
	// 					setData(res.data.results)
	// 					setNext(res.data.next)
	// 					setBack(res.data.previous)
	// 				})
	// 				.catch(err => {
	// 					console.log('Sorry bro no data this time', err)
	// 				})
	// 	}
	// }

	return (
		<div>
		<ButtonDiv>
            <Button onClick={() => setPage(back)} key='1'>Back</Button>
            <Button onClick={() => setPage(next)} key='2'>Next</Button>
        </ButtonDiv>
		<ContainerDiv>
			{data.map(x => (
				<Cards key={x.url} data={x} />
			))}
		</ContainerDiv>
		</div>
	)
}