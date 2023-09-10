import { styled } from 'styled-components';

const BaseInput = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 0.75rem;
  background-color: ${props => props.theme['base-input']};
  border-radius: 4px;
  
  &:has(> input:focus){
      outline: 1px solid ${props => props.theme['yellow-dark']};
    
    
  }

  span{
    font-style: italic;
    font-size: 0.75rem;
    color: ${props => props.theme['base-label']}
  }

  input {
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;

    &::placeholder{
      font-size: 0.875rem;
      color: ${props => props.theme['base-label']}
    }
   
    
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Bairro = styled(BaseInput)`
  max-width: 200px;
`
export const City = styled(BaseInput)``
export const Uf = styled(BaseInput)`
  max-width: 60px;
`
export const RUAInput = styled(BaseInput)`
  width: 100%;
`

export const CEPInput = styled(BaseInput)`
  max-width: 200px;
`

export const NumberInput = styled(BaseInput)`
  max-width: 200px;
`
export const Complements = styled(BaseInput)`
  width: 100%;
`
export const Informations = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;
`
 


export const CheckoutContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;

  gap: 2rem;
`

export const FormCheckout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
`