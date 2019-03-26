import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Footer = styled.footer`
  ${tw`text-center text-black pin-b p-6 font-sans text-md lg:text-lg`};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 1px solid #000000;
  background-color: lightcyan;
`
const MyFooter = () => (
    <Footer>
        &copy; Ryan Dixon 2019{' '}
    </Footer>
  )
  
export default MyFooter