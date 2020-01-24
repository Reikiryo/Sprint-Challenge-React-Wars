import React, {useState,useEffect} from 'react';
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

  return (
    <AppDiv>
      <AppH1 className='Header'>React Wars</AppH1>
    </AppDiv>
  );
}

export default App;
