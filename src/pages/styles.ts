import { styled,  } from 'styled-components';



export const CheckoutContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 10px;
`





export const Counter = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme['base-button']};
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

  align-items: normal;
  gap: 1.5rem;
  padding: 2.5rem;
  width: 100%;

  border-radius: 6px 44px 6px 44px;
  background-color: ${props => props.theme['base-card']};

  
`
export const CoffeeSelectionCart = styled.div`
  width: 100%;
  max-width: 448px;

@media screen and (max-width: 950px){
  max-width: none;
}
`

export const Price = styled.span`
  color: ${props => props.theme['base-text']};
  font-size: 1rem;
  font-weight: bold;
`


export const ItemComplement = styled.div`
  display: flex;
  justify-content: space-between;
 
  transform: scale(1);

  &.rm{

  
    @keyframes test {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(10000px);
    }
    }

    animation: test 1s ease-in ;
  }
  
`

export const ContainerPagamento = styled.div`
  display: flex;
  gap: 0.5rem;
  

`
export const HeaderFooterPagamento = styled.div`
  h3 {
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
  }

  p {
    margin-top: 2px;
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
  }
`
export const ContainerFooter = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-card']};

  svg{
    fill: ${props => props.theme['purple']};
  }
`

export const ContainerTypePagament = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 2rem;

  span{
    font-size: 0.75rem;
    }

    @media screen and (max-width: 800px){
      flex-direction: column;
      align-items: normal;
    }
 
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
`

export const FormularioCompletarPedido = styled.div`
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


export const DetalhesItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: ${props => props.theme['base-text']};

    &:last-child{
      span{
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.25rem;
      }
    }
    
`


export const ButtonConfirmarPedido = styled.button`
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['yellow']};
  font-size: 0.875rem;
  border: none;
  padding: 0.75rem 0;
  cursor: pointer;
  border-radius: 6px;
`

export const ContainerChange = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const Remover = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    gap: 0.5rem;

    background-color: ${props => props.theme['base-button']};
    padding: 0 0.5rem;
    color: ${props => props.theme['purple']};

    span{
      color: ${props => props.theme['base-text']};
    }
`





export const ContainerMainSuccess = styled.div`
  max-width: 1120px;
  margin: 0 auto;  
`



export const TypePagament = styled.button`
    flex: 1;
    cursor: pointer;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: ${props => props.theme['base-button']};
    
    &.active{
      background-color: ${props => props.theme['purple-light']};
      border: 2px solid ${props => props.theme['purple']};
     
    }
`




/* SUCCESS */

export const Title = styled.h2`
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']}

`

export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
    margin-top: 0.25rem;
`


export const ContainerSuccess = styled.div`


    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

`

export const DetalheEntrega = styled.div`
    
    flex: 1;
    padding: 1px;

  
   
    border-radius: 6px 36px;
    background-image: linear-gradient(to right, #DBAC2C,  #8047F8);
   
    section{ 
      width: 100%;
    
      border-radius: inherit;
      height: 100%;
      background-color: #fff;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 32px
    }
`

export const ItemDetalheEntrega = styled.div`
    display: flex;
    gap: 0.75rem;

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
`
interface PropsDivIcon {
  bg: string
}

export const Icon = styled.div<PropsDivIcon>`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99999999999px;
    background-color: ${props => props.theme[props.bg]};

    svg{
      color: ${props => props.theme['white']};
    }
`