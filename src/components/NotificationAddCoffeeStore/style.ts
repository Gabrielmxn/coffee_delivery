import styled from "styled-components";


export const ContainerMain = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  top: 10px;
  right: 10px;
  content: '';
  padding: 1rem;
  background-color: ${props => props.theme['purple']};
  color: ${props => props.theme['white']};

  @keyframes identifier {
    0% {
        transform: scale(0)
    }
    50% {
      transform: scale(1)
    }
    100% {
      transform: scale(1)
    }
  }

  animation: identifier 1s;
`