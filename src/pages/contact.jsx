import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

// Components
import MyNavBar from '../components/NavBar'
import { ContactForm } from '../components/ContactForm'

// Elements
import Inner from '../elements/Inner'
import { Title } from '../elements/Titles'

export const Background = styled.div`
  position: relative;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ContactDesc = styled.p`
  font-size: 32px;
  color: black;
  text-align: center;
  max-width: 100%;
  margin-top: 40px;
`

const Contact = () => (
  <>
    <MyNavBar/>
    <Fade>
    <Background>
      <Inner>
        <Title>Contact</Title>
        <ContactDesc>
          Please fill in the form below regarding any job opportunities, including full time or freelance work.
        </ContactDesc>
        <ContactDesc>
          Examples can be seen on on my Portfolio page.
        </ContactDesc>

        <section className='section'>
      <div className='container'>
        <ContactForm />
      </div>
    </section>
      

      </Inner>
    </Background>
  </Fade>
  </>
)

export default Contact