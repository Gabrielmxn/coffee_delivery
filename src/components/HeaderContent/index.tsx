import { Coffee, Cube, ShoppingCart, Timer } from '@phosphor-icons/react'
import imgHeader from '../../assets/imgHeader.svg'
import { Content, ContentItems, ContentText, Icon, ItemsMenu, MainContent } from './styles'
export function HeaderContent(){
  return(
    <MainContent>

   
    <Content>
      <ContentText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ContentItems>
          <ItemsMenu>
            <Icon coloricon='yellow-dark'>
              <ShoppingCart size={16} weight='fill'/>
            </Icon>
            
            <span>Compra simples e segura</span>
          </ItemsMenu>
          <ItemsMenu>
            <Icon coloricon='base-text' >
              <Cube size={16} weight='fill'/>
            </Icon>
            <span>Embalagem mantém o café intacto</span>
          </ItemsMenu>
          <ItemsMenu>
            <Icon coloricon='yellow'>
              <Timer size={16} weight='fill'/>
            </Icon>
            <span>Entrega rápida e rastreada</span>
          </ItemsMenu>
          <ItemsMenu>
            <Icon coloricon='purple'>
              <Coffee size={16} weight='fill'/>
            </Icon>
            <span>O café chega fresquinho até você</span>
          </ItemsMenu>
        </ContentItems>
      </ContentText>
      <img src={imgHeader} alt="" />
    </Content>
    </MainContent>
  )
}