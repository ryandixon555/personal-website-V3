import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content from '../elements/Content'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: black;
  padding: 20px;
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