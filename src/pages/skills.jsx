import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title} from '../elements/Titles'
import { InnerText } from './../elements/InnerText';
import { Background } from '../elements/Background'


const SkillContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Skill = styled.div`
  position: relative;
  border: 2px solid green;
  margin: 5px;
  padding: 5px;
`
const Skills = () => (
  <>
    <MyNavBar/>
    <Fade>
      <Background>
          <Title>
            Skills
          </Title>
            <InnerText>
            Professional Experience Of:
              <br/><br/>
              <SkillContainer>
                <Skill>JavaScript</Skill>
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>JSX</Skill>
                <Skill>JQuery</Skill>
                <Skill>ReactJS</Skill>
                <Skill>JS Testing Frameworks, such as Jest</Skill>
                <Skill>Asset Management</Skill>
                <Skill>TDD</Skill>
                <Skill>BDD</Skill>
                <Skill>Agile Methodoligies (scrum, kanban etc)</Skill>
                <Skill>Handlebars</Skill>
                <Skill>SASS</Skill>
                <Skill>Frontend tools such as Grunt, Gulp and Webpack</Skill>
                <Skill>Git/GitHub</Skill>
                <Skill>SVN</Skill>
                <Skill>Responsive Web Design</Skill>
                <Skill>BEM</Skill>
              </SkillContainer>
            </InnerText>

            <InnerText>
            Working Knowledge Of:
              <br/><br/>
              <SkillContainer>
                <Skill>Bootstrap</Skill>
                <Skill>NodeJS</Skill>
                <Skill>CSS in JS (Styled Components)</Skill>
                <Skill>GatsbyJS</Skill>
                <Skill>Bulma CSS</Skill>
                <Skill>DatoCMS</Skill>
              </SkillContainer>
            </InnerText>
      </Background>
    </Fade>
  </>
)

export default Skills