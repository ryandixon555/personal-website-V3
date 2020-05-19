import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import Fade from 'react-reveal/Fade';

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title} from '../elements/Titles'
import { InnerText } from './../elements/InnerText';
import { Background } from '../elements/Background'

const Skills = () => (
  <>
    <MyNavBar/>
    <Fade>
      <Background>
          <Title>
            Skills
          </Title>
            <InnerText>
            Skills gained during my time as a Front-End Developer:
              <br/><br/>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JSX</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>CSS in JS (Styled Components)</li>
                <li>JS Testing Frameworks, such as Jest</li>
                <li>Asset Management</li>
                <li>TDD</li>
                <li>BDD</li>
                <li>Agile Methodoligies (scrum, kanban etc)</li>
                <li>Handlebars</li>
                <li>SASS</li>
                <li>Gatsby</li>
                <li>Frontend tools such as Grunt, Gulp and Webpack</li>
                <li>Git/GitHub</li>
                <li>SVN</li>
                <li>Responsive Web Design</li>
                <li>BEM</li>
                <li>Bulma CSS</li>
                <li>DatoCMS</li>
              </ul>
            </InnerText>
      </Background>
    </Fade>
  </>
)

export default Skills