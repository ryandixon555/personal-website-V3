import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Footer = styled.footer`
  ${tw`text-center text-grey pin-b p-6 font-sans text-md lg:text-lg`};
`
const MyFooter = () => (
    <Footer>
        &copy; Ryan Dixon 2019{' '}
    </Footer>
  )
  
export default MyFooter