import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import styled from 'styled-components'
import { keyframes } from 'styled-components'

import Projects from '../data/projects'
import SearchComponent from './SearchComponent'

const SlideInPortfolio = keyframes`
 0% { opacity:0; left: -150%;}
 100% { opacity:1; left: 0%; }
`

const PortfolioPageWrapper = styled.div `
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    animation-name: ${SlideInPortfolio};
    animation-duration: 2s;
    animation-fill-mode: forwards;
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
        <SearchComponent projects={Projects} />
      </PortfolioWrapper>
    </PortfolioPageWrapper>
  );
}