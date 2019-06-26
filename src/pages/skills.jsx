import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title} from '../elements/Titles'
import { InnerText } from './../elements/InnerText';
import { Background } from '../elements/Background'

const Skills = () => (
  <>
    <MyNavBar/>
    <Background>
        <Title>
          Skills
        </Title>
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
    
    </Background>
  </>
)

export default Skills