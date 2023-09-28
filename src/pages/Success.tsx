import imageIlustre from '../assets/Illustration.svg'
import { ContainerMainSuccess, ContainerSuccess } from './styles'


export function Success(){
  return(
    <ContainerMainSuccess>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <ContainerSuccess>
        <div>
          <div>
            <p>
              Entrega em Rua João Daniel Martinelli, 102
            </p>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
          <div>
            <p>
              Previsão de entrega
            </p>
            <span>20 min - 30 min</span>
          </div>
          <div>
            <p>
              Pagamento na entrega
            </p>
            <span>Cartão de Crédito</span>
          </div>
        </div>
      <img src={imageIlustre} alt="" />
      </ContainerSuccess>
    </ContainerMainSuccess>
  )
}