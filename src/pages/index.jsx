import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import MyNavBar from '../components/NavBar'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import { ProjectsWrapper } from '../elements/ProjectsWrapper'

// Views
import Hero from '../views/Hero'
import About from '../views/About'
import Contact from '../views/Contact'
import Projects from '../views/Projects'

// Animations
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

// Images
import avatar from '../images/avatar.png'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
  padding: 20px;
  justify-content: center;
`
const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`
const AboutSub = styled.span`
  ${tw`pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  padding: 20px;
  color: black;
`
const AboutDesc = styled.p`
  ${tw`text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
  padding: 20px;
  color: black;
  text-align: center;
`
const ContactText = styled.p`
  ${tw`font-sans text-xl md:text-2xl lg:text-3xl`};
  padding: 20px;
  padding-bottom: 80px;
  color: black;
  text-align: center;
`

const Index = () => (
  <>
    <MyNavBar/>
    <Layout/>
    <Hero>
      <BigTitle>
        Hello, I'm Ryan Dixon.
      </BigTitle>
      <Subtitle>I'm a Front End Developer.</Subtitle>
      <Subtitle>I make websites, games, apps and more!</Subtitle>
      <Subtitle>Get in touch at <a href="mailto:ryan555@sky.com">ryan555@sky.com</a></Subtitle>
    </Hero>

    <Projects>
      <Slide right>
      <Title>See My Work</Title>
      <ProjectsWrapper>
        <ProjectCard
          title="See My Work"
          dates=""
          link="https://ryandixon555.github.io/portfolio/public/index.html"
          bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          See a selection of my work here
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

      <Slide left>
      <Title>Commercial Work</Title>
      <ProjectsWrapper>
        <ProjectCard
          title="Realistic Games"
          dates="July 2015 - November 2018"
          link=""
          bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          Realistic Games are a gambling company.
          I was responsible for the full lifecycle development of slot games, using JavsScript, HTML, CSS and Pixi JS
        </ProjectCard>
        <ProjectCard
          title="The Logic Room"
          dates="December 2018 - January 2019"
          link=""
          bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
        >
          The Logic Room are an app development company.
          During my time here I worked on a commercial app, making use of ReactJS
        </ProjectCard>
        <ProjectCard
          title="Avvio Reply"
          dates="February 2019 - Present"
          link=""
          bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
        >
          Avvio Reply are a digital agency.
          During my time here I am a website developer, making use of CSS, HTML, Vanilla JavaScript and ReactJS.
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
        I've been a Front End Developer for many years now, developing games, apps and websites both professionally and for fun.
      </AboutDesc>
      <AboutDesc>
        I also take on freelance projects.
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
  </>
)

export default Index