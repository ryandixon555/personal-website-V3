import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title } from '../elements/Titles'

const FadeInAnimationQualifications = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
`

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 1001px;
  background: white;

  animation-name: ${FadeInAnimationQualifications};
  animation-duration: 2s;
  animation-fill-mode: forwards;
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
          A Games Development 2:1 Degree (Hons) from Bucks New University, 2009 - 2012.
        </InnerText>
        <InnerText>
          Modules include:
          <ul>
            <li>3D Game Development</li>
            <li>2D Game Development</li>
            <li>Software Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Object-Orientated Principles and Design</li>
            <li>C++</li>
            <li>Web Development</li>
          </ul>
        </InnerText>
      </Background>
  </>
)

export default Qualifications