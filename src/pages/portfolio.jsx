import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade';

// Components
import MyNavBar from '../components/NavBar'
import MyPortfolio from '../components/MyPortfolio'

// Elements
import { Title } from '../elements/Titles'

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 1001px;
  background: white;
`

const portfolio = () => (
  <>
    <MyNavBar/>
    <Background>
    <Fade top>
      <Title>
        Digital Portfolio
      </Title>
    </Fade>
      
      <MyPortfolio />

    </Background>
  </>
)

export default portfolio