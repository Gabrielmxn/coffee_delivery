import { styled } from 'styled-components';



export const CheckoutContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;

  gap: 2rem;
  margin-top: 2.5rem;
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

export const CountButtons = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #8047F8;

  &:hover{
    color: #4B2995;
  }
`

export const ItemsCoffees = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  img {
    width: 64px;
  }

  h2{
    color: ${props => props.theme['base-subtitle']};
    font-size: 1rem;
  }
 
  
`
export const SelectionCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
 
  border-radius: 6px 44px 6px 44px;
  background-color: ${props => props.theme['base-card']};

  
`
export const CoffeeSelectionCart = styled.div`
  width: 100%;
  max-width: 448px;
`

export const Price = styled.span`
  color: ${props => props.theme['base-text']};
  font-size: 1rem;
  font-weight: bold;
`


export const ItemComplement = styled.div`
  display: flex;
  justify-content: space-between;
 
 

  
`

export const LinhaHorizontal = styled.div`

    content: '';
    height: 1px;
    background-color: ${props => props.theme['base-button']};
    width: 100%
  
`
export const FormularioEndereco = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap:0.75rem;
`


export const ComplementsOrder = styled.div`
    padding: 2.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme['base-card']};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`

export const ContentHeaderAddress = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['yellow-dark']};
  }

  
`

export const TitleAndInformation = styled.div`
  h3 {
      color: ${props => props.theme['base-subtitle']};
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      color: ${props => props.theme['base-text']};
      font-size: 0.875rem;
    }
`


export const TitleCompletOrder = styled.h2`
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.9rem;
`