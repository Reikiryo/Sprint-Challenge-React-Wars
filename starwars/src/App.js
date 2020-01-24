import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from './components/CardContainer'

const AppDiv = styled.div`
text-align: center;
`
const AppH1 = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  return (
    <AppDiv>
      <AppH1>React Wars</AppH1>
      <Container/>
    </AppDiv>
  );
}

export default App;
