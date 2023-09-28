import { styled } from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
  }
`

export const ButtonCart = styled.button`
  position: relative;
  background-color: #F1E9C9;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  svg{
    text-decoration: none;
    color: ${props => props.theme['yellow-dark']};
  }
`

export const Notification = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  top: -5px;
  right: -5px;
  font-weight: bold;
  border-radius: 99999999999px;
  color: white;
  background-color: ${props => props.theme['yellow-dark']};
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
 
`

export const Localitation = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #EBE5F9;
   padding: 1rem;
   border-radius: 6px;
   gap: 0.5rem;

   svg {
    fill: #4B2995;
   }
`