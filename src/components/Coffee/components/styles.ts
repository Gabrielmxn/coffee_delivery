import { styled } from 'styled-components';


export const Card = styled.div`
margin-bottom: 100px;
  background-color: #F3F2F2;
  max-width: 256px;
  width: 100%;
  border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  img {
    margin-top: -50px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
  }
`

export const Ingredients = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem 0;

  span {
    background-color: #F1E9C9;
    color: #C47F17;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 20px;
`

export const Price = styled.div`
  span:first-child{
    font-size: 0.875rem;
  }

  span:last-child{
    font-size: 1.5rem;
    font-family: "Boaloo 2", sans-serif;
    font-weight: 900;
  }
`

export const Counter = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #E6E5E5;
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;

  height: 38px;

`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button{
    border: none;
  }
`

export const CountButtons = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #8047F8;

  &:hover{
    color: #4B2995;
  }
`

export const CartButtons = styled.button`
    padding: 0.5rem;
    background-color: #4B2995;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    svg {
      fill: white;
    }

    &:hover{
      opacity: 0.;
    }
  
`

