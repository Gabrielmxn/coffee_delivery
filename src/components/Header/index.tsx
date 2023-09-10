import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import logoImg from '../../assets/logo.svg'
import { ButtonCart, HeaderContent, Localitation, NavMenu, Notification } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/ProviderCart'
import { NavLink } from 'react-router-dom'

export function Header(){
  const { items } = useContext(CartContext)

  return(
    <HeaderContent>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
      <NavMenu>
        <Localitation>
          <MapPin size={22} weight="fill"/>
          Porto Alegre, RS
          </Localitation>
        <ButtonCart>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill"/>
            {items.length > 0 && <Notification>
              {items.length}
            </Notification> }
          </NavLink>
        </ButtonCart>
      </NavMenu>
    </HeaderContent>
  )
}