import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title} from '../elements/Titles'
import { InnerText } from './../elements/InnerText';

const SkillsAnimation = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
`
const Background = styled.div`
  position: relative;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  animation-name: ${SkillsAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

const SkillContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Skill = styled.div`
  position: relative;
  ${tw`shadow-lg relative no-underline rounded-lg text-white`};
  background: linear-gradient(to right, #00B2FF 0%, #006AFF 100%);
  padding: 10px;
  margin: 10px;
`
const Skills = () => (
  <>
    <MyNavBar/>
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
                <Skill>PhaserJS</Skill>
                <Skill>PixiJS</Skill>
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
                <Skill>Frontend build tools such as Grunt, Gulp and Webpack</Skill>
                <Skill>Git/GitHub</Skill>
                <Skill>SVN</Skill>
                <Skill>Responsive Web Design</Skill>
                <Skill>BEM</Skill>
                <Skill>Bootstrap</Skill>
                <Skill>NodeJS</Skill>
                <Skill>CSS in JS (Styled Components)</Skill>
                <Skill>GatsbyJS</Skill>
                <Skill>DatoCMS</Skill>
              </SkillContainer>
            </InnerText>
      </Background>
  </>
)

export default Skills