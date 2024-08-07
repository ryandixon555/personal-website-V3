import 'bootstrap/dist/css/bootstrap.css';
import "animate.css/animate.min.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import Layout from '../components/Layout'
import PortfolioProjectCard from '../components/PortfolioProjectCard'
import GitHubProjectCard from '../components/GitHubProjectCard'
import ProjectCardNoLink from '../components/ProjectCardNoLink';
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
import Roll from 'react-reveal/Roll';

// Images
import avatar from '../images/avatar.jpg'

const AboutHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`
const AboutSub = styled.span`
  font-size: 32px;
  color: black;
`
const AboutDesc = styled.p`
  font-size: 32px;
  color: black;
  text-align: center;
  max-width: 100%;
  margin-top: 40px;
`
const ContactText = styled.p`
  ${tw`font-sans text-xl md:text-2xl lg:text-3xl`};
  padding-bottom: 80px;
  color: black;
  text-align: center;
`

const Index = () => (
  <div>
    <MyNavBar/>
    <Layout/>
    <Hero>
      <BigTitle>
        Hello, I'm Ryan Dixon.
      </BigTitle>
      <Subtitle>I'm a Front End Developer.</Subtitle>
      <Subtitle>I make websites, games, apps and more!</Subtitle>
    </Hero>

    <Projects>
      {/* <Title>See My Work</Title> */}
      <ProjectsWrapper>
        <PortfolioProjectCard
          title="See My Work"
          dates=""
          portfolioLink="../portfolio"
          bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          {/* See a selection of my work here */}
        </PortfolioProjectCard>
        {/* <GitHubProjectCard
            title="See more on my GitHub account"
            dates=""
            githubLink="https://github.com/ryandixon555"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            See more at my GitHub account
        </GitHubProjectCard> */}
      </ProjectsWrapper>

      <Title>Commercial Work</Title>
      <ProjectsWrapper>
      <ProjectCardNoLink
          title="Reflex Gaming"
          dates="2022 - Present"
          bg="linear-gradient(to right, #4267B2 0%, #00FFEE 100%)"
        >
          Head Of Online Game Development
          Built a team from scratch to build TypeScript slot games. Mentor/Lead/Technically Manage said team.
          Advise on best practices to business.
          Still make my own games.
        </ProjectCardNoLink>

        <ProjectCardNoLink
          title="Crucible Games"
          dates="2020 - 2022"
          bg="linear-gradient(to right, #4267B2 0%, #00FFEE 100%)"
        >
          Senior Front End Game Developer
          I was responsible for the full dev lifecycle  of slot games, using JavaScript, HTML, CSS and PixiJS.
          Select my portfolio for some game examples.
        </ProjectCardNoLink>

        <ProjectCardNoLink
          title="Avvio Reply"
          dates="2019 - 2020"
          bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
        >
          Web/Game Developer
          Avvio Reply are an employee engagement agency.
          I was the lead front end developer here, making use of CSS, HTML, Vanilla JavaScript and ReactJS to develop sites based around gamification.
        </ProjectCardNoLink>

        <ProjectCardNoLink
          title="The Logic Room"
          dates="2018 - 2019"
          bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
        >
          Web/App Developer
          The Logic Room are an app development company.
          During my time here I worked on a commercial app, making use of ReactJS.
        </ProjectCardNoLink>

        <ProjectCardNoLink
          title="Realistic Games"
          dates="2015 - 2018"
          bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          Front End Game Developer
          I was responsible for the full dev lifecycle  of slot games, using JavaScript, HTML, CSS and PixiJS.
          Select my portfolio for some game examples.
        </ProjectCardNoLink>
        </ProjectsWrapper>
    </Projects>

    {/* <About>
      <Title>About</Title>
      <AboutHero>
        <Roll>
          <Avatar src={avatar} alt="Ryan Dixon" />
        </Roll>
        <Fade>
        <AboutSub>
          I'm a Front End Developer based in the UK.
          </AboutSub>
        </Fade>
      </AboutHero>
      <AboutDesc>
        I've been a Front End Developer for many years now, developing games, apps and websites both professionally and for fun.
      </AboutDesc>
      <AboutDesc>
        I also take on freelance projects.
      </AboutDesc>
    </About> */}
    <Contact>
      <Inner>
        <Title>Get in touch</Title>
        <ContactText>
          {/* Find me on other platforms:{' '} */}
          {/* <a href="https://github.com/ryandixon555" target="_blank">GitHub</a> &{' '} */}
          <a href="https://www.linkedin.com/in/ryan-dixon-85372642/" target="_blank">LinkedIn</a>
        </ContactText>
      </Inner>
    </Contact>
  </div>
)

export default Index