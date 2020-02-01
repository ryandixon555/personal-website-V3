import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`