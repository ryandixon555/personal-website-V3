import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content from '../elements/Content'
import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* opacity: 1; */
 
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

const Hero = ({ children }) => (
  <>
    <Content>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired
}