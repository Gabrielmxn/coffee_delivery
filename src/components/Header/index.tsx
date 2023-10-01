import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import logoImg from '../../assets/logo.svg'
import { ButtonCart, HeaderContent, Localitation, NavMenu, Notification } from './styles'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/ProviderCart'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { uf } from '../../utils/uf'

interface CityProps {
  city: string
  stateSigla: string
}
export function Header(){
  const { items } = useContext(CartContext)
  const [ localization, setLocalization ] = useState<CityProps>({} as CityProps)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {     
      const test = await axios.get("https://nominatim.openstreetmap.org/reverse?", {
        params: {
          format: 'json',
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          addressdetails: 1,
          'accept-language': 'pt-BR',
          zoom: 18
      }
      })
      const siglaUf = uf.find(response => response.nome === test.data.address.state)

      if(!siglaUf){
        console.log("Não foi possível recuperar sua localização");
        return;
      }

      const newLocalization = {
        city: test.data.address.city,
        stateSigla: siglaUf.sigla
      }
    
      setLocalization(newLocalization)
    });
  }, [])
  return(
    <HeaderContent>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
      <NavMenu>
      {!!localization.city &&
        <Localitation >
          <MapPin size={22} weight="fill"/>
          <span className='t'>{localization.city},</span>
          <span className='t'>{localization.stateSigla}</span>
        </Localitation>
      }
          <NavLink to="/checkout">
        <ButtonCart disabled={items.length <= 0}>
            <ShoppingCart size={22} weight="fill"/>
            {items.length > 0 && <Notification>
              {items.length}
            </Notification> }
        </ButtonCart>
        </NavLink>
      </NavMenu>
    </HeaderContent>
  )
}