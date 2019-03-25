import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'


// Components

import MyNavBar from '../components/NavBar'
import MyFooter from '../components/Footer'

// Elements
import Inner from '../elements/Inner'

const Background = styled.div`
  position: relative;
  width: 100%;
  background: black;
`

const Contact = () => (
  <>
    <MyNavBar/>
    <Background>
    <Inner>
      Contact
    </Inner>
    </Background>
    <MyFooter/>
  </>
)

export default Contact
