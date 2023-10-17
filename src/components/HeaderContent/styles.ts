import { styled } from 'styled-components';

export const MainContent = styled.div`
  background: url('/backcoffee.png');
  background-repeat: repeat;
  background-size: contain;

`
export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 92px auto;
  justify-content: space-between;
  align-items: center;  
  padding: 6px;
  img {
   
    @media screen and (max-width: 800px){
      display: none;
    }
  }
`

export const ContentText = styled.div`
  max-width: 588px;
  h1 {
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Baloo 2', cursive;
    line-height:  130%;
    color: ${props => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const ContentItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4.15rem;
`

export const ItemsMenu = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
  }
`
interface IconProps {
  coloricon: string
}

export const Icon = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props => props.theme[props.coloricon])};
  padding: 0.5rem;
  border-radius: 999999999999999px;
  

  svg {
    line-height: 0;
    color: ${(props) => props.theme['background']}
  }
`