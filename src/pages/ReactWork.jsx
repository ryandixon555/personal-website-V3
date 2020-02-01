import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import styled from 'styled-components'

// Components
import MyNavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'
import Layout from '../components/Layout'

// Elements
import { Title } from '../elements/Titles'
import { Background } from '../elements/Background'
import { ProjectsWrapper } from '../elements/ProjectsWrapper'
import { InnerText } from './../elements/InnerText';

const ReactWork = () => (
  <>
  <MyNavBar/>
  <Layout/>
    <Background>
        <Title>
          A collection of my work showcasing ReactJS
        </Title>
        <InnerText>
        
        </InnerText>
        <ProjectsWrapper>
            <ProjectCard
            title="To Do app"
            dates=""
            link="https://react-js-to-do.netlify.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
            Showing a simple To Do app, where you can add and clear a list.
            </ProjectCard>

            <ProjectCard
            title="Recipe app"
            dates=""
            link="https://react-js-recipe.netlify.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
           Showing a recipe search app
            </ProjectCard>
       </ProjectsWrapper>

    </Background>
   
  </>
)

export default ReactWork