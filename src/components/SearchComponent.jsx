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
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  text-align: center;
  width: 100%;
  max-width: 300px;
`

const ProjectStyling = styled.div `
    background-color: #fff;
    width: 30%;
    max-width: 600px;
    height: 100%;
    min-height: 410px;
    max-height: 450px;
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
    transition: transform 0.8s ease-out; 

    &:hover {
      position: relative;
      top: -5px;
    }

    ${breakpoint('md')`
        width: 90%;
    `}
`
const HeaderStyling = styled.h4`
  font-weight: bold;
`

const NumberOfProjectsStyling = styled.p `
  padding: 20px;
  text-align: center;
  font-size: 24px;
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
 
  const numberOfProjects = projects.length;

  return (
    <PortfolioPageWrapper>
      <InputStyling
          onChange={e => search(e.target.value)}
          value={term}
          placeholder="Search for a project by name or tag..."
      />

      <div>
        <NumberOfProjectsStyling>
          Number Of Projects: {numberOfProjects}
        </NumberOfProjectsStyling>
      </div>
     
      <ProjectWrapper>
        {result &&
            result.map(project => {
              if (project.item) project = project.item;
              return (
                <ProjectStyling key={project.id}>
                  <HeaderStyling>Client:</HeaderStyling>
                  <p>{project.client}</p>
                  <HeaderStyling>Project Name:</HeaderStyling>
                  <p>{project.name}</p>
                  <HeaderStyling>Project Description:</HeaderStyling>
                  <p>{project.description}</p>
                  <HeaderStyling>Project Tags:</HeaderStyling>
                  <p>{project.keywords.join(', ')}</p>
                  <a href = {project.playableLink} target="_blank" rel="noopener">Published Link</a>
                  <a href = {project.githubLink} target="_blank" rel="noopener">GitHub Link</a>
                </ProjectStyling>
              );
            })}
      </ProjectWrapper>
    </PortfolioPageWrapper>
  )
}

export default SearchComponent;