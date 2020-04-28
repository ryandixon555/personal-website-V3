import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import breakpoint, {map} from 'styled-components-breakpoint';

import Fade from 'react-reveal/Fade';
import Projects from '../data/projects'

const PortfolioPageWrapper = styled.div `
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PortfolioWrapper = styled.div `
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`

const Input = styled.input`
  padding: 5px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  text-align: center;
`

const ProjectWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;

    ${breakpoint('sm')`
        flex-direction: row;
    `}
`

const Project = styled.div `
    background-color: #fff;
    width: 50%;
    max-width: 600px;
    margin: 25px auto 0;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    min-height: 370px;

    ${breakpoint('md')`
        width: 90%;
    `}
`

export default function MyPortfolio () {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const filteredTerm = e.target.value.toLowerCase();
    
    setSearchTerm(filteredTerm);
  }

  useEffect(() => {
    const results = Projects.filter(data => data.keywords.includes(searchTerm));

    setSearchResults(results);

  }, [searchTerm]);

  return (
    <PortfolioPageWrapper>
      <Fade top>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for 'reactjs'..."
      />
      </Fade>
     
      <PortfolioWrapper>
      <Fade bottom>
        <ProjectWrapper>
          {searchResults &&
              searchResults.map(project => 
              <Project key={project.id}>
                  <h4>Client:</h4>
                  <p>{project.client}</p>
                  <h4>Project Name:</h4>
                  <p>{project.name}</p>
                  <h4>Project Description:</h4>
                  <p>{project.description}</p>
                  <a href = {project.playableLink} target="_blank" rel="noopener">Playable Link</a>
                  <a href = {project.githubLink} target="_blank" rel="noopener">GitHub Link</a>
              </Project>)}
        </ProjectWrapper>
        </Fade>
      </PortfolioWrapper>
    </PortfolioPageWrapper>
  );
}