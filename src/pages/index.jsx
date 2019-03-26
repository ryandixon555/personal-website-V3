import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import MyFooter from '../components/Footer'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import MyNavBar from '../components/NavBar'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

// Animations
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

// Images
import avatar from '../images/avatar.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
  padding: 20px;
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  padding: 20px;
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
  padding: 20px;
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
  padding: 20px;
  padding-bottom: 80px;
`

const Index = () => (
  <>
    <MyNavBar/>
    <Layout/>
    <Hero>
        <Fade>
          <BigTitle>
            Hello, <br /> I'm Ryan Dixon.
          </BigTitle>
          <Subtitle>I'm a Front End Developer.</Subtitle>
          <Subtitle>I make websites, games, apps and more!</Subtitle>
          <Subtitle>Get in touch at <a href="mailto:ryan555@sky.com">ryan555@sky.com</a></Subtitle>
        </Fade>
    </Hero>
    <Projects>
    <Slide left>

    <Title>Commercial Work</Title>
    <ProjectsWrapper>
      <ProjectCard
        title="Realistic Games"
        dates=" July 2015 - November 2018"
        link=""
        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
      >
        Realistic Games are a gambling company.
        I was responsible for the full lifecycle development of slot games, using JavsScript, HTML, CSS and Pixi JS
      </ProjectCard>
      <ProjectCard
        title="The Logic Room"
        dates=" December 2018 - January 2019"
        link=""
        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
      >
        The Logic Room are an app development company.
        During my time here I worked on a commercial app, making use of ReactJS
      </ProjectCard>
      <ProjectCard
        title="Avvio Reply"
        dates=" February 2019 - Present"
        link=""
        bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
      >
        Avvio Reply are a digital agency.
        During my time here I am a website developer, making use of a wide range of flexible tools.
      </ProjectCard>
       </ProjectsWrapper>
    </Slide>
        /**
        *   PERSONAL PROJECTS
         */
      <Slide right>
      <Title>Personal Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Personal Website"
            dates=""
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my personal website - you're on it now!
            It's made using ReactJS, Styled Components, TailWind CSS and Gatsby
          </ProjectCard>
          <ProjectCard
            title="Company Website"
            dates=""
            link="https://www.google.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="See more on my GitHub account"
            dates=""
            link="https://github.com/ryandixon555"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            See more at my GitHub account
          </ProjectCard>
        </ProjectsWrapper>
      
      </Slide>
      </Projects>
        
      <About>
        <Title>About</Title>
        <AboutHero>
          <Roll>
            <Avatar src={avatar} alt="Ryan Dixon" />
          </Roll>
         <Fade>
          <AboutSub>
            I'm a Front End Developer based in Reading, UK.
            </AboutSub>
         </Fade>
        </AboutHero>
        <AboutDesc>
         I've been a Front End Developer for many years now, developing games, apps and websites both professionally and for fun. Get in touch if you want something made!
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ryan555@sky.com">Hi (ryan555@sky.com) </a> or find me on other platforms:{' '}
            <a href="https://github.com/ryandixon555" target="_blank">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/ryan-dixon-85372642/" target="_blank">LinkedIn</a>
          </ContactText>
        </Inner>
      </Contact>
     <MyFooter/>
  </>
)

export default Index
