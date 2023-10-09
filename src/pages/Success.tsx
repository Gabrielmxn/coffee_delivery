import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import imageIlustre from '../assets/Illustration.svg'
import { TitleComponent } from '../components/TitleComponent'
import { ContainerMainSuccess, ContainerSuccess, Subtitle, Title, Icon, DetalheEntrega, Info, ItemDetalheEntrega } from './styles'
import { useContext } from 'react'
import { PedidoContext } from '../contexts/Pedido'


export function Success(){
  const { address, pagamento } = useContext(PedidoContext)
  console.log(address)
  return(
    <>
      <TitleComponent title="Success" />
      <ContainerMainSuccess>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
        <ContainerSuccess>
          <DetalheEntrega>
            <section>
            <ItemDetalheEntrega>
              <Icon bg={"purple"}>
                <MapPin weight='fill'/>
              </Icon>
              <Info>
                <p>
                  Entrega em <strong>{`${address.localidade}, 102`}</strong>
                </p>
                <p>{`${address.bairro} - ${address.localidade}, ${address.uf}`}</p>
              </Info>
            </ItemDetalheEntrega>
            <ItemDetalheEntrega>
            <Icon bg={"yellow"}>
                <Timer weight='fill'/>
              </Icon>
              <Info>
                <p>
                  Previsão de entrega
                </p>
                <strong>20 min - 30 min</strong>
              </Info>
            </ItemDetalheEntrega>
            <ItemDetalheEntrega>
            <Icon bg={"yellow-dark"}>
                <CurrencyDollar />
              </Icon>
             <Info>
              <p>
                Pagamento na entrega
              </p>
              <strong>{pagamento}</strong>
             </Info>
            </ItemDetalheEntrega>
            </section>
          </DetalheEntrega>
        <img src={imageIlustre} alt="" />
        </ContainerSuccess>
      </ContainerMainSuccess>
    </>
  )
}