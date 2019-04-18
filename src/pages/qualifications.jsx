import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import MyFooter from '../components/Footer'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title } from '../elements/Titles'

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 1001px;
  background: white;
`
const InnerText = styled.div`
  position: relative;
  width: 100%;
  color: black;
  font-size: 24px;
  padding: 20px;
`
const Qualifications = () => (
  <>
    <MyNavBar/>
    <Background>
      <Title>
      Qualifications
        </Title>
      <InnerText>
      A 2:1 Degree (Hons) from Bucks New University, 2009 - 2012
    </InnerText>
    <MyFooter/>
    </Background>
  </>
)

export default Qualifications