import React from 'react';
import useFuse from 'react-use-fuse';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const PortfolioPageWrapper = styled.div `
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

const InputStyling = styled.input`
  padding: 5px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  text-align: center;
  width: 100%;
  max-width: 300px;
`

const ProjectStyling = styled.div `
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

function SearchComponent ({projects}) {
  const options = {
    threshold: 0.1,
    shouldSort: true,
    keys: ["name", "description", "keywords"],
    id: 'id'
  }

  const { result, search, term } = useFuse({
    data: projects,
    options
  });

  return (
      <PortfolioPageWrapper>
          <InputStyling
              onChange={e => search(e.target.value)}
              value={term}
              placeholder="Search for a project..."
          />

        <ProjectWrapper>
          {result &&
              result.map(project => {
                if (project.item) project = project.item;
                return (
                  <ProjectStyling key={project.id}>
                    <h4>Client:</h4>
                    <p>{project.client}</p>
                    <h4>Project Name:</h4>
                    <p>{project.name}</p>
                    <h4>Project Description:</h4>
                    <p>{project.description}</p>
                    <h4>Project Tags:</h4>
                    <p>{project.keywords.join(', ')}</p>
                    <a href = {project.playableLink} target="_blank" rel="noopener">Playable Link</a>
                    <a href = {project.githubLink} target="_blank" rel="noopener">GitHub Link</a>
                  </ProjectStyling>
                );
              })}
         </ProjectWrapper>
      </PortfolioPageWrapper>
  )
}

export default SearchComponent;