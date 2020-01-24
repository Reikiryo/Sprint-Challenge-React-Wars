import React, {useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AppDiv = styled.div`
text-align: center;
`
const AppH1 = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data.results)
    })
    .catch(err => {
      console.log('Sorry bro no data this time', err)
    })
  }, [])
  return (
    <AppDiv>
      <AppH1>React Wars</AppH1>
    </AppDiv>
  );
}

export default App;
