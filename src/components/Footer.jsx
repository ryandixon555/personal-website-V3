import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Footer = styled.footer`
  ${tw`text-center pin-b font-sans text-md lg:text-lg`};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 1px solid #000000;
  background-color: black;
  display: flex;
  justify-content: space-around;
  color: black;
`
const MyFooter = () => (
    <Footer>
        <a href="mailto:ryan555@sky.com">Email Me</a>
        <a href="https://github.com/ryandixon555" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/ryan-dixon-85372642/" target="_blank">LinkedIn</a>
    </Footer>
  )
  
export default MyFooter