import styled from "styled-components"

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
    color: ${props => props.theme['base-text']};
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
  width: 100%;
`
export const City = styled(BaseInput)`
  width: 100%;
`
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
export const FormCheckout = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;


`