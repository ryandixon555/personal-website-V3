import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import MyFooter from '../components/Footer'

// Components

import MyNavBar from '../components/NavBar'

// Elements
import Inner from '../elements/Inner'

const Background = styled.div`
  position: relative;
  width: 100%;
  background: black;
`

const Qualifications = () => (
  <>
    <MyNavBar/>
    <Background>
    <Inner>
      2:1 Degree
    </Inner>
    
    
    <MyFooter/>
    </Background>
    
  </>
)

export default Qualifications
