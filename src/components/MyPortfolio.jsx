import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Projects from '../data/projects'
import SearchComponent from './SearchComponent'

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

export default function MyPortfolio () {
  
  return (
    <PortfolioPageWrapper>
      <PortfolioWrapper>
        <Fade bottom>
        
            <SearchComponent projects={Projects} />
        
        </Fade>
      </PortfolioWrapper>
    </PortfolioPageWrapper>
  );
}
