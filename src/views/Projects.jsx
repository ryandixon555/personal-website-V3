import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const ProjectsAnimation = keyframes`
 0% { opacity:0; left: -150%;}
 100% { opacity:1; left: 0%; }
`

const ProjectsAnimationWrapper = styled.div`
  position: relative;
  animation-name: ${ProjectsAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

const Projects = ({ children }) => (
  <ProjectsAnimationWrapper>
    <Content>
      <Inner>{children}</Inner>
    </Content>
  </ProjectsAnimationWrapper>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired
}