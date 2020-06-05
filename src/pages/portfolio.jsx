import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

// Components
import MyNavBar from '../components/NavBar'
import MyPortfolio from '../components/MyPortfolio'

// Elements
import { Title } from '../elements/Titles'

const FadeInAnimationPortfolio = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
`

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 1001px;
  background: white;

  animation-name: ${FadeInAnimationPortfolio};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

const portfolio = () => (
  <>
    <MyNavBar/>
    <Background>
   
      <Title>
        Digital Portfolio
      </Title>
      
      <MyPortfolio />

    </Background>
  </>
)

export default portfolio