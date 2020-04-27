import React from 'react'
import styled from 'styled-components'

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
      <Title>
        Digital Portfolio
      </Title>
      
      <MyPortfolio />

    </Background>
  </>
)

export default portfolio