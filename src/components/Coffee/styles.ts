import { styled } from 'styled-components';


export const Main = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 6px;
  h1 {
    margin-bottom: 80px;
  }
`

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
 
  gap: 1rem;
  margin: 0 auto;

  @media screen and (max-width: 800px){
    align-items: center;
    justify-content: center;
  }
`