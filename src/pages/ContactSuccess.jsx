import React from 'react'
// Elements
import { Title} from '../elements/Titles'
import { Background } from '../elements/Background'
import MyNavBar from '../components/NavBar'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const ContactDesc = styled.p`
  font-size: 32px;
  color: black;
  text-align: center;
  max-width: 100%;
  margin-top: 40px;
`

const SuccessPage = () => (
  <>
    <MyNavBar />
    <Fade>
    <Background>
      <section>
          <Title>
            Success
          </Title>
      </section>
      <section>
        <ContactDesc>
          I will aim to get back to you within three working days.
        </ContactDesc>
      </section>
    </Background>
    </Fade>
  </>
)

export default SuccessPage
