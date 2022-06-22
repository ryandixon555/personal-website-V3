import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg text-white`};
  background: ${props => props.bg};
  padding: 20px;
  padding-bottom: 40px;
  &:hover {
    transform: translateY(-5px);
    text-decoration: none;
    color: black;
  }
`
const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const Dates = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding-top: 20px;
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding-top: 20px;
`

const ProjectCard = ({ title, link, dates, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title>{title}</Title>
    <Dates>{dates}</Dates>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard;
