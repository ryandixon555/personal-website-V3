import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'

// Components
import MyNavBar from '../components/NavBar'
import MyFooter from '../components/Footer'

// Animations
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

// Elements
import { Title} from '../elements/Titles'

const Background = styled.div`
  position: relative;
  width: 100%;
  background: black;
`
const InnerText = styled.div`
  position: relative;
  width: 100%;
  color: white;
  font-size: 24px;
  padding: 20px;
`

const Skills = () => (
  <>
    <MyNavBar/>
    <Background>
      <Fade>
        <Title>
          Skills
        </Title>
      </Fade>
        <Zoom>
          <InnerText>
          Skills gained during my time as a front-end developer:
            <br/><br/>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JSX</li>
              <li>React JS</li>
              <li>Styled Components</li>
              <li>JS Testing Frameworks, such as Jest</li>
              <li>Asset Management</li>
              <li>Pixi JS</li>
              <li>TDD</li>
              <li>BDD</li>
              <li>Agile Methodoligies</li>
              <li>Handlebars</li>
              <li>SASS</li>
              <li>Gatsby</li>
              <li>TailWind CSS</li>
            </ul>
          </InnerText>
        </Zoom>
    <MyFooter/>
    </Background>
  </>
)

export default Skills
