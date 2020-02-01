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
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>Vue</li>
              <li>Node JS</li>
              <li>Styled Components</li>
              <li>JS Testing Frameworks, such as Jest</li>
              <li>Asset Management</li>
              <li>Animation and gaming libraries such as Pixi JS and greensock</li>
              <li>TDD</li>
              <li>BDD</li>
              <li>Agile Methodoligies (scrum, kanban etc)</li>
              <li>Handlebars</li>
              <li>SASS</li>
              <li>Gatsby</li>
              <li>TailWind CSS</li>
              <li>Frontend tools such as Grunt, Gulp and Webpack</li>
              <li>Git/GitHub</li>
              <li>SVN</li>
              <li>Responsive Web Design</li>
              <li>BEM</li>
              <li>Handlebars</li>
            </ul>
          </InnerText>
    
    </Background>
  </>
)

export default Skills