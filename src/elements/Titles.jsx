import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const BigTitle = styled.h1`
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  font-size: 64px;
  color: black;
`
export const Title = styled.h1`
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 48px;
  color: black;
  margin-top: 40px;
  margin-bottom: 20px;
`

export const Subtitle = styled.p`
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  font-size: 40px;
  color: black;

  ${breakpoint('md')`
    font-size: 32px;
  `}
`